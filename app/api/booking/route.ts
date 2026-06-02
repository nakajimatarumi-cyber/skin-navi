import { NextRequest, NextResponse } from "next/server";

export type BookingData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  menu: string;
  concerns: string;
};

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json();

    const required = ["name", "email", "phone", "date", "time", "menu"];
    for (const field of required) {
      if (!data[field as keyof BookingData]) {
        return NextResponse.json(
          { error: `${field} は必須項目です` },
          { status: 400 }
        );
      }
    }

    // Resend API でメール送信（APIキーが設定されている場合）
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your_resend_api_key_here") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "SkinNavi予約 <noreply@skinnavi.jp>",
        to: [data.email],
        subject: "【SkinNavi エステ】ご予約を受け付けました",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e11d48;">ご予約ありがとうございます</h2>
            <p>${data.name} 様</p>
            <p>以下の内容でご予約を承りました。</p>
            <table style="border-collapse: collapse; width: 100%;">
              <tr><td style="padding: 8px; border: 1px solid #ddd; background: #fdf2f8;">日時</td><td style="padding: 8px; border: 1px solid #ddd;">${data.date} ${data.time}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background: #fdf2f8;">メニュー</td><td style="padding: 8px; border: 1px solid #ddd;">${data.menu}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background: #fdf2f8;">お名前</td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd; background: #fdf2f8;">お電話</td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
            </table>
            <p style="margin-top: 20px;">ご不明な点がございましたら、お気軽にご連絡ください。</p>
            <p style="color: #9ca3af; font-size: 12px;">大阪エステサロン SkinNavi</p>
          </div>
        `,
      });

      // サロンオーナーにも通知
      await resend.emails.send({
        from: "SkinNavi予約通知 <noreply@skinnavi.jp>",
        to: ["owner@skinnavi.jp"],
        subject: `新規予約: ${data.name} 様 ${data.date} ${data.time}`,
        html: `
          <h3>新規予約が入りました</h3>
          <p>お名前: ${data.name}</p>
          <p>メール: ${data.email}</p>
          <p>電話: ${data.phone}</p>
          <p>日時: ${data.date} ${data.time}</p>
          <p>メニュー: ${data.menu}</p>
          <p>お悩み: ${data.concerns || "なし"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "ご予約を受け付けました" });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "予約処理中にエラーが発生しました" },
      { status: 500 }
    );
  }
}

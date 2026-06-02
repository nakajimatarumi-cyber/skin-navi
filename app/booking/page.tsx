"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CheckCircle, MapPin, Phone } from "lucide-react";
import { BookingData } from "@/app/api/booking/route";

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00",
];

const menuOptions = [
  { value: "peeling_basic", label: "ピーリング 基本コース（60分）", price: "¥8,800" },
  { value: "peeling_premium", label: "ピーリング プレミアムコース（90分）", price: "¥12,800" },
  { value: "consultation", label: "無料スキンケアカウンセリング（30分）", price: "無料" },
  { value: "facial_basic", label: "フェイシャルエステ 基本コース（60分）", price: "¥9,800" },
];

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function getMaxDateString() {
  const d = new Date();
  d.setMonth(d.getMonth() + 3);
  return d.toISOString().split("T")[0];
}

export default function BookingPage() {
  const [form, setForm] = useState<Partial<BookingData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "エラーが発生しました");

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center px-4 pb-20">
        <div className="max-w-sm mx-auto text-center space-y-6">
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-rose-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">予約が完了しました</h1>
            <p className="text-gray-500 text-sm">
              ご登録のメールアドレスに確認メールをお送りしました。
              <br />
              当日はお気をつけてお越しください。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-rose-100 text-left space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-rose-400" />
              <span>{form.date} {form.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-rose-400" />
              <span>大阪エステサロン SkinNavi</span>
            </div>
          </div>
          <Button
            className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full"
            onClick={() => { setSubmitted(false); setForm({}); }}
          >
            別の日程で予約する
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white px-4 py-8">
        <div className="max-w-lg mx-auto space-y-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            ピーリング予約
          </h1>
          <p className="text-white/80 text-sm">大阪エステサロン SkinNavi</p>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4" />
            <span>大阪府大阪市（詳細はご予約確認後にお送りします）</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-6 space-y-5">
        {/* Menu */}
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm space-y-3">
          <h2 className="font-bold text-gray-800">メニュー選択</h2>
          <div className="space-y-2">
            {menuOptions.map((menu) => (
              <label
                key={menu.value}
                className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                  form.menu === menu.value
                    ? "border-rose-400 bg-rose-50"
                    : "border-gray-200 hover:border-rose-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="menu"
                    value={menu.value}
                    checked={form.menu === menu.value}
                    onChange={handleChange}
                    className="text-rose-500"
                    required
                  />
                  <span className="text-sm text-gray-700">{menu.label}</span>
                </div>
                <span className={`text-sm font-semibold ${menu.price === "無料" ? "text-rose-500" : "text-gray-600"}`}>
                  {menu.price}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Date & Time */}
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm space-y-4">
          <h2 className="font-bold text-gray-800">日程・時間</h2>
          <div className="space-y-2">
            <Label htmlFor="date" className="text-gray-600">
              <Calendar className="h-3.5 w-3.5 inline mr-1" />
              ご希望の日付
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              min={getTodayString()}
              max={getMaxDateString()}
              value={form.date || ""}
              onChange={handleChange}
              required
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-600">
              <Clock className="h-3.5 w-3.5 inline mr-1" />
              ご希望の時間帯
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, time: slot }))}
                  className={`py-2 text-xs rounded-lg border font-medium transition-colors ${
                    form.time === slot
                      ? "bg-rose-500 text-white border-rose-500"
                      : "border-gray-200 text-gray-600 hover:border-rose-300 hover:bg-rose-50"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {!form.time && (
              <input type="hidden" name="time" required />
            )}
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm space-y-4">
          <h2 className="font-bold text-gray-800">お客様情報</h2>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-600">お名前 <span className="text-rose-500">*</span></Label>
            <Input
              id="name"
              name="name"
              placeholder="田中 花子"
              value={form.name || ""}
              onChange={handleChange}
              required
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-600">メールアドレス <span className="text-rose-500">*</span></Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={form.email || ""}
              onChange={handleChange}
              required
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-600">
              <Phone className="h-3.5 w-3.5 inline mr-1" />
              電話番号 <span className="text-rose-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="090-0000-0000"
              value={form.phone || ""}
              onChange={handleChange}
              required
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="concerns" className="text-gray-600">肌のお悩み・ご要望（任意）</Label>
            <Textarea
              id="concerns"
              name="concerns"
              placeholder="例：敏感肌で刺激が気になる、毛穴の黒ずみが悩みです"
              value={form.concerns || ""}
              onChange={handleChange}
              rows={3}
              className="border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading || !form.time}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-6 text-base font-semibold disabled:opacity-50"
        >
          {loading ? "送信中..." : "予約を確定する"}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          予約確認メールをお送りします。キャンセルは前日までにご連絡ください。
        </p>
      </form>
    </div>
  );
}

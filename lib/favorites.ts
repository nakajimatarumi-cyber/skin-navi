"use client";

const STORAGE_KEY = "skinnavi_favorites";

export function getFavoriteIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addFavorite(productId: string): void {
  const ids = getFavoriteIds();
  if (!ids.includes(productId)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids, productId]));
  }
}

export function removeFavorite(productId: string): void {
  const ids = getFavoriteIds();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(ids.filter((id) => id !== productId))
  );
}

export function toggleFavorite(productId: string): boolean {
  const ids = getFavoriteIds();
  if (ids.includes(productId)) {
    removeFavorite(productId);
    return false;
  } else {
    addFavorite(productId);
    return true;
  }
}

export function isFavorite(productId: string): boolean {
  return getFavoriteIds().includes(productId);
}

'use client';
export function SaveInLocalStorage(key, data) {
  return window.localStorage.setItem(key, JSON.stringify(data));
}

export function GetDataLocalStorage(key) {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
}

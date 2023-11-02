"use client";
import { I18nProvider } from "../util/context/I18nContext";
import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  return <I18nProvider>{children}</I18nProvider>;
}

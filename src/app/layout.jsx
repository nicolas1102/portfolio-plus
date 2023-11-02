"use client";
import { ContextProvider } from "../util/context/context";
import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}

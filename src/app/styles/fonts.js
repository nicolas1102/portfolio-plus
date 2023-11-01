import { Montserrat, Montserrat_Alternates, Rokkitt } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat-alternates",
});

export const rokkitt = Rokkitt({
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rokkitt",
});

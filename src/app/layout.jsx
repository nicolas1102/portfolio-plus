import "@/app/styles/globals.css";
import Header from "./components/header/header";

export const metadata = {
  title: "My portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer DICT={DICT.Footer} /> */}
      </body>
    </html>
  );
}

import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Blueprint in Motion",
  description: "Hier eindigt middelmatigheid. Hier begint architectuur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cormorant.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

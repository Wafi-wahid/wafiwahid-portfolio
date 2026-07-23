import { Syne, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-page antialiased font-sans">{children}</body>
    </html>
  );
}

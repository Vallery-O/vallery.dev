import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Vallery — Engineer & Designer",
  description:
    "Software Engineer & UX/UI Designer building scalable systems and human-centered interfaces.",
  openGraph: {
    title: "Vallery — Engineer & Designer",
    description:
      "Software Engineer & UX/UI Designer building scalable systems and human-centered interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className={`${playfair.variable} ${dm.variable}`}>
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

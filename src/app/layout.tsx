import Head from "next/head";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

import { Space_Grotesk } from "next/font/google";
import LenisScroll from "@/components/lenis-scroll";
import GoogleAnalytics from "@/components/google-analytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "DAELITES",
  description: "Empower Your Future with Data Analytics Mastery",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body>
        <GoogleAnalytics/>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}

import Head from "next/head";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Elites Global LTD.",
  description: "Empower Your Future with Data Analytics Mastery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}

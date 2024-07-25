import Head from "next/head";
import React from "react";

export const metadata = {
  title: "DAELITE | Courses",
  description: "Courses Description",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}

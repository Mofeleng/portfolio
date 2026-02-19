import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: [  "300", "400", "500", "600", "700", "800"]
});

const dmSans = DM_Sans({  
  variable: "--dm-sans",
  subsets: ["latin"],
  weight: [  "300", "400", "500", "600", "700", "800", "900", "1000" ]
})

export const metadata: Metadata = {
  title: "Mofeleng Mokgope — Backend-Focused Developer",
  description:
    "Software developer specialising in TypeScript and Next.js, transitioning into C# and ASP.NET Core. Builder of Quicklycv and Comind. Based in South Africa, open to remote roles.",
  keywords: [
    "Mofeleng Mokgope",
    "Shadow Mokgope",
    "software developer",
    "backend developer",
    "C# developer",
    "ASP.NET Core",
    "TypeScript",
    "Next.js",
    "South Africa",
    "remote developer",
  ],
  authors: [{ name: "Mofeleng Mokgope" }],
  creator: "Mofeleng Mokgope",

  // ─── Replace YOUR_DOMAIN with your actual domain when ready ───
  metadataBase: new URL("https://YOUR_DOMAIN.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://YOUR_DOMAIN.com",
    title: "Mofeleng Mokgope — Backend-Focused Developer",
    description:
      "Software developer specialising in TypeScript and Next.js, transitioning into C# and ASP.NET Core. Builder of Quicklycv and Comind.",
    siteName: "Mofeleng Mokgope",
    // Add an og:image when you have one — ideally 1200x630px
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mofeleng Mokgope" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mofeleng Mokgope — Backend-Focused Developer",
    description:
      "Software developer specialising in TypeScript and Next.js, transitioning into C# and ASP.NET Core. Builder of Quicklycv and Comind.",
    // Add if you have a Twitter/X handle
    // creator: "@yourhandle",
    // images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${poppins.variable} bg-[#151515] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const guggenheim = localFont({
  src: "./fonts/GuggenheimSansDisplay-Regular.woff",
  variable: "--font-guggenheim",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://ibadananglicandiocese.org"),
  title: {
    default: "Diocese of Ibadan | Anglican Communion",
    template: "%s | Diocese of Ibadan",
  },
  description:
    "The official website of the Anglican Diocese of Ibadan. Discover our churches, clergy, events, youth ministry, sermons, and community outreach programs.",

  keywords: [
    "Ibadan Anglican Diocese",
    "Anglican Church Ibadan",
    "Church of Nigeria Anglican Communion",
    "Christian churches in Ibadan",
    "Anglican churches in Oyo State",
    "Ibadan church events",
    "Anglican youth ministry Ibadan",
  ],

  authors: [{ name: "Diocese of Ibadan Anglican Communion" }],
  creator: "Diocese of Ibadan",
  publisher: "Diocese of Ibadan",

  openGraph: {
    title: "Diocese of Ibadan | Anglican Communion",
    description:
      "Welcome to the official website of the Diocese of Ibadan. Learn about our churches, clergy, events, and ministries.",
    url: "https://ibadananglicandiocese.org",
    siteName: "Diocese of Ibadan",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diocese of Ibadan Anglican Communion",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diocese of Ibadan Anglican Communion",
    description:
      "Explore churches, clergy, youth ministry, events and sermons from the Diocese of Ibadan.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${guggenheim.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

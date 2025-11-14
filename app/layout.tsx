import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletIndicator } from "./components/WalletIndicator";
import "./globals.css";
import { Providers } from "./providers";
import { ErudaProvider } from "./providers/erudaProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIDE BROSS",
  description: "join side bross waitlist now!",
  metadataBase: new URL('https://my-mini-app-seven.vercel.app/'),
  keywords: ["base", "farcaster", "mini app", "nextjs", "starter", "template", "cli", "npm", "npx", "starterminiapp"],
  openGraph: {
    title: "SIDE BROSS",
    description: "join side bross waitlist now!",
    url: "https://my-mini-app-seven.vercel.app/",
    siteName: "Base Mini App Starter",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "SIDE BROSS"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SIDE BROSS",
    description: "join side bross waitlist now!",
    images: ["/hero.png"]
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: "https://starterminiapp.com/hero.png",
      button: {
        title: "Open App",
        action: {
          type: "launch_miniapp",
          url: "https://my-mini-app-seven.vercel.app/",
          name: "SIDE BROSS",
          splashImageUrl: "https://my-mini-app-seven.vercel.app//splash.png",
          splashBackgroundColor: "#240c0cff"
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ErudaProvider />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>
          <WalletIndicator />
          {children}
        </Providers>
      </body>
    </html>
  );
}

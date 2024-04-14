import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

// Font files can be colocated inside of `app`
const wudooMono = localFont({
  src: "../public/assets/fonts/WudooMono-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uncomplicated-portfolio.vercel.app/"),
  title: {
    default: "Aarav Sharma",
    template: "%s | Aarav Sharma",
  },
  description: "Industrial Designer, Innovator, Experience Enhancer",
  openGraph: {
    title: "Aarav Sharma",
    description: "Industrial Designer, Innovator, Experience Enhancer",
    url: "https://uncomplicated-portfolio.vercel.app",
    siteName: "Aarav Sharma",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aarav Sharma",
    card: "summary_large_image",
  },
  verification: {
    google: "<your-google-verification-code>",
    yandex: "<your-yandex-verification-code>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={wudooMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/i18n/provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1F3860" },
    { media: "(prefers-color-scheme: dark)", color: "#1F3860" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sınav Zarfı Teslim Tutanağı Editörü | İESU",
  description:
    "İstanbul Esenyurt Üniversitesi Sınav Zarfı Teslim Tutanağı Otomatik Form Doldurma, Canlı A4 Önizleme ve Word (.docx) Çıktı Sistemi.",
  icons: {
    icon: [
      { url: "/images/iesu-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/iesu-icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Sınav Zarfı Teslim Tutanağı Editörü | İESU",
    description:
      "İstanbul Esenyurt Üniversitesi Sınav Zarfı Teslim Tutanağı Otomatik Form Doldurma ve Word İndirme Sistemi.",
    siteName: "EnvFiller",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 text-primary-foreground shadow focus:not-sr-only"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

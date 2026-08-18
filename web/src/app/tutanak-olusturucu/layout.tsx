import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sınav Zarfı Teslim Tutanağı Editörü | İESU",
  description:
    "İstanbul Esenyurt Üniversitesi Sınav Zarfı Teslim Tutanağı Otomatik Form Doldurma ve Word İndirme Sistemi",
  icons: {
    icon: [
      { url: "/images/iesu-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/iesu-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function TutanakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

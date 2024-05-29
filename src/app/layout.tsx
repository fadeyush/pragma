import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ProviderSessions } from "@/components/Providers";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Прагма",
  description: "Прагма next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ProviderSessions>
          {children}
        </ProviderSessions>
      </body>
    </html>
  );
}

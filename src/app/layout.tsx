import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Nav from "@/components/layout/nav";
import AuthProvider from "@/providers/auth-provider";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telegram Auth"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
					>
						<Nav />
						<main>{children}</main>
					</ThemeProvider>
				</body>
      </AuthProvider>
    </html>
  );
}

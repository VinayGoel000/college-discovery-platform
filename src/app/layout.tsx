import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AuthPromptHost } from "@/components/auth/AuthPromptHost";
import { CompareSidebar } from "@/components/compare/CompareSidebar";
import { CompareProvider } from "@/context/CompareContext";
import { AuthProvider } from "@/context/AuthContext";
import { SavedItemsProvider } from "@/context/SavedItemsContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Discover and compare colleges with a clean, scalable web experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <SavedItemsProvider>
              <CompareProvider>
                <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
                  <Navbar />
                  <AuthPromptHost />
                  <main className="pb-36 lg:pb-8">{children}</main>
                  <Footer />
                  <CompareSidebar />
                </div>
              </CompareProvider>
            </SavedItemsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

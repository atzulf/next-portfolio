import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "Zoulv Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased relative min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* --- BACKGROUND LAYER (FIXED & PALING BELAKANG) --- */}
          {/* pointer-events-none penting agar background tidak menghalangi klik */}
          <div className="fixed inset-0 -z-50 h-full w-full pointer-events-none">
            
            {/* DARK MODE BG (Sesuai kode kamu: Hitam ke Biru #2F60E0) */}
            <div className="hidden dark:block absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#032FA1_100%)]"></div>

            {/* LIGHT MODE BG (BARU: Grid Pattern + Radial Gradient Ungu Muda) */}
            <div className="block dark:hidden absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#71BCF5,transparent)]"></div>
            </div>

          </div>

          {/* --- CONTENT LAYER --- */}
          <main className="relative z-0">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import { Navbar, Footer, MobileSidebar, Navmodal } from "@/components/export";
import { ContextProvider } from "@/context/Context";
import { Auth } from "@/components/export";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shwebdev || blog - Discover the World of Ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Navbar />
          {/* <MobileSidebar /> */}
          <Navmodal />
          <Auth />
          <main className={inter.className}>{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

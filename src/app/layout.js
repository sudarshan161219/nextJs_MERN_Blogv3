import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/export";
import { ContextProvider } from "@/context/Context";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shwebdev || blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ContextProvider>
          <Navbar />
          <main  className={inter.className}>{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

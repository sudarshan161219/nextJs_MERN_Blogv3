import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components/export";
import { ContextProvider } from "@/context/Context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shwebdev || blog",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  let path = activePath === "/register";

  return (
    <html lang="en">
      <body>
        <ContextProvider>
          {!path && <Navbar />}
          <main className={inter.className}>{children}</main>
          {!path && <Footer />}
        </ContextProvider>
      </body>
    </html>
  );
}

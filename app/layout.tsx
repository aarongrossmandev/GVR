import { Nunito } from "next/font/google";
import Provider from "@/providers/Provider";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToastProvider";

export const metadata = {
  title: "GVR | Global Vacation Rentals",
  description: "Book a vacation or rent out your place for other tourists",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}

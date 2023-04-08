import { Nunito } from "next/font/google";
import Provider from "@/providers/Provider";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "@/providers/ToastProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "@/providers/ClientOnly";
import ModalProvider from "@/providers/ModalProvider";
import "./globals.css";

export const metadata = {
  title: "GVR | Global Vacation Rentals",
  description: "Book a vacation or rent out your place for other tourists",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <ClientOnly>
            <ToasterProvider />
            <ModalProvider />
            <Navbar currentUser={currentUser} />
            <div className="pt-[85px]">{children}</div>
          </ClientOnly>
        </Provider>
      </body>
    </html>
  );
}

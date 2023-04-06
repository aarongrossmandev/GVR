import { Nunito } from "next/font/google";
import Provider from "@/providers/Provider";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToastProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import ClientOnly from "@/providers/ClientOnly";

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
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
            <div className="pt-[85px]">{children}</div>
          </ClientOnly>
        </Provider>
      </body>
    </html>
  );
}

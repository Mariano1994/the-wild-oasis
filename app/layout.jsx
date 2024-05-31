import Header from "./_components/Header";

import "@/app/_styles/globals.css";

// GETTIING FONT FROM GOOGLE FONTS
import { Josefin_Sans } from "next/font/google";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - The wild Oasis",
    default: "Welcome - The wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forest",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body
        className={`${josefinFont.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className=" flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

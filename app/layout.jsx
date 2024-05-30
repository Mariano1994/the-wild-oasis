import Logo from "./_components/Logo";
import NavigationMenu from "./_components/NavigationMenu";

import "@/app/_styles/globals.css";

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
        className={`${josefinFont.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <NavigationMenu />
        <main>{children}</main>
        <footer> Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
};

export default RootLayout;

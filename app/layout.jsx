import Logo from "./_components/Logo";
import NavigationMenu from "./_components/NavigationMenu";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body className=" bg-primary-950 text-primary-100 min-h-screen">
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

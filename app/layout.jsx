import Logo from "./components/Logo";
import NavigationMenu from "./components/NavigationMenu";

export const metadata = {
  title: "The Wild Oasis",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
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
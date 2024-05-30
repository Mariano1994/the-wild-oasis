import Link from "next/link";

const NavigationMenu = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/cabins"> Explore luxury cabins</Link>
        </li>
        <li>
          <Link href="/about"> About us</Link>
        </li>
        <li>
          <Link href="/account"> Account</Link>
        </li>
      </ul>
    </>
  );
};

export default NavigationMenu;

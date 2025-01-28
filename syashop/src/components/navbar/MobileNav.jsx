import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="border-b-2 bg-white w-full z-10 left-0 absolute flex flex-col items-center gap-y-4 pb-2 mx-0 container ">
      <ul className="flex h-fit justify-evenly w-full text-lg">
        {NavLink.map((item, index) => (
          <li
            className={
              pathname === item.link || pathname.startsWith(item.link)
                ? `font-bold text-primary border-b-2 border-primary  duration-300 transition-all`
                : `opacity-60 active:scale-90  transition-all duration-200`
            }
            key={index}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="justify-center items-center gap-x-4 flex">
        <img className="aspect-square rounded-full w-12 bg-primary" />
        <div className="text-lg">
          <h5>Welcome Back !</h5>
          <h5 className="font-semibold">username</h5>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;

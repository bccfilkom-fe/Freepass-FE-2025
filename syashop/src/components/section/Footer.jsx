import {
  Copy,
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const footerLink = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
  { name: "Category", link: "/category" },
];

const Footer = () => {
  return (
    <footer className="h-96 flex flex-col gap-y-8 mt-32 ">
      <div className="lg:flex justify-between">
        <div className="flex lg:block items-center justify-between">
          <h1 className="text-primary text-3xl font-bold">syashop</h1>
          <ul className="flex items-center   text-slate-400  gap-x-4 lg:mt-4">
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
        </div>
        <div className="w-1/3 mt-4">
          <ul className="flex flex-col gap-y-4 lg:flex-row justify-between font-bold">
            {footerLink.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" lg:flex justify-between">
        <h4 className="flex items-center gap-2">
          <Copyright className="w-4 h-4" /> syashop, All Right Reserved
        </h4>
        <ul className="flex justify-between my-4 gap-x-12">
          <li>Terms</li>
          <li>Cookies</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <span className="flex gap-2 ">
        Design Inspired by:
        <Link
          className="font-semibold underline "
          href="https://www.behance.net/gallery/208743579/Stella-Fashion-Ecommerce-Website-UIUX-Design"
        >
          Dipa Inhouse
        </Link>
      </span>
    </footer>
  );
};

export default Footer;

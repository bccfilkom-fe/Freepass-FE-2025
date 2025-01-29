import Link from "next/link";
import { Facebook, Instagram, Twitter, Webhook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="#" className="flex items-center mb-4 gap-2">
              <Webhook />
              <span className="text-2xl font-bold">Dummy Store</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your complete solution for electronic needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#log" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-white"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Jl. Elektronik No. 123</li>
              <li>Jakarta, Indonesia 12345</li>
              <li>Phone: (021) 123-4567</li>
              <li>Email: info@dummystore.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Dummy store. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/constants';
import { CiShoppingCart } from "react-icons/ci";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // untuk mengambil data menu dari API
  useEffect(() => {
    fetchMenuItems();
  }, []);

  // function ini untuk nge GET data dari API
  const fetchMenuItems = async () => {
    try {
      const response = await fetch(`${API_URL}/menus`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // function ini untuk menambahkan menu ketika user menekan tambah ke keranjang
  const handleAddToCart = async (item) => {
    try {
      // funtion ini untuk ngecek apakah item yang dipilih sudah masuk keranjang
      const checkResponse = await fetch(`${API_URL}/keranjangs?id=${item.id}`);
      const existingItems = await checkResponse.json();

      if (existingItems.length > 0) {
        // jika sudah ada, item tersebut di update jumlahnya
        const existingItem = existingItems[0];
        const response = await fetch(`${API_URL}/keranjangs/${existingItem.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...existingItem,
            quantity: existingItem.quantity + 1
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update cart');
        }
      } else {
        // jika belum ada, item tersebut ditambahkan ke keranjang
        const response = await fetch(`${API_URL}/keranjangs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add to cart');
        }
      }
      
      // notifikasi statusnya
      alert('Sukses masuk keranjang!');
    } catch (err) {
      console.error('Error:', err);
      alert('Gagal menambahkan ke keranjang');
    }
  };

  // untuk loading menunggu menu
  if (loading) {
    return (
      <section className="pt-36 pb-32 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mb-4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded max-w-md mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ini jika terjadi gagal dalam me-laod menu
  if (error) {
    return (
      <section className="pt-36 pb-32 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <h2 className="text-2xl font-bold mb-4">Error Loading Menu</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

    // ini bagian inti nya
  return (
    <section id="menu" className="pt-36 pb-32 bg-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Ini untuk bagian atas */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-bold text-3xl text-amber-700 mb-2">
          Pilih Menu Kesukaan Kamu!
          </h4>
          <p className="font-medium text-md text-amber-500">
          Semua menu kita dibuat dengan penuh cinta dan bahan-bahan pilihan, supaya kamu makin puas makan! 
          </p>
          <p className="font-medium text-md text-amber-500">
          Cukup klik keranjang! 
          </p>
        </div>

        {/* ini bagian per item nya */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
            >
              {/* untuk bagian image */}
              <div className="aspect-square w-full relative overflow-hidden">
                <img
                  className="object-cover w-full h-full rounded-t-lg p-3 transform hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
              </div>

              {/* untuk container bawahnya gambar di card */}
              <div className="px-4 pb-4">
                <h5 className="text-xl font-semibold tracking-tight text-amber-900 hover:text-amber-700 transition-colors duration-300">
                  {item.name}
                </h5>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    Rp {item.price}
                  </span>
                  <button
                  // ini nanti setelah di click, item tadi masuk ke API
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center gap-2 text-base font-semibold text-white bg-amber-600 py-2 px-4 rounded-xl hover:bg-amber-700 hover:shadow-lg active:bg-amber-800 transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
                  >
                    <span className="text-xl font-bold">+</span><CiShoppingCart className="w-5 h-5 font-bold stroke-[2]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
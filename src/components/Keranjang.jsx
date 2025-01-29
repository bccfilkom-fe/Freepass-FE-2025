import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/constants';

function Keranjang() {
    const [cartItems, setCartItems] = useState([]);

    // ini untuk ambil data dari database
    const fetchCartItems = async () => {
        try {
            const response = await fetch(`${API_URL}/keranjangs`, {
                method: "GET"
            });
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    // untuk mengambil data menu dari API
    useEffect(() => {
        fetchCartItems();
    }, []);

    // function ini untuk menghapus data
    const handleDelete = async (item) => {
        try {
            const currentQuantity = item.quantity || 1;

            if (currentQuantity > 1) {
                // jika jumlah kuantitasnya > 1, maka kuantitas nya cukup dikurangi 1
                const response = await fetch(`${API_URL}/keranjangs/${item.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...item,
                        quantity: currentQuantity - 1
                    })
                });

                if (response.ok) {
                    alert(
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">Berhasil mengurangi jumlah menu!</span>
                        </div>
                    );
                    fetchCartItems();
                }
            } else {
                const response = await fetch(`${API_URL}/keranjangs/${item.id}`, {
                    method: 'DELETE',
                });

                // jika jumlah kuantitasnya = 1, maka item tersebut dihapus dari keranjang
                if (response.ok) {
                    alert(
                        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span className="font-medium">Kamu berhasil menghapus menu di keranjang!</span> Silakan tambah yang lain
                        </div>
                    );
                    fetchCartItems();
                }
            }
        } catch (error) {
            console.error('Gagal menghapus/mengurangi menu:', error);
            alert('Gagal menghapus/mengurangi item');
        }
    };

    const handleQuantityChange = async (item, newQuantity) => {
        // jika jumlah yang baru < 1, function ini akan berhenti
        if (newQuantity < 1) return;

        try {
            const response = await fetch(`${API_URL}/keranjangs/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...item,
                    quantity: newQuantity
                })
            });

            if (response.ok) {
                fetchCartItems();
            } else {
                alert('Gagal mengupdate jumlah item');
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            alert('Gagal mengupdate jumlah item');
        }
    };

    // function ini untuk mengitung total harga per item
    const calculateItemTotal = (price, quantity) => {
        const numericPrice = parseFloat(price.replace(/\D/g, ''));
        return numericPrice * (quantity || 1);
    };

    // function ini untuk mengitung total harga semua item termasuk jumlahnya
    const calculateGrandTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + calculateItemTotal(item.price, item.quantity);
        }, 0);
    };

    // ini untuk tampilan tabel keranjang
    return (
        <section className="bg-white py-0">
            <div className="container mx-auto px-0">
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-x-auto bg-slate-100 shadow-md rounded-lg border border-gray-200">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white border-b border-gray-200">
                                Keranjang Belanja
                                <p className="mt-1 text-sm font-normal text-gray-500">
                                    Daftar item yang telah dipilih
                                </p>
                            </caption>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Nama Produk</th>
                                    <th scope="col" className="px-6 py-3">Harga</th>
                                    <th scope="col" className="px-6 py-3">Jumlah</th>
                                    <th scope="col" className="px-6 py-3">Total</th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* di mapping sesuai data yang ada */}
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            Rp {item.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => handleQuantityChange(item, (item.quantity || 1) - 1)}
                                                    className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity || 1}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item, (item.quantity || 1) + 1)}
                                                    className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            Rp {calculateItemTotal(item.price, item.quantity).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(item)}
                                                className="font-medium text-red-600 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {cartItems.length === 0 && (
                                    <tr className="bg-white border-b">
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                            Keranjang masih kosong
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                            {cartItems.length > 0 && (
                                <tfoot>
                                    <tr className="font-semibold text-gray-900">
                                        <td colSpan="3" className="px-6 py-4 text-right">Total Keseluruhan:</td>
                                        <td className="px-6 py-4">Rp {calculateGrandTotal().toLocaleString()}</td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Keranjang;
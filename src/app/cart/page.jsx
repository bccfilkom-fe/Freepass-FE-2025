"use client";

import CartItem from "@/components/section/CartItem";
import EmptyCart from "@/components/section/EmptyCart";
import Payment from "@/components/section/Payment";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

const Page = () => {
  const {
    cart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeCartItem,
    clearCart,
  } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.amount, 0);
  const subTotal = cart.reduce(
    (total, item) => total + item.product.price * item.amount,
    0
  );
  const shippingFee = 4;

  return (
    <main className="lg:flex gap-10">
      <section className="lg:w-3/4 flex flex-col gap-4">
        <h4 className="font-bold text-xl">Cart</h4>
        {totalItems > 0 && (
          <span className="font-semibold">{totalItems} items in your cart</span>
        )}
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              img={item.product.image}
              title={item.product.title}
              category={item.product.category}
              price={item.product.price}
              totalPrice={item.product.price * item.amount}
              quantity={item.amount}
              productPlus={() => incrementItemQuantity(item.product.id)}
              productMinus={() => decrementItemQuantity(item.product.id)}
              removeCartItem={() => removeCartItem(item.product.id)}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </section>
      {totalItems > 0 && (
        <section className="lg:w-1/4 mt-10">
          <Payment
            subTotal={subTotal}
            shippingFee={shippingFee}
            finalPrice={(subTotal + shippingFee).toFixed(2)}
            checkout={clearCart}
          />
        </section>
      )}
    </main>
  );
};

export default Page;

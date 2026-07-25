import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const addToCart = (product) => {

        const existing = cart.find(item => item._id === product._id);

        let updatedCart;

        if (existing) {

            updatedCart = cart.map(item =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        } else {

            updatedCart = [
                ...cart,
                { ...product, quantity: 1 }
            ];

        }

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    const removeFromCart = (id) => {

        const updatedCart = cart.filter(item => item._id !== id);

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    const decreaseQuantity = (id) => {

    const updatedCart = cart
        .map(item =>
            item._id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
        .filter(item => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
    );

    };

    const clearCart = () => {

        setCart([]);

        localStorage.removeItem("cart");
    };





    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                decreaseQuantity,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

}
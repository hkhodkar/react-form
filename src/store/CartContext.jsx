import { createContext } from "react";

const InitialValue = {
    meals: [],
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => {},
};

export const CartContext = createContext(InitialValue)
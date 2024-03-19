import { createContext } from "react";

const InitialValue = {
    meals: [],
    addItem: () => { },
    removeItem: () => { }
}

export const CartContext = createContext(InitialValue)
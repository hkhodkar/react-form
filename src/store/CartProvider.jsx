import { useState } from 'react';
import { CartContext } from './CartContext';

export default function CartProvider({ children }) {


    const InitialValue = {
        meals: [],
        addItem: onAddHandler,
        removeItem: onRemoveHandler
    }

    const [contextValue, setContextValue] = useState(InitialValue);

    function onAddHandler(meal) {

        setContextValue(prev => {
            let newMeals = [...prev.meals];
            const mealIndex = newMeals?.findIndex(item => item.id === meal.id);
            if (mealIndex !== -1) {
                const existingItem = { ...newMeals[mealIndex] };
                existingItem.amount += 1;
                newMeals[mealIndex] = existingItem;

            } else {
                const newMeal = {
                    name: meal.name,
                    price: meal.price,
                    amount: 1,
                    id: meal.id
                }
                newMeals = [newMeal, ...newMeals]
            }
            return {
                ...prev,
                meals: newMeals
            }
        })
    }

    function onRemoveHandler(id) {
        setContextValue(prev => {
            let newMeals = [...prev.meals];
            const mealIndex = newMeals?.findIndex(item => item.id === id);
            if (mealIndex !== -1) {
                const existingItem = { ...newMeals[mealIndex] };
                if (existingItem.amount == 1) {
                    newMeals = newMeals.filter(item => item.id !== id);
                } else {
                    existingItem.amount -= 1;
                    newMeals[mealIndex] = existingItem;
                }
            }

            return {
                ...prev,
                meals: newMeals
            }
        })
    }




    return (
        <CartContext.Provider value={contextValue} >
            {children}
        </CartContext.Provider>
    )
}
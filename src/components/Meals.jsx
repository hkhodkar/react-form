import { useEffect } from "react"
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            const res = await fetch('http://localhost:3000/meals');
            if (!res.ok) {
                ///
                return;
            }
            setMeals(await res.json());
        }
        fetchMeals();
    }, [])

    return (
        <ul id="meals">

            {meals.map(meal => {
                return (
                    <MealItem key={meal.id} meal={meal} />
                )
            })}
        </ul>
    )
}
import { useContext, useEffect, useState } from 'react';
import logoImage from '../assets/logo.jpg';
import Button from '../UI/Button';
import { CartContext } from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import Cart from './Cart';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let totals = cartCtx.meals.reduce((prev, curr) => {
            return prev + curr.amount;
        }, 0)
        setTotalItems(totals);
    }, [cartCtx.meals]);

    function handleShowCart() {
        userProgressCtx.showCart();
    }


    return (
        <>
            <Cart />
            <header id="main-header">
                <div id="title">
                    <img src={logoImage} alt="Logo Image" />
                    <h1>React Food </h1>
                </div>
                <nav>
                    <Button onClick={handleShowCart} textOnly>Cart ({totalItems})</Button>
                </nav>
            </header>
        </>
    )
}
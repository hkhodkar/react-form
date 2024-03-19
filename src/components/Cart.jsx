import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from '../util/formatting';
import Button from '../UI/Button';

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const cartTotal = cartCtx.meals.reduce((totalPrice, item) => {
        return totalPrice + item.amount * item.price;
    }, 0)

    function handleCloseCart() {
        userProgressContext.hideCart()
    }

    return (
        <Modal className="cart" open={userProgressContext.progress === 'cart'} >
            <h2>Your cart</h2>
            <ul>
                {
                    cartCtx.meals.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price} - {(item.amount * item.price).toFixed(2)}
                        </li>
                    ))
                }
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleCloseCart} >Go to checkout</Button>
            </p>
        </Modal>
    )
}
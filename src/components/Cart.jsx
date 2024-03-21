import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from '../util/formatting';
import Button from '../UI/Button';
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const cartTotal = cartCtx.meals.reduce((totalPrice, item) => {
        return totalPrice + item.amount * item.price;
    }, 0)

    function handleCloseCart() {
        userProgressContext.hideCart();
    }

    function handleGoToCheckout() {
        userProgressContext.hideCart();
        userProgressContext.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgressContext.progress === 'cart'} onClose={userProgressContext.progress === 'cart' ? handleCloseCart : null} >
            <h2>Your cart</h2>
            <ul>
                {
                    cartCtx.meals.map(item => (
                        <CartItem
                            key={item.id}
                            {...item}
                            onDecrease={() => cartCtx.removeItem(item.id)}
                            onIncrease={() => cartCtx.addItem(item)}
                        />
                    )
                    )
                }
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.meals.length > 0 && <Button onClick={handleGoToCheckout} >Go to checkout</Button>}
            </p>
        </Modal>
    )
}
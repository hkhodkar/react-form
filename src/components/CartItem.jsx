import { currencyFormatter } from '../util/formatting';
export default function CartItem({ name, amount, price, onIncrease, onDecrease }) {
    return (
        <li  className="cart-item">
            <p>
                {name} - {amount} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>QTY</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}
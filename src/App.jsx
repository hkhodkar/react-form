import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartProvider";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {



  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header />
        <Meals />
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;

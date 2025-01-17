import { useState } from "react";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Confirmation from "./Components/Confirmation";
import { CartItem } from "./types";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]); // Use CartItem[] as the type
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false); // Explicitly define boolean type

  return (
    <div className="p-[2.4rem] bg-rose-50 md:p-[4rem] lg:py-[8.8rem] lg:px-[11.2rem] lg:grid grid-cols-4 gap-[5.6rem]">
      <div className="col-span-3">
        <Products cart={cart} setCart={setCart} />
      </div>
      <div className="col-span-1 mt-[3.2rem] lg:mt-0">
        <Cart
          cart={cart}
          setCart={setCart}
          isConfirmed={isConfirmed}
          setIsConfirmed={setIsConfirmed}
        />
      </div>
      <Confirmation
        cart={cart}
        setCart={setCart}
        isConfirmed={isConfirmed}
        setIsConfirmed={setIsConfirmed}
      />
    </div>
  );
}

export default App;

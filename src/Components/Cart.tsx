import { IoCloseCircleOutline } from "react-icons/io5";
import { PiTreeLight } from "react-icons/pi";
import { CartItem, Product } from "../types";

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isConfirmed: boolean;
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({
  cart,
  setCart,
  setIsConfirmed,
}) => {
  const handleDelete = (product: Product) => {
    setCart(cart.filter((item) => item.product.id !== product.id));
  };

  const orderTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-[12px] p-[2.4rem] pb-[4rem] min-w-[24rem]">
      <h3 className="text-[2.4rem] text-red font-bold">
        Your Cart ({totalQuantity})
      </h3>
      <div
        className={`flex flex-col items-center gap-[1.6rem] mt-[4rem] ${
          cart.length > 0 ? "hidden" : ""
        }`}
      >
        <img
          src="/images/illustration-empty-cart.svg"
          alt="Empty Cart"
        />
        <p className="text-[1.4rem] text-rose500 font-semibold text-center">
          Your added items will appear here
        </p>
      </div>
      <div
        className={`flex flex-col gap-[1.6rem] mt-[2.4rem] ${
          cart.length === 0 ? "hidden" : ""
        }`}
      >
        {cart.map(({ product, quantity }) => (
          <div
            className="flex justify-between items-center border-b-[1px] pb-[1.6rem] border-b-rose100"
            key={product.id}
          >
            <div className="text-[1.4rem]">
              <p className="text-rose900 font-semibold">
                {product.name}
              </p>
              <div className="flex gap-[0.8rem] items-center mt-[8px]">
                <p className="text-red font-semibold">{quantity}x</p>
                <p className="text-rose500">
                  @ {product.price.toFixed(2)}
                </p>
                <p className="text-rose500 font-semibold">
                  $ {(product.price * quantity).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1rem]">
              <button
                onClick={() => handleDelete(product)}
                className="text-[2rem] text-rose400 lg:hover:text-black transition-all duration-300"
              >
                <IoCloseCircleOutline />
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between text-[1.6rem] font-semibold mt-[2rem]">
          <p>Order Total</p>
          <p>${orderTotal.toFixed(2)}</p>
        </div>

        <div className="flex items-center gap-[0.8rem] bg-rose50 py-[1.6rem] w-full justify-center rounded-[8px]">
          <PiTreeLight className="text-green text-[2rem]" />
          <p className="text-[1.4rem] text-rose900">
            This is a{" "}
            <span className="font-semibold">carbon-neutral</span>{" "}
            delivery
          </p>
        </div>

        <button
          className="text-[1.6rem] font-semibold bg-red py-[1.6rem] rounded-full text-white lg:hover:bg-[#952C0B] transition-all duration-300"
          onClick={() => {
            setIsConfirmed(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

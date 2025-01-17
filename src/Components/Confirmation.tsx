import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CartItem } from "../types";

interface ConfirmationProps {
  cart: CartItem[];
  isConfirmed: boolean;
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  cart,
  isConfirmed,
  setIsConfirmed,
  setCart,
}) => {
  return (
    <div
      className={`w-full h-full absolute bg-black bg-opacity-50 top-0 left-0 flex items-end md:items-center justify-center ${
        isConfirmed ? "" : "hidden"
      }`}
    >
      <div className="bg-white py-[4rem] px-[2.4rem] w-full rounded-t-[12px] flex flex-col items-center gap-[1.6rem] md:w-[90%] md:rounded-b-[12px] lg:w-[50%] md:p-[4rem]">
        <div className="text-left w-full">
          <IoIosCheckmarkCircleOutline className="text-[4.8rem] text-green" />
          <h2 className="text-[4.8rem] font-bold text-rose900 mt-[2.4rem]">
            Order Confirmed
          </h2>
          <p className="text-[1.6rem] text-rose500 mt-[0.8rem]">
            We hope you enjoy your food!
          </p>
        </div>

        <div className="w-full bg-rose50 rounded-[8px] p-[2.4rem]">
          {cart.map(({ product, quantity }) => (
            <div
              className="w-full flex justify-between items-center border-b-[1px] pb-[1.6rem] border-b-rose100"
              key={product.id}
            >
              <div className="flex gap-[1.6rem] items-center">
                <img
                  src={product.image.thumbnail}
                  alt={product.name}
                  className="w-[4.8rem] rounded-[4px]"
                />
                <div className="text-[1.4rem]">
                  <p className="text-rose900 font-semibold">
                    {product.name}
                  </p>
                  <div className="flex gap-[0.8rem] items-center mt-[8px]">
                    <p className="text-red font-semibold">
                      {quantity}x
                    </p>
                    <p className="text-rose500">
                      @ {product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-rose500 font-semibold text-[1.6rem]">
                  $ {(product.price * quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-[2.4rem]">
            <p className="text-[1.4rem] text-rose900">Order Total</p>
            <p className="text-rose900 font-bold text-[2.4rem]">
              $
              {cart
                .reduce(
                  (total, item) =>
                    total + item.product.price * item.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
        </div>

        <button
          className="w-full text-[1.6rem] font-semibold bg-red py-[1.6rem] rounded-full text-white lg:hover:bg-[#952C0B] transition-all duration-300"
          onClick={() => {
            setIsConfirmed(false);
            setCart([]); // Clear the cart
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default Confirmation;

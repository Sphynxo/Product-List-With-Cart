import data from "../Data/data.json";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { Product, CartItem } from "../types";

interface ProductsProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Products: React.FC<ProductsProps> = ({ cart, setCart }) => {
  const updateCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product: Product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.product.id !== product.id));
      }
    }
  };

  return (
    <div>
      <h1 className="font-bold text-[4rem] text-rose900">Desserts</h1>
      <div className="grid grid-cols-1 gap-[2.4rem] mt-[3.2rem] md:grid-cols-3 gap-y-[3.2rem]">
        {data.map((product: Product) => (
          <div key={product.id}>
            <div className="relative">
              <picture>
                <source
                  srcSet={product.image.desktop}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={product.image.tablet}
                  media="(min-width: 768px)"
                />
                <img
                  src={product.image.mobile}
                  alt={`${product.name} Image`}
                  className="rounded-[8px]"
                />
              </picture>

              <div className="absolute bottom-[-24px] left-[50%] translate-x-[-50%]">
                {cart.find((item) => item.product.id === product.id) ? (
                  <div className="w-[16rem] text-[1.4rem] flex items-center justify-between p-[1.2rem] bg-red rounded-full text-white font-semibold">
                    <button
                      className="text-[2rem] rounded-full lg:hover:bg-white lg:hover:text-red transition-all duration-300"
                      onClick={() => decreaseQuantity(product)}
                    >
                      <FiMinusCircle />
                    </button>
                    <span>
                      {
                        cart.find((item) => item.product.id === product.id)
                          ?.quantity
                      }
                    </span>
                    <button
                      className="text-[2rem] rounded-full lg:hover:bg-white lg:hover:text-red transition-all duration-300"
                      onClick={() => updateCart(product)}
                    >
                      <FiPlusCircle />
                    </button>
                  </div>
                ) : (
                  <button
                    className="text-[1.4rem] font-semibold text-rose900 py-[12.5px] px-[2.4rem] border-[1px] border-rose400 rounded-full bg-white flex items-center gap-[4px] w-[16rem] lg:hover:border-red lg:hover:text-red transition-all duration-300"
                    onClick={() => updateCart(product)}
                  >
                    <span className="text-[2rem] text-red">
                      <MdOutlineAddShoppingCart />
                    </span>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            <div className="mt-[3.8rem] flex flex-col gap-[4px]">
              <p className="text-[1.4rem] font-normal text-rose500">
                {product.category}
              </p>
              <h2 className="text-[1.6rem] font-semibold texr-rose900">
                {product.name}
              </h2>
              <p className="text-[1.6rem] text-red font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

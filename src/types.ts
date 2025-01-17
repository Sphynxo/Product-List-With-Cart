export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string | undefined;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

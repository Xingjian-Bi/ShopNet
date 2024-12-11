export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartState {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: string;
  shippingPrice: string;
  taxPrice: string;
  totalPrice: string;
}

// export interface Cart {
//   cart: CartState;
// }

export interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
  countInStock: number;
  product: ProductType;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
}

export interface AuthState {
  userInfo: UserInfo | null;
}

export interface RootState {
  auth: AuthState;
  cart: CartState;
}
// export interface Auth {
//   auth: CartState;
// }

//Screens & Component Interface
export interface ProductType {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface Order {
  _id: string;
  user: {
    name: string;
  };
  createdAt: string;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
}

export interface ProductListResponse {
  products: ProductType[];
  pages: number;
  page: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

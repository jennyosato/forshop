export type Product = {
  _id: string;
  category: string;
  slug: {
    current: string;
  };
  color: string;
  price: number;
  description: string;
  image: {
    assets: {
      url: string;
    };
  };
  name: string;
  reviews: Review[];
};

export type ProductInventory = Product & {
  quantity: number;
};

export type Review = {
  _id: string;
  rating: number;
  text: string;
  user: string;
};
export type SessionType = {
  expires: string;
  user: {
    email: string;
    image: string;
    name: string;
  };
};

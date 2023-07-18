export interface Product {
  _id: string;
  category: string;
  slug: {
    current: string;
  };
  color: string;
  price: string;
  description: string;
  image: {
    assets: {
      url: string;
    };
  };
  name: string;
  reviews: Review[];
}

export interface Review {
  _id: string;
  rating: number;
  text: string;
  user: string;
}
export interface SessionType {
  expires: string;
  user: {
    email: string;
    image: string;
    name: string;
  };
}

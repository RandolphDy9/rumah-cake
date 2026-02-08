
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  rating: number;
  image: string;
  color: string;
}

export interface Review {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

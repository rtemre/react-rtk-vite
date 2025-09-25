// Define ProductState directly here or import from the correct source file
export interface ProductState {
  // Add your state properties here, for example:
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

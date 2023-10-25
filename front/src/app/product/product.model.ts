export class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

type ProductKeys = keyof Product;

export const ARRAY_PRODUCT_KEYS : ProductKeys[]= [
  "id",
  "code",
  "name",
  "description",
  "image",
  "price",
  "category",
  "quantity",
  "inventoryStatus",
  "rating",
];

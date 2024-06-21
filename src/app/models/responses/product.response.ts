import { CategoryResponse } from "src/app/models/responses/category.response";

export interface ProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryResponse;
  images: string[];
}

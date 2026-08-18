import { ObjectId } from "mongoose";
import {
  ProductCategories,
  ProductColor,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCategories: ProductCategories;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productBrands: string;
  productColor?: ProductColor;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}

export interface ProductInput {
  productStatus: ProductStatus;
  productCategories: ProductCategories;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productBrands: string;
  productColor?: ProductColor;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}

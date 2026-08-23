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
  productDesc?: string;
  productImages: string[];
  productView: number;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCategories?: ProductCategories;
  search?: string;
}

export interface ProductInput {
  productStatus: ProductStatus;
  productCategories: ProductCategories;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productBrands: string;
  productColor?: ProductColor;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}

export interface ProductUpdateInput {
  _id?: ObjectId;
  productStatus?: ProductStatus;
  productCategories: ProductCategories;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productBrands: string;
  productDesc?: string;
  productImages?: string[];
  productView?: number;
}

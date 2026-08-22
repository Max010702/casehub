import mongoose, { Schema } from "mongoose";
import {
  ProductCategories,
  ProductColor,
  ProductMaterial,
  ProductStatus,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCategories: {
      type: String,
      enum: ProductCategories,
      required: true,
    },

    productColor: {
      type: String,
      enum: ProductColor,
      required: true,
    },

    productMaterials: {
      type: [String],
      enum: ProductMaterial,
      default: [],
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productBrands: {
      type: String,
      required: true,
    },

    productDesc: {
      type: String,
      required: true,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, // updatedAt, createAt
);

productSchema.index(
  { productName: 1, productColor: 1, productBrands: 1 },
  { unique: true },
);
export default mongoose.model("Product", productSchema);

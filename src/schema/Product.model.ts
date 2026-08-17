import mongoose, { Schema } from "mongoose";
import {
  ProductCategories,
  ProductColor,
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
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true },
);
export default mongoose.model("Product", productSchema);

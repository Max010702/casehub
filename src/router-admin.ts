import express from "express";
const routerAdmin = express.Router();
import storeController from "./controllers/store.controller";
import productController from "./controllers/product.controller";

/** Store */
routerAdmin.get("/", storeController.goHome);
routerAdmin
  .get("/login", storeController.getLogin)
  .post("/login", storeController.processLogin);
routerAdmin
  .get("/signup", storeController.getSignup)
  .post("/signup", storeController.processSignup);
routerAdmin.get("/logout", storeController.logout);
routerAdmin.get("/check-me", storeController.checkAuthSession);

/** Product */
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);

/** User */

export default routerAdmin;

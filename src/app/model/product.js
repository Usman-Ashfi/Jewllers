import mongoose from "mongoose";

// ? Creating New Schema --------------------------------------------------------------/

const productschema = new mongoose.Schema(
  {
    itemcode: {
      type: String,
      required: [true, "Item Code is Required!"],
      unique: true,
    },
    productname: {
      type: String,
      required: [true, "Product Name is Required!"],
    },
    catagory: {
      type: String,
      required: true,
    },
    subcatagory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// ? Checking If Collection is Already Created ---------------------------------------/
export default mongoose?.models?.Product ||
  mongoose?.model("Product", productschema);

import mongoose from "mongoose";

const mcataSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: [true, "Code is Required!"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Description is Required!"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.mcata || mongoose?.model("mcata", mcataSchema);

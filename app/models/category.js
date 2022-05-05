import mongoose from "mongoose";
const { Schema } = mongoose;
// e.g Health, Law
const categorySchema = new Schema(
  {
    name: { type: String, required: [true, "Please enter a category name"] },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
// export default mongoose.models.Category ||  mongoose.model("Category", categorySchema); 
// export default mongoose.model("Category") ||  mongoose.model("Category", categorySchema); 
import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
// E.g. Health => Doctor
// E.g. Strategy => business strategy

const divisionSchema = new Schema(
  {
    category: {
      type: ObjectId,
      ref: "Category",
      required: [true, "Category cannot be empty"],
    },
    division: {
      type: String,
      required: [true, "You must provide a division"],
    },
  },
  { timestamps: true }
);
const Division = mongoose.model("Division", divisionSchema);
export default  Division;
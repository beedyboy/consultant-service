import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const consultantSchema = new Schema(
  {
    user: { type: String, default: "" },
    officeName: { type: String, default: "" },
    address: { type: String, default: "" },
    country: { type: String, default: "" },
    state: { type: String, default: "" },
    region: { type: String, default: "" },
    landmark: { type: String, default: "" },
    phone: { type: String, default: "" },
    specialization: [String],
    license: { type: String, default: "" },
    acceptsHMO: { type: Boolean, default: false },
    hmos: [{ type: String, default: "" }],
    gender: { type: String, default: "" },
    language: { type: String, default: "" },
    regNumber: { type: String, default: "" },
    officePic: { type: String, default: "" },
    cancellationPolicy: { type: String, default: "" },
    skills: [String],
    statement: { type: String, default: "" },
    rate: {type: Number},
    currency: { type: String, default: "" },
    subcategory: {
      type: ObjectId,
      ref: "Division",
      // required: [true, "Category cannot be empty"],
    },
  },
  { timestamps: true }
);
const Consultant = mongoose.model('Consultant', consultantSchema);
export default Consultant;

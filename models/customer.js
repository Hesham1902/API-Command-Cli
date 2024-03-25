import { mongoose } from "mongoose";

const customerSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  email: { type: String },
});

const customerModel = mongoose.model("Customer", customerSchema);
export default customerModel;

import mongoose from "mongoose";
import Customer from "./models/customer.js";

//Connect to db
let db;
mongoose
  .connect("mongodb://localhost:27017/customercli")
  .then((dbConnection) => {
    db = dbConnection;
  });

//Add Customer
export const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New Customer added");
    db.disconnect();
  });
};

//Find Customer
export const findCustomer = (name) => {
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.disconnect();
    }
  );
};

//List Customers
export const listCustomers = async () => {
  const customers = await Customer.find();
  console.info(customers);
  console.info(`${customers.length} customers`);
  db.disconnect();
};

// update customers
export const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer Updated");
    db.disconnect();
  });
};

// remove customers
export const removeCustomer = (_id) => {
  Customer.remove({ _id }).then((customer) => {
    console.info("Customer Removed");
    db.disconnect();
  });
};

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://pu9052473:1003@cluster0.gk9rhf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "Test",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};

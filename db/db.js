import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/doctorbooking")
  .then(() => {
    console.log("db connected");
  })
  .catch(e => {
    console.log(e.message);
  });

export default mongoose;

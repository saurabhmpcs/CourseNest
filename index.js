const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user", userRouter);

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://saurabhmpcs:bwHv1ud0PSkITTvM@cluster0.yaa16.mongodb.net/courseNet"
  );
  app.listen(3000);

  console.log("listening on port 3000");
}

main();

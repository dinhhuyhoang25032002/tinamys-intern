import userRouter from "./user.route.js";
import cousresRouter from "./course.route.js";
let route = (app) => {
  app.use("/api/users", userRouter);
  app.use("/api/courses", cousresRouter);
  app.use('/api/buid')
  
  app.use("/", userRouter);
};
export default route;

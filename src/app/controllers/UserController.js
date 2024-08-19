import Course from "../models/Course.js";
import { covertObjects } from "../../util/mongoose.js";
class UserController {
  getUser = async (req, res, next) => {
    await Course.find({})
      .then((data) => {
        // res.render("home", { data: covertObjects(data) });
        res.json({
          status: 200,
          message: "Connect sever successfully!",
        });
      })
      .catch(next);
  };
  handleLogin = async (req, res, next) => {
    console.log("check data: ", req.body);

    res.status(200).json({
      status: 200,
      message: "Connect sever successfully!",
    });
  };
  getUserBySlug = async (req, res, next) => {
    console.log("check slug: ", req.params);
    res.status(200).json({
      status: 200,
      message: "Connect sever successfully for slug!",
    });
  };
  getById = async (req, res, next) => {
    res.status(200).json({
      status: 200,
      message: "Connect sever successfully for id!",
    });
  };

  handleCreateUser = async (req, res, next) => {
    console.log("check data request: ", req.body);
    res.send("connect is successfully !");
  };
}
export default new UserController();

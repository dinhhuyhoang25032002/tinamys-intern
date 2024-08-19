import Course from "../models/Course.js";
import { convertObject } from "../../util/mongoose.js";
import generateSlug from "../../util/slug.js";
class CourseController {
  getCourse = async (req, res, next) => {
    const slug = req.params.slug;
    console.log(slug);
    await Course.findOne({ slug: slug })
      .then((data) => {
        res.render("course/detail", { data: convertObject(data) });
      })
      .catch(next);
  };

  createCourseForm = async (req, res, next) => {
    res.render("course/create");
  };

  storeCourse = async (req, res, next) => {
    const form = req.body;
    // const small = new Course(form);
    // await small.save();
    // console.log(form.name);
    const slug = generateSlug(form.name);
    form.slug = slug;
    Course.create(form)
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log(error);
        res.send("This course was saved!");
      });
  };
}
export default new CourseController();

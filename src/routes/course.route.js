import express from "express";
import CourseController from "../app/controllers/CourseController.js";
const router = express.Router();

router.get('/create', CourseController.createCourseForm)
router.post('/store', CourseController.storeCourse)
router.get("/:slug", CourseController.getCourse);

export default router;

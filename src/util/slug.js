import slugify from "slugify";

const generateSlug = (slug) => {
  return slugify(slug, { lower: true, trim: true });
};
export default generateSlug;

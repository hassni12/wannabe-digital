import Link from "next/link";
// import BlogPostCard
import BlogPostCard from "./BlogPost/BlogPostCard";
const Blog = (prop) => {
  return (
    <>
      <BlogPostCard
        title="Blogs"
        underImage={[
          "Helps you to stay updated in the field of digital marketing",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        ]}
        readMore={"Read More"}
      />
    </>
  );
};
export default Blog;

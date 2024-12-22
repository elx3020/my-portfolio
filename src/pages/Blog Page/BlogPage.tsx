// create a blog page component for the blog page
// import react and the blog page css
import blogData from "../../data/blog_data.json";
import BlogItem, { IBlogItemProps } from "./BlogItem";
import "./blogStyles.scss";
import useCurrentPage from "../../hooks/useCurrentPage";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useEffect, useRef, useState } from "react";

type BlogDataT = IBlogItemProps & { draft: boolean };

// create a blog page component
const BlogPage = (props: { handlePage: (value: string) => void }) => {
  // return the blog page

  const context = useGlobalContext();
  const [blogs, setBlogs] = useState(blogData.blogs_en as BlogDataT[]);
  const description = useRef('')

  useEffect(() => {
    if (context.language === "en") {
      description.current = blogData.pageContent.description_en;
      setBlogs(blogData.blogs_en);
    } else if (context.language === "es") {
      description.current = blogData.pageContent.description_es;
      setBlogs(blogData.blogs_es);
    }

  }, [context.language]);

  const blogPosts = blogs.map((blog, index) => {
    if (blog.draft === true) return null;
    return (
      <BlogItem blogData={blog} key={index} />
    );
  });
  useCurrentPage(props.handlePage);

  return (
    <div className="page-content stretch">
      <h1 style={{ marginTop: '10vh' }}>Blog</h1>
      <p>
        {description.current}
      </p>
      {blogPosts}
    </div>
  );
};

// export the blog page component
export default BlogPage;
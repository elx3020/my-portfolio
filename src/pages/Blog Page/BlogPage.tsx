// create a blog page component for the blog page
// import react and the blog page css
import React from "react";
import blogData from "../../data/blog_data.json";
import BlogItem from "./BlogItem";
import "./blogStyles.scss";
import useCurrentPage from "../../hooks/useCurrentPage";
// create a blog page component
const BlogPage = (props: { handlePage: (value: string) => void }) => {
  // return the blog page


  const blogPosts = blogData.blogs.map((blog, index) => {
    if (blog.draft === true) return null;
    return (
      <BlogItem blogData={blog} key={index} />
    );
  });
  useCurrentPage(props.handlePage);


  return (
    <div className="page-content stretch">
      <h1 style={{ marginTop: '10vh' }}>Blog</h1>
      <p>Stuff that I like :). Feel free to check out my posts. Hopefuly you will learn a thing or two </p>
      <p>
        {blogData.pageContent.description}
      </p>
      {blogPosts}
    </div>
  );
};

// export the blog page component
export default BlogPage;
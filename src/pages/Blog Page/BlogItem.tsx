// create a blog page component for the blog page. the component should have a thumbnail, title, date, and description. the component should also have a link to the blog post.
// import react and the blog page scss
import React from "react";
import "./blogStyles.scss";
// import the blog item props interface
export interface IBlogItemProps {
    thumbnail: string;
    title: string;
    date: string;
    description: string;
    link: string;
}


// create a blog item component
const BlogItem = (props: {blogData: IBlogItemProps}) => {
    // destructure the blog item props
    const { thumbnail, title, date, description, link } = props.blogData;
    // return the blog item
    return (<div className="blog-item">
      <div className="__image">
        <img src={thumbnail} alt={title}/>
      </div>
      <div className="content">
        <h3 className="__title">{title}</h3>
        <p className="__date">{date}</p>
        <p className="__description">{description}</p>
        <div className="__link_w">
        <a href={link} className="__link">
          Read More
        </a>
        </div>
      </div>
    </div>);
};
// export the blog item component
export default BlogItem;

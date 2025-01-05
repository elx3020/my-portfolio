// create a blog page component for the blog page. the component should have a thumbnail, title, date, and description. the component should also have a link to the blog post.
// import react and the blog page scss
import "./blogStyles.scss";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
// import the blog item props interface
export interface IBlogItemProps {
  thumbnail: string;
  title: string;
  date: string;
  description: string;
  postId: string
}


// create a blog item component
const BlogItem = (props: { blogData: IBlogItemProps }) => {
  // destructure the blog item props
  const { thumbnail, title, date, description, postId } = props.blogData;
  const navigate = useNavigate();

  const globalContext = useGlobalContext();

  let blogUrl = '/blog/post/' + postId;
  if (globalContext.language === 'es') {
    blogUrl = '/blog/post/' + postId + '?lang=es';
  }
  // return the blog item
  return (<div className="blog-item" id={title}>
    <div className="__image">
      <img src={thumbnail} alt={title} />
    </div>
    <div className="content">
      <h3 className="__title">{title}</h3>
      <p className="__date">{date}</p>
      <p className="__description">{description}</p>
      <div onClick={() => {
        navigate(blogUrl);
      }
      } className="__link_w">
        <div className="__link">
          Read More
        </div>
      </div>
    </div>
  </div>);
};
// export the blog item component
export default BlogItem;

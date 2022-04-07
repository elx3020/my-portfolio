// styles
import "../../styles/layoutStyles/layoutContainers.sass";

const HeroContainer = (props) => {
  // props to pass

  const {
    isImage,
    backgroundImageAlt,
    backgroundImage,
    title = "Title",
    description = "This is the paragraph to insert text for your hero image",
  } = props;

  // is necessary an image?

  const backgroundImageElement = isImage ? (
    <img
      src={backgroundImage}
      alt={backgroundImageAlt}
      className="hero-paralax-image"
    ></img>
  ) : null;

  // hero section content

  return (
    <div className="hero-wrapper">
      {backgroundImageElement}
      <div className="hero-content">
        <h1 id="title" data-scroll data-scroll-speed="1.5">
          {title}
        </h1>
        <p data-scroll data-scroll-speed="1.5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroContainer;

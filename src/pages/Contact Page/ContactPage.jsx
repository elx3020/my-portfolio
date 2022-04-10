// components
import GoToTop from "../../components/functionality/GoToTop.jsx";

// hooks
import useLocoScroll from "../../hooks/useLocoScroll.jsx";
import useCurrentPage from "../../hooks/useCurrentPage.jsx";

import "./style.sass";

const ContactPage = (props) => {
  const contactInfoText =
    "Esteban David Lasso Lopez estebanl28@gmail.com +49 1 777 504 296 Location - Berlin I can write you in English, Espanol or Deutsch.";

  // set scroll animation
  useLocoScroll(true);

  // set as current page
  useCurrentPage(props.handlePage);

  return (
    <div className="contact-page" data-scroll-section>
      <h1>Tell me about you and your project</h1>
      <div className="content-wrapper">
        <div className="form-side">
          <form className="form-style" action="#">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="nameid" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="emailId" />
            <label htmlFor="services">
              What kind of services are you looking?
            </label>
            <input type="text" name="services" id="servicesId" />
            <label htmlFor="audience">What is your target audience?</label>
            <input type="text" name="audience" id="audienceId" />
            <label htmlFor="company">
              What is the name of your organization?
            </label>
            <input type="text" name="company" id="companyId" />
            <label htmlFor="moreinfo">Tell me more about the project:</label>
            <textarea
              name="moreinfo"
              id="moreinfoId"
              cols="30"
              rows="10"
            ></textarea>
            <input className="submit-btn" type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-info-page">
          <h3>Detail Info:</h3>
          <p>{contactInfoText}</p>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default ContactPage;

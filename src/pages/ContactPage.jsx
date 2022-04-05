// components
import GoToTop from "../components/functionality/GoToTop";

import "../styles/pages-style/ContactPageStyle.css";

const ContactPage = (props) => {
  const contactInfoText =
    "Esteban David Lasso Lopez estebanl28@gmail.com +49 1 777 504 296 Location - Berlin I can write you in English, Espanol or Deutsch.";

  return (
    <div className="contact-page">
      <h1>Tell me about you and your project</h1>
      <div className="content-wrapper">
        <div className="form-side">
          <form className="form-style" action="#">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="nameid" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="emailId" />
            <label htmlFor="services">What serivces are you looking for?</label>
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
        <div className="contact-info">
          <h3>Detail Info:</h3>
          <p>{contactInfoText}</p>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default ContactPage;

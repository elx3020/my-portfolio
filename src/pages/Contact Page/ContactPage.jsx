// components
import GoToTop from "../../components/functionality/GoToTop.jsx";

// hooks
import useLocoScroll from "../../hooks/useLocoScroll.jsx";
import useCurrentPage from "../../hooks/useCurrentPage.jsx";

import { useForm, ValidationError } from "@formspree/react";

import "./style.sass";

const ContactPage = (props) => {
  const contactInfoText =
    "Esteban David Lasso Lopez estebanl28@gmail.com +49 1 777 504 296 Location - Berlin I can write you in English, Espanol or Deutsch.";

  // set scroll animation
  // useLocoScroll(true);

  // set as current page
  useCurrentPage(props.handlePage);

  // submit the for,
  const [state, handleSubmit] = useForm("xvolwkpz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact-page" data-scroll-section>
      <h1>Tell me about your project</h1>
      <div className="content-wrapper">
        <form className="form-style" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="nameid" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="emailId" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="services">
            What kind of services are you looking?
          </label>
          <input type="text" name="services" id="servicesId" />
          <ValidationError
            prefix="Services"
            field="services"
            errors={state.errors}
          />
          <label htmlFor="audience">What is your target audience?</label>
          <input type="text" name="audience" id="audienceId" />
          <ValidationError
            prefix="Audience"
            field="audience"
            errors={state.errors}
          />
          <label htmlFor="company">
            What is the name of your organization?
          </label>
          <input type="text" name="company" id="companyId" />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
          />
          <label htmlFor="moreinfo">Tell me more about the project:</label>
          <textarea
            name="moreinfo"
            id="moreinfoId"
            cols="30"
            rows="10"
          ></textarea>
          <ValidationError
            prefix="Info Box"
            field="moreinfo"
            errors={state.errors}
          />
          <button
            className="submit-btn"
            type="submit"
            value="Send"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>

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

// components
import GoToTop from "../../components/functionality/GoToTop.jsx";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.jsx";
import { Helmet } from "react-helmet";
// hooks
import useCurrentPage from "../../hooks/useCurrentPage.jsx";
import { useForm, ValidationError } from "@formspree/react";

import "./style.sass";

const ContactPage = (props) => {
  const contactInfoText =
    "Esteban David Lasso Lopez \n estebannl28@gmail.com \n +49 1 777 504 296 \n Location - Berlin \n English - Español - Deutsch.";

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
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>Esteban Lasso | Contact</title>
      </Helmet>
      <h1>Tell me about your project</h1>
      <section className="content-wrapper">
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
            required
          ></textarea>
          <ValidationError
            prefix="Info Box"
            field="moreinfo"
            errors={state.errors}
          />
          <div
            className="g-recaptcha"
            data-sitekey="6LcOxIsgAAAAACRMcaMSOH7xON7OQoF3r0RjMLpa"
          ></div>
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
      </section>
      <GoToTop />
    </div>
  );
};

export default ContactPage;

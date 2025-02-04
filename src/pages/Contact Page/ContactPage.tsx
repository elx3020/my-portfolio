// components
import { useEffect } from "react";
import { Helmet } from "react-helmet";
// hooks
import useCurrentPage from "../../hooks/useCurrentPage";
import { useForm, ValidationError } from "@formspree/react";

import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";



const ContactPage = (props: { handlePage: (value: string) => void }) => {

  const globalContext = useGlobalContext();
  const contactPageContent = globalContext.content.contactPage;

  // set as current page
  useCurrentPage(props.handlePage);

  // submit the for,
  const [state, handleSubmit] = useForm("xvolwkpz");


  if (state.succeeded) {
    return (
      <section className="submission-message"  >
        <h1>{contactPageContent.form.form_send_text}</h1>
      </section>
    );
  }

  return (
    <div className="page-content"  >
      <Helmet>
        <title>{contactPageContent.helmet_Title}</title>
      </Helmet>
      <h1 style={{ marginTop: '80px' }}>{contactPageContent.title.title_1}</h1>
      <section className="content-wrapper">
        <form className="form-style" onSubmit={handleSubmit}>
          <label htmlFor="name">{contactPageContent.form.name}</label>
          <input type="text" name="name" id="nameid" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email">{contactPageContent.form.email}</label>
          <input type="email" name="email" id="emailId" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="services">
            {contactPageContent.form.option_1}
          </label>
          <input type="text" name="services" id="servicesId" />
          <ValidationError
            prefix="Services"
            field="services"
            errors={state.errors}
          />
          <label htmlFor="audience">{contactPageContent.form.option_2}</label>
          <input type="text" name="audience" id="audienceId" />

          <label htmlFor="company">
            {contactPageContent.form.option_3}
          </label>
          <input type="text" name="company" id="companyId" />

          <label htmlFor="moreinfo">{contactPageContent.form.option_4}</label>
          <textarea
            name="moreinfo"
            id="moreinfoId"
            cols={30}
            rows={10}
            required
          ></textarea>
          <ValidationError
            prefix="Info Box"
            field="moreinfo"
            errors={state.errors}
          />
          {/* re catchap */}
          {/* <div
            className="g-recaptcha"
            data-sitekey="6LcOxIsgAAAAACRMcaMSOH7xON7OQoF3r0RjMLpa"
          ></div> */}
          <button
            className="submit-btn"
            type="submit"
            value="Send"
            disabled={state.submitting}
          >
            {contactPageContent.buttons.button_text}
          </button>
        </form>

        <div className="contact-info-page">
          <h3>{contactPageContent.detail_info.title}</h3>
          <p>{contactPageContent.detail_info.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

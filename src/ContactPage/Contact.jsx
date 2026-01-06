import ContactStyles from './Contact.module.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactPage() {
  const [state, handleSubmit] = useForm("xykzqvjl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={ContactStyles.ContactMain}>

      <label htmlFor="email">
        Email Address
      </label>

      <input
        id="email"
        type="email" 
        name="email"
      />

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
      />

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>

    </form>

  );

}

export default ContactPage

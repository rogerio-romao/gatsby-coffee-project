import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import Title from "../globals/Title"

export default function Contact() {
  const [state, handleSubmit] = useForm("xeqvzajv")
  if (state.succeeded) {
    return (
      <section className="contact py-5">
        <Title title="Thank you for your message" />
      </section>
    )
  }
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John Smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            {/* message  */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your message goes here"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            {/* submit  */}
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

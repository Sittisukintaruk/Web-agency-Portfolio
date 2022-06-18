import React from 'react'

const Forms = () => {
  return (
    <section className="Forms">
    <div className="container">
      <div className="form">
        <div className="form__title">
          <h3 className="text-blue"> Let’s Have a chat</h3>
          <h2 className="title mt-4">An expert at your services</h2>
        </div>
        <div className="form__input">
          <div className="input_filed">
            <span className="input__title">Your name </span>
            <input
              placeholder="Your Full Name"
              className="input mt-2"
              type="text"
            />
          </div>
          <div className="input_filed mt-4">
            <span className="input__title">Your Email </span>
            <input
              placeholder="Your Email "
              className="input mt-2"
              type="text"
            />
          </div>
          <div className="input_filed mt-4">
            <span className="input__title">Your Phone Number </span>
            <input
              placeholder="Your Phone Number "
              className="input mt-2"
              type="text"
            />
          </div>
          <div className="input_filed mt-4">
            <span className="input__title">Messages </span>
            <textarea
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
              placeholder="About What do you want to Talk?"
              className="input_textarea mt-2"
              type="text"
              rows="6"
            />
          </div>
        </div>
        <a
          className="button-primary mt-8 bt--center"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send the Message
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.06564 1.94064C4.2365 1.76979 4.5135 1.76979 4.68436 1.94064L9.93436 7.19064C10.1052 7.3615 10.1052 7.6385 9.93436 7.80936L4.68436 13.0594C4.5135 13.2302 4.2365 13.2302 4.06564 13.0594C3.89479 12.8885 3.89479 12.6115 4.06564 12.4406L9.00628 7.5L4.06564 2.55936C3.89479 2.3885 3.89479 2.1115 4.06564 1.94064Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
    <img className="vector--back" src="layout/Vectorback.png" alt="Vectorback" />
  </section>
  )
}

export default Forms
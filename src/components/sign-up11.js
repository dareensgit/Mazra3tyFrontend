import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-up11.css'

const SignUp11 = (props) => {
  return (
    <div className="sign-up11-container1">
      <div className="sign-up11-max-width thq-section-max-width">
        <div className="sign-up11-form-root thq-section-padding">
          <div className="sign-up11-form1">
            <div className="sign-up11-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up11-text27">
                      Join Our Community Today
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up11-have-an-account-login1">
                <p className="thq-body-large">
                  Already have an account? Sign in
                </p>
              </div>
            </div>
            <form className="sign-up11-form2">
              <div className="sign-up11-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up11-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="sign-up11-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  placeholder="Username"
                  className="sign-up11-textinput2 thq-input thq-body-large"
                />
              </div>
              <div className="sign-up11-password">
                <div className="sign-up11-textfield">
                  <div className="sign-up11-container2">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-up11-hide-password">
                      <svg viewBox="0 0 1024 1024" className="sign-up11-icon1">
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="thq-sign-up-1-password"
                    required="true"
                    placeholder="Password"
                    className="sign-up11-textinput3 thq-input thq-body-large"
                  />
                </div>
                <div className="sign-up11-pass-requirements">
                  <div className="sign-up11-pass-conditions1">
                    <div className="sign-up11-bulletpoint1">
                      <div className="sign-up11-container3"></div>
                      <span className="sign-up11-text16 thq-body-small">
                        Use 8 or more characters
                      </span>
                    </div>
                    <div className="sign-up11-bulletpoint2">
                      <div className="sign-up11-container4"></div>
                      <span className="sign-up11-text17 thq-body-small">
                        One special character
                      </span>
                    </div>
                  </div>
                  <div className="sign-up11-pass-conditions2">
                    <div className="sign-up11-bulletpoint3">
                      <div className="sign-up11-container5"></div>
                      <span className="sign-up11-text18 thq-body-small">
                        One Uppercase character
                      </span>
                    </div>
                    <div className="sign-up11-bulletpoint4">
                      <div className="sign-up11-container6"></div>
                      <span className="sign-up11-text19 thq-body-small">
                        One number
                      </span>
                    </div>
                  </div>
                  <div className="sign-up11-pass-conditions3">
                    <div className="sign-up11-bulletpoint5">
                      <div className="sign-up11-container7"></div>
                      <span className="sign-up11-text20 thq-body-small">
                        One lowercase character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="sign-up11-container8">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-newsletter"
                className="thq-body-large"
              >
                {props.content1 ?? (
                  <Fragment>
                    <span className="sign-up11-text28">
                      Sign up now to access exclusive content, connect with
                      like-minded individuals, and stay updated on the latest
                      news and events.
                    </span>
                  </Fragment>
                )}
              </label>
            </div>
            <div className="sign-up11-terms-agree">
              <p className="thq-body-large">
                <span>
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="thq-button-filled sign-up11-button"
            >
              <span className="sign-up11-text25 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up11-text29">Sign Up Now</span>
                  </Fragment>
                )}
              </span>
            </button>
            <div className="sign-up11-have-an-account-login2">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
        <div className="sign-up11-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="sign-up11-sign-up-image thq-img-ratio-4-6"
          />
        </div>
      </div>
    </div>
  )
}

SignUp11.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1499711860525-c485eb341d5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxzaWduJTIwdXB8ZW58MHx8fHwxNzEyOTI5MDYzfDA&ixlib=rb-4.0.3&w=600',
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  image1Alt: 'Join Our Community',
}

SignUp11.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default SignUp11

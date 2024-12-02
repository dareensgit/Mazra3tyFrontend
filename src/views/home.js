import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUp11 from '../components/sign-up11'
import Footer31 from '../components/footer31'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mazra3ty - Email Sign Up</title>
        <meta property="og:title" content="Mazra3ty - Email Sign Up" />
      </Helmet>
      <SignUp11
        heading1={
          <Fragment>
            <span className="home-text10">Join Mazra3ty today!</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text11">
              Sign up now to access exclusive content, connect with like-minded
              individuals, and stay updated on the latest news and events.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text12">Sign Up Now</span>
          </Fragment>
        }
        image1Src="/download-600w.jpg"
      ></SignUp11>
      <Footer31
        termsLink={
          <Fragment>
            <span className="home-text13">Terms of Use</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text14">FAQs</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text15">Contact Us</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text16">Privacy Policy</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text17">Events</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text18">About Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text19">Cookies Policy</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text20">Community Guidelines</span>
          </Fragment>
        }
        logoSrc="/img_leaf-1500h.png"
      ></Footer31>
    </div>
  )
}

export default Home

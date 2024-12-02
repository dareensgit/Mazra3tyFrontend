import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUp5 from '../components/sign-up5'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mazra3ty - Sign Up</title>
        <meta property="og:title" content="Mazra3ty - Sign Up" />
      </Helmet>
      <SignUp5
        action3={
          <Fragment>
            <span className="home-text10">Continue with Google</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text11">Continue with Facebook</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text12">Sign up with email</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text13">
              Sign up for free and create your first project
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text14">Create an account</span>
          </Fragment>
        }
        image1Src="/farm%20image%203%201-1400w.png"
      ></SignUp5>
      <Footer3
        termsLink={
          <Fragment>
            <span className="home-text15">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text16">Blog</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text17">Contact Us</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text18">Privacy Policy</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text19">Support</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text20">FAQs</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text21">Cookies Policy</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text22">About Us</span>
          </Fragment>
        }
        logoSrc="/img_leaf-1500h.png"
      ></Footer3>
    </div>
  )
}

export default Home

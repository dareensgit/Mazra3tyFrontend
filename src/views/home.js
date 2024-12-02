import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn4 from '../components/sign-in4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mazra3ty - Log in</title>
        <meta property="og:title" content="Mazra3ty - Log in" />
      </Helmet>
      <SignIn4
        action1={
          <Fragment>
            <span className="home-text1">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text2">Log in</span>
          </Fragment>
        }
      ></SignIn4>
    </div>
  )
}

export default Home

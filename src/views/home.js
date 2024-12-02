import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact2 from '../components/contact2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mazra3ty</title>
        <meta property="og:title" content="Mazra3ty" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Farmers</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Customers</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Sign Up as a Farmer</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Sign Up as a Customer</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Mazra3ty</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Mazra3ty</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Search Products</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Browse Farmers</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Join Mazra3ty as a farmer to sell your fresh products directly to
              customers.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover a variety of farm-fresh products and support local
              farmers.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our mission and how we connect farmers with
              customers.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Reach out to us for any inquiries or support.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Sign up as a Farmer</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Sign up as a Customer</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Connecting farmers and customers for fresh and local products
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              <span>
                Welcome to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text119">Mazra3ty</span>
            </span>
          </Fragment>
        }
        image1Src="/jonathan-kemper-1hhrdiolfpu-unsplash%201-1500w.png"
        image7Src="/farm%20image%203%201-1500w.png"
        image9Src="/stocksy_txp226f62b2ane300_medium_4582193-1500w.png"
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text120">Farm-Fresh Products</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text121">Community Support</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text122">Direct from Farm to Table</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text123">
              Discover the freshest produce straight from the farm
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text124">
              Support local farmers and their families
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text125">
              Browse a wide variety of products directly from the source
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text126">Sign Up</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text127">
              Sign up now to start buying fresh produce directly from local
              farmers or to sell your own products.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text128">Join Mazra3ty today!</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text129">Easy Product Listing</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text130">Direct Communication</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text131">Wide Variety of Products</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text132">
              Farmers can easily list their products for sale on the platform.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text133">
              Direct communication between farmers and customers for a
              personalized shopping experience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text134">
              Customers have access to a wide variety of fresh farm products to
              choose from.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text136">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text138">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text139">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text140">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text141">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text142">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text145">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text146">$10/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text147">$20/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text148">$30/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text149">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text150">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text151">$100/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text152">Sign up now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text153">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text154">$200/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text155">Sign up now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text156">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text157">$300/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text159">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text161">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text162">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text163">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text164">
              Access to a variety of fresh produce
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text165">
              Direct communication with farmers
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text166">Customizable delivery options</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text167">All features from Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text168">Priority customer support</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text169">
              Exclusive discounts on bulk orders
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text171">All features from Plan 2</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text172">
              Personalized recommendations based on purchase history
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text173">
              Early access to limited edition products
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text186">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text187">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text188">
              Sign up as a Farmer or Customer
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text189">
              List Your Products or Browse Listings
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text190">Place an Order</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Delivery or Pickup</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text192">
              Create an account on Mazra3ty and choose whether you want to sign
              up as a farmer looking to sell products or as a customer
              interested in buying.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text193">
              Farmers can list their products for sale, providing details such
              as price, quantity, and images. Customers can browse through the
              listings and add products to their cart.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text194">
              Customers can review their cart, select the desired products, and
              proceed to place an order. Farmers will receive notifications of
              new orders.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text195">
              Farmers can arrange for delivery or pickup options for the orders
              received. Customers can track the status of their orders until
              they receive them.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text196">
              I highly recommend Mazra3ty to any farmer looking to expand their
              business.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text197">
              I love the fresh produce I receive from Mazra3ty. The quality is
              unmatched, and the delivery is always on time.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text198">
              Mazra3ty has provided me with a convenient platform to showcase my
              farm&apos;s products. The support team is also very helpful and
              responsive.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text199">
              I enjoy the variety of products available on Mazra3ty. It&apos;s
              great to support local farmers while getting fresh and organic
              produce.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Mazra3ty has helped me reach a wider audience for my farm
              products. I&apos;ve seen a significant increase in sales since
              joining the platform.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text201">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text202">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text203">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text204">Ahmed Hassan</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text205">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text206">Farm Owner</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text207">Customer</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text208">Farm Owner</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text209">Customer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact2
        content4={
          <Fragment>
            <span className="home-text210">
              Follow us on social media for updates and news.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text211">Mazra3ty</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="home-text212">
              We are here to assist you with any inquiries.
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text213">+123-456-7890</span>
          </Fragment>
        }
        email1={
          <Fragment>
            <span className="home-text214">info@mazra3ty.com</span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="home-text215">
              Join Mazra3ty today to support local agriculture!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text217">
              Have a question or feedback? Reach out to us!
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text218">
              123 Farm Road, Cityville, Country
            </span>
          </Fragment>
        }
        imageSrc="/many%20vegetables%20home-1400w.png"
      ></Contact2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text219">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text220">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text221">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text222">Terms and Conditions</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text223">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text224">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text225">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text226">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home

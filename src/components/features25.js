import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      Easy Product Listing
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Farmers can easily list their products for sale on the
                      platform.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      Direct Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Direct communication between farmers and customers for a
                      personalized shopping experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Wide Variety of Products
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Customers have access to a wide variety of fresh farm
                      products to choose from.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2ImgAlt:
    'Image showing direct communication between farmer and customer',
  feature3Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1613418906921-1b949bf38d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Image showcasing variety of farm products',
  feature1Description: undefined,
  feature1Title: undefined,
  feature1ImgAlt: 'Image depicting easy product listing process',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1655048410161-a5a908bb54a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3Description: undefined,
  feature2Description: undefined,
  feature2Title: undefined,
}

Features25.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Title: PropTypes.element,
}

export default Features25

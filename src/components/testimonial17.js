import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text28">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34">
                  Mazra3ty has helped me reach a wider audience for my farm
                  products. I&apos;ve seen a significant increase in sales since
                  joining the platform.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Farm Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        I highly recommend Mazra3ty to any farmer looking to
                        expand their business.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">Customer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        I love the fresh produce I receive from Mazra3ty. The
                        quality is unmatched, and the delivery is always on
                        time.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Ahmed Hassan
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Farm Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        Mazra3ty has provided me with a convenient platform to
                        showcase my farm&apos;s products. The support team is
                        also very helpful and responsive.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">Customer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        I enjoy the variety of products available on Mazra3ty.
                        It&apos;s great to support local farmers while getting
                        fresh and organic produce.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Name: undefined,
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1514315384763-ba401779410f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1669471052450-359fac1a73cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1632377082508-bb1d06669dd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  author2Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1521566652839-697aa473761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzEyNzg0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Ahmed Hassan',
  author1Name: undefined,
  author2Position: undefined,
  review2: undefined,
  content1: undefined,
  author2Alt: 'Image of Jane Smith',
  review3: undefined,
  author4Position: undefined,
  author4Alt: 'Image of Sarah Lee',
  author1Position: undefined,
}

Testimonial17.propTypes = {
  author4Name: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  review4: PropTypes.element,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  author2Name: PropTypes.element,
  author3Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  review2: PropTypes.element,
  content1: PropTypes.element,
  author2Alt: PropTypes.string,
  review3: PropTypes.element,
  author4Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author1Position: PropTypes.element,
}

export default Testimonial17

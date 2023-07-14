import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>creoplan homepae</title>
        <meta property="og:title" content="creoplan homepae" />
      </Helmet>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <img alt="image" src="/tight-cp-700h.png" className="home-image" />
          <div className="home-container1">
            <div className="home-container2">
              <div
                data-thq="thq-burger-menu"
                className="home-burger-menu"
              ></div>
            </div>
            <div className="home-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-icon" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container3">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image01"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">Home</span>
                <span className="home-text01">About</span>
                <span className="home-text02">Portfolio</span>
                <span className="home-text03">Contact</span>
                <span className="home-text04">Jobs</span>
              </nav>
              <div className="home-container4"></div>
            </div>
          </div>
        </header>
        <div className="home-container5">
          <h1 className="home-heading">
            <span>CREO PLAN</span>
            <br></br>
          </h1>
          <p className="home-caption">Plan Today, Build Tomorrow</p>
        </div>
      </section>
      <div className="home-container6">
        <div className="home-content">
          <div className="home-container7">
            <h3 className="home-header">Responsive design</h3>
            <div className="home-stat">
              <span className="home-caption01">
                <br className="home-text07"></br>
                <br></br>
                <span>
                  Using techniques like fluid proportion-based grids, a skilled
                  design incorporates the network layout to suit the
                  environment.
                </span>
              </span>
            </div>
          </div>
          <div className="home-container8">
            <h3 className="home-header1">Highly customisable</h3>
            <div className="home-stat1">
              <span className="home-caption02">
                The Customisable Contraction Hierarchy of work packs introduces
                an alternative analysis that enables the implementation of
                multiple work flows
              </span>
            </div>
          </div>
          <div className="home-stat2">
            <h3 className="home-header2">
              <span>Solid framework</span>
              <br></br>
            </h3>
            <span className="home-caption03">
              By offering a robust tool, various environmental and hierarchical
              topologies can be effectively scoped to ensure optimal data
              presentation
            </span>
          </div>
        </div>
      </div>
      <h3 className="home-text12">Services we provide</h3>
      <section className="home-objectives">
        <div className="home-content1">
          <div className="home-objectives-list">
            <img
              alt="image"
              src="/calender-g41f5b3c67_1280-200h.png"
              className="home-image02"
            />
            <div className="objective">
              <h3 className="home-text13">
                Planning and designing frameworks for telecommunications and
                other utilities
              </h3>
            </div>
            <img
              alt="image"
              src="/gear-g403eb0e39_1280-200w.png"
              className="home-image03"
            />
            <div className="objective home-objective1">
              <h3 className="home-text14">
                Providing solutions to develop utility networks nationally
              </h3>
            </div>
            <img
              alt="image"
              src="/smartphone-g2dfef1c00_1280-200w.png"
              className="home-image04"
            />
            <div className="objective home-objective2">
              <h3 className="home-text15">
                Using Geo spatial Analysis Software to solve complex issues
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slider">
        <div className="home-header3">
          <h2 className="home-heading1">Latest News</h2>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image05"
                  />
                  <div className="home-content2">
                    <div className="home-header4">
                      <h3 className="home-heading2">Metaverse</h3>
                      <p className="home-caption04">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more">
                      <span className="home-caption05">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon03">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image06"
                  />
                  <div className="home-content3">
                    <div className="home-header5">
                      <h3 className="home-heading3">Ecosystems</h3>
                      <p className="home-caption06">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption07">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon05">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image07"
                  />
                  <div className="home-content4">
                    <div className="home-header6">
                      <h3 className="home-heading4">Development</h3>
                      <p className="home-caption08">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption09">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon07">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image08"
                  />
                  <div className="home-content5">
                    <div className="home-header7">
                      <h3 className="home-heading5">Integration</h3>
                      <p className="home-caption10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more3">
                      <span className="home-caption11">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon09">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon11">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon13">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></Script>
        </div>
      </section>
      <div className="home-footer">
        <button data-role="scroll-top" className="home-button button">
          <img alt="image" src="/arrow.svg" className="home-image09" />
        </button>
        <div className="home-content6">
          <span className="home-text16">
            © 2023 Creoplan- All rights reserved
          </span>
          <div className="home-bottom"></div>
        </div>
      </div>
      <div>
        <Script
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home

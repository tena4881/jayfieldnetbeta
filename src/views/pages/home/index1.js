import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Herosection6 from '../../../components/herosection/herosection6';
import Feature2 from '../../../components/featurebox/feature2';
import Counter2 from '../../../components/counter/counter2';
import OwlCarousel from 'react-owl-carousel';
import Testimonial1 from '../../../components/testimonial/testimonial1';
import Blog1 from '../../../components/blog/blog1';
import Feature1 from '../../../components/featurebox/feature1';
import Worktab from '../../../components/featuare/worktab';
import ModalVideo from 'react-modal-video';
window.fn = OwlCarousel;

class Index7 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <Herosection6 />
          </div>
        </section>
        {/*body content start*/}
        <div className="page-content">
          {/*services start*/}
          <Feature2 />
          {/*services end*/}
          {/*about start*/}
          <section className="pt-0">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                  <img src={require(`../../../assets/images/about/14.png`)} alt="Image" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-exclamation ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">Bulit for everybody with unlimited unique features</h2>
                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </div>
                  <Link to="/" className="btn btn-primary text-white text-left mr-1"> <i className="la la-apple mr-2 ic-3x d-inline-block" />
                    <div className="d-inline-block"> <small className="d-block">Available On The</small>
                          App Store</div>
                  </Link>
                  <Link to="/" className="btn btn-dark text-white text-left"> <i className="la la-android mr-2 ic-3x d-inline-block" />
                    <div className="d-inline-block"> <small className="d-block">Android App On</small>
                          Google Play</div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/*about end*/}
          {/*counter start*/}
          <section className="custom-py-2 position-relative bg-dark parallaxie" style={{ backgroundImage: `url(${require(`../../../assets/images/bg/01.jpg`)})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay={true} videoId='P_wKDMcr1Tg' onClose={() => this.setState({ isOpen: false })} />

            <div className="container">
          
              <div className="row align-items-center justify-content-between">
               
                <div className="col-12 col-lg-4 col-xl-5 mb-11 mb-lg-0 text-center">
                  <div className="video-btn">
                    <a className="play-btn popup-youtube" onClick={this.openModal}><i className="la la-play" /></a>
                    <div className="spinner-eff">
                      <div className="spinner-circle circle-1" />
                      <div className="spinner-circle circle-2" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xl-6">
                  <Counter2 />
                </div>
              </div>
            </div>
            <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
              </svg>
            </div>
          </section>
          {/*counter end*/}
          {/*services start*/}
          <Feature1 />
          {/*services end*/}
          {/*work start*/}
          <section>
            <div className="container">
              <Worktab />
            </div>
          </section>
          {/*work end*/}
          {/*testimonial start*/}
          {/* <section className="position-relative">
            <div className="shape-2 transform-md-rotate" style={{ overflow: 'hidden' }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1360ef' }} />
              </svg>
            </div>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                  <div> <span className="badge badge-light-soft p-2">
                    <i className="la la-users ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                    <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
                <Testimonial1 />
              </div>
            </div>
          </section> */}
          {/*testimonial end*/}
          {/*screenshots start*/}
          {/* <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-5"> <span className="badge badge-primary-soft p-2">
                    <i className="la la-file-image-o ic-3x rotation" />
                  </span>
                    <h2 className="mt-3">See Our Bootsland App Screenshots</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <OwlCarousel
                    className="owl-carousel"
                    dotData={false}
                    items={3}
                    autoplay={true}
                  >
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/01.png`)} alt="" />
                    </div>
   
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/03.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/01.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/02.png`)} alt="" />
                    </div>
                    <div className="item">
                      <img className="img-fluid" src={require(`../../../assets/images/app/03.png`)} alt="" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section> */}
          {/*screenshots end*/}
          {/*pricing start*/}
          {/* <section>
            <div className="container">
              <Pricingplan4 />
            </div>
            {/* / .container 
          </section> */}
          {/*pricing end*/}
          {/*blog start*/}
          {/* <section>
            <div className="container">
              <div className="row align-items-end mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                  <div> <span className="badge badge-primary-soft p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span>
                    <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ml-auto">
                  <div>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              <Blog1 />
            </div>
          </section> */}
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index7;
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PerfectApplication from "./components/PerfectApplication";
import Header from "./components/Header";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1s

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    {!loading && (  <div className="boxed_wrapper">
      {loading && <div className="preloader style-two"></div>}

{/* <!-- Main header --> */}
<Header/>
{/* <!-- Start Banner Style5 Area --> */}
<section
      className="banner-style5-area"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6)), url(/images/slides/your-new-image.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
          >
      <div className="phone float_up_down_two"></div>
      <div className="round-box zoom-fade"></div>
      <div className="container">
        <div className="row">
        <Banner/>
          
        </div>
      </div>
    </section>
    {/* <!-- End Banner Style5 Area --> */}


{/* <!--Start About Style4 Area--> */}
  <section className="about-style4-area">
      <div className="about-style4-bg">
        <div className="shape1 zoom-fade"></div>
        <div className="shape2 float_up_down_two">
          <img src="images/about/mac.png" alt="Mac" />
        </div>
        <div className="shape3">
          <img src="images/about/tooltip.png" alt="" />
        </div>
        <div className="shape4">
          <img src="images/about/graphic.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-0 col-sm-0"></div>
          <div className="col-xl-6 col-lg-7">
            <div className="about-style4-content">
              <div className="sec-title-style4">
                <div className="title">A perfect application that will make you happy</div>
                <div className="border-box"></div>
              </div>
              <div className="inner-content">
                <div className="text">
                  <p>
                    Holds in these matters to this principle of selection the rejects pleasures other greater pleasures, or else he endures pains obligations of business it will frequently occur that pleasures have to be repudiated.
                  </p>
                </div>

               <PerfectApplication/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End About Style4 Area-->  */}

{/* <!--Start Friendly Interface Area--> */}
  <section className="friendly-interface-area">
            <div className="outer-container">
                <div className="layer-image wow fadeInUp" data-wow-duration="1500ms"></div>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                        <div className="friendly-interface-content">
                            <div className="sec-title-style4">
                                <div className="title">User friendly interface and<br/> love to work</div>
                                <div className="border-box"></div>
                            </div>
                            <div className="inner-content">
                                <div className="text">
                                    <p>Holds in these matters to this principle of selection the rejects pleasures greater pleasures, or else he endures pains obligations.</p>
                                </div>
                                <ul>
                                    <li>
                                        <div className="icon"><span className="icon-student"></span></div>
                                        <h5>Education</h5>
                                    </li>
                                    <li className="style2">
                                        <div className="icon"><span className="icon-student"></span></div>
                                        <h5>Education</h5>
                                    </li>
                                    <li className="style3">
                                        <div className="icon"><span className="icon-student"></span></div>
                                        <h5>Education</h5>
                                    </li>
                                    <li className="style4">
                                        <div className="icon"><span className="icon-student"></span></div>
                                        <h5>Education</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="friendly-interface-right-content">
                            <div className="interface-box1">
                                <img src="images/resources/interface-1.png" alt=""/>
                            </div>
                            <div className="interface-box2">
                                <img src="images/resources/interface-2.png" alt=""/>
                            </div>
                            <div className="interface-box3">
                                <img src="images/resources/interface-3.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Friendly Interface Area--> */}


  
{/* <!--Start App setup process Area-->  */}
  <section className="app-setup-process-area">
      <div className="layer-outer">
        <div className="layer-image"></div>
      </div>
      <div className="container">
        <div className="sec-title-style4 max-witdth text-center">
          <div className="title clr-white">Application setup process</div>
          <div className="border-box center"></div>
          <div className="text">
            <p>Obligations of business it will frequently occur that pleasures have to be repudiated and the wise man therefore holds in these matters.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="app-setup-process">
              <div className="row">
                <div className="col-xl-3">
                  <div className="single-app-setup-process">
                    <div className="count-box">01</div>
                    <div className="icon">
                      <span className="icon-download1"></span>
                      <div className="overlay-text">
                        <p>The same one on saying shinking level two.</p>
                      </div>
                    </div>
                    <h5>Download</h5>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-app-setup-process martop80">
                    <div className="count-box">02</div>
                    <div className="icon">
                      <span className="icon-login"></span>
                      <div className="overlay-text">
                        <p>The same one on saying shinking level two.</p>
                      </div>
                    </div>
                    <h5>Sign up - Login</h5>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-app-setup-process margintop80">
                    <div className="count-box">03</div>
                    <div className="icon">
                      <span className="icon-user"></span>
                      <div className="overlay-text">
                        <p>The same one on saying shinking level two.</p>
                      </div>
                    </div>
                    <h5>Start Work</h5>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-app-setup-process martop80">
                    <div className="count-box">04</div>
                    <div className="icon">
                      <span className="icon-review"></span>
                      <div className="overlay-text">
                        <p>The same one on saying shinking level two.</p>
                      </div>
                    </div>
                    <h5>Add Review</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End App setup process Area-->     */}

{/* <!--Start Testimonial style4 Area--> */}
 <section className="testimonial-style4-area">
      <div className="layer-outer">
        <div className="layer-shape" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1700"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-9">
            <div className="testimonial-style4-content">
              <div className="sec-title-style4">
                <div className="title">Reviewed & rated<br/> by our beneficiary’s<br/> customers</div>
                <div className="border-box"></div>
              </div>
              <div className="inner-content">
                <div className="text">
                  <p>Duty through weakness of will, which is the same as saying pleasure shrinking pain perfectly simple easy distinguish certain in their duty.</p>
                </div>
                <div className="button">
                  <a href="#">Read More Reviews</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="testimonial-style4-right-content">
              <div className="single-testimonial-style4 one">
                <div className="top">
                  <div className="image-box">
                    <img src="images/testimonial/tes-v4-1.png" alt="Awesome Image" />
                  </div>
                  <div className="title-box">
                    <h3>Jen Cathrine</h3>
                    <span>CEO & Founder<br /> Info Tech Solutions.</span>
                  </div>
                </div>
                <div className="text">
                  <p>Power of choice is untrammelled & when nothing prevents our being to do what we like best.</p>
                </div>
                <div className="bottom">
                  <div className="review-box">
                    <ul>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star-half"></i></li>
                    </ul>
                  </div>
                  <div className="quote-box">
                    <span className="icon-quote"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-style4 two">
                <div className="top">
                  <div className="image-box">
                    <img src="images/testimonial/tes-v4-2.png" alt="Awesome Image" />
                  </div>
                  <div className="title-box">
                    <h3>Cyril Bertram</h3>
                    <span>Engineering Manager<br /> Soft Solution.</span>
                  </div>
                </div>
                <div className="text">
                  <p>Your guys were great, knowledgeable, well experienced, efficient, and neat. I recommend Fixic.</p>
                </div>
                <div className="bottom">
                  <div className="review-box">
                    <ul>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star-half"></i></li>
                    </ul>
                  </div>
                  <div className="quote-box">
                    <span className="icon-quote"></span>
                  </div>
                </div>
              </div>
              <div className="single-testimonial-style4 three">
                <div className="top">
                  <div className="image-box">
                    <img src="images/testimonial/tes-v4-1.png" alt="Awesome Image" />
                  </div>
                  <div className="title-box">
                    <h3>Felix Graham</h3>
                    <span>Marketing Manager<br /> 7 Digital</span>
                  </div>
                </div>
                <div className="text">
                  <p>Frequently occur that pleasures to be repudiated & the annoyance man therefore always matters.</p>
                </div>
                <div className="bottom">
                  <div className="review-box">
                    <ul>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star"></i></li>
                      <li><i className="fa fa-star-half"></i></li>
                    </ul>
                  </div>
                  <div className="quote-box">
                    <span className="icon-quote"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End Testimonial Style4 Area-->  */}


{/* <!--Start Subscribe Area--> */}
{/* <section className="subscribe-area">
      <div className="layer-outer">
        <div className="layer-shape1" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500"></div>
        <div className="layer-shape2" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500"></div>
      </div>
      <div className="container">
        <div className="title text-center">
          <h1>Subscribe our newsletter</h1>
          <p>Subscribe to our newsletter to get updates, special offers & news directly to your inbox</p>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <form className="subscribe-form-box wow slideInUp" data-wow-delay="100ms" action="#">
              <div className="row">
                <div className="col-xl-4">
                  <input type="text" name="f_name" placeholder="Name..." />       
                </div>
                <div className="col-xl-4">
                  <input type="email" name="f_email" placeholder="Email..." required />    
                </div>
                <div className="col-xl-4">
                  <button className="btn-one" type="submit">Subscribe Us</button>     
                </div>
              </div>  
            </form>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!--End Subscribe Area--> */}

{/* <!--Start Footer Style5 Area-->   */}
<Footer/>
        {/* <!--End Footer Style5 Area-->   */}
 

</div> )}

    </div>
  );
}

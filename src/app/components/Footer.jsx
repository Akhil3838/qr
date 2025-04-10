import React from 'react'

function Footer() {
  return (
    <>
         <footer className="footer-style5-area">
            {/* <div className="layer-outer" style={{ backgroundImage: "url(images/shape/mockup-iphone.png)" }}></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-style5-content text-center">
                            <h1>Download our free mobile app!<br /> Available on apple & android app stores.</h1>
                            <p>Our apps are designed to assist you every step of the way</p>
                            <div className="button">
                                <a href="#">
                                    <span className="icon-brand"></span>Google Store
                                </a>
                                <a href="#">
                                    <span className="flaticon-apple-logo"></span>
                                    Apple Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-style5-bottom-content clearfix text-center">
                <div className="footer-social-links">
                    <ul className="social-links-style1">
                        <li>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="copyright-text">
                    <p>Copyrights © 2019 Fixic, All Rights Reserved by <a href="#">Themekalia.</a></p>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer
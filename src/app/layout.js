import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Home Five || Jixic || Responsive HTML 5 Template",
  description: "Your website description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-four/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/images/favicon-four/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/favicon-four/favicon-16x16.png" sizes="16x16" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        {children}

        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target style4" data-target="html">
          <span className="icon-down-arrow"></span>
        </button>

        <ToastContainer />

        {/* Load jQuery first */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />

        {/* Load scripts that must run before anything else */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/plugins/revolution/js/jquery.themepunch.tools.min.js" strategy="beforeInteractive" />
        <Script src="/plugins/revolution/js/jquery.themepunch.revolution.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.enllax.min.js" strategy="beforeInteractive" />

        {/* FontAwesome */}
       <Script
  src="https://kit.fontawesome.com/abc123xyz.js"
  crossOrigin="anonymous"
  strategy="beforeInteractive"
/>


        {/* Other plugin scripts */}
        <Script src="/js/appear.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap-select.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.js" strategy="lazyOnload" />
        <Script src="/js/jquery.bootstrap-touchspin.js" strategy="lazyOnload" />
        <Script src="/js/jquery.countTo.js" strategy="lazyOnload" />
        <Script src="/js/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mixitup.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.paroller.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.js" strategy="lazyOnload" />
        <Script src="/js/validation.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mCustomScrollbar.concat.min.js" strategy="lazyOnload" />
        <Script src="/js/mousemoveparallax.js" strategy="lazyOnload" />
        <Script src="/js/aos.js" strategy="lazyOnload" />
        <Script src="/js/slick.js" strategy="lazyOnload" />
        <Script src="/js/parallax.min.js" strategy="lazyOnload" />

        {/* Google Maps */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBevTAR-V2fDy9gQsQn1xNHBPH2D36kck0"
          strategy="lazyOnload"
        />
        <Script src="/js/gmaps.js" strategy="lazyOnload" />
        <Script src="/js/map-helper.js" strategy="lazyOnload" />

        {/* Language and Time Picker */}
        <Script src="/assets/language-switcher/jquery.polyglot.language.switcher.js" strategy="lazyOnload" />
        <Script src="/assets/timepicker/timePicker.js" strategy="lazyOnload" />
        {/* <Script src="/assets/html5lightbox/html5lightbox.js" strategy="lazyOnload" /> */}

        {/* Revolution Slider Extensions */}
        <Script src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js" strategy="lazyOnload" />
        <Script src="/plugins/revolution/js/extensions/revolution.extension.video.min.js" strategy="lazyOnload" />

        {/* Main Slider Script */}
        <Script src="/js/main-slider-script.js" strategy="lazyOnload" />

        {/* Custom Script */}
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

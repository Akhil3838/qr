"use client";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="boxed_wrapper">
      <section
        className="banner-style5-are h-100"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6)), url(/images/slides/your-new-image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="login-register-area" >
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 shadow-lg p-3 mb-5 " style={{ borderRadius: "15px 50px", background: "linear-gradient(135deg,rgb(204, 164, 191),rgb(140, 180, 219))", }}>
                <div className="form pt-4" >
                  <div className="shop-page-title">
                    <div className="title text-center text-white">
                      Login Now
                    </div>
                  </div>
                  <div className="row">
                    <LoginForm />
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

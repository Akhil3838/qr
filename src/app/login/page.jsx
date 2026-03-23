"use client";

import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
 backgroundImage: `linear-gradient(to right, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6)), url(/images/slides/your-new-image.png)`      }}
    >
      <section className="login-8">
        <div className="containern">
          <div className="login-card">
            {/* Left side - Image */}
            <div className="card-left">
              <div className="image-cover">
                <img
                  src="https://img.freepik.com/free-photo/young-women-scanning-qr-code-cafeteria_23-2149321650.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Decorative"
              style={{ width: '600px', height: '566px', objectFit: 'cover' }}  />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="card-right">
              <h1 className="title">oxomQR</h1>
              <h2 className="welcome">Welcome to oxomQR</h2>
              <LoginForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

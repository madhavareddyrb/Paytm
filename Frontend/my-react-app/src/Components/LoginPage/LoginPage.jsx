import { useState } from "react";
import "./LoginPage.css";
import QRCode from "react-qr-code";

export default function LoginPage() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          {/* Header */}
          <div className="modal-header">
            <h2>Login with your Paytm account</h2>
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>
          </div>

          {/* Content */}
          <div className="modal-body">
            {/* Left Section */}
            <div className="left-section">
              <h3>Steps to scan QR Code</h3>
              <ol>
                <li>Open Paytm App</li>
                <li>Tap Scan option available at the bottom</li>
                <li>Point Paytm Scan at QR Code to login</li>
              </ol>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <div className="qr-box">
                <QRCode value="https://paytm.com/login" size={180} />
                <p className="qr-text">Scan to Login</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <p>
              By signing in, you agree to our{" "}
              <span className="link">privacy policy</span> and{" "}
              <span className="link">terms of use</span>
            </p>

            <hr />

            <div className="app-download">
              <p>To create an account download Paytm App</p>

              <div className="store-buttons">
                <button className="store-btn">App Store</button>
                <button className="store-btn">Google Play</button>
              </div>
            </div>
          </div>
          <div>
            <h3>Login Here</h3>
            <form action="" method="post">
              <label className="label_name" htmlFor="UserName">
                UserName:{" "}
              </label>
              <input type="text" />
              <br />
              <label className="label_name" htmlFor="Password">
                Password:{" "}
              </label>
              <input type="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

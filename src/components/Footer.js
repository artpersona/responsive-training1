import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive vacation deals!
        </p>
        <p className="footer-subscription-subtext">
          You can unsubscribe at any time.
        </p>

        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
          </form>
          <Button buttonStyle="btn--outline" className="btn">
            Subscribe
          </Button>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-links-section">
          <Link className="footer-links-section-heading">About Us</Link>
          <Link className="footer-links-item">How it works</Link>
          <Link className="footer-links-item">Testimonials</Link>
          <Link className="footer-links-item">Careers</Link>
          <Link className="footer-links-item">Investors</Link>
          <Link className="footer-links-item">Term of Service</Link>
        </div>

        <div className="footer-links-section">
          <Link className="footer-links-section-heading">Contact Us</Link>
          <Link className="footer-links-item">Contact</Link>
          <Link className="footer-links-item">Support</Link>
          <Link className="footer-links-item">Destinations</Link>
          <Link className="footer-links-item">Sponsorships</Link>
        </div>

        <div className="footer-links-section">
          <Link className="footer-links-section-heading">Videos</Link>
          <Link className="footer-links-item">Submit Video</Link>
          <Link className="footer-links-item">Ambassadors</Link>
          <Link className="footer-links-item">Agency</Link>
          <Link className="footer-links-item">Influencer</Link>
        </div>

        <div className="footer-links-section">
          <Link className="footer-links-section-heading">Social Media</Link>
          <Link className="footer-links-item">Instagram</Link>
          <Link className="footer-links-item">Facebook</Link>
          <Link className="footer-links-item">Youtube</Link>
          <Link className="footer-links-item">Twitter</Link>
        </div>
      </div>

      <div className="site-credentials">
        <div className="site-logo">
          <img
            src={
              "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/rocket-512.png"
            }
            alt="wonderpets"
            className="site-image"
          />
          <p>Aether</p>
        </div>

        <p className="credits">John Paul Perez © 2021</p>

        <div className="socials">
          <i className="fa fa-facebook" />
          <i className="fa fa-instagram" />
          <i className="fa fa-youtube" />
          <i className="fa fa-twitter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

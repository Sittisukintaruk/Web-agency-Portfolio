import React from "react";
import { ReactComponent as Facebook } from "../images/Home/icon-svg/icon-socia/feather_facebook.svg";
import { ReactComponent as Instagram } from "../images/Home/icon-svg/icon-socia/feather_instagram.svg";
import { ReactComponent as Twitter } from "../images/Home/icon-svg/icon-socia/feather_twitter.svg";
import { ReactComponent as Dribbble } from "../images/Home/icon-svg/icon-socia/feather_dribbble.svg";
import { ReactComponent as Send } from "../images/Home/icon-svg/send.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wapper">
        <div className="container">
          <div className="container__info">
            <a
              className="logo"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigitUX
            </a>
            <p className="card__paragraph mt-4">
              DigitUx is a Digital agencay that create User centred Product that
              help her client to evolve
            </p>
          </div>
          <div className="container__about">
            <h4 className="semi-bold text-black">About</h4>
            <a href="http://">About Us</a>
            <a href="http://">Study Case</a>
            <a href="http://">Blogs</a>
            <a href="http://">Portfolio</a>
            <a href="http://">careers</a>
          </div>
          <div className="container__follow">
            <h4 className="semi-bold text-black">Follow Us </h4>
            <div className="container__socia">
              <Facebook />
              <a href="http://" className="ml-2">
                fb.com/DigitalUX
              </a>
            </div>
            <div className="container__socia">
              <Instagram />
              <a href="http://" className="ml-2">
                @DigitalUX
              </a>
            </div>
            <div className="container__socia">
              <Twitter />
              <a href="http://" className="ml-2">
                @DigitalUX
              </a>
            </div>
            <div className="container__socia">
              <Dribbble />
              <a href="http://" className="ml-2">
                Dribbble.com/DigitalUx
              </a>
            </div>
          </div>
          <div className="container__touch">
            <h4 className="semi-bold text-black ">Get In touch with Us </h4>
            <h5 className="mt-4">Need Answers? Need help ? Just email us </h5>
            <div className="send-email">
              <input type="text" placeholder="You email" />
              <Send className="send-email--icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__creator">
        <div className="creator">
          Designed By Hmimi Chioukh 2022 form{" "}
          <a
            href="https://dribbble.com/shots/18047808-DIGITUX-Creative-Digital-Agency"
            className="hightlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            dribbble
          </a>{" "}
          and Made by{" "}
          <a
            href="https://github.com/Sittisukintaruk"
            className="hightlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitthisak
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react"
import "../style/footer.scss"
import Logo from "../image/logo.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__container--logo-block">
                <img src={Logo} />
            </div>
        </div>
    </div>
  )
};

export default Footer;

import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Pen Paper Plus is the Most Organized Online shopping spot in Pakistan for exciting and innovative design-led stationery. Always ready with fresh and inventive ideas, We are constantly bringing you new products with many new products launching in our stores and website every single week. Since we Source most of the products from the Principals Directly, We always have the best prices and Support available.
                </div>
            </div>
            <div className="col"><div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Shahra-e-faisal Rd, Baloch Colony, K.A.E.C.H.S, Karachi, 75420
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone:  +92 331 275 7200
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email:  contact@penpaperplus.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Office Suplies</span>
                <span className="text">Paper</span>
                <span className="text">General Items</span>
                <span className="text">Books Corner</span>
                <span className="text">course book</span>
                <span className="text">school</span>


            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text"></span>
                <span className="text">About</span>
                <span className="text">Categories</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>

        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">PEN PAPER PLUS 2024 CREATED BY FAR SOLUTIONS. PREMIUM E-COMMERCE SOLUTIONS.</div>
                <img src={Payment} />
            </div>
            
        </div>
    </footer>
};

export default Footer;

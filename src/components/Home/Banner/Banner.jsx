import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h3>Pen Paper</h3>
                <h1>Plus+</h1>
                <p>Pen Paper+ is the Most Organized Online shopping spot in Pakistan for exciting and innovative design-led stationery.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>;
    </div>;

};

export default Banner;

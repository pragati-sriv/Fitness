import styles from "./about.module.css";
import photo1 from "../../assests/about2.jpg"
import photo2 from "../../assests/about3.jpg";

// import photo1 from './about2.jpg';
// import photo2 from "./about3.jpg";


const HeroImages = () => {
// const photo1 = require("/myapp/src/assets/about2.jpg");
  return (
    <div className={styles["hero-images"]} data-aos="fade-right">
      <div>
        <img src={photo1} alt="About Image 1" />
      </div>
      <div>
        <img src={photo2} alt="About Image 2" />
      </div>
    </div>
  );
};

export default HeroImages;

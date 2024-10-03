import styles from "./Memes.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section2/bg.png'
import image1 from '../images/Memes/1.png'
import image2 from '../images/Memes/2.png'
import image3 from '../images/Memes/3.png'
import image4 from '../images/Memes/4.png'
import image5 from '../images/Memes/5.png'
import image6 from '../images/Memes/6.png'
import banner from '../images/banner.gif'

const Memes=()=>{

    const images=useRef([image1,image2,image3,image4,image5,image6]).current;
    const [bannerHeight,setBannerHeight]=useState(0)

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    <p className={styles.title}>Memes</p>
                    <div className={styles.imageswrapper}>

                    {
                        images.map((img)=>
                        <img src={img} className={styles.image}></img>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memes
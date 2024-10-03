import styles from "./About.module.css";
import image from '../images/About/image.png'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper}>
                    <p className={styles.title}>The rise of Vixinu</p>
                    <p className={styles.text}>
                    In the chaos of the cryptosphere, where memetokens reign and digital deities emerge, a new force rises: Vixinu, the divine fusion of Vishnu, the protector of worlds, and the Doge, the meme dog. Vixinu is not just a token, but a symbol of balance between the sacred and humor, combining ancient wisdom with internet culture.
                    Born from the blockchain code, Vixinu protects decentralized realms. With blue skin andc multiple arms, he carries both traditional instruments and the power of smart contracts. His face, the iconic Shiba Inu, represents the unpredictability of the memecoin world. Surrounding him are snakes with the heads of Pepe the Frog, guardians of his realm and embodying the chaotic energy of the internet.
                    The cryptosphere is in crisis: scams and inflationary projects threaten its stability. Vixinu’s followers, the Guardians of the Memeconomy, believe he will bring a new era of balance. His promise, "To the Moon and Beyond", is more than just a meme—it’s a mission.
                    As Vixinu’s influence grows, rivals appear, but his Pepe-headed serpents guard the project with humor and cunning. In the end, Vixinu’s legacy will not be defined by the value of his token but by the community he builds.
                    The rise of Vixinu has begun. Will you join the memevolution or be left behind?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
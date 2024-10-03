import { FunctionComponent, useEffect, useState } from "react";
import styles from "../components/Tokenomics.module.css";
import liquidity from '../images/Tokenomics/liquidity.png'
import mint from '../images/Tokenomics/mint.png'
import supply from '../images/Tokenomics/supply.png'
import tax from '../images/Tokenomics/tax.png'

export type MarvnomicsType = {
  className?: string;
}

const Tokenomics: FunctionComponent<MarvnomicsType> = ({ className = "" }) => {

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="marvnomics" data-scroll-to="marvnomics">
      <div className={[styles.subwrapper, className].join(" ")}>
        <div className={[styles.title, className].join(" ")}>TOKENOMICS</div>
        <div className={[styles.body, className].join(" ")}>
          <div className={[styles.framescontainer, className].join(" ")}>
            <Framecontainer className={className} image={tax} title="Taxes" subTitle="0/0" border="linear-gradient(#FF8B8B, #AA5959)"></Framecontainer>
            <Framecontainer className={className} image={mint} title="Freeze & Mint" subTitle="Revoke" border="linear-gradient(#FAB989, #9F7557)"></Framecontainer>
            <Framecontainer className={className} image={supply} title="Total Supply" subTitle="1B" border="linear-gradient(#579E96, #8AFBED)"></Framecontainer>
            <Framecontainer className={className} image={liquidity} title="Liquidity" subTitle="Burned" border="linear-gradient(#897CB0, #C0AEF6)"></Framecontainer>
          </div>
          <div className={[styles.description, className].join(" ")}>
            <p className={[styles.description_text, className].join(" ")} style={{margin:"10px"}}>
            Pill Popping Penguin – the coolest crypto sliding through the blockchain! This chill penguin pops up in your portfolio with ice-cold moves and moonshot dreams. Waddle with us to the top of the iceberg!
            </p>
            {/* <p style={{fontFamily:"var(--font-bangers)",alignSelf:"start",margin:"5px",color:"#FCFAC2"}}>Vroom Vroom . . . . . . . . . . . . . . . . . . . . . . .</p> */}
          </div> 
        </div>
      </div>
    </section>
  );
};

const Framecontainer=(props:{className:string,image:string,title:string,subTitle:string,border:string})=>{

  return(
    <div className={[styles.framewrapper, props.className].join(" ")} style={{backgroundColor:"#000055"}}>
      <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img
          className={[styles.frameimage, props.className].join(" ")}
          loading="lazy"
          alt=""
          src={props.image}
        />
      </div>
      <div style={{position:"absolute",bottom:"-3%",boxSizing:"border-box",padding:"5%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"end"}}>
        <p className={[styles.frametitle, props.className].join(" ")}>{props.title}</p>
        <p className={[styles.framesubtitle, props.className].join(" ")}>{props.subTitle}</p>
      </div>
    </div>
  )
}

export default Tokenomics;

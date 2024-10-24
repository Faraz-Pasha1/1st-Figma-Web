import Image from "next/image";
import Link from "next/link";
import footerLogo from './../../public/images/footerLogo.png'
import location from './../../public/images/location.png'
import call from './../../public/images/call.png'
import email from './../../public/images/emial.png'
import facebook from './../../public/images/facebook.png'
import twitter from './../../public/images/twitter.png'
import LinkedIn from './../../public/images/LinkedIn.png'
import pininterest from './../../public/images/pininterest.png'

export default function Footer() {
    return (
      <div className = "footer">
        <div className="footerLogo">
          <Image src={footerLogo} alt="footerLogo" width={145} height={94}></Image>
        </div>
        <div className = "footerInfoContainer"> 
            <h1 className = "footerHeading">Information</h1><br/>
            <ul className = "footerOptions1">
                <Link href="/"><li >Main</li></Link>
                <Link href="#gallery"><li >Gallery</li></Link>
                <Link href="#projects"><li >Projects</li></Link>
                <Link href="#certifications"><li >CertificationsS</li></Link>
                <Link href="#contacts"><li >Contacts</li></Link>
            </ul>
        </div>
        <div className = "contactFooter">
            <h1 className = "contactHeadingofFooter">Contacts</h1><br/>
            <Image className = "location" src = {location} alt = "location"></Image>
            <h2 className = "address">1234 Sample Street Austin Texas 78704</h2><br/><br/>

            <Image className = "call" src = {call} alt = "call"></Image>
            <h3 className = "contactNumber">512.333.2222</h3>

            <Image className = "email" src = {email} alt = "email"></Image>
            <h4 className="emailText">sampleemail@gmail.com</h4>

        </div>
        <div className = "socialMediaContainer">
            <h1 className = "socialMedia">Social Media</h1><br/>
            <div className = "socialMediaImages">
                <Image className = "facebook" src = {facebook} alt = "facebook"></Image>
                <Image className = "twitter" src = {twitter} alt = "twitter"></Image>
                <Image className = "LinkedIn" src = {LinkedIn} alt = "LinkedIn"></Image>
                <Image className = "pininterest" src = {pininterest} alt = "pininterest"></Image>
            </div>
        </div>
        <div className = "line"></div><br/>
        <h1 className = "footerEnd">© 2021 All Rights Reserved</h1>
      </div>

     
    );
  }
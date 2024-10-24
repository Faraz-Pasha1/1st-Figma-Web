import Image from "next/image";
import Link from "next/link";
import headerLogo from './../../public/images/headerLogo.png'



export default function Header() {
    return (
      <div className = "header">
        <div className="logoImage">
          <Image src={headerLogo} alt="logo image" width={70} height={43}></Image>
        </div>
        <ul className = "header-Options">
            <Link href="/"><li >MAIN</li></Link>
            <Link href="/"><li >GALLERY</li></Link>
            <Link href="/"><li >PROJECTS</li></Link>
            <Link href="/"><li >CERTIFICATIONS</li></Link>
            <Link href="/"><li >CONTACTS</li></Link>
        </ul>
      
      </div>

     
    );
  }
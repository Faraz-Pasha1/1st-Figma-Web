import Image from "next/image";
import section1Image from './../../public/images/section1Image.png'
import image1ofContainer1 from './../../public/images/image1ofContainer1.png'
import image2ofContainer1 from './../../public/images/image2ofContainer1.png'
import image3ofContainer1 from './../../public/images/image3ofContainer1.png'
import Number1 from './../../public/images/Number 1.png'
import Number2 from './../../public/images/Number 2.png'
import projectImage1 from './../../public/images/projectImage1.png'
import projectImage1of1 from './../../public/images/projectImage1of1.png'
import projectImage2 from './../../public/images/projectImage2.png'
import projectImage3 from './../../public/images/projectImage3.png'
import projectImage4 from './../../public/images/projectImage4.png'
import projectImage5 from './../../public/images/projectImage5.png'
import contactImage from './../../public/images/contactImage.png'


export default function Main() {
    return (
      <div className = "mainSection">
        <h1 className="firstWord">PROJECT</h1>
        <h2 className="secondWord">Lorum</h2>

        {/* FOR BUTTONS & LINE OF MAIN SECTION */}
        <button className="arrow-button1">
          <span className="arrowOnly1">←</span>
        </button>
        <button className="arrow-button2">
          <span className="arrowOnly2">→</span>
        </button>
        <div className="mainLine"></div>

        <div className = "serialNum">01 / 02</div>

        
        {/* FOR MAIN BODY IMAGE 1 */}
        <div className="sectionImage">
            <Image src={section1Image} alt="Home Image" width={670} height={710}></Image>
        </div>
        <br/><br/><br/>

        {/* ABOUT SECTION OF MAIN BODY */}
        <div className = "bigContainer">
              
          <div className = "inBigContainer">
            <div className = "imageContainer1">
                <Image src = {image1ofContainer1} alt="projects" ></Image> 
            </div>
            <div className = "imageContainer2">
              <Image src = {image2ofContainer1} alt="projects" ></Image>
            </div>
            <div className = "imageContainer3">
              <Image src = {image3ofContainer1} alt="projects" ></Image>
            </div>
            
            <div className = "textContainer">
              <h1 className="about">About</h1>
              <h2 className="aboutDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
                </h2>
                <button className="readMore-button">
                 <span className="readMore">READ MORE →</span>
                </button>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <br/><br/><br/>
        

            {/* MISSION SECTION OF MAIN BODY */}

        <div>

            <div className = "missionText">
              <h1>Main Focus/Mission Statement</h1> 
              <br/>
              <Image src= {Number1} alt ="mission number1"></Image>
              <h2 className = "number1Mission">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Sed efficitur, lectus et facilisis placerat.
              </h2>

              <Image className="Mnumber2" src= {Number2} alt ="mission number2"></Image>
              <h3 className = "number2Mission">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed efficitur, lectus et facilisis placerat, magna mauris 
                porttitor tortor, a auctor est felis ut nisl.
              </h3>
              <br/>
            </div>

        </div>

          {/* PROJECT OF MAIN SECTION */}

        <div className = "projectContainerMain"> 
          <h1 className = "ourProjectsText">Our Projects</h1>
          <br/>
          <Image className = "projectImage1" src = {projectImage1} alt = "projectImage1"></Image>
          <Image className = "projectImage1of1" src = {projectImage1of1} alt = "projectImage1of1"></Image>
          <Image className = "projectImage2" src = {projectImage2} alt = "projectImage2"></Image>
          <Image className = "projectImage3" src = {projectImage3} alt = "projectImage3"></Image>
          <Image className = "projectImage4" src = {projectImage4} alt = "projectImage4"></Image>
          <Image className = "projectImage5" src = {projectImage5} alt = "projectImage5"></Image>

          <div className = "sampleProjectTitle">
            <h1 className = "sampleProject"> Sample Project</h1>
            <button className="viewMore">
              <span className="viewMore">VIEW MORE →</span>
            </button>
          </div>
          <button className="allProjects">
              <span className="allProjectsButton">ALL PROJECTS →</span>
          </button>  
          <br/><br/><br/> <br/>  

        </div>

        {/* CONTACT US SECTION */}

        <div className = "contactUsContainer">
          <h1 className = "contactUs">Contact Us</h1>
          <div className = "inputFields">
            <input type = "text box" name = "name" id = "nameBox" placeholder="Name"></input> 
            <input type = "text box" name = "name" id = "nameBox" placeholder="Phone No.*"></input>
            <input type = "text box" name = "name" id = "nameBox" placeholder="Email*"></input>
            <input type = "text box" name = "name" id = "nameBox" placeholder="Interrested In"></input>
            <textarea name = "textArea" placeholder = "Message" id = "textBox"></textarea>
          </div>
            <Image className = "contactImage" src = {contactImage} alt = "contactImage"></Image>
            <br/><br/>

          <button className="emailButton">
              <span className="send">SEND EMAIL →</span>
          </button>
        </div>
        <br/><br/><br/><br/>
      
        
      </div>

        
    
      </div>
      
     
    );
  }
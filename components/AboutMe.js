//about css module
import AboutStyles from '../styles/About.module.css'
//importing image API
import Image from 'next/image'

//rendering the projects and using the css module to style
const AboutMe = () => {
    return (
        <div className={AboutStyles.aboutMe}>
            <div className={AboutStyles.boxA1}>
                <h2 class={AboutStyles.aboutH2}>About Me</h2>
            
                <br/>
                <p>I am a Web Developer with a passion for learning new technologies.</p>
                <p>I especially like solving problems.</p>
                <p>I developed an interest in coding while learning to set up my own website.</p>

                <br/>
                <h3 class={AboutStyles.aboutH3}>Academic History</h3>
                <p>Crawford College Lonehill</p>
                <p>Class of 2015 // Bachelor's Pass</p>

                <br/>
                <p>University of Pretoria</p>
                <p>2016 - 2017 // Higher Certificate Sport Science</p>

                <br/>
                <p>HFPA</p>
                <p>2018 // Certificate : Personal Trainer</p>

                <br/>
                <h3 class={AboutStyles.aboutH3}>Skills and Competencies</h3>
                <ul class={AboutStyles.aboutList}>
                    <li>HTML, CSS/SCSS, Bootstrap</li>
                    <li>JavaScript (ES6), JQuery, JSON</li>
                    <li>MongoDB, Express, Node, React, Next</li>
                    <li>Git, Github, CMD</li>
                    <li>REST API, JWT, Jest, Mocha and Chai</li>
                </ul>

            </div>

            <div className={AboutStyles.boxA2}>
                <h2 class={AboutStyles.aboutH2}>Work Experience</h2>

                <br/>
                <p>Sales Representative</p>
                <p>2019 // Chrome Supplements</p>

                <br/>
                <p>Sales Representative</p>
                <p>2014 - 2015 // Companion Pets</p>

                <br/>
                <Image src="/Career _Isometric.svg" alt="Logo" width={330} height={320}/>

            </div>
            
        </div>
    )
}

export default AboutMe

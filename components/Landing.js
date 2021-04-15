import Link from 'next/link'
import Image from 'next/image'
import LandingStyles from '../styles/Landing.module.css'

//landing component
const Landing = () => {
    return (
        <div className={LandingStyles.mainSection}>
            <div className={LandingStyles.boxm1}>
                <h2 className={LandingStyles.mainh2}>Hello, I am</h2>
                <br/>
                <h1 className={LandingStyles.mainheading}>Linton Dorgan.</h1>
                <h1 className={LandingStyles.mainheading2}>Web Developer.</h1>
                <br/>
                <p className={LandingStyles.mainp}>I am a web developer based in Johannesburg, South Africa specializing in full-stack development.</p>
                <br/>
                <br/>

                <div className={LandingStyles.mainIcons}>
                    <Link href="mailto:linton.warren01@gmail.com">
                        <Image className={LandingStyles.mainIcons} src="/gmail.svg" alt="Logo" width={25} height={25}/>
                    </Link>
                    <Link href="https://github.com/LintonW">
                        <Image className="mainIcon" src="/github.svg" alt="Logo" width={25} height={25} margin={5}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/linton-dorgan-80318a207/">
                        <Image className={LandingStyles.mainIcons} src="/linkedin-round-line-color.svg" alt="Logo" width={25} height={25}/>
                    </Link>
                    <Link href="tel:+27825229607">
                        <Image className={LandingStyles.mainIcons} src="/phone-call.svg" alt="Logo" width={25} height={25}/>
                    </Link>
                </div>
                <br/>

                <Link href="mailto:linton.warren01@gmail.com">
                    <button className={LandingStyles.mainbtn}>Get In Touch</button>
                </Link>

            </div>

            <div className={LandingStyles.boxm2}>
                <Image src="/Web Developer_Isometric.svg" alt="Logo" width={550} height={400}/>
            </div>
        </div>
    )
}

export default Landing

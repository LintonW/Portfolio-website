import ProjectStyles from '../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'

//project list component 
const ProjectList = () => {

    return (
        <div className={ProjectStyles.projectSection}>
            <div className={ProjectStyles.project1}>

                <Image src='/screenshot1.png' alt="Logo" width={400} height={200}/>

                <br/>
                <br/>
                <div>
                    <p className={ProjectStyles.pTitle}>Ecommerce Store</p>                
                    <p className={ProjectStyles.pDescription}>HTML, CSS, JavaScript</p>
                </div>

                
                <div>
                    <Link href="https://github.com/LintonW/Online-Store---Capstone-Project">
                        <button className={ProjectStyles.learnMoreBtn}>Learn More</button>
                    </Link>
                </div>

            </div>
            
            <div className={ProjectStyles.project1}>

                <Image src='/screenshot2.png' alt="Logo" width={400} height={200}/>

                <br/>
                <br/>
                <div>
                    <p className={ProjectStyles.pTitle}>Quiz Game</p>                
                    <p className={ProjectStyles.pDescription}>React</p>
                </div>

                
                <div>
                    <Link href="https://github.com/LintonW/react-quiz-game">
                        <button className={ProjectStyles.learnMoreBtn}>Learn More</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ProjectList

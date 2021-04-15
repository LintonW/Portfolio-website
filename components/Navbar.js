import Link from 'next/link'
import Image from 'next/image'
import NavbarStyles from '../styles/Navbar.module.css' 

//navabr component
const Navbar = () => {
    return (
        <div>
            <nav className={NavbarStyles.navbar}>
                <div className={NavbarStyles.logo}> 
                    <Image src="/Simple Brand Initials Logo Mark .png" alt="Logo" width={90} height={90}/>
                </div>

                <div>
                    <ul className={NavbarStyles.navLink}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar

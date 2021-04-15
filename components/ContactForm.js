//Link API
import Link from 'next/link'
import ContactStyles from '../styles/ContactForm.module.css'

//Contact form component
const ContactForm = () => {
    return (
        <div className={ContactStyles.contact}>
            <div className={ContactStyles.boxc1}>
                <h2 className={ContactStyles.contactH2}>Contact Me</h2>
                <br/>
                <p>I am actively seeking all opportunities such as internships, <br/> 
                    full-time employment and freelance work. <br/> 
                    Please feel free to contact me at any time. </p>
                <br/>
                <Link href="mailto:linton.warren01@gmail.com">
                    <button className={ContactStyles.mainbtn}>Email</button>
                </Link>
            </div>
            
            
        </div>
    )
}

export default ContactForm

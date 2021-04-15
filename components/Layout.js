//navbar component
import Navbar from './Navbar';

//making the navbar show on all pages using the layout component
const Layout = ({children}) => {
    return (
        <div>
            <Navbar /> 
            {children}
        </div>
    )
}

export default Layout

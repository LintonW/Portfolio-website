//importing the layout 
import Layout from '../components/Layout';
//importing global css
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //rendering components as children to the layout
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp

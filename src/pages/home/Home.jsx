import Footer from '../../components/footer/Footer'
import Header1 from '../../components/header1/Header1'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/service/Services'
import Client from '../../components/client/Client'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header1 />
        <Services />
        <Client />
        <Footer />
    </div>
  )
}

export default Home
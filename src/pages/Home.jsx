import HeroSection from "../components/HeroSection";
import PromoText from "../components/PromoText";
import ContactForm from "../ContactForm";
import Featured from "../Featured/Featured";
import Footer from "../Footer";


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <PromoText ></PromoText>
            <Featured />
            <ContactForm />
            <Footer></Footer>
         
        </div>
    );
};

export default Home;
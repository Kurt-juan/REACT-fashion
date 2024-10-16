import Header from "@/components/partials/Header";
import HomeBanner from "./homeBanner";
import HomeTrending from "./HomeTrending";
import HomeSticky from "./HomeSticky";
import HomeVideo from "./HomeVideo";
import Footer from "@/components/partials/Footer";

const Home = () => {
      
  return (
    <>
  
  {/* <Header/> */}
  <HomeBanner/>
  <HomeTrending/>
  <HomeSticky/>
  <Footer/>

 </>
  );

}

export default Home
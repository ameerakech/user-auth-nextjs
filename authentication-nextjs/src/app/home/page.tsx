import FlashSale from "./componets/Sales";
import Menu from "./componets/Menu";
import CategoryBrowse from "./componets/Categories";
import BestSellingProducts from "./componets/Products";
import ExploreProducts from "./componets/ExploreProducts";
import NewArrivals from "./componets/NewArrivals";
import Footer from "../shared-components/Footer";
import Navbar from "../shared-components/Navbar";

function Home(){

  return(
    <div>
      <Navbar/>
      <Menu/>
      <FlashSale/>
      <CategoryBrowse/>
      <BestSellingProducts/>
      <ExploreProducts/>
      <NewArrivals/>
      <Footer/>
    </div>
  )
}


export default Home
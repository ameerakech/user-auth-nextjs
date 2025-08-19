import FlashSale from "./componets/Sales";
import Menu from "./componets/Menu";
import CategoryBrowse from "./componets/Categories";
import BestSellingProducts from "./componets/Products";
import ExploreProducts from "./componets/ExploreProducts";
import NewArrivals from "./componets/NewArrivals";

function Home(){

  return(
    <div>
      <Menu/>
      <FlashSale/>
      <CategoryBrowse/>
      <BestSellingProducts/>
      <ExploreProducts/>
      <NewArrivals/>
    </div>
  )
}


export default Home
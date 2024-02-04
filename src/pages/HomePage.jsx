/* eslint-disable no-unused-vars */
import HiroSilder from '../components/sliders/HiroSilder';
import ProductSlider from '../components/sliders/ProductSlider';
import PricingBox from '../components/pricing/PricingBox';
import ArticlesCards from '../components/articlesCards/ArticlesCards';
import Gallery from '../components/gallery/Gallery';
import Services from '../components/services/Services';
import Auctions from '../components/products/Auctions';
import AllCategories from '../components/products/AllCategories';
import { Outlet } from 'react-router-dom';



function HomePage() {
    return (
        <div>
           <Outlet />
      <main className="pb-10">
        <HiroSilder />
        
        <Services />
        <Auctions />
        <AllCategories />
        <ProductSlider /> 
        <PricingBox /> 
        <ArticlesCards /> 
        <Gallery />
      </main>
      
        </div>
    )
}

export default HomePage
//  color: select a palet and change all colors
    //  menu:  menu page 
    // install react router dom  create all pages that need
    // popup: products preview popup
    //  routes:  complate all pages that need
        //  pages: product detalis,products,blog,login

    //TODO  Learn: learn {use context api} for a store (gpt + jonas + sabs + youtube)

    //TODO  time: products auction times logic
    //TODO  cart: adding product to cart logic + toast(by third-parti)

    
    //TODO  pages: compare,wishlist,product after clicks page,checkout , contact
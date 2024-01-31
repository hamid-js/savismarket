/* eslint-disable no-unused-vars */
import HiroSilder from './components/sliders/HiroSilder';
import ProductSlider from './components/sliders/ProductSlider';
import PricingBox from './components/pricing/PricingBox';
import ArticlesCards from './components/articlesCards/ArticlesCards';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Auctions from './components/products/Auctions';
import AllCategories from './components/products/AllCategories';
import AllNavs from './components/menus/AllNavs';


function App() {

  return (
    <div>
      <AllNavs />
      <main className="pb-10">
        <HiroSilder />
        <Services />
        <Auctions />
        <AllCategories />
        <ProductSlider /> 
        <PricingBox /> {/* TODO-6  dataM */}
        <ArticlesCards /> 
        <Gallery />
      </main>
      <Footer />
    </div>

    //  color: select a palet and change all colors
    //TODO  menu:  menu page 
    //TODO  popup: products preview popup
    //TODO  time: products auction times logic
    //TODO  Learn: learn {use context api} for a store (gpt + jonas + sabs + youtube)
    //TODO  cart: adding product to cart logic + toast(by third-parti)

    //TODO  pages: product detalis , compare , wishlist , products, blog ,article,login
  );
    //TODO  routes: install react router dom + create all pages that need
}

export default App;

/* eslint-disable no-unused-vars */
import Header from './components/header/Header';
import HiroSilder from './components/sliders/HiroSilder';
import MobileMenu from './components/header/MobileMenu';
import ProductSlider from './components/sliders/ProductSlider';
import PricingBox from './components/pricing/PricingBox';
import ArticlesCards from './components/articlesCards/ArticlesCards';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Auctions from './components/products/Auctions';
import AllCategories from './components/products/AllCategories';

function App() {
  return (
    <div>
      <Header />
      <main className="pb-10">
        <HiroSilder /> {/* TODO-1 logic */}
        <MobileMenu />
        <Services />
        <Auctions /> 
        <AllCategories />
       
        <ProductSlider /> {/* TODO-5 */}
        <PricingBox /> {/* TODO-6  dataM */}
        <ArticlesCards /> {/* TODO-7 */}
        <Gallery />
      </main>
      <Footer />
    </div>

    //TODO  color: select a palet and change all colors
    //TODO  menu: menu auto hide + menu page + shows mobile menu + menu logic
    //TODO  popup: handle products preview popup
    //TODO  Learn: learn how to use context api for a store(gpt + jonas + sabs + youtube)
    //TODO  cart: adding product to cart logic + toast(by third-parti)

    //TODO  routes: install react router dom + create all pages that need
    //TODO  pages: product detalis , compare , wishlist , products, blog ,article,login
  );
}

export default App;

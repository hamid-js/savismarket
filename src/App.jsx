/* eslint-disable no-unused-vars */
import Header from './components/header/Header';
import Silder from './components/sliders/Silder';
import MobileMenu from './components/header/MobileMenu';
import ProductCarousel from './components/sliders/ProductCarousel';
import PricingBox from './components/pricing/PricingBox';
import ArticlesCards from './components/articlesCards/ArticlesCards';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import LaptopsSection from './components/products/LaptopsSection';
import Services from './components/services/Services';
import Auctions from './components/products/Auctions';
import AllCategories from './components/category/AllCategories';

function App() {
  return (
    <div>
      <Header />
      <main className="pb-10">
        <Silder />
        <MobileMenu />
        <Services />
        <Auctions />
        <AllCategories />
        <LaptopsSection />
        <ProductCarousel />
        <PricingBox />
        <ArticlesCards />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// src/App.jsx
import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import ProductsSection from './components/ProductsSection';
import PromoCarousel from './components/PromoCarousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <BannerCarousel />
        <ProductsSection />
        <PromoCarousel />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
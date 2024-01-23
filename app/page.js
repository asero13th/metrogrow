import Header from "./home/Header";
import Footer from "./home/Fotter";
import Hero from "./components/Hero";
import Services from "./home/Services";
import OurServices from "./home/OurServices";
import Product from "./home/Product";
import Expertise from "./home/Expertise";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OurServices />
      <Product />
      <Expertise />
      <Footer />
    </main>
  );
}

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";  
import { About } from "./components/sections/About";  
import { Knowledge } from "./components/sections/Knowledge";  
import { Contact } from "./components/sections/Contact";  
import { Projects } from "./components/sections/Projects";  

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <section className="items-center justify-center">
          <div className="grid grid-cols-1 mx-5 mt-20 gap-10 md:grid-cols-2 md:mx-8 lg:mx-20 lg:mt-50">
            <Knowledge />
            <Contact />
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </>
  );  
}

export default App

import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";  
import { About } from "./components/sections/About";  
import { Knowledge } from "./components/sections/Knowledge";  
import { Contact } from "./components/sections/Contact";  

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <section className="min-h-screen items-center justify-center">
          <div className ="grid grid-cols-2 mt-50 ml-20 mr-20 gap-10">
            <Knowledge />
            <Contact />
          </div>
        </section>
      </main>
    </>
  );  
}

export default App

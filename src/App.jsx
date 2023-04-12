import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Forms from "./components/Forms"
import MainGrid from "./components/MainGrid"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import arrow from "./assets/arrow.svg"


function App() {
  return (
    <div className="overflow-hidden">
      <div 
        className="
          hidden absolute right-14 z-[-1]
          md:block md:top-[80px]
        ">
        <img width="138" src={arrow} alt="pointing line" />
        <h3 className="text-2xl font-Tilt absolute left-[-50px] top-20">Say hi! 👋🏽</h3>
      </div>
      <Nav />
      <MainGrid>
        <Banner />
        <Projects />
        <Skills />
        <Forms /> 
        <Footer />
      </MainGrid>
    </div>
  )
}
export default App
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Forms from "./components/Forms"
import MainGrid from "./components/MainGrid"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="overflow-hidden">
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
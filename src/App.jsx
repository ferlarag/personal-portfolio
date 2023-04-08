import Banner from "./components/Banner"
import Form from "./components/Form"
import MainGrid from "./components/MainGrid"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <MainGrid>
        <Banner />
        <Projects />
        <Skills />
        <Form />
      </MainGrid>
    </div>
  )
}
export default App
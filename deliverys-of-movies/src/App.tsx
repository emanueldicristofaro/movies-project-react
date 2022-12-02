import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Information from './components/information'
import Body from './components/body';
import '../src/styles/App.css'

function App() {

  return (
    <div className = "App">
      <Header />
      <Banner />
      <Information />
      <Body />
      <Footer />
    </div>
  )
}

export default App

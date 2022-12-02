import Header from './components/header';
import Footer from './components/footer';
import ImageList from './components/imageList';
import Body from './components/body';
import '../src/styles/App.css'

function App() {

  return (
    <div className = "App">
      <Header />
      <ImageList />
      <Body />
      <Footer />
    </div>
  )
}

export default App

import { SlideGallery } from "./components/SlideGallery"
import product from './data/dataProduct'

function App() {
  return (
    <div className="App">
      <SlideGallery slides={product.images}/>
    </div>
  )
}

export default App

import { SlideGallery } from "./components/SlideGallery"
import product from './data/dataProduct'

function App() {
  return (
    <div className="App">
      <SlideGallery images={product.images}/>
    </div>
  )
}

export default App

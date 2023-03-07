import { SlideGallery } from "./components/SlideGallery"
import { SlideGalleryV2 } from "./components/SlideGalleryV2"
import product from './data/dataProduct'

function App() {
  return (
    <div className="App">
     {/*  <SlideGallery slides={product.images}/> */}
     <SlideGalleryV2  slides={product.images}/>
    </div>
  )
}

export default App

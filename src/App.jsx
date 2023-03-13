import { SlideGallery } from "./components/SlideGallery"
import { SlideGalleryV3 } from "./components/SlideGalleryV3"

import product from './data/dataProduct'

function App() {
  return (
    <div className="App">
      {/*  <SlideGallery slides={product.images}/> */}
      {/*  <SlideGalleryV2  slides={product.images}/> */}
 
      <SlideGalleryV3 slides={product.images} orientation="column" heigth="600"
      width="auto"
      />

    </div>
  )
}

export default App

import { SlideHorizontal } from "./SlideHorizontal"
import { SlideVertical } from "./SlideVertical"

export const SlideGallery = () => {
  return (
    <div className="SlideGallery">
        <SlideVertical/>
        <SlideHorizontal/>
    </div>
  )
}

import { useEffect, useRef, useState } from "react"

export const SlideGallery = ({ slides }) => {
  const myCarrusel = useRef(null)
  const firstImg = useRef(null)
  const btBack = useRef(null)
  const btNext = useRef(null)


  const [isDragStart, setIsDragStart] = useState(false)
  const [prevPageX, setPrevPageX] = useState(null)
  const [prevScrollLeft, setPrevScrollLeft] = useState(null)


  const displayButton = (element, button, limit) => {

    if (element.scrollLeft == limit) {
      button.style.display = "none"
    } else {
      button.style.display = "block"
    }
  }





  const handleMouseMove = (e) => {
    if (!isDragStart) return
    e.preventDefault()
    let positionDiff = e.clientX - prevPageX
    myCarrusel.current.classList.add("dragging")
    myCarrusel.current.scrollLeft = prevScrollLeft - positionDiff
    displayButton(myCarrusel.current, btBack.current, 0)
    let scrollWidth = myCarrusel.current.scrollWidth - myCarrusel.current.clientWidth
    displayButton(myCarrusel.current, btNext.current, scrollWidth)

  }
  const handleMouseDown = (e) => {
    setIsDragStart(true)
    setPrevPageX(e.clientX)
    setPrevScrollLeft(myCarrusel.current.scrollLeft)
  }

  const handleMouseUp = (e) => {
    setIsDragStart(false)
    myCarrusel.current.classList.remove("dragging")


  }

  const clickBackNext = (e) => {
    let firstImgWidth = firstImg.current.clientWidth;
    myCarrusel.current.scrollLeft += e.target.id == "left" ?
      -firstImgWidth : firstImgWidth

    displayButton(myCarrusel.current, btBack.current, 0)
    let scrollWidth = myCarrusel.current.scrollWidth - myCarrusel.current.clientWidth
    displayButton(myCarrusel.current, btNext.current, scrollWidth)




  }


  return (

    <div className="container">

      <button ref={btBack} id="left" onClick={clickBackNext}>{'<'} </button>
      <div ref={myCarrusel}
        className="carrusel"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {
          slides.map((img, index) => (
            index === 0 ?
              <img ref={firstImg} src={img} alt="" key={index} draggable='false'/> :
              <img src={img} alt="" key={index} draggable='false'/>
          ))
        }
      </div>
      <button ref={btNext} id="rigth" onClick={clickBackNext}>{'>'} </button>
    </div>

  )
}

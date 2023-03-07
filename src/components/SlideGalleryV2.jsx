import { useRef, useState } from 'react'
import '../style/SlideGalleryV2.scss'
export const SlideGalleryV2 = ({ slides }) => {
    const myCar = useRef(null)
    const myImg = useRef(null)

    const [isDragStart, setIsDragStart] = useState(false)
    const [posClick, setPosClick] = useState(null)
    const [prevPosX, setPrevPosX] = useState(null)
    const [timeT, setTimeT] = useState(0)
    const [posX, setPosX] = useState(0)
    const [imgCurrent, setImgCurrent] = useState(1)


    const mouseMove = (e) => {
        if (!isDragStart) return
        let posDiff = e.clientX - posClick
        setPosX(prevPosX + posDiff)


    }
    const mouseDown = (e) => {

        setPosClick(e.clientX)
        setPrevPosX(posX)
        setIsDragStart(true)
        setTimeT(0)
    }
    const mouseLeave = () =>{
        setIsDragStart(false)
        
        setPosX(prevPosX)
    }
    const mouseUp = (e) => {
        setIsDragStart(false)
        let posDiff = e.clientX - posClick
        const imgWidth = myImg.current.clientWidth
        setTimeT(0.3)
        console.log(posDiff)
        if (posDiff < 0) {
            if (!(imgCurrent === slides.length)) {
              
                setPosX(-imgCurrent * imgWidth)
                setImgCurrent(i => i + 1)
            }else{
                setPosX(prevPosX)
              
            }
        } else if (posDiff > 0) {
            if (!(imgCurrent === 0)) {
          
                setPosX(-(imgCurrent - 1) * (imgWidth))
                setImgCurrent(i => i - 1)
            }else{
                setPosX(prevPosX)
            }
           
        }
    }


    return (
        <div className="container-v2">

            
            <div className='cont-car'

                ref={myCar}
                onMouseMove={mouseMove}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                onMouseLeave={mouseLeave}
            >
                <button id="left-v2">{'<'} </button>

                <div className="carrusel-v2"  style={{
                transform: 'translate3d(' + posX + 'px,0px,0px)',
                transition: 'all ' + timeT + 's ease'
            }}>
                    {
                        slides.map((img, index) => (
                            index === 0 ?
                                <img ref={myImg} src={img} alt="" key={index} draggable='false' /> :
                                <img src={img} alt="" key={index} draggable='false' />
                        ))
                    }
                </div>
                <button id="rigth-v2">{'>'} </button>
            </div>

           
        </div>
    )
}

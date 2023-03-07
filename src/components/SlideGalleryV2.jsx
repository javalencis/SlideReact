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
    const [imgCurrent, setImgCurrent] = useState(0)


    const mouseMove = (e) => {
        if (!isDragStart) return
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {

            posDiff = e.touches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)
    }

    const mouseDown = (e) => {

        setPosClick(e.clientX)
        setPrevPosX(posX)
        setIsDragStart(true)
        setTimeT(0)



    }
    const mouseLeave = () => {


    }
    const mouseUp = (e) => {

        setIsDragStart(false)
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {

            posDiff = e.changedTouches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)
        const imgWidth = myImg.current.clientWidth
        setTimeT(0.3)
        console.log(e)
        if (posDiff < 0) {
            if (!(imgCurrent === (slides.length-1))) {

                setPosX(-(imgCurrent+1) * imgWidth)
                setImgCurrent(i => i + 1)
            } else {
                setPosX(-imgWidth * (slides.length - 1))

            }
        } else if (posDiff > 0) {
            if (!(imgCurrent === 0)) {

                setPosX(-(imgCurrent - 1) * (imgWidth))
                setImgCurrent(i => i - 1)
            } else {
                setPosX(0)
            }

        }
    }

    const handleClickLeft = () => {
        const imgWidth = myImg.current.clientWidth
        setPosX(-(imgCurrent - 1) * (imgWidth))
        setImgCurrent(x=>x>0? x-1 : 1)
    }
    const handleClickRigth = () =>{
        const imgWidth = myImg.current.clientWidth
        setPosX(-(imgCurrent+1) * imgWidth)
        setImgCurrent(x=>x< slides.length -1 ? x+1 : x)
    }

    return (
        <div className="container-v2">


            <div className='cont-car'

                ref={myCar}
                onTouchMove={mouseMove}
                onMouseMove={mouseMove}
                onPointerDown={mouseDown}
                onMouseUp={mouseUp}
                onTouchEnd={mouseUp}
            >
                <button id="left" onClick={handleClickLeft}
                    style={{display: imgCurrent > 0 ? "block" : "none"}}
                >{'<'} </button>

                <div className="carrusel-v2" style={{
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
                <button 
                    id="rigth" 
                    onClick={handleClickRigth}
                    style={{display: imgCurrent === slides.length-1 ? "none" : "block"}}
                    
                >{'>'} </button>
            </div>


        </div>
    )
}

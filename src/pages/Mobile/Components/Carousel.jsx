import React, { createElement , useRef, useState} from 'react'

const Carousel = ({children, height = 30 ,width = 32.5}) => {

    let [translate, setTranslate] = useState(0)

    let Elements = []

    let isScroll = useRef()

    for(let x = 0; x < children.length; x++){
        let element = createElement(children[x].type, {...children[x].props,
            key : x,
            style: {...children[x].props.style,
                transform: `translateX(-${translate * 100 + 0.5}%)`,
                transition : 'transform 0.6s ease-in-out',
                position : 'absolute',
                width : `${width}%`,
                left : `${x * (width + 1) + 0.5}%`,
            }
        }, null)
        Elements.push(element)
    }

  return (
    <div className={`relative w-full`} style={{height : `${height}vh`}}>
        <div className='relative w-full h-full overflow-hidden' ref={isScroll}>
            {Elements.map(ele => ele)}
        </div>

        <a className={`absolute top-[40%] cursor-pointer text-white p-4 text-2xl left-[-3%]`}  onClick={() => setTranslate(prev => prev - 3)}>&#10094;</a>
        <a className={`absolute top-[40%] cursor-pointer text-white p-4 text-2xl right-[-3%]`} onClick={() => setTranslate(prev => prev + 3)}>&#10095;</a>

    </div>
  )
}

export default Carousel
import React from 'react'
import './Demo.css'

const Demo = ({productDetail}) => {
    const {demo} = productDetail

  return (
    <div className="demo-container">
        <p>Demo</p>
        <iframe
                width="100%"
                height={115}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                title="demo del producto"
                src={demo}
            />
            <div
                style={{
                fontSize: 10,
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100
                }}
            >
            </div>
    </div>
    
  )
}

export default Demo



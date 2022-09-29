import React, { useState, useEffect } from "react"

export default function FetchImage() {
  const [images, setImages] = useState([])

  const imageEl = images.map((image) => {
    return <img src={image.urls.small} alt="Unsplash object" />
  })

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random?client_id=NKbC9F24sFibf8hlgM4zGSfsPCk0qsRAgtdtINPh3MI`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setImages(data)
      })
  }, [])

  return <div>{imageEl}</div>
}

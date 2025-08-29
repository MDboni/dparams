import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState(null) // single object রাখবো

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
      .then(res => res.json())
      .then(result => {
        setDetail(result.data[0]) // data array এর প্রথম object
      })
      .catch(err => console.error(err))
  }, [id])

  if (!detail) {
    return <p>Loading...</p>
  }

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">{detail.title}</h2>
      <img src={detail.image_url} alt={detail.title} className="mb-4 rounded" />
      <p>{detail.details}</p>
    </div>
  )
}

export default DetailsPage

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Middle = () => {
  const { id } = useParams()   
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
      .then(res => res.json())
      .then(result => {
        setData(result.data) 
      })
      .catch(err => console.error(err))
  }, [id])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">News List</h2>
      <div className="space-y-4">
        {data.length > 0 ? (
          data.map(news => (
            <div  key={news._id} className="p-4 border rounded">
              <Link to={`/detail/${news._id}`}>
                 <h3 className="text-lg font-semibold">{news.title}</h3>
                 <p>{news.details.slice(0, 100)}...</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No news found for this category.</p>
        )}
      </div>
    </div>
  )
}

export default Middle

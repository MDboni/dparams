import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const LeftBar = () => {

    const [category,setCategory] = useState([])

  

    useEffect(()=>{
         fetch('https://openapi.programming-hero.com/api/news/categories')
         .then(res=>res.json())
         .then(data=> setCategory(data.data.news_category) )      
    },[])

  return (
    <div>
        <h2>AllCetagory</h2>
        <div className=" ">
             {
          category.map((item,i)=>(
            
               <NavLink to={`/category/${item.category_id}`} key={i} >
                  <button className="btn w-full text-center">{item.category_name}</button>
                </NavLink>
            
          ))
        }
        </div>
       
    </div>
  )
}

export default LeftBar
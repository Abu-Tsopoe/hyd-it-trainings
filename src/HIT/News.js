import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/news")
    .then((res) => setNews(res.data))
    .catch((err) => console.log(err))
  }
  )
  return (
    <div className='text-bg-dark news'>
        <p className='title text-bg-danger px-3'>Latest News: </p>
        {news.map((item)=>{
            return(          
          <p className='content text-bg-dark'>{item.newsContent}</p>
       
                )
        })}
        </div>
  )
}

export default News


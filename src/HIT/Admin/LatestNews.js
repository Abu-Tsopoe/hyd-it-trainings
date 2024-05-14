import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LatestNews = () => {
  const [news, setNews] = useState([])
  const [id, setId] = useState("")
  const [newsContent, setNewsContent] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4000/news")
    .then((res) => setNews(res.data))
    .catch((err) => console.log(err))
  })
  const addNews = (e) =>{
    e.preventDefault()
    axios.post ("http://localhost:4000/news", {newsContent})
    .then(()=>{
        alert ("News Added Successfully")
        setNewsContent("")
})   
        .catch((err) => {
            console.log(err);
        })
}

  const editNews = (newsId) =>{
    axios.get(`http://localhost:4000/news/${newsId}`)
    .then((res)=>{
        setNewsContent(res.data.newsContent)
        setId(res.data.id)
       
    })
  }
  
  const updateNews = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:4000/news/${id}`, {id, newsContent})
        .then(()=>alert ("News Updated Successfully"))
        .catch((err)=>console.log(err))
  }
  const deleteNews = (newsId) => {
    axios.delete(`http://localhost:4000/news/${newsId}`)
        .then(() => alert("Deleted Successfully"))
        .catch((err) => console.log(err))
}
  return (
    <div>
      <div className='container py-5'>
      <h1 className='mb-5'>Latest News</h1>
      <button className='btn btn-info mb-3' data-bs-target="#addnews" data-bs-toggle="modal">Add News</button>
      <table className='table table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>News</th>
            <th>Update News</th>
          </tr>
        </thead>
        <tbody>
        {news.map((item) => {
          return (
            <tr>
              <td>{item.newsContent}</td>
              <td className='text-center'>
                        <button className='btn btn-primary m-2' onClick={()=>editNews(item.id)} data-bs-target="#editnews" data-bs-toggle="modal"><i className="bi bi-pencil-square"></i></button>
                        <button className='btn btn-danger' onClick={()=>deleteNews(item.id)}><i className="bi bi-trash3-fill"></i></button>
                      </td>
            </tr>

          )
        })}
        </tbody>
      </table>
      <div className='modal fade' id='editnews'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title text-center'>Update News</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                   <form onSubmit={updateNews}>
                    <input type='text' name="news" placeholder='News' className='form-control mb-3' value={newsContent} onChange={(e) => setNewsContent(e.target.value)}/>
                    <input type='submit' value="Update News" className='btn btn-danger' data-bs-dismiss="modal"/>
                   </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal fade' id='addnews'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h4 className='modal-title text-center'>Add News</h4>
                    <button className='btn-close' data-bs-dismiss="modal"></button>
                  </div>
                  <div className='modal-body'>
                   <form onSubmit={addNews}>
                    <input type='text' name="news" placeholder='News' className='form-control mb-3' value={newsContent} onChange={(e) => setNewsContent(e.target.value)}/>
                    <input type='submit' value="Add News" className='btn btn-danger' data-bs-dismiss="modal"/>
                   </form>
                  </div>
                </div>
              </div>
            </div>
    </div>
    </div>
  )
}

export default LatestNews
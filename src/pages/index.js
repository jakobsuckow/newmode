import React, { useState, useEffect } from 'react'
import '../styles/index.scss'
import InfiniteScroll from 'react-infinite-scroll-component';


export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      getPosts()
    }, [])

    const getPosts = async() => {
      const url = 'https://newmode.netlify.com/.netlify/functions/getAirtable'
      const response = await fetch(url)
      const data = await response.json();
      setPosts(data.records)
    }
    return (
        <>
        <InfiniteScroll
        dataLength={posts.length}
        next={() => getPosts()}
        hasMore={true}
        loader={
          <p>Loading</p>
        }
        >
         {posts.map(post => (
           <div className="post">
             <div className="text">
             <h1>{post.fields.Name}</h1>
            <p>{post.fields.Notes}</p>
            </div>
            <img src={post.fields.Attachments[0].url} alt=""/>
           </div>
         ))}

        </InfiniteScroll>
        <h1>Footer</h1>
        </>
    )
}


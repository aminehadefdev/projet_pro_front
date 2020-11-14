import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Presentation from './Presentation'
import Temoignage from './Temoignage'

function MainHome(){
  const [videos, setVideos] = useState([])
  function getVideos(){
    var config = {
        method: 'get',
        url: 'http://localhost:8000/videos',
    };
    axios(config)
    .then(function (response) {
        setVideos(response.data.videos)
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  useEffect(()=>{
    getVideos()
  }, [])

  return(
    <main className="container-fluid main">
      <Presentation />
      <div className="container-tems">
        {videos.map(video=>(
          <Temoignage key={video.id} video={video} />
        ))}
      </div>
    </main>
  )
}

export default MainHome;
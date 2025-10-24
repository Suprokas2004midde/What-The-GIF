/*   As the custom hooks is used for only as a function and don't render any kind of 
     xml part we can write the extension as ".js" rather ".jsx"... */

import React from 'react'
import { useState,useEffect } from 'react';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY //This is mandatory for writing .end files in vite file system...
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif, setgif] = useState();
    const [loading, setloading] = useState(true);
        
        async function fetchgif(tag){
          setloading(true);
          const output = await fetch(tag ? `${url}&tag=${tag}` : url);
          const final = await output.json();
          console.log(final);
          const img = final.data.images.downsized_large.url;
          console.log(img);
          setgif(img)
          setloading(false);
        } 
    
        useEffect(()=>{
          fetchgif(tag);
        },[])
    

  return {gif,loading,fetchgif}
}

export default useGif

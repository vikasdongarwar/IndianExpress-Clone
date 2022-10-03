import React from "react";
import MapingNews from "./MapNews";
import "./News.css"

const NewsBox1=()=>{
    const [data,setData]=React.useState(false);

    const getData=()=>{  
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f1c86b397f6c47d0ab27f4bcae30490b ')
            .then((response) => response.json())
            .then((res)=> setData(res.articles))
            .catch((err) => console.log("ERROR:----",err));     
    }

    React.useEffect(()=>{
        getData()
    },[])

    console.log(data)
    console.log(typeof(data))

    return(
        <>
        <img style={{width:"95%", margin:"auto"}} src="https://tpc.googlesyndication.com/simgad/6920534090703922916" alt="add" />
        <div className="NB1">
            {data ? <MapingNews data={data}/> :console.log("not found") }
        </div>
        </>
    )
}

export default NewsBox1;
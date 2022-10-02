import React from "react";
import MapingNews from "./MapNews";
import "./News.css"

const NewsBox1=()=>{
    const [data,setData]=React.useState([]);

    const getData=()=>{  
        fetch('https://newsdata.io/api/1/news?apikey=pub_11827b099239bfb766b9c11aa0d5944d70c7f&q=politics&country=in&language=en&category=politics ')
            .then((response) => response.json())
            .then((res)=> setData(res.results))
            .catch((err) => console.log("ERROR:----",err));     
    }

    React.useEffect(()=>{
        // getData()
    },[])

    console.log(data)

    return(
        <>
        <img style={{width:"95%", margin:"auto"}} src="https://tpc.googlesyndication.com/simgad/6920534090703922916" alt="add" />
        <div className="NB1">
            {/* <MapingNews data={data}/> */}
        </div>
        </>
    )
}

export default NewsBox1;
import React, { useEffect } from "react";
import "./News.css"


const NewsBox2=()=>{
    const [topData,setTopData]=React.useState([]);
    const [latestNews,setLatestNews]=React.useState([]);
    

    const data=["What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him",
                "What the new Monetary Policy Committee rate hike indicates",
                "The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                "Swachh Bharat 2.0: Moving forward together",
                "Why MS Dhoni doesn't carry his phone and what we can learn from him"
                ]

    const getData=(cont)=>{
       return ( fetch(`https://newsapi.org/v2/top-headlines?country=${cont}&apiKey=f1c86b397f6c47d0ab27f4bcae30490b`)
       .then((res)=>res.json()))
        .catch((err)=>console.log(err))
    }

   
    useEffect(()=>{
        getData("in").then((res)=>setTopData(res.articles))
        getData("us").then((res)=>setLatestNews(res.articles))
    },[])



    return (
        <>
        <div style={{width:"100%", border:"2px solid"}}></div>
         <div className="newsbox2" >
            <div>
                <b style={{fontSize:"20px"}}>TOP NEWS</b>
                {topData?.map((ele)=>(
                    <div style={{border:"1px dotted", display:"flex", gap:"10px",width:"100%",padding:"10px"}}>
                        <b style={{width:"70%", fontSize:"14px"}}>{ele.title}</b>
                        <div style={{width:"35%"}}>
                            <img  src={ele.urlToImage} alt="err"/>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{backgroundColor:"#f2f2f2"}}>
                <b style={{fontSize:"20px"}}>LATEST NEWS</b>
                {latestNews?.map((ele)=>(
                    <div style={{border:"1px dotted", display:"flex", gap:"10px",width:"100%",padding:"10px"}}>
                        <b style={{width:"90%", fontSize:"14px"}}>{ele.title}</b>
                    </div>
                ))}
            </div>
            <div>
                <b style={{fontSize:"20px"}}>THE EXPRESS VIEW</b>
                    {data?.map((ele)=>(
                        <div style={{border:"1px dotted", display:"flex", gap:"10px",width:"100%",padding:"10px"}}>
                            <b style={{width:"90%", fontSize:"14px"}}>{ele}</b>
                        </div>
                    ))}
                </div>
         </div>
        </>
    )
}

export default NewsBox2;
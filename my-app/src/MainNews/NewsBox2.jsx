import React, { useEffect } from "react";
import "./News.css"


const NewsBox2=()=>{
    const [topData,setTopData]=React.useState([]);
    const [latestNews,setLatestNews]=React.useState([]);
    

    const data=[{title:"What the new Monetary Policy Committee rate hike indicates",
                 image:"https://images.indianexpress.com/2019/08/sugatha.jpg?w=210"},
                {title:"The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                 image:"https://images.indianexpress.com/2015/08/untitled-5.jpg?w=210"},
                {title:"Swachh Bharat 2.0: Moving forward together",
                 image:"https://images.indianexpress.com/2020/04/sc-1.jpg?w=210"},
                {title:"Why MS Dhoni doesn't carry his phone and what we can learn from him",
                image:"https://images.indianexpress.com/2014/08/faizan-mustafa.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                image:"https://images.indianexpress.com/2022/05/deepika-oped.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                 image:"https://images.indianexpress.com/2019/08/sugatha.jpg?w=210"},
                {title:"The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                 image:"https://images.indianexpress.com/2015/08/untitled-5.jpg?w=210"},
                {title:"Swachh Bharat 2.0: Moving forward together",
                 image:"https://images.indianexpress.com/2020/04/sc-1.jpg?w=210"},
                {title:"Why MS Dhoni doesn't carry his phone and what we can learn from him",
                image:"https://images.indianexpress.com/2014/08/faizan-mustafa.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                image:"https://images.indianexpress.com/2022/05/deepika-oped.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                 image:"https://images.indianexpress.com/2019/08/sugatha.jpg?w=210"},
                {title:"The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                 image:"https://images.indianexpress.com/2015/08/untitled-5.jpg?w=210"},
                {title:"Swachh Bharat 2.0: Moving forward together",
                 image:"https://images.indianexpress.com/2020/04/sc-1.jpg?w=210"},
                {title:"Why MS Dhoni doesn't carry his phone and what we can learn from him",
                image:"https://images.indianexpress.com/2014/08/faizan-mustafa.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                image:"https://images.indianexpress.com/2022/05/deepika-oped.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                 image:"https://images.indianexpress.com/2019/08/sugatha.jpg?w=210"},
                {title:"The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                 image:"https://images.indianexpress.com/2015/08/untitled-5.jpg?w=210"},
                {title:"Swachh Bharat 2.0: Moving forward together",
                 image:"https://images.indianexpress.com/2020/04/sc-1.jpg?w=210"},
                {title:"Why MS Dhoni doesn't carry his phone and what we can learn from him",
                image:"https://images.indianexpress.com/2014/08/faizan-mustafa.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                image:"https://images.indianexpress.com/2022/05/deepika-oped.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                 image:"https://images.indianexpress.com/2019/08/sugatha.jpg?w=210"},
                {title:"The RBI's playbook: Further interest rate hikes are expected, albeit more calibrated",
                 image:"https://images.indianexpress.com/2015/08/untitled-5.jpg?w=210"},
                {title:"Swachh Bharat 2.0: Moving forward together",
                 image:"https://images.indianexpress.com/2020/04/sc-1.jpg?w=210"},
                {title:"Why MS Dhoni doesn't carry his phone and what we can learn from him",
                image:"https://images.indianexpress.com/2014/08/faizan-mustafa.jpg?w=210"},
                {title:"What the new Monetary Policy Committee rate hike indicates",
                image:"https://images.indianexpress.com/2022/05/deepika-oped.jpg?w=210"},
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
                <b>OPINION</b>
                    {data?.map((ele)=>(
                        <div style={{border:"1px dotted", display:"flex", gap:"10px",width:"100%",padding:"10px"}}>
                            <b style={{width:"90%", fontSize:"14px"}}>{ele.title}</b>
                            <img style={{width:"60px",height:"60px",borderRadius:"100%"}} src={ele.image} alt="Image" />
                        </div>
                    ))}
                </div>
         </div>
        </>
    )
}

export default NewsBox2;
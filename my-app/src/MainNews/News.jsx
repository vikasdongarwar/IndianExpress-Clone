import "./News.css"
import NewsBox1 from "./Newsbox1";
import NewsBox2 from "./NewsBox2";
import SlideNews from "./slideNews";

const News=()=>{
    return (
        <>
        <div className="mainbox">
            <img style={{height:"700px"}} src="https://tpc.googlesyndication.com/simgad/2008244019372313769" alt="advertise" />
            <div className="mainNewsBox">
                <NewsBox1/>
                <NewsBox2/>
                <SlideNews/>
            </div>
            <img style={{height:"700px"}} src="https://tpc.googlesyndication.com/simgad/786124683015229389" alt="advertise" />
        </div>
        </>
    )
}

export default News;
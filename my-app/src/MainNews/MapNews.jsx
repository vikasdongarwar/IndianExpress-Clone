import "./News.css";

const MapingNews=({data})=>{
    console.log("data:-",data[0].urlToImage)
    return (
        <>
        <div className="mapNews1">
            <img style={{width:"400px"}} src={data[0].urlToImage} alt="err" />
            <div style={{display:"flex", flexDirection:"column"}}>
                <b>{data[0].title}</b>
                <b>{data[0].description}</b>
            </div>
        </div>
        <hr />
        <div className="mapNews2">
            <p>{data[1].title}</p>
            <p>{data[2].title}</p>
            <p>{data[3].title}</p>
        </div>
        </>
    )
}

export default MapingNews;
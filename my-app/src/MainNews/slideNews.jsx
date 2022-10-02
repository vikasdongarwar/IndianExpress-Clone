import { AspectRatio } from '@chakra-ui/react'


const SlideNews=()=>{

      return (    
        <div >
            <div>
                <AspectRatio maxW='560px' height="400px" ratio={1}>
                    <iframe
                    title='addvertise'
                    src='https://cdn.taboola.com/libtrc/static/video/v1656508110/lypx2lldirmedvamslh2.mp4'
                    allowFullScreen
                    />
                </AspectRatio>
            </div>
            <b style={{display:"flex",fontFamily:"monospace",fontSize:"20px"}}>Get Certified from IIT Madras CCE & Intellipaat</b>
            <b style={{display:"flex",fontSize:"13px",  color:"lightgrey"}}>Intellipaat | sponsored</b>
            <hr style={{marginBottom:"40px",}}/>
            <img style={{border:"1px dotted ", width:"300px"}} src="https://images.indianexpress.com/2022/10/410-cartoon.jpg" alt="Add" />
            <hr style={{margin:"20px 0px"}}/>
        </div>  
      )
}

export default SlideNews;
import { CalendarIcon } from "@chakra-ui/icons";
import { Button, Stack } from '@chakra-ui/react';
import {NavMenu,NDate} from "./menu";
import "./Navbar.css"

const Navbar=()=>{
    return (
        <>
        <hr />
        <div className="navbar">
            <div className="leftnavmenu">
                <NavMenu/>
                <NDate/>
                <b style={{display:"flex"}}>EPAPER | TODAY'S PAPER</b>
            </div>
            <div>
                <div>ENGLISH | தமிழ் | বাংলা | മലയാളം | हिंदी | मराठी</div>
                <img style={{margin:"35px 0px -30px 0px"}} src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="Inian express logo (https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg)" /><br />
                <b >JOURNALISM OF COURAGE</b>
            </div>
            <div>
                <div style={{display:"flex", flexDirection:"row-reverse"}}>
                    <div style={{display:"flex",gap:"10px",marginTop:"10px"}}>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                    <button style={{padding:"5px 10px" ,backgroundColor:"#efefef",marginRight:"10px"}}>Newsletter <CalendarIcon w={4} h={5} /></button>
                </div>
                <img style={{margin:"10px 220px"}}  src="https://tpc.googlesyndication.com/simgad/12692791964622314734" alt="addvertise" />
            </div>
        </div>
        <hr />
        <div  style={{display:"flex",gap:"30px",padding:"5px 20px"}}>
           <div className="optionsStrip" style={{display:"flex",justifyContent:"space-around",gap:"15px",fontSize:"14px"}}>
            <p>Home</p>
            <p>Explained</p>
            <p>Political Pulse</p>
            <p>India</p>
            <p>Cities</p>
            <p>Opinion</p>
            <p>Entertainment</p>
            <p>Lifestyle</p>    
            <p>Technology</p>
            <p>Videos</p>
            <p>Sports</p>
            <p>Audio</p>
            <p>Education</p>
            <p>Premium</p>
            <p>Investigations</p>
           </div>
           <div>
           <Stack spacing={4} direction='row' align='center' ml="20px">
                <Button bg="#ffb900" size='sm'>
                    SUBSCRIBE
                </Button>              
                <Button bg='#4b5666' color="white" size='sm'>
                    Sign in
                </Button>              
           </Stack>
           </div>
        </div>
        <hr style={{marginBottom:"2px"}}/>
        <hr />
        <div >
            <Stack className="trending"  display="-ms-flexbox" >
                <Button color="red" bgColor="transparent" >
                    TRENDING
                </Button>
                <Button >
                    Crossword & Sudoku
                </Button>
                <Button >
                    UPSC special
                </Button>
                <Button >
                    Everyday Explainers
                </Button>
                <Button >
                    Health Specials
                </Button>
                <Button>
                    Acdemic Councelling
                </Button>
                <Button>
                    Follow Authers
                </Button>
                <Button >
                    Crickets
                </Button>
            </Stack>
        </div>
        <hr />
        </>
    )
}

export default Navbar;
import { Grid, GridItem, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AddIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import React from "react";

const NavMenu=()=>{ 
    return (
        <div style={{display:"flex",marginBottom:"20px",gap:"10px"}}>
           <Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon w="50px"/> }
    variant='outline'
  />
  <div style={{border:"none", backgroundColor:"lightgray",width:"45px", alignItems:"center", borderRadius:"5px",cursor:"pointer"}}>
   <SearchIcon/>
  </div>
  <MenuList bg="#efefef" borderRadius="none" w="1280px">
        <hr style={{marginBottom:"3px"}}/>
        <hr />
        <Grid templateColumns='repeat(6, 1fr)' gap={4} >
            <GridItem w='100%' h='10'  ><b>e-paper</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Opinion</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Sports</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Health</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Eye</b></GridItem>
            <GridItem w='100%' h='10'  ><b>| Photos</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Premium</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Political Pulse</b></GridItem>
            <GridItem w='100%' h='10'  ><b>World</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Lifestyle</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Trending</b></GridItem>
            <GridItem w='100%' h='10'  ><b>| Videos</b></GridItem>
            <GridItem w='100%' h='10'  ><b>India</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Explained</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Business</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Technology</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Investigations</b></GridItem>
            <GridItem w='100%' h='10'  ><b>| Audio</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Cities</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Science</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Entertainment</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Education</b></GridItem>
            <GridItem w='100%' h='10'  ><b>Newsletters</b></GridItem>
            <GridItem w='100%' h='10'  ><b>| Web Stories</b></GridItem>       
        </Grid>
        <hr style={{marginBottom:"2px"}}/>
        <hr />
  </MenuList>
</Menu>

        </div>
    )
}

const NDate=()=>{
    const [date,setDate]=React.useState({day:"",month:"",dat:"",year:""})

   const getDate=()=>{
    const d=new Date();
    const wd = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const mth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dy=wd[d.getUTCDay()];
    setDate(previousState => {
        return { ...previousState, day:dy }
      })
    var mnth=mth[d.getUTCMonth()];
    setDate(previousState => {
        return { ...previousState, month:mnth }
      })
    let date = d.getUTCDate();
    setDate(previousState => {
        return { ...previousState, dat:date }
      })
    let yr = d.getUTCFullYear();
    setDate(previousState => {
        return { ...previousState, year:yr }
      })
   }

   React.useEffect(()=>{
    getDate()
   },[])

    return(
        <>
            <div style={{display:"flex"}}>
                <div>{date.day}, </div>
                <div>{date.month}</div>
                <div>{date.dat}, </div>
                <div>{date.year}</div>
            </div>
        </>
    )
}

export {NDate,NavMenu};
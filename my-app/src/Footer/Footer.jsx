import { StarIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/layout";
import "./Footer.css"

const Footer=()=>{
    return (
        <div className="footer">

            <Grid className="grid" w="80%" templateColumns='repeat(4, 1fr)' gap={4}>
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Explained News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Political Pulse</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Latest Opinion</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Mumbai News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Delhi News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Pune News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Banglore News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Bollywood News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Health News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>India News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Sports News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Lifestyle News</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Jobs</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Mobile & Tabs</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Tech Reviews</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Gadgets</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Mobile & Tabs</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Food & Wine</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Travel</GridItem>              
                <GridItem w='100%' h='10' ><StarIcon h={3} mr={2} color="#718096"/>Fitness</GridItem>              
                           
            </Grid>
        </div>
    )
}

export default Footer;
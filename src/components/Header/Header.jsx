import React from "react";
import { Image, Box} from "@chakra-ui/react";
import logo from '../../assets/img/logo.svg';

const Header = () => {

    return (
        <Box
            display='flex'
            alignItems='center'
            
            gap={10}
            px={[5,10]}
            py={['5px','5px','5px','20px']}
            as='header'
            h={['12.5dvh','20dvh','22dvh','15dvh','120px']}
            bg='#1a1a1a'
            w='100vw'
        >
            <Image
                className="App-logo"
                src={logo}
                alt='contador'
                width={['160px','3.8em','160px','20em']}
                 />
                 
            
        </Box>
    )
}

export default Header;
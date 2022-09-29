import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AddIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, CloseIcon } from '@chakra-ui/icons'

const NavMenu=()=>{
    const d=new Date();
    const wd = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day=wd[d.getUTCDay()];
    var month=wd[d.getUTC]
    let text = d.toDateString();
    return (
        <>
           <Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon></HamburgerIcon> }
    variant='outline'
  />
  <MenuList bg="gray" borderRadius="none">
    <MenuItem >
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<CloseIcon />} command='⌘O'>
      Open File
    </MenuItem>
  </MenuList>
</Menu>
<div>{day}</div>

        </>
    )
}

export default NavMenu;
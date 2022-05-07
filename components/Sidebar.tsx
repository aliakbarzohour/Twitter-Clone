import React from 'react'
// Import Icons
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/outline'
// Import Sidebar Row component
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <>
    {/* Twitter Logo */}
    <img className='h-10 w-10' src="https://links.papareact.com/drq" alt="Twitter Logo" />
    
    <SidebarRow Icon={HomeIcon} title="Home"/>
    <SidebarRow Icon={HashtagIcon} title="Explore"/>
    <SidebarRow Icon={BellIcon} title="Notifications"/>
    <SidebarRow Icon={MailIcon} title="Massages"/>
    <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
    <SidebarRow Icon={CollectionIcon} title="Lists"/>
    
    </>
  )
}

export default Sidebar
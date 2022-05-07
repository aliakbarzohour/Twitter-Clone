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
  HomeIcon,
} from '@heroicons/react/outline'
// Import Sidebar Row component
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='flex flex-col'>
      {/* Twitter Logo */}
      <img
        className="h-10 w-10"
        src="https://links.papareact.com/drq"
        alt="Twitter Logo"
      />
      {/* icon's and title */}
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" /> 
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Massages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar

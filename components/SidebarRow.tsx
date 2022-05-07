import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6 " />
      <p className='group-hover:text-blue-400'>{title}</p>
    </div>
  )
}

export default SidebarRow

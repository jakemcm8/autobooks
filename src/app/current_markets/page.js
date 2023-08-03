import Link from 'next/link'
import ProfileDropdown from '../components/profileDropdown.jsx'
import MarketsBox from '../components/marketsBox.jsx'

export default function Page () {
  return (
    <div className='bg-[#FFFFEA] fixed flex bg-cover overflow-auto h-full w-full'>
      <div className="">
        <Link href=".."className="absolute text-5xl font-extrabold text-[#FF5E5B] justify-start pl-5 pt-3">Betty</Link>
      </div>
      <MarketsBox />
      <ProfileDropdown />


    </div>

  )
}
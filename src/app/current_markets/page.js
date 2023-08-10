import Link from 'next/link'
import ProfileDropdown from '../components/profileDropdown.jsx'
import MarketsBox from '../components/marketsBox.jsx'

export default function Page () {
  return (
    <div className='bg-[#FFFFEA] justify-center items-center flex min-h-screen w-full'>
      <div className="absolute text-5xl font-extrabold text-[#FF5E5B] left-5 top-3">
        <Link href="..">Betty</Link>
      </div>
      <div className="absolute">
        <MarketsBox />
      </div>
      <ProfileDropdown />
    </div>

  )
}
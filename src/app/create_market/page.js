import Link from 'next/link'
import ProfileDropdown from '../components/profileDropdown.jsx'

export default function Page () {
  return (
    <div className='bg-[#FFFFEA] fixed bg-cover overflow-auto h-full w-full'>
      <Link href=".."className="text-5xl font-extrabold text-[#FF5E5B] flex justify-start pl-5 pt-3">Betty</Link>
      <ProfileDropdown />
      <h1>Want to place a bet?</h1>
    </div>
  )
}
import Link from 'next/link'
import ProfileDropdown from './components/profileDropdown.jsx'

export default function Home() {
  return (
  <div className='bg-[#FFFFEA] fixed bg-cover overflow-auto h-full w-full'>
    <h1 className="text-5xl font-extrabold text-[#FF5E5B] flex justify-start pl-5 pt-3">Betty</h1>
    <div>
      <ProfileDropdown />
    </div>
    <div className="w-full mt-24 fixed flex justify-center space-x-4 font-mono">
      <h2>Welcome!</h2>
      <div className="w-full mt-24 fixed flex justify-center space-x-4">
        <Link href="/current_markets" className="ring-[#00CECB]  bg-[#FFED66] hover:bg-[#fce958] hover:ring-[3px] text-[#FF5E5B] ring-2 rounded p-2">View Markets</Link>
        <Link href="/create_market" className="ring-[#00CECB] bg-[#FFED66] hover:bg-[#fce958] hover:ring-[3px] text-[#FF5E5B] ring-2 rounded p-2">Create Market</Link>
      </div>
    </div>

  </div>
  )
}

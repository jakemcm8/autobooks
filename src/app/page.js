import Link from 'next/link'

export default function Home() {
  return (
  <div className='bg-[#FFFFEA] fixed bg-cover overflow-auto h-full w-full font-mono'>
    <h1 className="text-5xl font-extrabold text-[#FF5E5B] flex justify-start pl-5 pt-3">Betty</h1>
    <div className="w-full mt-24 fixed flex justify-center space-x-4">
      <h2>Welcome!</h2>
      <div className="w-full mt-24 fixed flex justify-center space-x-4">
        <Link href="/current_markets" className="border-[#00CECB] bg-[#FFED66] text-[#FF5E5B] border-2 rounded p-2">View Markets</Link>
        <Link href="/create_market" className="border-[#00CECB] bg-[#FFED66] text-[#FF5E5B] border-2 rounded p-2">Create Market</Link>
      </div>
    </div>

  </div>
  )
}

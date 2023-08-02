import Link from 'next/link'
import ProfileDropdown from '../components/profileDropdown.jsx'

export default function Page () {
  return (
    <div className='bg-[#FFFFEA] fixed flex bg-cover overflow-auto h-full w-full'>
      <div className="">
        <Link href=".."className="absolute text-5xl font-extrabold text-[#FF5E5B] justify-start pl-5 pt-3">Betty</Link>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="py-12">Markets</h1>
        <div className="bg-[#FFED66] w-[42rem] h-[36rem] rounded-lg border-2 border-[#00CECB]">
          <div>
            <form >
              <input className="border-2 border-[#00CECB] focus:bg-[ff5e5b]"></input>
            </form>
          </div>
        </div>
      </div>
      <ProfileDropdown />


    </div>

  )
}
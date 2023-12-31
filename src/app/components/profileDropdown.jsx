import Link from 'next/link'
import ProfilePic from './profilePic.jsx'

export default function ProfileDropdown () {
  return (
    <div className="h-full py-1 px-2 mr-8 w-full">
      <div className="group absolute right-0 top-0">
        <div className="relative z-10 mt-12 mr-12">
          <Link href="/portfolio" className="pr-6 pl-2 py-1 text-left bg-[#FFED66] text-[#FF5E5B] rounded-tl-lg rounded-b-lg opacity-80 text-xl border-2 border-[#00CECB]">0x3ae...8c9</Link>
        </div>
          <div className="absolute right-0 top-0 mt-4 mr-4 z-30">
            <ProfilePic />
          </div>
          <div className="hidden group-hover:block bg-[#FFED66] border-2 border-[#00CECB] p-8 rounded-tl-lg rounded-b-lg fixed w-64 right-0 top-0 mt-[44px] mr-[32px] z-5">
            <div className="relative mt-4 grid gap-2">
              <div className="">
                <Link href="/portfolio" className="pr-24 pl-2 hover:border-2 hover:border-[#00CECB] rounded-lg py-1 hover:text-[#00CECB] text-[#FF5E5B]">Profile</Link>
              </div>
              <div>
                <Link href="/" className="pr-24 pl-2 hover:border-2 hover:border-[#00CECB] hover:text-[#00CECB] text-[#FF5E5B] rounded-lg py-1">Settings</Link>
              </div>
              <div>
                <Link href="/" className="pr-24 pl-2 hover:border-2 hover:border-[#00CECB] hover:text-[#00CECB] text-[#FF5E5B] rounded-lg py-1">Logout</Link>
              </div>
            </div>
          </div>
        </div>

    </div>

  )
}
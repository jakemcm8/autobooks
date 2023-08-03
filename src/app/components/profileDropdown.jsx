import Link from 'next/link'
import ProfilePic from './profilePic.jsx'

export default function ProfileDropdown () {
  return (
    <div className="fixed text-right h-full py-1 px-2 mt-4 mr-8 w-full">
      <div className="group top-0">
        <div className="right-0 z-10">
          <Link href="/portfolio" className="bg-[#FFED66] text-[#FF5E5B] rounded-tl-lg rounded-b-lg opacity-80 right-0 text-xl border-2 border-[#00CECB]">0x3ae...8c9</Link>
        </div>
          <div className="">
            <ProfilePic />
          </div>
          <div className="hidden group-hover:block bg-[#FFED66] border-2 border-[#00CECB] p-8 rounded-tl-lg rounded-b-lg fixed w-64 right-0 top-0 mt-[17px] mr-[32px] z-5">
            <div className="relative mt-4 grid gap-2">
              <div>
                <Link href="/portfolio" className="hover:border-2 hover:border-[#00CECB] rounded-lg py-1 hover:text-[#00CECB] text-[#FF5E5B]">Profile</Link>
              </div>
              <div>
                <Link href="/" className="hover:border-2 hover:border-[#00CECB] hover:text-[#00CECB] text-[#FF5E5B] rounded-lg py-1">Settings</Link>
              </div>
            </div>
          </div>
        </div>

    </div>

  )
}
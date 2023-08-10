import Image from 'next/image'

export default function ProfilePic () {
  return(
    // <div className="relative">
      <div className="">
        <Image
        src="/../public/milady_4070.jpeg"
        alt=""
        height="55"
        width="55"
        className="rounded-full border-2 border-[#00CECB]"
        />
      {/* </div> */}
    </div>

  )
}
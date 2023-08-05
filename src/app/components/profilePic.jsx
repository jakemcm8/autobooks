import Image from 'next/image'

export default function ProfilePic () {
  return(
    // <div className="relative">
      <div className="">
        <Image
        src="/../public/milady_4070.jpeg"
        alt=""
        height="50"
        width="50"
        className="rounded-full"
        />
      {/* </div> */}
    </div>

  )
}
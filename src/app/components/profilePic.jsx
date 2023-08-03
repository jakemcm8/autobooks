import Image from 'next/image'

export default function ProfilePic () {
  return(
    // <div className="relative">
      <div className="relative z-0">
        <Image
        src="/../public/milady_4070.jpeg"
        alt=""
        layout="fill"
        />
      {/* </div> */}
    </div>

  )
}
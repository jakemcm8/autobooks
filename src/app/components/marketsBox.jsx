'use client'

import SearchBar from "./searchBar.jsx"

export default function MarketsBox () {
  return (
    <div className=" h-full w-full  flex flex-col items-center justify-center">
        <h1 className="py-12">Markets</h1>
        <div className="bg-[#FFED66] w-[42rem] h-[36rem] rounded-lg border-2 border-[#00CECB]">
          <div>
            <SearchBar />
          </div>
        </div>
    </div>
  )
}
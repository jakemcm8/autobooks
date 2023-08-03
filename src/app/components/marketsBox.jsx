export default function MarketsBox () {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
        <h1 className="py-12">Markets</h1>
        <div className="bg-[#FFED66] w-[42rem] h-[36rem] rounded-lg border-2 border-[#00CECB]">
          <div>
            <form className="focus:border-[#00CECB]">
              <input className="border-2 focus:border-[#00CECB] border-[#00CECB] outline-none"
                     value="Search...">
              </input>
            </form>
          </div>
        </div>
    </div>
  )
}
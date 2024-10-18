"use client"

export default function Jobs() {
    return (
        <div className="result">
            <h1 className="text-center mt-[2vw] font-extrabold text-[2.2vw] text-NavBGColor">Grand Entrance Exam Result</h1>

            <div className="generateResult flex flex-col items-center justify-center my-[12vh] shadow-gray-300 shadow-sm w-[50%] py-[3vw] mx-auto">
                <div className="card">
                    <div className="firstInput flex flex-col">
                        <label htmlFor="" className="text-[1.5vw] text-labelColor mt-[1vw]">Registration Number *</label>
                        <input type="number" className="w-[45vw] p-[0.8vw]  bg-gray-100 outline-blue-500 outline-1 text-[1.5vw] border-gray-600 border-[1px] rounded-md" placeholder="Registration Number" />
                    </div>
                    <div className="secondInput flex flex-col">
                        <label htmlFor="" className="text-[1.5vw] text-labelColor mt-[1vw]">CNIC or B-Form number *</label>
                        <input type="number" className="w-[45vw] p-[0.8vw] bg-gray-100 outline-blue-500 outline-1  text-[1.5vw] border-gray-600 border-[1px] rounded-md" placeholder="CNIC or B-Form number *" />
                    </div>
                    <div className="button flex items-center justify-center">
                        <button className="bg-NavBGColor hover:translate-y-1 transition-all ease-linear  py-[1vw] px-[3vw] uppercase my-[2vw] mx-auto text-white font-extrabold">Get Result</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
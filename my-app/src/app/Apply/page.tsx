"use client"
import Head from "next/head"

export default function Apply() {
    return (

        <div className="Apply overflow-x-hidden">
            <div className="applyBox flex flex-col items-center justify-center shadow-md shadow-slate-400 my-[30px] text-center w-[50vw] m-auto h-[60vh]">
                <h1 className="text-[2.5vw] leading-10 text-NavBGColor font-extralight">Before continuing to the application <br /> please subscribe on these social <br /> media platforms.</h1>
                <p><i className='text-[2.5vw] mt-[2vw] text-NavBGColor bx bxl-facebook-circle'></i></p>
                <div className="continue mt-[2.5vw]">
                    <button className="bg-buttonColor hover:translate-y-1 transition-all ease-linear  py-[1vw] px-[4vw] opacity-60 text-white font-extrabold">CONTINUE</button>
                    <p className="mt-[1vw]">Already applied?<span className="ml-[0.5vw] text-mainH2Color underline">Get admit card</span></p>
                </div>
            </div>
            <div className="ourSocialMedias flex items-center justify-between mb-[5vw] mt-[2vw] py-[0] px-60 ml-[2vw]">
                <div className="social flex items-center justify-evenly">
                    <p className="rounded-full border-NavBGColor border-2 px-[0.8vw] py-[0.3vw]">1</p>
                    <p className="ml-[0.5vw] text-NavBGColor">Facebook</p>
                    <hr className="w-[3vw] ml-[1vw]" />
                </div>
                <div className="social flex items-center justify-evenly">
                    <p className="rounded-full border-NavBGColor opacity-50 border-2 px-[0.8vw] py-[0.3vw]">2</p>
                    <p className="ml-[0.5vw] text-NavBGColor">Youtube</p>
                    <hr className="w-[3vw] ml-[1vw]" />
                </div>
                <div className="social flex items-center justify-evenly">
                    <p className="rounded-full border-NavBGColor opacity-50 border-2 px-[0.8vw] py-[0.3vw]">3</p>
                    <p className="ml-[0.5vw] text-NavBGColor">Twitter</p>
                    <hr className="w-[3vw] ml-[1vw]" />
                </div>
                <div className="social flex items-center justify-evenly">
                    <p className="rounded-full border-NavBGColor opacity-50 border-2 px-[0.8vw] py-[0.3vw]">4</p>
                    <p className="ml-[0.5vw] text-NavBGColor">Instagram</p>
                    <hr className="w-[3vw] ml-[1vw]" />
                </div>
                <div className="social flex items-center justify-evenly">
                    <p className="rounded-full border-NavBGColor opacity-50 border-2 px-[0.8vw] py-[0.3vw]">5</p>
                    <p className="ml-[0.5vw] text-NavBGColor">Apply</p>
                </div>
            </div>

        </div>
    )
}
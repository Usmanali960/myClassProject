"use client"
import Link from "next/link"
import ImageSlider from "./components/imageSlider"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="main  lg:flex-row flex-col flex items-center justify-between p-[2vw]">
        <div className="left mt-[-50px] h-[50%] w-[50%]">
          <div className="inner">
            <h1 className="text-NavBGColor font-extrabold text-[4.6vw]">Governor Sindh</h1>
            <h3 className="text-[3vw] mt-[-15px] text-mainH3Color -tracking-[-3px]">Kamran Khan Tessori</h3>
            <h2 className="text-mainH2Color text-[3vw] leading-[50px] mt-[10px] font-extrabold">Certified Cloud <br />
              Applied Generative AI <br />
              Engineer (GenEng)</h2>
            <h3 className="text-NavBGColor mt-[20px] text-[1.7vw] font-extrabold">Earn up to $5,000 / month</h3>
            <h4 className="text-NavBGColor mt-[20px] text-[1.7vw] font-extrabold">Now admissions are open in <br />Hyderabad

            </h4>
            <div className="apply flex items-center justify-between w-[30vw] mt-[7vh] ">
              <div className="applyBtn">
                <button className="bg-NavBGColor px-[40px] py-[15px] rounded-[10px] font-bold  text-white">Apply now</button>
              </div>
              <div className="students text-center">
                <h2 className="text-NavBGColor text-[2vw] font-extrabold">562,143</h2>
                <h5 className="text-NavBGColor">Accepted Applications</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="right h-[50%] w-[50%]">
          <div className="governorImg">
            <img className="h-[700px]  object-cover ml-[12vw]" src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png" alt="" />
          </div>
        </div>
      </section>

      <section className="mainSection">
        <h1 className="text-2xl md:text-4xl font-bold text-NavBGColor mx-[2vw] my-[2vw] text-center leading-tight">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur<br />
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="text-[1.5vw] font-normal  mx-[3vw]">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>

        <div className="images">
          <div className="inneImages grid grid-cols-3 px-[3vw] py-[2vw] gap-[1.3vw]">
            <img className="h-[85%] object-cover shadow-black shadow-2xl  rounded-md w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg" alt="" />
            <img className="h-[85%] object-cover shadow-black shadow-2xl  rounded-md w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg" alt="" />
            <img className="h-[85%] object-cover shadow-black shadow-2xl  rounded-md w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg" alt="" />
          </div>
        </div>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <ImageSlider />
        </div>
        <hr />
      </section>

      <section className="coursesDetails">
        <h1 className="text-NavBGColor text-[2.5vw] m-[2.2vw] font-bold">Core Courses Sequence</h1>
        <div className="cards gap-[2vw] grid grid-cols-4 ml-[2.2vw]">
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Programming Fundamentals</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Web 2 Using Next.JS</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Earn As You Learn</h2>
          </div>
        </div>
      </section>

      <section className="advancedCourse">
        <h1 className="text-NavBGColor text-[2.5vw] m-[2.2vw] font-bold">Advanced Courses</h1>
        <div className="cards gap-[2vw] grid grid-cols-4 ml-[2.2vw]">
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Artificial Intelligence</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Web 3 And Metaverse</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Cloud Native Computing</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Ambient Computing And IoT</h2>
          </div>

          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Genomics and Bioinformatics</h2>
          </div>
          <div className="card shadow-gray-400 shadow-md mb-[2vw] hover:scale-105 transition-all eas border-gray-100 border-2 rounded-lg">
            <img className="w-full object-cover rounded-lg h-[200px]" src="https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg" alt="" />
            <h2 className="text-center text-gray-500 text-[1.3vw] font-bold my-[2vw]">Network Programmability and Automation</h2>
          </div>
        </div>
      </section>
    </div>
  )
}


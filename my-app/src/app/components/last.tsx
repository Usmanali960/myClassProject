"use client"


export default function LastFooer() {
    return (
        <div className="footer grid grid-cols-1 lg:grid-cols-3 px-[2vw] py-[13vh] w-full max-h-[100vh] bg-footerBGColor ">
            <div className="coreCourse">
                <h1 className="text-[20px] font-semibold">Core courses</h1>
                <ul className="mt-[1.4vw] text-LiColor">
                    <li className="mt-[0.9vw]">Programming Fundamentals</li>
                    <li className="mt-[0.9vw]">Web 2 Using Next.js</li>
                    <li className="mt-[0.9vw]">Earn As You Learn</li>
                </ul>
            </div>
            <div className="advanceCourse">
                <h1 className="text-[20px] font-semibold">Advanced courses</h1>
                <ul className="text-LiColor">
                    <li className="mt-[0.9vw]">Web 3 And Metaverse</li>
                    <li className="mt-[0.9vw]">Cloud Native Computing</li>
                    <li className="mt-[0.9vw]">Artifial Intelligence (AI) and Deep Learning</li>
                    <li className="mt-[0.9vw]">Ambient Computing and IoT</li>
                    <li className="mt-[0.9vw]">Gionics and Bioinformatics</li>
                    <li className="mt-[0.9vw]">Network Programmability and Automation</li>
                </ul>
            </div>
            <div className="socialMedia">
                <h1 className="text-[20px] font-semibold">Social Links</h1>
                <div className="ourSocialMedia flex items-center gap-[1vw] my-[1vw] text-[2vw]">
                    <p><i className='bg-blue-700 bx bxl-facebook-circle rounded-full text-white p-[0.3vw]'></i></p>
                    <p><i className='bg-red-600 bx bxl-youtube rounded-full text-white p-[0.3vw]' ></i></p>
                    <p><i className='bg-blue-300 bx bxl-twitter rounded-full text-white p-[0.3vw]'></i></p>
                    <p><i className='bg-instagramIcon bx bxl-instagram-alt rounded-full text-white p-[0.3vw]' ></i></p>
                    <p><i className='bg-black bx bxl-tiktok rounded-full text-white p-[0.3vw]' ></i></p>
                </div>
                <div className="ourEmail flex items-center text-blue-600 gap-[1vw]">
                    <p className="flex items-center"><i className='text-[2vw] bx bx-envelope'></i></p>
                    <a href="#" className="text-[1vw] underline ">education@governorsindh.com</a>
                </div>
            </div>
        </div>
    )
}
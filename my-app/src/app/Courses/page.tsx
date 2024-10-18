
export default function courses() {
    return (
        <div className="courseDetail relative">
            <div className="innerCard bg-slate-100 w-[25vw] p-[1vw] absolute right-[2.3vw] z-20 top-[-1.7vw]">
                <div className="coreCourse">
                    <h1 className="text-[20px] font-semibold">Core courses</h1>
                    <ul className="mt-[1.4vw] text-LiColor">
                        <li className="mt-[0.9vw]">Programming Fundamentals</li>
                        <li className="mt-[0.9vw]">Web 2 Using Next.js</li>
                        <li className="mt-[0.9vw]">Earn As You Learn</li>
                    </ul>
                </div>
                <hr className="my-[1vw]" />
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
            </div>
        </div>
    )
}
"use client"
import Link from "next/link"
import Head from "next/head"


export default function NavBar() {
    return (
        <div className="sticky z-10 top-0 left-0">
            <section className="h-[8vh]  lg:h-[13vh] w-screen bg-NavBGColor ">
                <nav className="flex items-center justify-between p-[2vw]">
                    <div className="navImg">
                        <img className="w-[100vw] lg:w-[90px] object-cover" src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="" />
                    </div>
                    <div className="navHeading mt-[-80px] text-[1.7vw] ml-[-80px] font-bold text-NavHeadingColor" >
                        <h1 className="hidden lg:block ">Tuition Free Education Program on Latest Technologies</h1>
                        <h1 className="lg:hidden">Tution free program</h1>
                    </div>
                    <div className="navMenus mt-[-80px]">
                        <ul className="flex items-center   gap-[40px] text-white">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="../Apply">Apply</Link></li>
                            <li><Link href="../myJobs">Jobs</Link></li>
                            <li><Link href="../Result">Result</Link></li>
                            <li className="course cursor-pointer"><Link href="...">Courses <i className='bx bx-chevron-down'></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>

    )
}
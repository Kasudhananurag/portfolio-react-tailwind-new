import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className="w-full h-screen text-center bg-black">
            <div className=' max-w-[1080px] mx-auto px-5 flex flex-col justify-center h-full '>
                <p className='font-bold my-3 text-slate-400 text-2xl' >Hi, my name is </p>
                <h1 className='font-bold my-3 text-slate-300 text-4xl'>Anurag Kasudhan</h1>
                <p className='text-slate-400 my-3 text-2xl'>I work on <span className='font-bold'><Typewriter loop={false} words={["React Js", "Tailwind Css", "Front end Development"]} /></span> </p>
                <div className='mx-auto'>
                    <button className='flex group justify-center py-4 my-3 px-5 bg-slate-400 shadow-lg border-2 items-center border-zinc-600 hover:bg-slate-200 hover:font-bold '>
                        <Link to="work" smooth={true} duration={500}>
                            View my Work
                        </Link>
                        <span className='ml-2 group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
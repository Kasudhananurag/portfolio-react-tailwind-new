import React from 'react';
import signup from "../assets/signup.png";
import website from "../assets/fullweb.png"
import atomize from "../assets/atomize.png"
import chatapp from "../assets/chatapp.png"
import quiz from "../assets/hp.png"
import portfolio from "../assets/portfolio.png"
import bb from "../assets/bb.png"
import ttt from "../assets/tictactoe.png"
import textutil from "../assets/textutil.png"
import w from "../assets/weatherapp.png"
import bmicalc from "../assets/bmicalc.png"
import quote from "../assets/quote.png"
import copods from "../assets/copods.png"


const Work = () => {
    return (
        <div name ="work" className='w-full h-auto upr p-12 bg-slate-200 flex justify-center'>
            <div className=' w-full md:max-width-[970px] p-4 md:w-[1300px]  mx-auto  flex flex-col justify-center h-full '>
                <div className='pb-8'>
                    <p className='text-4xl inline font-bold'><span className='border-b-4 border-rose-500'>Work</span></p>
                    <p className='py-5'>Have a look at some of my recent works</p>
                </div>

                <div className='md:grid md:grid-cols-2 w-full md:gap-11'>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={atomize} className="rounded-lg" alt="" />
                        <p className='p-3'>A clone of atomizecode, ready to be deployed with required customisation <br /> <a href="https://atomize-clone.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={website} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A landing page, ready to be deployed with required customisation <br /> <a href="https://landing-page-560cf.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={signup} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A signup page, custom component <br /> <a href="https://signuppage-f2bcb.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={chatapp} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A chatting application based on <b>react js</b> and firebase (under development) <br /> <a href="https://varta-lapam.web.app/signup" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={quiz} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A quiz application based on react js(under development) <br /> <a href="https://customquiz-6e8b1.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={copods} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A ready to be deployed customized website<br /> <a href="https://copods-clone.web.app" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={portfolio} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>a portfolio based on react js <br /> <a href="https://customquiz-6e8b1.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={bb} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>a online slam book based on react js <br /> <a href="https://bingo-bookbb.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={ttt} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>a tictactoe game based on react js <br /> <a href="https://tictactoe-4856d.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={textutil} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>a online text based utility application based on react js <br /> <a href="https://textutility-4d7ab.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={w} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>a weather application based on react js <br /> <a href="https://weatherapp-90d85.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={bmicalc} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A web application that asks for user's height in metres and weight in Kilograms and then returns with BMI <br /> <a href="https://bmicalculator-51c8f.web.app/" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    <div className="bg-slate-200 rounded-lg my-2 shadow-lg">
                        <img src={quote} height="300px" className="rounded-lg" alt="" />
                        <p className='p-3'>A fun quotes application! Get your name and quote recorded in the leagues of great thinkers!!<br /> <a href="https://quotes-db49f.web.app/quotes" target="0"> 
                        <button className=' border border-black p-1 my-3 hover:bg-slate-400 hover:shadow-slate-500 duration-150 px-3 rounded'>Visit</button></a> </p>
                    </div>
                    
                </div>

                {/* card container */}
                
            </div>
            <br />
        </div>
    )
}

export default Work
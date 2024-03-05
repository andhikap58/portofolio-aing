
import Image1 from '../../public/IMAGE1.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";



const Home = () => {
    return (
        <div 
        className="h-screen w-full 
        bg-gradient-to-b from-black via-black to bg-gray-800"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col
         items-center justify-center h-full px-4 md:flex-row">
            <div>
                {/* <h2 className="text-4xl sm: text-7xl font-bold">
                     Hi I'm a Full Stack Developer
                </h2> */}
                <div>
                <TypeAnimation className=""
                    sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Hi I'm a Full Stack Developer!",
                    1000,
                    "Hi",
                    1000,

                    ]}
                    speed={20}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                </div>
                <p className="text-gray-500 py-4 max-w-md">
                    My name is Ashar Andhika Putra from Indonesia. 
                </p>

                <div>
                    <button className="text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md 
                    bd-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portofolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25}
                           className="ml-1 "   />
                        </span>
                        
                    </button>
                </div>
            </div>
            <div>
            <img 
            src={Image1} 
            alt="Image" 
            className='rounded-2xl mx-auto w=2/3 mid:w-full' 
            height= {500} 
            width={300} /> 
            </div>
        </div>
        </div>
    )
}

export default Home
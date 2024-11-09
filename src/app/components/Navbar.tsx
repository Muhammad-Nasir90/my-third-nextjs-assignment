import logo from "@/app/assests/logo1.png";
import Image from "next/image";



const Navbar  = () => {
                                                    // (Navbar Page)

    return (
        <>
        <section>
        <div className="md:w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
            <div className="w-[191px] h-[34px] ">
            <Image src={logo} alt="logo" className="transition-transform duration-300 hover:scale-150" />
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                <div className="w-[549px] h-[23px] ">
                    <ul className="flex flex-row justify-between text-white ">
                        <li className="transition-transform duration-50 hover:scale-90 font-bold text-[22px]">Products</li>
                        <li className="transition-transform duration-50 hover:scale-90 font-bold text-[22px]">Solutions</li>
                        <li className="transition-transform duration-50 hover:scale-90 font-bold text-[22px]">Resources</li>
                        <li className="transition-transform duration-50 hover:scale-90 font-bold text-[22px]">Pricing</li>
                    </ul>
                </div>
                    <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#FFE492] transition-transform duration-300 hover:scale-105 hover:bg-blue-300">Login</button>
                    </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Navbar ;
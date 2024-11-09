import react from 'react';
import Image from "next/image";
import ballon from "@/app/assests/ballon.jpeg";
import Apple from "@/app/assests/Apple.png";
import Microsoft from "@/app/assests/Microsoft.png";
import Slack from "@/app/assests/Slack.png";
import Google from "@/app/assests/Google.png";




const Hero = () => {
    return (
        <>                                                             
                                                          {/* (1st Page) */}

        <section>
        <div className="md:w-[1920px] py-[103px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center">
            <div className="w-[656px] h-[361px]">
                <div className="w-[656px] h-[238px]">
                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">Get More Done with whitespace</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.-2em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <br />
                    <button className="w-[219px] h-[63px] rounded-lg px-[20px] grid py-[20px] mt-5 bg-[#4F9CF9] transition-transform duration-300 hover:scale-105 hover:bg-gray-700">Try Whitespace Free →  </button>
                </div>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>
        </div>
        </section>

                                                            {/* (2nd Page) */}
        <section>
             <div className="md:w-[1980px] h-[661px] gap-[60px] px-[220px] opacity-o flex items-center ">
                <div className="w-[672px] h-[411px] gap-[60px] justify-between items-center py-[350px]">
                    <h1 className="w-[672px] h-[174px] font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529]">Project Management</h1>
                    <p className="flex py-[20px] w-[672px] h-[90px] font-inter font-normal text-base leading-[30px] tracking-[-0.02em] text-[#212529] "> Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <div className="w-[201px] h-[63px] rounded-md top-[20px] p-[20px_40px] my-11 bg-[#4F9CF9] text-white opacity-1 transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                        <button>Get Started →</button>
                        </div>
                        
                        </div>
                        <div className="w-[720px] h-[547px] bg-[#C4DEFD] mt-[300px] transition-transform duration-300 hover:scale-105">
                            </div>
                        </div>
        </section>

                                                                {/* (3rd Page) */}

        <section>
                    <div className="md:w-[1480px] h-[661px] gap-[100px] flex justify-between mt-[300px]">
                        <div className="w-[710px] h-[661px] ml-10">
                            <Image src={ballon} alt='logo' className="transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="w-[670px] h-[294px] pl-[100px] gap-[60px] mt-[200px] ml-[30px]">
                            <h1 className="w-[670px] h-[87px] font-inter font-bold text-7xl leading-tight tracking-tight text-[#212529]">
                            Work together
                            </h1>
                            <p className="w-[670px] h-[60px] font-inter font-normal text-base leading-8 tracking-[-0.02%]">With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                            </p>
                            <button className="w-[186px] h-[63px] rounded-md py-5 px-10 mt-[60px] bg-[#4F9CF9] transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
                                <p className="w-[82px] h-[23px] font-inter font-normal text-[15px] leading-[24px] tracking-[-2%] text-white ">Try it now → </p>
                            </button>
                        </div>
                        </div>                
                 </section>
                                                                    {/* (4th Page) */}
                 <section>
                    
                 <div className="md:w-[1921px] h-[759px] top-[2509px] py-[140px] px-[220px] mt-[50px] bottom-[140px] bg-[#043873] text-white flex items-center">


                    <div className="w-[697px] h-[294px] gap-[60px]">
                        <div className="w-[697px] h-[171px] gap-[24px]">
                            <h1 className="w-[697px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.2%] text-[#FFFFFF]">Use as Extension</h1>
                            <p className="w-[697px] h-[60px] font-inter font-normal text-[18px] leading-[30px] mt-6 tracking-[-0.02%]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                            </p>
                            <button className="w-[171px] h-[63px] rounded-md py-[20px] px-[40px] bottom-[20px] left-[40px] mt-[70px] bg-[#4F9CF9] transition-transform duration-300 hover:scale-105 hover:bg-gray-700">Let’s Go →</button>
                        </div>
                    </div>

                    <div className="w-[686px] h-[479px] mt-4 bg-[#C4DEFD] ml-20 transition-transform duration-300 hover:scale-105">

                    </div>

                  </div>
               </section>     
                                                                        {/* (5th Page) */}
                <section>
                   <div className="md:w-[1921px] h-[812.09px] top-[3268px] left-1 py-[140px] px-[220px] pl-[220px] mt-[98px] bottom-[140px]  flex items-center">
                      <div className="w-[714px] h-[532.09px] mt-4 bg-[#C4DEFD] transition-transform duration-300 hover:scale-105">
                        </div> 

                     <div className="w-[669px] h-[411px] mt-[60px] ml-[90px]">
                        <div className="w-[669px] h-[288px] mt-[10px]">
                            <h1 className="w-[669px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] tracking-tight text-[#212529] px-3">Customise it
                            to your needs</h1>
                            <p className="w-[669px] h-[90px] font-inter font-normal text-[18px] leading-[30px] tracking-tight mt-[20px] text-[#212529]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                            <button className="w-[171px] h-[63px] rounded-lg py-[20px] px-[40px] bottom-[20px] left-[40px] mt-6 bg-[#4F9CF9] text-white transition-transform duration-300 hover:scale-105 hover:bg-gray-700">Let’s Go →</button>
                        </div>
                    </div>
                    
                    </div>
            </section>
                                                                    {/* (6th Page) */}
           
            <section>
                <div className="md:w-[1921px] h-[574px] top-[4080px] left-1 py-[140px] px-[220px] pl-[220px] mt-[98px] bottom-[140px] grid place-items-center bg-[#043873]">
                    <div className="w-[1481px] h-[294px] grid place-items-center">
                        <div className="w-[1064px] h-[171px]  gap-[24px] grid place-items-center">
                            <h1 className="w-[1064px] h-[87px] left-1 font-inter font-bold text-[72px] leading-[87.14px] tracking-tight text-[#FFFFFF] px-8">Your work, everywhere you are</h1>
                            <p className="w-[1064px] h-[60px] px-10 py-4 font-inter font-normal text-[18px] leading-[30px] tracking-tight grid place-items-center text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                        </div>
                        <button className="w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] bottom-[20px] left-[40px] grid gap-[10px] bg-[#4F9CF9] mt-[80px] transition-transform duration-300 hover:scale-105 hover:bg-gray-700"><p className="w-[91px] h-[23px] font-inter font-medium text-[16px] leading-[23px] tracking-tight text-[#FFFFFF] ml-4 ">Try Taskey→</p></button>
                    </div>
                </div>
            </section>
        
                                                                    {/* (7th Page)       */}

            <section>
                <div className="md:w-[1922px] h-[538px] top-[4654px]  py-[140px] px-[220px] pl-[220px] mt-[40px] bottom-[140px] grid place-items-center gap-[100px]">
                            <h1 className="w-[1482px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-tight grid place-items-center text-[#212529]">Our sponsors</h1>    
                <div className="w-[1482px] h-[71px] flex justify-between">
                    <Image src={Apple} alt="logo" className="w-[55.47px] h-[68px] flex gap-4 transition-transform duration-300 hover:scale-125" />
                    <Image src={Microsoft} alt="logo" className="w-[287px] h-[62px] flex gap-4 transition-transform duration-300 hover:scale-125" />
                    <Image src={Slack} alt="logo" className="w-[280px] h-[71px] flex gap-4 transition-transform duration-300 hover:scale-125" />
                    <Image src={Google} alt="logo" className="w-[211px] h-[69.81px] flex gap-4 transition-transform duration-300 hover:scale-125" />
                </div>
                </div>
            </section>
        
        </>
        


    )
}

export default Hero;
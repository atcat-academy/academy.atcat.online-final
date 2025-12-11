import Image from "next/image";
import { CircleDot } from "lucide-react";
import { philosophyAcademyBlog, philosophySuiteBlog } from "@/constants/philosophy";
import Heading from "@/components/sections/section-headings/section-heading";
import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Philosophy",
};

// Generate static params for all landing pages
export function generateStaticParams() {
    return philosophyAcademyBlog.map(page => ({
      id: page.id.toString(),
    }));
  }

export default function PhilosophyPage() {
  return (
    
    <div className="flex flex-col min-h-screen mt-[50px]">
        <section className="bg-gradient-to-b from-[#0C0A16] to-[#1B0030] py-10 relative overflow-hidden">
            <div className="container mx-auto px-1 sm:px-4 relative">
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 items-start relative z-10">
                    <Heading className="text-white/80text-2xl text-2xl md:text-3xl md:col-span-4 font-bold mb-6 text-balance text-center">
                        {"The"} <span className="font-inter text-atcat-blue">ATCAT</span> {"Academy Philosophy"}
                    </Heading>
                </div>
                
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 items-start relative z-10">
                    {/* Blog content column - 75% width (3/4 columns) */}
                    <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm md:col-span-4">
                        {philosophyAcademyBlog.map((blog, index) => (
                            <div key={index} className="mb-12" id={`blog-${blog.id}`}>
                                
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center">
                                        {blog.authorDetails.map((author, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <Suspense fallback={<div className="text-white">Loading...</div>}>
                                                    <Image 
                                                        src={author.image} 
                                                        alt={author.name} 
                                                        width={60} 
                                                        height={60}
                                                        className="rounded-full mr-2 border-2 border-white/20"
                                                    />
                                                </Suspense>
                                                
                                                <div>
                                                    <p className="text-sm font-medium text-atcat-blue">{author.name}</p>
                                                    <p className="text-xs text-gray-400">{author.title}</p>
                                                    <p className="text-xs text-gray-400">{blog.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                   
                                </div>
                                <div className="space-y-4">
                                    {blog.content.map((paragraph, pIdx) => (
                                        <p key={pIdx} className="text-gray-300 text-[1rem] ">{paragraph}</p>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-2 justify-start md:ml-20 mt-10">
                                    {blog.benefits[0].map((benefit, idx) => (
                                        <ul className="mb-4" key={idx}>
                                            <li className="flex flex-row gap-2">
                                                <div className="flex items-center gap-2">
                                                    <CircleDot className="text-atcat-100 h-4 w-4 flex-shrink-0" />
                                                    <h1 className="text-white/80 font-bold text-[1rem]">
                                                        {benefit.title}:    
                                                    </h1>
                                                    
                                                </div>
                                                
                                            </li>
                                            <p className="text-gray-300 text-[1rem] ml-6">
                                                        {benefit.subTitle}
                                                    </p>
                                            <p className="text-gray-300 text-[1rem] italic ml-6">
                                                {benefit.description}
                                            </p>
                                        </ul>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center ">
                                    <Link href="/" passHref legacyBehavior>
                                        <a
                                            className="mt-2 px-10 border-2 border-atcat-blue/50 rounded-full px-4 py-2 z-100 pointer-events-auto flex justify-center items-center transition duration-300 hover:bg-atcat-blue/10 hover:border-atcat-blue hover:text-atcat-blue cursor-pointer"
                                        >
                                            <span className="text-atcat-blue">Back to Home</span>
                                        </a>
                                    </Link>
                                </div>
                                
                                
                                {/* <div className="mb-6 mt-6">
                                    <Image 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        width={800} 
                                        height={400}
                                        className="rounded-lg w-full object-cover"
                                    />
                                </div> */}
                            </div>
                        ))}
                       
                    </div>
                    

                </div>

               

                {/* <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 items-start relative z-10 mt-4">
                    
                    <Heading className="text-white/90 text-2xl md:text-3xl md:col-span-4 font-bold mb-6 text-balance text-center">
                     <span className="font-inter text-atcat-blue">ATCAT</span> {"Training and Assessment Tools"}
                    </Heading>
                </div>
                
                
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 items-start relative z-10">
                    
                    <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm md:col-span-4">
                        {philosophySuiteBlog.map((blog, index) => (
                        <div key={index} className="mb-12" id={`blog-${blog.id}`}>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {blog.authorDetails.map((author, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <Image 
                                                src={author.image} 
                                                alt={author.name} 
                                                width={40} 
                                                height={40}
                                                className="rounded-full mr-2"
                                            />
                                            <div>
                                                <p className="text-sm font-medium">{author.name}</p>
                                                <p className="text-xs text-gray-400">{author.title}</p>
                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm text-gray-400">{blog.date}</span>
                            </div>
                            <div className="space-y-4">
                                {blog.content.map((paragraph, pIdx) => (
                                    <p key={pIdx} className="text-gray-300 text-[1rem] ">{paragraph}</p>
                                ))}
                            </div>
                               
                        </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>

       
    </div>
   
  );
}

"use client"
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

import { useState } from "react";
import { faq_categories } from "@/constants/faq";

//import data
import { simple_faqs, blog_faqs } from "@/constants/faq";
import { geminiPrompt_health_wealth_relationships } from "@/constants/gemini_h-w-r";

export default function FAQPage() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-6 px-4 mt-0 mt-[100px]">
  
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-2">Location Based ATC Questions</h1>
        <p className="text-muted-foreground mb-10">
          Here are some general resources to help you get started with ATC training.
        </p>
        <div className="flex flex-row items-center justify-start -mt-4 mb-6">
          <ChevronRight className="ml-1 size-6 mr-2 text-atcat-blue" />
          <Link href={"/faq/ansp"} className="text-center text-2xl font-bold text-atcat-blue capitalize">
          {"Where can I train in my country?"}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start -mt-4 mb-10">
          <ChevronRight className="ml-1 size-6 mr-2 text-atcat-blue" />
          <Link href={"/faq/ansp"} className="text-center text-2xl font-bold text-atcat-blue capitalize">
          {"Which countries actually pay ATC trainees?"}
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2 mt-6">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">
          The most common questions we get asked.
        </p>
        <div className="grid grid-cols-1  gap-4 mb-12">
          {blog_faqs.filter(question => question.live === "true").map((question, index) => (
            <Link href={`/faq/${question.id}`} key={index} className="block">
              <Card className="h-full max-h-[140px] transition-all duration-300 hover:shadow-lg border-atcat-blue hover:bg-atcat-blue/20 ">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex flex-col items-start gap-4">
                    <div>
                      <CardTitle className="text-md sm:text-2xl">{question.title}</CardTitle>
                    </div>
                    {/* <div className="flex flex-row items-center gap-4 text-atcat-blue">
                      <p>Find out:</p>
                     
                      <Star className="text-muted-foreground size-4 ml-2 -mr-2" /> <p className="text-sm text-muted-foreground">{question.section1Title}</p>
                      <Star className="text-muted-foreground ml-2 -mr-2 size-4" /> <p className="text-sm text-muted-foreground">{question.section2Title}</p>
                      <Star className="text-muted-foreground ml-2 -mr-2 size-4" /> <p className="text-sm font-bold text-muted-foreground uppercase">{question.section3Title}</p>
                    </div> */}
                  </div>
                    
                </CardHeader>
                
                <CardFooter className="-mt-6 pt-0 flex justify-end">
                  <div className="flex justify-between w-full items-center">
                    <p className=" text-sm uppercase text-muted-foreground"></p>
                  <Button variant="ghost" size="sm" className="text-atcat-blue ">
                    View <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  </div>
                  
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        
      </div>

      
      
      {/* <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Other Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">
          Hoping to find answers to more specific personal concerns, filter by category.
        </p>
       
        <div className="flex gap-2 mb-6 flex-wrap text-black">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full  ${
              selectedCategory === null ? 'ring-2 ring-atcat-blue ' : ''
            } bg-gray-200 hover:bg-gray-300`}
          >
            All
          </button>
          {faq_categories.map((categoryFilter) => (
            <button
              key={categoryFilter.id}
              onClick={() => setSelectedCategory(categoryFilter.name)}
              className={`px-4 py-2 rounded-full text-black ${
                selectedCategory === categoryFilter.name ? 'ring-2 ring-atcat-blue ' : ''
              } ${categoryFilter.color}`}
            >
              {categoryFilter.name}
            </button>
          ))}
        </div>      

        <div className="grid grid-cols-1  gap-4">
          {geminiPrompt_health_wealth_relationships.filter((category) => !selectedCategory || category.category === selectedCategory).map((category, index) => (
            <Link href={`/faq/${category.id}`} key={index} className="block">
              <Card className="h-full max-h-[150px] transition-all duration-300 hover:shadow-lg border-atcat-blue hover:bg-atcat-blue/20 ">
                <CardHeader className="flex flex-row items-center gap-4">
                 
                  <div>
                    <CardTitle className="text-md sm:text-2xl">{category.faq}</CardTitle>
                    
                  </div>
                </CardHeader>
                
                <CardFooter className="pt-0 flex justify-end">
                  <div className="flex justify-between w-full items-center">
                    <p className=" text-sm uppercase text-muted-foreground"></p>
                  <Button variant="ghost" size="sm" className="text-atcat-blue ">
                    View <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  </div>
                  
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

       <div className="mt-16"></div>
      </div> */}
    </div>
  );
}
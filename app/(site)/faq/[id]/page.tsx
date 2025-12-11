import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@radix-ui/react-select';
import { Check, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { blog_faqs } from '@/constants/faq';
import Image from 'next/image';

interface FAQPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { id } = await params;
  const faq = blog_faqs.find(page => page.id === parseInt(id));
  
  return {
    title: faq?.title || 'FAQ',
    description: faq?.summary || 'Frequently Asked Questions',
  };
}

// Generate static params for all FAQ pages
export function generateStaticParams() {
  return blog_faqs.map(page => ({
    id: page.id.toString(),
  }));
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { id } = await params;
  
  // Find the FAQ data that matches the ID from the URL
  const pageData = blog_faqs.find(page => page.id === parseInt(id));
  
  // If no matching data is found, redirect to FAQ page
  if (!pageData) {
    redirect('/faq');
  }
  
  return (
    <div className="container mx-auto py-12 px-4 mt-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{pageData.title}</h1>

        {pageData.answers && (
          <div className="mt-6 w-3/4">
            <ul>
              {Object.entries(pageData.answers).map(([key, answer]) => (
                <li key={key} className="flex items-start gap-2 mt-2">
                  <ArrowRight className='text-green-500 size-[20px] flex-shrink-0 mt-0.5' />
                  <span className='text-sm sm:text-lg text-gray-700 dark:text-gray-300'>{answer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {pageData.imageUri && (
          <div className="relative w-full h-[500px] mt-10 mb-8">
            <Image 
              src={pageData.imageUri} 
              alt={pageData.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="my-10 flex flex-wrap gap-4 items-center">
          <span className="text-lg text-gray-700 dark:text-gray-200">
            Looking for more?
          </span>
          {pageData.blogUri && (
            <a
              href={pageData.blogUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-atcat-blue text-white font-medium shadow-sm hover:bg-atcat-blue/90 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 19l7-7-7-7" /></svg>
              Blog
            </a>
          )}
          {pageData.youtubeUri && (
            <a
              href={pageData.youtubeUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 text-white font-medium shadow-sm hover:bg-red-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6z"/><path d="M21 8.5a2.5 2.5 0 00-1.75-2.37C18.09 5.63 16.21 5.5 12 5.5s-6.09.13-7.25.63C2.5 6 2 6.86 2 8.5v7c0 1.64.5 2.5 1.75 2.87 1.16.5 3.04.63 7.25.63s6.09-.13 7.25-.63C21.5 18 22 17.14 22 15.5v-7zM12 19c-4.42 0-7.43-.11-8.55-.5A4.006 4.006 0 012 15.5v-7c0-1.28.75-2.37 1.45-2.5C4.57 5.11 7.58 5 12 5s7.43.11 8.55.5A4.006 4.006 0 0122 8.5v7c0 1.28-.75 2.37-1.45 2.5C19.43 18.89 16.42 19 12 19z"/></svg>
              YouTube
            </a>
          )}
        </div>

        <h1 className="text-2xl font-bold text-atcat-100 mb-6">What you{"'"}ll learn</h1>

        {pageData.summary && (
          <div className="mt-6 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{pageData.summary}</p>
          </div>
        )}
        
        {pageData.elements && pageData.elements.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-atcat-100 mb-6">Key Points</h2>
            <ul className="space-y-2">
              {pageData.elements.map((el) => (
                <li key={el.id} className="flex items-start gap-2">
                  <Check className='text-green-500 size-[20px] flex-shrink-0 mt-0.5' />
                  <span className="text-gray-700 dark:text-gray-300">{el.el}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pageData.howAtcatHelps && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-atcat-100 mb-6">How ATCAT Helps</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{pageData.howAtcatHelps}</p>
            </div>
          </div>
        )}
        
        <div className="mt-12">
          <Link 
            href={"/sign-up"}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors capitalize"
          >
            Sign me up <span>FREE!</span><Icon title="rightarrow" className='rotate-45' />  
          </Link>
        </div>

        <div className="mt-8">
          <Link 
            href={"/faq"}
            className="text-atcat-blue hover:text-atcat-blue/80 underline"
          >
            ← Back to FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
 
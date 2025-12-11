import ANSPFinder from "@/components/sections/ansp/ansp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function ANSPPage() {
  return (
    <div className="container mx-auto py-6 px-4 -mt-2 mt-[50px]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/faq">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to FAQ
            </Link>
          </Button>
          <h1 className="text-xl sm:text-3xl font-bold">Air Navigation Service Providers</h1>
          <p className="text-muted-foreground mt-2">
            Find contact information for ANSPs around the world
          </p>
        </div>
        
        <ANSPFinder />
      </div>
    </div>
  );
}
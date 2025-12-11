"use client";

import { useState, useMemo } from "react";
import { ansps } from "@/constants/ansp";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type ANSP = {
  country: string;
  ANSP: string;
  website: string;
};



export default function ANSPFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions");
  
  const regions = ["All Regions", ...Object.keys(ansps)];
  
  // Flatten the ANSP data for filtering
  const allANSPs = useMemo(() => {
    const flattened: Array<ANSP & { region: string }> = [];
    
    Object.entries(ansps).forEach(([region, regionANSPs]) => {
      regionANSPs.forEach(ansp => {
        flattened.push({
          ...ansp,
          region
        });
      });
    });
    
    return flattened;
  }, []);
  
  // Filter ANSPs based on search term and selected region
  const filteredANSPs = useMemo(() => {
    return allANSPs.filter(ansp => {
      const matchesSearch = 
        ansp.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ansp.ANSP.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRegion = 
        selectedRegion === "All Regions" || ansp.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  }, [allANSPs, searchTerm, selectedRegion]);
  
  return (
    <div className="space-y-6 ">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-left sm:text-center">Find Your Air Navigation Service Provider</h2>
        <p className="text-muted-foreground text-left sm:text-center">
          Search for ANSPs by country, name, or filter by region
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by country or ANSP name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="w-full md:w-64">
          <Select
            value={selectedRegion}
            onValueChange={setSelectedRegion}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredANSPs.length > 0 ? (
          filteredANSPs.map((ansp, index) => (
            <Card key={`${ansp.country}-${index}`} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{ansp.country}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{ansp.ANSP}</p>
                <a 
                  href={ansp.website.startsWith('http') ? ansp.website : `https://${ansp.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                >
                  {ansp.website}
                  <ExternalLink size={14} />
                </a>
                <div className="text-xs text-muted-foreground mt-2">
                  Region: {ansp.region}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-muted-foreground">No ANSPs found matching your criteria</p>
          </div>
        )}
      </div>
      
      
      
      <div className="text-center text-sm text-muted-foreground mt-[50px]">
       
      </div>
    </div>
  );
}

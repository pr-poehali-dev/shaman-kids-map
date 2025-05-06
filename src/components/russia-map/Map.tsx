
import React, { useState } from 'react';
import { russiaRegions, fansData } from './RegionsData';
import Icon from '@/components/ui/Icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card } from '@/components/ui/card';

const RussiaMap = ({ onRegionSelect }: { onRegionSelect: (regionId: string) => void }) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] bg-slate-100 rounded-lg overflow-hidden border border-border">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562771998-55f2bd64e0d5?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full max-w-3xl">
          {/* Стилизованный контур России */}
          <path
            d="M10,35 C15,30 25,32 35,30 C45,28 55,25 65,30 C75,35 85,40 90,50 C95,60 90,70 85,75 C80,80 70,85 60,80 C50,75 45,65 40,60 C35,55 25,50 20,45 C15,40 5,40 10,35 Z"
            fill="rgba(200, 220, 240, 0.6)"
            stroke="#2a52be"
            strokeWidth="0.5"
            className="shadow-md"
          />
          
          {/* Точки регионов с тултипами */}
          {russiaRegions.map((region) => (
            <TooltipProvider key={region.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <g
                    className="cursor-pointer transform transition-transform hover:scale-125"
                    onClick={() => onRegionSelect(region.id)}
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <circle
                      cx={region.coordinates.x}
                      cy={region.coordinates.y}
                      r={hoveredRegion === region.id ? "1.8" : "1.2"}
                      fill={hoveredRegion === region.id ? "#ff5c5c" : "#2a52be"}
                      className="transition-all"
                    />
                    {fansData[region.id]?.length > 0 && (
                      <text
                        x={region.coordinates.x}
                        y={region.coordinates.y - 2}
                        fontSize="2"
                        fill="#000"
                        textAnchor="middle"
                        className="pointer-events-none"
                      >
                        {fansData[region.id].length}
                      </text>
                    )}
                  </g>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{region.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {fansData[region.id]?.length || 0} поклонников
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </svg>
      </div>
      
      {/* Легенда карты */}
      <Card className="absolute bottom-4 left-4 bg-white/80 p-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#2a52be]"></div>
          <span>Регион</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-3 h-3 rounded-full bg-[#ff5c5c]"></div>
          <span>Выбранный регион</span>
        </div>
      </Card>
    </div>
  );
};

export default RussiaMap;

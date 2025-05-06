
import React from 'react';
import { fansData, russiaRegions } from './RegionsData';
import FanProfile from './FanProfile';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

interface RegionPanelProps {
  selectedRegion: string | null;
  onClose: () => void;
}

const RegionPanel: React.FC<RegionPanelProps> = ({ selectedRegion, onClose }) => {
  if (!selectedRegion) return null;
  
  const regionInfo = russiaRegions.find(r => r.id === selectedRegion);
  const fans = fansData[selectedRegion] || [];

  if (!regionInfo) return null;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-xl font-bold">{regionInfo.name}</h3>
          <p className="text-sm text-muted-foreground">{fans.length} поклонников</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <Icon name="X" />
        </Button>
      </div>

      <ScrollArea className="flex-grow">
        <div className="p-4 grid gap-4">
          {fans.length > 0 ? (
            fans.map(fan => (
              <FanProfile key={fan.id} fan={fan} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Icon name="Users" className="h-12 w-12 text-muted-foreground opacity-30 mb-4" />
              <h3 className="text-lg font-medium">Пока нет данных</h3>
              <p className="text-sm text-muted-foreground mt-1">
                В этом регионе пока нет юных поклонников
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RegionPanel;

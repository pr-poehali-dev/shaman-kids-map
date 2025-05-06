
import React from 'react';
import { FanData } from './RegionsData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FanProfileProps {
  fan: FanData;
  className?: string;
}

const FanProfile: React.FC<FanProfileProps> = ({ fan, className }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative h-40 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
        {fan.photoUrl && (
          <img 
            src={fan.photoUrl} 
            alt={fan.name} 
            className="w-full h-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <Avatar className="h-16 w-16 border-2 border-white">
            <AvatarImage src={fan.photoUrl} alt={fan.name} />
            <AvatarFallback className="text-lg">{getInitials(fan.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-white font-bold text-xl">{fan.name}</h3>
            <p className="text-white/90 text-sm">{fan.age} лет</p>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Icon name="MapPin" className="h-4 w-4" />
            <span className="text-sm">{fan.city}, {fan.region}</span>
          </div>
          
          {fan.about && (
            <p className="text-sm text-gray-600 mt-3">{fan.about}</p>
          )}
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Icon name="Music" className="h-4 w-4" />
            Любимые песни
          </h4>
          <div className="flex flex-wrap gap-2">
            {fan.favoriteSongs.map((song, index) => (
              <Badge key={index} variant="secondary">{song}</Badge>
            ))}
          </div>
        </div>
        
        {fan.performances && fan.performances.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Icon name="Award" className="h-4 w-4" />
              Выступления
            </h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {fan.performances.map((performance, index) => (
                <li key={index}>{performance}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FanProfile;


import React, { useState } from 'react';
import RussiaMap from '@/components/russia-map/Map';
import RegionPanel from '@/components/russia-map/RegionPanel';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Sheet, SheetContent } from '@/components/ui/sheet';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId);
    setIsPanelOpen(true);
  };

  const handlePanelClose = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Юные поклонники SHAMAN</h1>
              <p className="text-blue-100 text-sm md:text-base">Интерактивная карта России</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white">
              <Icon name="Music" className="h-5 w-5" />
              <span className="font-medium">Я русский</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 md:py-12 md:px-6 max-w-7xl mx-auto w-full">
        <div className="mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Выберите регион на карте
          </h2>
          <p className="text-muted-foreground">
            Узнайте о юных поклонниках SHAMAN в разных уголках России
          </p>
        </div>

        <div className="w-full">
          <RussiaMap onRegionSelect={handleRegionSelect} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Нажмите на отмеченные регионы, чтобы увидеть информацию о юных поклонниках
          </p>
        </div>
      </main>

      {/* Mobile side panel */}
      <Sheet open={isPanelOpen} onOpenChange={setIsPanelOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md p-0">
          <RegionPanel
            selectedRegion={selectedRegion}
            onClose={handlePanelClose}
          />
        </SheetContent>
      </Sheet>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-300">
            © 2024 Интерактивная карта юных поклонников SHAMAN
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

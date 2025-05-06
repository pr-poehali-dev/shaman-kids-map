
export interface FanData {
  id: string;
  name: string;
  age: number;
  city: string;
  region: string;
  favoriteSongs: string[];
  performances?: string[];
  about?: string;
  photoUrl?: string;
}

export const fansData: Record<string, FanData[]> = {
  "moscow": [
    {
      id: "m1",
      name: "Алиса Смирнова",
      age: 9,
      city: "Москва",
      region: "Московская область",
      favoriteSongs: ["Я русский", "Встанем"],
      performances: ["Фестиваль 'Юные таланты', Май 2024"],
      about: "Алиса занимается вокалом с 5 лет. Любит исполнять патриотические песни.",
      photoUrl: "https://images.unsplash.com/photo-1595459934024-d34e0dc0bd93?q=80&w=1000"
    }
  ],
  "petersburg": [
    {
      id: "sp1",
      name: "Максим Петров",
      age: 10,
      city: "Санкт-Петербург",
      region: "Ленинградская область",
      favoriteSongs: ["Ты моя", "Улетай"],
      performances: ["Школьный концерт ко Дню Победы, 2024"],
      about: "Максим увлекается музыкой и играет на гитаре. Мечтает выступить на большой сцене.",
      photoUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1000"
    }
  ],
  "kazan": [
    {
      id: "k1",
      name: "София Хабибуллина",
      age: 8,
      city: "Казань",
      region: "Республика Татарстан",
      favoriteSongs: ["Я русский", "Моя Россия"],
      performances: ["Республиканский конкурс 'Голос детства', 2023"],
      about: "София любит петь с самого детства. Выучила все песни SHAMAN наизусть.",
      photoUrl: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=1000"
    }
  ],
  "novosibirsk": [
    {
      id: "n1",
      name: "Артём Кузнецов",
      age: 11,
      city: "Новосибирск",
      region: "Новосибирская область",
      favoriteSongs: ["Встанем", "Ты моя"],
      about: "Артём самостоятельно научился играть композиции SHAMAN на фортепиано.",
      photoUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1000"
    }
  ],
  "vladivostok": [
    {
      id: "v1",
      name: "Елена Ким",
      age: 9,
      city: "Владивосток",
      region: "Приморский край",
      favoriteSongs: ["Улетай", "Я русский"],
      performances: ["Городской фестиваль 'Восточная звезда', 2024"],
      about: "Елена занимается в музыкальной школе и мечтает встретиться с SHAMAN.",
      photoUrl: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000"
    }
  ]
};

export const russiaRegions = [
  { id: "moscow", name: "Москва", coordinates: { x: 56.8, y: 38.2 } },
  { id: "petersburg", name: "Санкт-Петербург", coordinates: { x: 34.3, y: 32.1 } },
  { id: "kazan", name: "Казань", coordinates: { x: 61.5, y: 49.9 } },
  { id: "novosibirsk", name: "Новосибирск", coordinates: { x: 66.2, y: 83.1 } },
  { id: "vladivostok", name: "Владивосток", coordinates: { x: 43.2, y: 132.5 } }
];

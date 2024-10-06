import CustomizationCard from '@/components/customization-card';

const themes = [
  { title: 'Dark Elegance', image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13', author: 'Jane Doe', downloads: 15000 },
  { title: 'Neon Nights', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', author: 'John Smith', downloads: 12000 },
  { title: 'Minimalist White', image: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6', author: 'Alice Johnson', downloads: 10000 },
  { title: 'Nature Inspired', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9', author: 'Bob Wilson', downloads: 8000 },
];

export default function ThemesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Windows Themes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {themes.map((theme) => (
          <CustomizationCard
            key={theme.title}
            title={theme.title}
            image={theme.image}
            author={theme.author}
            downloads={theme.downloads}
            type="theme"
          />
        ))}
      </div>
    </div>
  );
}
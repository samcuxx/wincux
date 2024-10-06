import CustomizationCard from '@/components/customization-card';

const skins = [
  { title: 'Transparent Glass', image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13', author: 'Noah Clark', downloads: 25000 },
  { title: 'Dark Mode Pro', image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13', author: 'Isabella White', downloads: 22000 },
  { title: 'Colorful Gradients', image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13', author: 'James Anderson', downloads: 20000 },
  { title: 'Minimalist Clean', image: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13', author: 'Sophia Garcia', downloads: 18000 },
];

export default function SkinsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Windows Skins</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skins.map((skin) => (
          <CustomizationCard
            key={skin.title}
            title={skin.title}
            image={skin.image}
            author={skin.author}
            downloads={skin.downloads}
            type="skin"
          />
        ))}
      </div>
    </div>
  );
}
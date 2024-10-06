import CustomizationCard from '@/components/customization-card';

const icons = [
  { title: 'Flat Design Icons', image: 'https://images.unsplash.com/photo-1618609377864-68609b857e90', author: 'Emma Davis', downloads: 20000 },
  { title: 'Retro Icons Pack', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0', author: 'Michael Brown', downloads: 18000 },
  { title: 'Pastel Icons', image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb', author: 'Sophie Taylor', downloads: 15000 },
  { title: 'Minimalist Icons', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868', author: 'David Lee', downloads: 12000 },
];

export default function IconsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Windows Icons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {icons.map((icon) => (
          <CustomizationCard
            key={icon.title}
            title={icon.title}
            image={icon.image}
            author={icon.author}
            downloads={icon.downloads}
            type="icon"
          />
        ))}
      </div>
    </div>
  );
}
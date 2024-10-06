import CustomizationCard from '@/components/customization-card';

const cursors = [
  { title: 'Neon Glow Cursors', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', author: 'Liam Wilson', downloads: 10000 },
  { title: 'Pixel Art Cursors', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', author: 'Olivia Martinez', downloads: 8000 },
  { title: 'Elegant Monochrome', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', author: 'Ethan Thompson', downloads: 7000 },
  { title: 'Futuristic Cursors', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f', author: 'Ava Robinson', downloads: 6000 },
];

export default function CursorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Windows Cursors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cursors.map((cursor) => (
          <CustomizationCard
            key={cursor.title}
            title={cursor.title}
            image={cursor.image}
            author={cursor.author}
            downloads={cursor.downloads}
            type="cursor"
          />
        ))}
      </div>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">Welcome to WinCustomize</h1>
      <p className="mb-8 text-xl">
        Discover amazing themes, icons, cursors, and skins to personalize your Windows experience.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {['Themes', 'Icons', 'Cursors', 'Skins'].map((category) => (
          <Link key={category} href={`/${category.toLowerCase()}`}>
            <Button variant="outline" className="w-full h-32 text-lg">
              Explore {category}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

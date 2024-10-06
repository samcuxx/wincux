import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CustomizationCardProps {
  title: string;
  image: string;
  author: string;
  downloads: number;
  type: 'theme' | 'icon' | 'cursor' | 'skin';
}

export default function CustomizationCard({ title, image, author, downloads, type }: CustomizationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">by {author}</p>
        <p className="text-sm text-muted-foreground">{downloads} downloads</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">Download {type}</Button>
      </CardFooter>
    </Card>
  );
}
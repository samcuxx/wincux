'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Palette, Image, MousePointer2, Monitor } from 'lucide-react'

const sidebarItems = [
  { name: 'Themes', href: '/themes', icon: Palette },
  { name: 'Icons', href: '/icons', icon: Image },
  { name: 'Cursors', href: '/cursors', icon: MousePointer2 },
  { name: 'Skins', href: '/skins', icon: Monitor }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-card text-card-foreground w-64">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {sidebarItems.map(item => (
            <Link
              key={item.name}
              href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

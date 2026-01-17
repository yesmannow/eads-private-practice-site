import * as LucideIcons from 'lucide-react';
import { ReactNode } from 'react';

/**
 * Maps icon name strings to Lucide React icon components
 */
export function getIconComponent(iconName: string): ReactNode {
  // Capitalize first letter to match Lucide export names
  const IconComponent = (LucideIcons as any)[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found, using Heart as fallback`);
    return <LucideIcons.Heart className="w-8 h-8 text-accent" />;
  }

  return <IconComponent className="w-8 h-8 text-accent" />;
}

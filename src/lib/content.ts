import 'server-only';
import fs from 'fs';
import path from 'path';
import type * as ContentTypes from './content-types';

// Re-export types for convenience
export type {
  SiteSettings,
  NavigationItem,
  Navigation,
  HomepageContent,
  AboutPageContent,
  FAQ,
  FeesPolicies,
  Specialty,
  Resource,
  PrivacyPolicyContent,
} from './content-types';

// Content directory path
const contentDir = path.join(process.cwd(), 'content');

/**
 * Read and parse a JSON content file
 */
export async function getContentFile<T>(filename: string): Promise<T> {
  const filePath = path.join(contentDir, filename);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading content file ${filename}:`, error);
    throw new Error(`Failed to load content file: ${filename}`);
  }
}

/**
 * Read all JSON files from a directory (for collections)
 */
export async function getContentCollection<T>(
  collectionDir: string,
  sortBy?: string,
  order: 'asc' | 'desc' = 'asc'
): Promise<T[]> {
  const collectionPath = path.join(contentDir, collectionDir);

  try {
    if (!fs.existsSync(collectionPath)) {
      return [];
    }

    const files = fs.readdirSync(collectionPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const items: T[] = [];

    for (const file of jsonFiles) {
      const filePath = path.join(collectionPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const item = JSON.parse(fileContents) as T;
      items.push(item);
    }

    // Sort if sortBy is provided
    if (sortBy) {
      items.sort((a, b) => {
        const aVal = (a as any)[sortBy];
        const bVal = (b as any)[sortBy];

        if (aVal === undefined || bVal === undefined) return 0;

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return order === 'asc' ? aVal - bVal : bVal - aVal;
        }

        const aStr = String(aVal);
        const bStr = String(bVal);
        return order === 'asc'
          ? aStr.localeCompare(bStr)
          : bStr.localeCompare(aStr);
      });
    }

    return items;
  } catch (error) {
    console.error(`Error reading content collection ${collectionDir}:`, error);
    return [];
  }
}


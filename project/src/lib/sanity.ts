import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // You'll get this after creating a Sanity project
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-20',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'nea3uhy1', 
  dataset: 'production', 
  apiVersion: '2024-12-31', 
  useCdn: true, 
});

export default client;

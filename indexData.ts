// indexData.ts
import typesenseClient from './typesenseClient';
import data from './data.json';

async function indexData() {
  const collectionName = 'books';

  try {
    // Create a collection
    await typesenseClient.collections().create({
        name: collectionName,
        fields: [
            { name: 'id', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'publication_year', type: 'int32' },
        ],
    });

    // Index documents
    await typesenseClient.collections(collectionName).documents().import(data);

    console.log('Data indexed successfully.');
  } catch (error) {
    console.error('Error indexing data:', error);
  }
}

await indexData();

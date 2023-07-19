// searchData.ts
import typesenseClient from './typesenseClient';

async function searchBooks(query: string) {
  const searchParameters = {
    q: query,
    query_by: 'title', // Search field, you can add more fields here for more advanced search
  };

  try {
    const searchResults = await typesenseClient.collections('books').documents().search(searchParameters);
    console.log('Search results:', searchResults);
  } catch (error) {
    console.error('Error searching data:', error);
  }
}

searchBooks('1984'); // Replace with your desired search query

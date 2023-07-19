// typesenseClient.ts
import 'dotenv/config'
import Typesense from 'typesense';

const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST as string, // Replace with your Typesense server host
      port: Number(process.env.TYPESENSE_PORT),      // Replace with your Typesense server port
      protocol: process.env.TYPESENSE_PROTOCOL as string,  // Use 'https' if your server runs on HTTPS
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY as string, // Replace with your Typesense API key
});

export default typesenseClient;

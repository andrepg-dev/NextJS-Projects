import { type NextRequest } from 'next/server';
import gsmarena from 'gsmarena-api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  if (!query) return Response.json({ error: 'No query provided' });

  const devices = await gsmarena.search.search(query);
  return Response.json(devices);
}

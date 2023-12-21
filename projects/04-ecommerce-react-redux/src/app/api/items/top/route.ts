import gsmarena from 'gsmarena-api';

interface TopItem {
  position: number;
  id: string;
  name: string;
  favorites: number;
}

interface TopItemResponse {
  list: Array<TopItem>;
}

export async function GET() {
  const items: Array<TopItemResponse> = await gsmarena.top.get();
  const res = items[0].list;

  return Response.json(res);
}

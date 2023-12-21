import gsmarena from 'gsmarena-api';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) return Response.json({ error: 'No id device provided' });

  console.log('USO DE LA API DE GSMARENA');

  try {
    const device = await gsmarena.catalog.getDevice(id);

    console.log('DISPOSITIVO ENCONTRADO', device);
    return Response.json(device);
  } catch (error) {
    return Response.json({ error: 'Device ID not found' }, { status: 404 });
  }
}

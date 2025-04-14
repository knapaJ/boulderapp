import fs from 'fs/promises';

const GET = async ({ params }) => {
  const filepath = "./uploads/" + params.path.toString();
  try {
    const imageBuffer = await fs.readFile(filepath);
    return new Response(imageBuffer);
  } catch (e) {
    return new Response("image not found", { status: 404 });
  }
};

export { GET };
//# sourceMappingURL=_server.ts-C6H9Ub81.js.map

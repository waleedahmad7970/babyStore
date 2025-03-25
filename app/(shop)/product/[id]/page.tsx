export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const productId = (await params).id;
  return (
    <div>
      <h2>Product ID: {productId}</h2>
    </div>
  );
}

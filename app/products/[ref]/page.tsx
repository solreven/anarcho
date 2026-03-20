import { altProductData } from "@/app/data/altProducts";

interface Params {
  ref: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { ref } = await params;
  const product = altProductData.find((item) => item.ref === ref);
  console.log(product);
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <p className="text-xl">{product?.name}</p>
        <p className="text-xl">{product?.brand}</p>
        <p className="text-xl">{product?.price}</p>
        <p className="text-xl">{product?.description}</p>
        <p className="text-xl">{product?.stock}</p>
      </main>
    </>
  );
}

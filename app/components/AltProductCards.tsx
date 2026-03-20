import Link from "next/link";
import Image from "next/image";
import { altProductData } from "@/app/data/altProducts";

export default function AltProductCards() {
  return (
    <div className="flex flex-wrap justify-center">
      {altProductData.map((product, index) => (
        <Link href={`/products/${product.ref}`} key={product.name + index}>
          <button className="w-[350px] h-[300px] p-8 relative group">
            <div className="absolute z-10 translate-x-1/2 translate-y-1/2 bottom-1/2 right-1/2">
              <p className="p-2 text-3xl bg-opacity-50 rounded-lg select-none bg-slate-600">
                {product.name}
              </p>
            </div>
            <Image
              className="object-cover w-full h-full transition-all group-hover:blur-sm"
              alt={product.name}
              width={600}
              height={600}
              src={product.image}
            />
          </button>
        </Link>
      ))}
    </div>
  );
}

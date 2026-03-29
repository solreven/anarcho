import Image from "next/image";

// This looks like it might actually be an interface and not a job for types.
type image_type = {
  src: string;
  alt: string;
};

type card_content = {
  title: string;
  image?: image_type;
  description: string;
};
export default function Card({ title, image, description }: card_content) {
  return (
    // Container for the card and its shadow.
    <div className="flex flex-col w-full h-full">
      {/* The card shadow */}
      <div className="pr-3 pt-3 flex flex-col align-left justify-end rounded-3xl bg-[repeating-linear-gradient(135deg,var(--color-primary,red)_-1px,var(--color-primary,red)_1px,transparent_1px,transparent_.32em)] w-full h-full">
        {/* The actual card */}
        <div className="flex flex-col align-center justify-center border-primary border-1 w-full h-full bg-blue-400">
          <h4>{title}</h4>
          <p>{description}</p>
          {image && <Image src={image.src} alt={image.alt} />}
        </div>
      </div>
    </div>
  );
}

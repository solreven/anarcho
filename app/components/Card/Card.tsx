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
    <div className="flex flex-col align-right">
      {/* The card shadow */}
      <div className="flex flex-col align-left justify-end bg-[repeating-linear-gradient(45deg,_var(--color-border)_0_8px,_transparent_8px_16px)]">
        {/* The actual card */}
        <div className="flex flex-col align-center justify-center">
          <h4>{title}</h4>
          <p>{description}</p>
          {image && <Image src={image.src} alt={image.alt} />}
        </div>
      </div>
    </div>
  );
}

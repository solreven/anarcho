// This looks like it might actually be an interface and not a job for types.
export interface ImageType {
  src: string;
  alt: string;
}

export interface ArticleCard {
  id: string;
  title: string;
  image?: ImageType;
  description: string;
}

export interface ArticleCards {
  cards: ArticleCard[];
}

export interface CardProps {
  title: string;
  image?: ImageType;
  description: string;
}

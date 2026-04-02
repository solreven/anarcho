import Card from "../Card/Card";
import type { ArticleCards } from "../../Types/types";

export default function Articles({ cards }: ArticleCards) {
  return (
    <>
      {cards.map((article) => (
        <Card
          title={article.title}
          image={article.image}
          description={article.description}
          key={article.id}
        />
      ))}
    </>
  );
}

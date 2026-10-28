import { ArrowRight } from "lucide-react";
import innovateX from "@/assets/innovate-x.png";
import webforgePoster from "@/assets/webforge-inauguration.png";
import news3 from "@/assets/news-3.jpg";
import aiMythBuster from "@/assets/ai-myth-buster.png";
import bugFix from "@/assets/ieee-bug-fix.png";
import { NEWS, type NewsItem } from "@/data/site";

const IMAGES = [
  innovateX,
  webforgePoster,
  news3,
  aiMythBuster,
  bugFix,
];

export function NewsList({ limit }: { limit?: number }) {
  const items: NewsItem[] = limit ? NEWS.slice(0, limit) : NEWS;

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const imageSrc = IMAGES[i % IMAGES.length];
        const isPoster =
          imageSrc === webforgePoster ||
          imageSrc === aiMythBuster ||
          imageSrc === innovateX ||
          imageSrc === bugFix;

        return (
          <article
            key={item.title}
            className="group flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="aspect-[16/9] overflow-hidden bg-white">
              <img
                src={imageSrc}
                alt={item.title}
                loading="lazy"
                className={`h-full w-full ${
                  isPoster ? "object-cover object-top" : "object-cover"
                } transition-transform duration-500 group-hover:scale-105`}
              />
            </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="text-accent">{item.category}</span> · {item.date}
            </p>

            <h3 className="mt-2 text-base font-bold leading-snug text-primary">
              {item.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            <a
              href="#article"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Read More
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      );
    })}
    </div>
  );
}

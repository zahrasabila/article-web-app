import React from "react";
import { useArticles } from "../hooks/useArticles";
import ArticleCard from "./ArticleCard";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import { AlertCircle } from "lucide-react";
// import { Link } from "react-router-dom";

const ArticleList: React.FC = () => {
  const { data, isLoading, error, isError, refetch } = useArticles();
  const articles = data?.articles ? data.articles.slice(0, 3) : [];

  console.log(articles);

  return (
    <section className="w-full py-8 px-4 md:px-6 lg:px-8 bg-background pb-0">
      <div className="max-w-7xl mx-auto">
        {isLoading && (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-none w-80 snap-center">
                <Skeleton className="h-96 w-full rounded-xl" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12">
            <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
            <p className="text-lg font-medium text-destructive mb-2">
              Failed to load articles
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {error instanceof Error ? error.message : "Please try again"}
            </p>
            <Button onClick={() => refetch()} variant="default">
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !isError && articles.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                documentId={article.documentId}
                id={article.id}
                title={article.title}
                category={article.category}
                cover_image_url={article.cover_image_url}
                description={article.description}
                publishedAt={article.publishedAt}
              />
            ))}
          </div>
        )}

        {!isLoading && !isError && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No featured articles available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleList;

import { Button } from "../components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { useArticlesInfinite } from "../hooks/useArticles";
import { Skeleton } from "../components/ui/skeleton";
import { AlertCircle, ArrowLeft, Loader2, XIcon } from "lucide-react";
import Header from "../components/Header";
import Search from "../components/Search";
import ArticleFilterDialog from "../components/FilterDialog";
import { useEffect, useState } from "react";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams({});
  // const urlTitle = searchParams.get("title") || "";
  // const urlCategory = searchParams.get("category") || "";

  const [categoryName, setCategoryName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (categoryName || searchQuery) {
      setSearchParams({ category: categoryName, title: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [categoryName, setSearchParams, searchQuery]);

  const handleClearAll = () => {
    setSearchQuery("");
    setCategoryName("");
  };

  const hasActiveFilters = searchQuery || categoryName;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useArticlesInfinite({ categoryName, title: searchQuery });

  const articles = data?.pages.flatMap((page) => page.data) ?? [];

  console.log(articles);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-25">
        <div className="mb-8 flex flex-col">
          <Button
            asChild
            variant="link"
            className="mb-4 items-left justify-start self-start"
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5 mr-1" /> Back to home
            </Link>
          </Button>
          <div className="flex flex-col gap-4">
            <Search value={searchQuery} onSearch={setSearchQuery} />
            <div className="flex flex-row gap-4">
              <ArticleFilterDialog
                value={categoryName}
                onChange={setCategoryName}
              />
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearAll}
                  className="w-fit items-center"
                >
                  <XIcon className="h-3 w-3 mr-1 items-center  self-center" />
                  Clear All Filters & Search
                </Button>
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold">All Articles</h1>
          <p className="text-muted-foreground mt-1">
            {articles.length} articles loaded
          </p>
        </div>

        {isLoading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-96 rounded-xl" />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12">
            <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-4" />
            <p className="text-lg font-medium text-red-600 mb-2">
              Failed to load
            </p>
            <Button onClick={() => refetch()}>Try Again</Button>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {hasNextPage && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="gap-2"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}

        {!hasNextPage && articles.length > 0 && (
          <p className="text-center py-8 text-muted-foreground">
            You've seen all articles
          </p>
        )}

        {!isLoading && articles.length === 0 && (
          <p className="text-center py-12 text-muted-foreground">
            No articles found
          </p>
        )}
      </div>
    </main>
  );
}

// src/hooks/useArticles.ts
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchArticleById,
  fetchArticles,
  fetchArticlesInfinite,
  type ApiResponse,
  type Article,
} from "../services/api";

export interface ArticlesData {
  articles: Article[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export const useArticles = () => {
  return useQuery<ApiResponse, Error, ArticlesData>({
    queryKey: ["articles", "featured"],
    queryFn: fetchArticles,
    select: (apiResponse) => ({
      articles: apiResponse.data ?? [],
      pagination: apiResponse.meta.pagination,
    }),
  });
};

export default function useGetArticleDetails({ slug }: { slug: string }) {
  const getArticle = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/articles/${slug}`
    );

    if (!response.ok) {
      throw new Error("Fetching Error");
    }

    const result: any = await response.json();
    console.log(slug);
    return result;
  };

  return useQuery({
    queryKey: ["article", slug],
    queryFn: getArticle,
    refetchOnWindowFocus: false,
  });
}

export const useArticlesInfinite = ({ categoryName = "", title = "" }) => {
  return useInfiniteQuery({
    queryKey: ["articles", "infinite", { categoryName, title }],
    queryFn: ({ pageParam = 1 }) =>
      fetchArticlesInfinite({
        page: pageParam,
        pageSize: 10,
        categoryName,
        title,
      }),
    getNextPageParam: (lastPage) => {
      const { page, pageCount } = lastPage.meta?.pagination || {};
      return page < pageCount ? page + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useArticleById = (documentId: string) => {
  return useQuery({
    queryKey: ["article", documentId],
    queryFn: () => fetchArticleById(documentId),
    enabled: !!documentId,
    staleTime: Infinity,
  });
};

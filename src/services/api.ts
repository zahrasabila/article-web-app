import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cover_image_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: {
    id: number;
    documentId: string;
    name: string;
    description: string;
  };
  comments: Array<{
    id: number;
    documentId: string;
    content: string;
    createdAt: string;
  }>;
}

export interface ApiResponse {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Comment {
  id: number;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface ApiResponseComments {
  data: Comment[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const fetchArticles = async (): Promise<ApiResponse> => {
  const response = await api.get<ApiResponse>("/articles?populate=*");
  console.log(response.data);
  return response.data;
};

export const fetchArticlesInfinite = async (params: any) => {
  const { page, pageSize, title, categoryName } = params;
  const searchParams = new URLSearchParams();
  searchParams.append("pagination[page]", String(page));
  searchParams.append("pagination[pageSize]", String(pageSize));
  searchParams.append("populate", "*");
  if (title) searchParams.append("filters[title][$containsi]", title);
  if (categoryName)
    searchParams.append("filters[category][name][$eqi]", categoryName);

  const res = await api.get("/articles", { params: searchParams });
  return res.data;
};
export const fetchArticleById = async (documentId: string) => {
  const res = await api.get(`/articles/${documentId}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
  console.log(res.data);
  console.log("TOKEN:", import.meta.env.VITE_API_TOKEN);
  return res.data;
};

export const fetchAllComments = async (): Promise<ApiResponseComments> => {
  const response = await api.get("/comments");
  return response.data;
};

export const fetchCategories = async () => {
  const res = await api.get("/categories");
  console.log(res.data);
  return res.data;
};

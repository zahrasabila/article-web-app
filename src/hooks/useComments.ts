import { useQuery } from "@tanstack/react-query";
import { fetchAllComments, type ApiResponseComments } from "../services/api";

export const useComments = () => {
  return useQuery<ApiResponseComments>({
    queryKey: ["comments"],
    queryFn: fetchAllComments,
  });
};

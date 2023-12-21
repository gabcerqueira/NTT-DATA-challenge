import { HttpResponse } from "../../api/@types/httpClient";
import { Api } from "../../api/api";
import { Movie } from "../../models/Movie";

const fetchMovie = async (
  title: string,
  { rejectWithValue }: any
): Promise<Movie | undefined> => {
  try {
    const api = new Api();

    const axiosResponse = (await api.Fetch({
      method: "get",
      url: `/api/movies/${title}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
      },
    })) as HttpResponse<Movie>;

    return axiosResponse.body;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
};

export const MovieService = {
  fetchMovie,
};

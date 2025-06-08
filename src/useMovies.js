import { useState, useEffect } from "react";
const key = "a07b6cea";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      // callback?.(); -> removed temporarily due to unexpected infinty errors
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error("Oops ! something went wrong");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Not found");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.message === "The user aborted a request.") return;

          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}

import { getValue, SetValue } from "@/utils/localStorage";
import { RATE_STATUS } from "@/utils/consts";

const CheckRating = (movies) => {
  let rates = getValue("rates_user");
  if (rates && rates.length) {
    movies = movies.map((movie) => {
      let rate = rates.find((r) => r.movie_id === movie.id);
      if (rate) {
        movie = { ...movie, rate: rate.status };
        if (rate.status === RATE_STATUS.LIKE) {
          return { ...movie, likes: movie.likes++ };
        } else {
          return { ...movie, dislikes: movie.dislikes++ };
        }
      } else {
        return { ...movie, rate: RATE_STATUS.NOT_RATED };
      }
    });
  } else {
    movies = movies.map((movie) => {
      return { ...movie, rate: RATE_STATUS.NOT_RATED };
    });
  }
  return movies;
};

const AddRate = (id, status, movies) => {
  var rates = getValue("rates_user");
  if (rates) {
    movies = movies.map((movie) => {
      if (movie.id == id) {
        if (movie.rate === status) {
          movie =
            status === RATE_STATUS.LIKE
              ? { ...movie, likes: movie.likes-- }
              : { ...movie, dislikes: movie.dislikes-- };
          return { ...movie, rate: RATE_STATUS.NOT_RATED };
        } else if (status === RATE_STATUS.LIKE) {
          movie =
            movie.rate == RATE_STATUS.DISLIKE
              ? {
                  ...movie,
                  dislikes: movie.dislikes--,
                  likes: movie.likes++,
                }
              : { ...movie, likes: movie.likes++ };
          return { ...movie, rate: RATE_STATUS.LIKE };
        } else if (status === RATE_STATUS.DISLIKE) {
          movie =
            movie.rate == RATE_STATUS.DISLIKE
              ? {
                  ...movie,
                  dislikes: movie.dislikes++,
                  likes: movie.likes--,
                }
              : { ...movie, likes: movie.dislikes++ };
          return { ...movie, rate: RATE_STATUS.DISLIKE };
        }
      }
    });
    let rate = rates.find((r) => r.movie_id === id);
    if (rate) {
      rates = rates.map((r) => {
        if (r.movie_id === id) {
          return { ...r, status };
        }
      });
    } else {
      rates.push({ movie_id: id, status });
    }
  } else {
    rates = [{ status, movie_id: id }];
    movies = movies.map((movie) => {
      if (movie.id == id) {
        movie = { ...movie, rate: status };
        if (status === RATE_STATUS.LIKE) {
          return { ...movie, likes: movie.likes++ };
        } else {
          return { ...movie, dislikes: movie.dislikes++ };
        }
      } else {
        return movie;
      }
    });
  }
  SetValue("rates_user", rates);
  return movies;
};

export { CheckRating, AddRate };

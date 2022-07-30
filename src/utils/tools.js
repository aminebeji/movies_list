export const ChangePagination = (pagination , movies) => {
  let offset = (pagination.currentPage - 1) * pagination.moviesPerPage;
  let SecondOffset = offset == 0 ? 1 : offset;
  console.log(offset);
  console.log(SecondOffset);
  let currentMovie = movies.slice(
    offset,
    pagination.moviesPerPage * SecondOffset
  );
  let moviesLength = movies.length;
  let pages = Math.ceil(moviesLength / 6);
  return { ...pagination, movies: currentMovie, moviesLength, pages };
};

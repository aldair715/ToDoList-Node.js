const ERROR_404 = (req, res) => {
  res.status(404);
  res.render("error", {
    title: "Error 404 NOT FOUND",
    message: "Pagina buscada inexistente",
  });
};
export default {
  ERROR_404,
};

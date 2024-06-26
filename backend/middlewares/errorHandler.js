const errorHandler = async (err, req, res, next) => {
  const statuscode = res.statusCode ? res.statusCode : 500;
  res.status(statuscode);
  res.json({
    message: err.message,
  });
};

module.exports = {
  errorHandler,
};

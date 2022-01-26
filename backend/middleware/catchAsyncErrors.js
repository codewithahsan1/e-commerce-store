
// catchAsyncErrors means try catch nhi likna ha 

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};


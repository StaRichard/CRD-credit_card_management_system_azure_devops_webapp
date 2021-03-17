// const notFound = (req, res, next) => {
//     const err = new Error(`Not Found - ${req.originalUrl}`);
//     res.status(404);
//     next(err);
// }

// const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack
//     });
// }


function errorHandler(err, req, res, next) {
    let statusCode = 500;
    switch (true) {
        default:
            statusCode = res.statusCode;
            return res.status(statusCode).json({ message: err.message });
    }
}

module.exports = { errorHandler };

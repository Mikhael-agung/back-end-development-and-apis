const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.status = 404;
    next(error);
};

const finalErrorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = status === 500
        ? 'Internal Server Error (Check Server Logs)'
        : err.message;

    res.status(status).json({
        error: true,
        status,
        message
    });
};

export { notFoundHandler, finalErrorHandler };
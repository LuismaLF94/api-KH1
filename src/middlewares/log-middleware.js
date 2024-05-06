export function loggerMiddleware(req, res, next) {
    const fecha = new Date().toISOString();
    const metodo = req.method;
    const ruta = req.originalUrl;
  
    console.log(`[${fecha}] [${metodo}] [${ruta}]`);
    next();
  }
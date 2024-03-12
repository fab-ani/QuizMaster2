export default function(req, res, next){
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
};
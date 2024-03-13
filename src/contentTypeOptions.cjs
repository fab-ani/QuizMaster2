export default function(req, res, next){
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    if(req.url !== '/' && !req.url.endsWith('.html')){
        res.setHeader('Content-Type', 'text/html;charset=utf-8');

    }else{
        res.setHeader('Cache-Control', 'no-store');

    }

    res.setHeader('Cache-Control',  'public, max-age=31536000, immutable');
    next();
};
function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url)
    }
    next();
}

const express = require('express')
const app = express()
app.use(requireHTTPS)

app.use(express.static('./dist/portfolio'))

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/portfolio'})
})

app.listen(process.env.PORT || 8080, function(){
    console.log(`listening on port ${process.env.PORT===undefined?8080:process.env.PORT}`);
})

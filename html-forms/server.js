import http from 'http'
import filesystem from 'fs'

http.createServer((request, response) => {
   const url = request.url
   const method = request.method
   console.log('Access-Log', method, url)

   if (url == '/' || url == 'order.html') {
       response.writeHead(200, {'Content-Type': 'text/html'})
       const index = filesystem.readFileSync("index.html")
       response.end(index)
    } else if (url == '/form.js' && method == 'POST') {
        // response.body is undefined -> bodyparser necessary => express! 
        console.log('JUHU Formulardaten sind im Server angekommen', request.body)
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.end('Danke schön. Wir melden uns bei Ihnen.')  
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'})
        response.end('Page does not exist.')
   }
}).listen(8800);


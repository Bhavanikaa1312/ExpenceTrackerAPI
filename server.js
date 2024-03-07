const fs = require('fs')
const http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    })

    // Sending a simple response
    // response.write('welcome')

    // Serving a HTML file
    const file = fs.readFileSync('./index.html')
    response.write(file)

    response.end()
}).listen(4000, function() {
    console.log('Listening on port 4000...')
})
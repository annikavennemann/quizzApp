import express from 'express'
import bodyParser from 'body-parser'

const server = express()

server.use(bodyParser.json());
// salutation=m&firstname=huhu&lastname=huhuhu&email=huhu%40huhu&agb=on&tariftype=premium&component2=on&note=eine+notiz+vorm+mittag
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', (request, response) => {
   response.sendFile('./index.html', { root: '.' })
})

server.post('/contact-form-post', (request, response) => {
    console.log('Formulardaten sind im Server angekommen:', request.body)
    response.status(200)
    response.type('html')
    response.end('Danke schön. Wir melden uns bei Ihnen.')
})

server.listen(8080, () => {
   console.log('Server started ...')
})

const http = require("http");

const server = http.createServer((request, response) => {
    if(request.url=='/'&& request.method=='GET')
    response.end(JSON.stringify({"message":"Accediendo al servidor"}));
});

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Servidor ejecutándose en: http://${host}:${port}`);
});

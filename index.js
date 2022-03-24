const express = require('express')
const app = express()
const port = 3000
var html_to_pdf = require('html-pdf-node');

app.get('/', (req, res) => {
	//let options = { format: 'A4', path: "invoice.pdf"};
	let file = { url: "http://localhost:3000/invoice.html" };
	html_to_pdf.generatePdf(file).then(pdfBuffer => {
	  res.end("generated invoice.pdf");
	});
})

app.get('/invoice.html', (req, res) => {
	res.sendFile(__dirname + '/invoice.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
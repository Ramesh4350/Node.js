const fs = require("fs");
const PDFDocument = require("pdfkit");

const orderId = process.argv[2];

const doc = new PDFDocument();
const fileName = `invoice_${orderId}.pdf`;

doc.pipe(fs.createWriteStream(fileName));
doc.fontSize(20).text(`Invoice for orderId : ${orderId}`, 100, 200);
doc.end();

console.log(`Invioce ${fileName} generated successfully.`);

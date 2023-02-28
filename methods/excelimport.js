// const Excel = require('exceljs');
// const fs = require('fs');
// const path = require('path');

// // get Excel file path
// const filePath = path.resolve(__dirname, '..', 'spreadsheets', 'speed-feed-rate.xlsx');

// // read Excel file
// const workbook = new Excel.Workbook();
// workbook.xlsx.readFile(filePath)
//   .then(() => {
//     // convert workbook to json
//     const json = workbook.toJSON();
//     // write json to file
//     fs.writeFileSync('../spreadsheets/speed-feed-rate.json', JSON.stringify(json));
//   });

// // read json file
// // const jsonFile = fs.readFileSync('../spreadsheets/speed-feed-rate.json');
// // const jsonData = JSON.parse(jsonFile);
// // console.log(jsonData);

const xlsx = require('xlsx');
const fs = require('fs');

// Create workbook object from spreadsheet file
const workbook = xlsx.readFile('./spreadsheets/speed-feed-rate.xlsx', { cellDates: true });
// const worksheet = workbook.Sheets['Sheet1'];
console.log(workbook.SheetNames)



// const json = xlsx.utils.sheet_to_json(worksheet);

// // Convert the JSON object to a string
// const jsonString = JSON.stringify(json, null, 4);

// // Write the JSON string to a file
// fs.writeFile('./spreadsheets/speed-feed-rate.json', jsonString, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("JSON file has been saved.");
//     }
// });

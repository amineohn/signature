const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3001;
const AdmZip = require("adm-zip");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");

app.use(fileupload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});
app.use(
  "/img",
  express.static(path.join(__dirname, "/generated/assets/images"))
);
app.use("/download", express.static(path.join(__dirname, "/extracted")));
app.use("/assets", express.static(path.join(__dirname, "/generated/assets")));

app.get(`/api/preview`, (req, res) => {
  res.sendFile(`${__dirname}/generated/index.html`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post(`/generate`, upload.single("file"), (req, res) => {
  console.log(`
      firstName:\n ${req.body.firstName}\n
      lastName:\n ${req.body.lastName}\n
      function:\n ${req.body.function}\n
      mail:\n ${req.body.mail}\n
      proNumber:\n ${req.body.proNumber}\n
      number:\n ${req.body.number}\n
      link:\n ${req.body.link}\n
      fileName:\n ${req.file?.filename}\n
  `);
  res.send("Successfully uploaded!");
  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
    xmlns="http://www.w3.org/TR/REC-html40">
    
    <head>
    <meta charset="utf-8">
    <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
    <meta name=ProgId content=Word.Document>
    <meta name=Generator content="Microsoft Word 15">
    <meta name=Originator content="Microsoft Word 15">
    <link rel=File-List href="/assets/filelist.xml">
    <link rel=themeData href="/assets/themedata.thmx">
    <link rel=colorSchemeMapping href="/assets/colorschememapping.xml">
    <meta content="text/html; charset=utf-8" http-equiv=Content-Type>
    <table style="border-spacing: 0px;">  
      <tr>
          <td>
            <a href="https://les-detritivores.org/" style="text-decoration:none"><img moz-do-not-send="false" style="" src="../img/${req.file?.filename}" alt="image profil"/>
          </td>
    
          <td style="padding-top: 0px; padding-left: 10px;">

            <span style="font-family: Arial, Helvetica, Sans-Serif; font-size: 15pt;  color: #e94e1b;"><strong>${req.body.firstName} ${req.body.lastName}</strong>
              <br />
      
              <span style="font-size: 11pt; font-family: Arial, Helvetica, Sans-Serif; color: #263b29;">
                <strong>${req.body.function}</strong>
              </span>
            </span>

            <br />
            <br />

            <span style="color: #263b29 ;font-size: 9pt;font-family: Arial, Helvetica, Sans-Serif; white-space: nowrap; font-weight: 700">
              ${req.body.mail}
            </span>
            <br />
            <span style="color: #263b29 ;font-size: 9pt;font-family: Arial, Helvetica, Sans-Serif; white-space: nowrap; font-weight: 500">
              ${req.body.proNumber}
            </span>
            <br />
            <span style="color: #263b29 ;font-size: 9pt;font-family: Arial, Helvetica, Sans-Serif; white-space: nowrap; font-weight: 500">
              ${req.body.number}
            </span>
      
            <br />
            <span style="font-family: Arial, Helvetica, Sans-Serif; font-size: 9pt;  color: #263b29; font-weight: 500">${req.body.adress}</span>
            <br />
            <a href="https://${req.body.link}/">
              <span style="font-family:  Arial, Helvetica, Sans-Serif; font-size: 8.5pt; color: #e94e1b; font-weight: 900">${req.body.link}</span>
            </a>

            <table style="border-spacing: 0px;">
              <th>
                <a mc:disable-tracking href="https://www.facebook.com/lesdetritivores/" style="text-decoration: none;">
                  <img style="vertical-align: bottom; padding-top: 10px; margin-left: 0px;" data-input="facebook" data-tab="social" src="../img/facebook.png" />
                </a>
              </th>
      
              <th>
                <a mc:disable-tracking href="https://www.instagram.com/lesdetritivores/?hl=fr" style="text-decoration: none;">
                  <img style="vertical-align: bottom; padding-top: 12px; margin-left: 4px" data-input="insta" data-tab="social" src="../img/insta.png" />
                </a>
              </th>
      
              <th>
                <a mc:disable-tracking href="https://www.linkedin.com/company/les-détritivores/?originalSubdomain=fr" style="text-decoration: none; margin-left: 4px">
                  <img style=" vertical-align: bottom; padding-top: 12px;" data-input="linkedin" data-tab="social" src="../img/linkedin.png" />
                </a>
              </th>
          </table>
    </table>
  `;
  res.json({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    function: req.body.function,
    mail: req.body.mail,
    proNumber: req.body.proNumber,
    number: req.body.number,
    link: req.body.link,
    filename: req.file.filename,
  });
  fs.writeFile("src/generated/index.html", html, (err) => {
    if (err) throw err;
    const file = new AdmZip();
    file.addLocalFolder("src/generated");
    file.writeZip("src/extracted/signature.zip");
  });
});

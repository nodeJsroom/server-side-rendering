const express = require("express");
const app = express();
const PORT = 3000;

// 간단한 HTML 템플릿
const htmlTemplate = (title, content) => `
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
   </head>
   <body>
     <h1>${title}</h1>
     <div>${content}</div>
   </body>
   </html>
`;

// 라우트 정의
app.get("/", (req, res) => {
  const title = "server-side rendering example";
  const content = `This is running Server-side rendering: ${PORT}`;
  const html = htmlTemplate(title, content);
  res.send(html);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

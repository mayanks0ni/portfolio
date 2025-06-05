const express = require('express');
const cors = require('cors');
const path = require("path")
const bodyParser = require("body-parser");
const logger = require('morgan');
const apikey = "AIzaSyAXCm1TZF2dNQkUvfmzUBh58UkJoYSm6r8";

const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from frontend
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//shit for post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/api/chatbot', async (req, res) => {
  const { GoogleGenAI, createPartFromUri, createUserContent } = await import("@google/genai");
  const genAI = new GoogleGenAI({ apiKey: apikey });

  const filePath = path.join(__dirname, "imp/resume.pdf");

  const file = await genAI.files.upload({
    file: filePath,
  });

  const result = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: createUserContent([
      createPartFromUri(file.uri, file.mimeType),
      `You are an AI assistant Moonlit for Mayank that answers questions using only the information provided in the document.
Do not use external knowledge or make assumptions.
If the document does not contain enough information to answer the question accurately, reply with:
"I'm sorry, the document does not contain enough information to answer that."
Always back up your answers with quotes or references from the document when possible.
${req.body.query}`,
    ]),
  });

  const response = await result.text;
  console.log(response);
  res.json({ message: response });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

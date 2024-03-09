const express = require('express');
const makeDaPrompt  = require('./Dialogue_Service');

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/gen-video', async (req, res) => {
  const prompt = req.body.prompt;
  
  // make da video prompt
  const ans = await makeDaPrompt(prompt)
  
  res.json({data: ans});
});
const express = require('express');
const makeDaPrompt = require('./Dialogue_Service');
const textToImg = require('./text_to_img');
const uuid = require('uuid').v4;

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/gen-video', async (req, res) => {
  const prompt = req.body.prompt;
  const id = uuid();

  // make da video prompt
  const generatedPrompt = await makeDaPrompt(prompt)
  console.log(generatedPrompt);

  function scenesAndCharactersToArray(data) {
    const scenesArray = [];
    for (const key in data) {
      if (key.startsWith('scene')) {
        const scene = data[key];
        scene.characters = [];
        for (const charKey in scene) {
          if (charKey.startsWith('character')) {
            scene.characters.push(scene[charKey]);
          }
        }
        scenesArray.push(scene);
      }
    }
    return scenesArray;
  }

  const scenesArray = scenesAndCharactersToArray(generatedPrompt)
  console.log(scenesArray);

  async function generateCharacterImages(scenesArray) {
    for (const scene of scenesArray) {
      for (const character of scene.characters) {
        console.log(`generating image for ${character.name} in scene ${scene.title}`);
        const prompt = `${scene.title} - ${character.name}: ${character['image prompt']}`;
        const imgId = id
        const characterName = character.name;
        await textToImg(prompt, imgId, characterName);
      }
    }
  }

  // Assuming scenesArray is already populated
  generateCharacterImages(scenesArray)
    .then(() => console.log("Images generated successfully"))
    .catch(error => console.error("Error generating images:", error));

  // await textToImg(prompt, id, 1);

  res.json({ data: 122 });
});
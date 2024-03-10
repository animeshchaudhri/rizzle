const Replicate = require('replicate');
const axios = require('axios');
const fs = require('fs');

const convertTextToImage = async (prompt, imgId, characterName) => {
  const replicate = new Replicate({
    auth: 'r8_aN5tAnXPtbxZZlLJRI6HFtQY9lmALOL36ThlO',
    userAgent: 'https://www.npmjs.com/package/create-replicate'
  })

  const output = await replicate.run(
    "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    {
      input: {
        width: 768,
        height: 768,
        prompt: `${prompt}`,
        scheduler: "K_EULER",
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 50
      }
    }
  );
  console.log(output);
  // URL of the image you want to download
  const imageUrl = output[0];
  
  // Function to download image
  async function downloadImage(url, path) {
      const writer = fs.createWriteStream(path);
  
      // Send a GET request to the image URL
      const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
      });
  
      // Pipe the image data to the file
      response.data.pipe(writer);
  
      return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
      });
  }
  
  // Path where you want to save the image
  const imagePath = `./generated-assets/${imgId}_${characterName}.jpg`;
  
  // Call the downloadImage function
  downloadImage(imageUrl, imagePath)
      .then(() => console.log('Image downloaded successfully'))
      .catch(error => console.log('Error downloading image:', error));
  
}
// convertTextToImage('spiderman', 123, 1)
module.exports = convertTextToImage;

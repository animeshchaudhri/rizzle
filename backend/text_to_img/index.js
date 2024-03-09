import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()

const replicate = new Replicate({
  auth:'',
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const output = await replicate.run(
  "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
  {
    input: {
      width: 768,
      height: 768,
      prompt: "\A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\n",
      scheduler: "K_EULER",
      num_outputs: 1,
      guidance_scale: 7.5,
      num_inference_steps: 50
    }
  }
);
console.log(output);
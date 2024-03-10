// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyAkCiAV3PE4cXdcW-lDDVis7jfSNYL_vjE";

const makeDaPrompt = async (prompt) => {
  try {

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // const prompt = 'make a super cat who can fly'

    const parts = [
      { text: `${prompt} make many scenes with story line then switch scene give output form of json` },
      { text: "output: {\n \"title\": \"Breaking Bad: The Final Confrontation\",\n \"subtitle\": \"Walter White and Jesse Pinkman face off in a deadly showdown\",\n \"atmosphere\": \"Tense, suspenseful, and action-packed\",\n \"scene1\": {\n  \"character1\": {\n   \"name\": \"Walter White\",\n   \"role\": \"Chemistry teacher turned meth kingpin\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Ruthless\",\n    \"Arrogant\",\n    \"Driven\"\n   ],\n   \"motivations\": [\n    \"To provide for his family\",\n    \"To feel a sense of power and control\",\n    \"To prove his own intelligence\"\n   ],\n   \"challenges\": [\n    \"His declining health\",\n    \"The threat of being caught by the police\",\n    \"His own moral conflicts\"\n   ],\n   \"image prompt\": \"A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\"\n  },\n  \"character2\": {\n   \"name\": \"Jesse Pinkman\",\n   \"role\": \"Walter White's former student and meth-cooking partner\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Loyal\",\n    \"Impulsive\",\n    \"Drug-addicted\"\n   ],\n   \"motivations\": [\n    \"To make money\",\n    \"To escape his unhappy home life\",\n    \"To prove himself to Walter White\"\n   ],\n   \"challenges\": [\n    \"His addiction to drugs\",\n    \"His guilt over the people he has hurt\",\n    \"His fear of Walter White\"\n   ],\n   \"image prompt\": \"A young man with long, messy hair and a scruffy beard. He is dressed in a hoodie and jeans, and he has a look of fear and desperation in his eyes.\"\n  },\n  \"dialogue\": [\n   \"{Walter White}: 'It's over, Jesse. You're finished.'\",\n   \"{Jesse Pinkman}: 'No, it's not over. I'm not going to let you win.'\",\n   \"{Walter White}: 'You have no choice. You're trapped.'\",\n   \"{Jesse Pinkman}: 'I'd rather die than go back to that hellhole.'\",\n   \"{Walter White}: 'Then die you shall.'\",\n   \"{Jesse Pinkman}: 'Go to hell, Heisenberg.'\",\n   \"{Walter White}: 'I'm already there.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dark and empty warehouse. The only light comes from a single flickering bulb hanging from the ceiling. Walter White and Jesse Pinkman are standing in the center of the warehouse, facing each other. They are both armed with guns.\",\n   \"actions or situations\": \"Walter White and Jesse Pinkman are having a tense confrontation. They are both angry and desperate, and they are both willing to kill each other. The scene is building to a climax, and it is clear that one of them is not going to make it out alive.\",\n   \"additional elements\": \"The warehouse is filled with the sound of dripping water and the hum of machinery. The air is thick with tension and fear.\"\n  }\n },\n \"scene2\": {\n  \"character1\": {\n   \"name\": \"Walter White\",\n   \"role\": \"Chemistry teacher turned meth kingpin\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Ruthless\",\n    \"Arrogant\",\n    \"Driven\"\n   ],\n   \"motivations\": [\n    \"To provide for his family\",\n    \"To feel a sense of power and control\",\n    \"To prove his own intelligence\"\n   ],\n   \"challenges\": [\n    \"His declining health\",\n    \"The threat of being caught by the police\",\n    \"His own moral conflicts\"\n   ],\n   \"image prompt\": \"A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\"\n  },\n  \"character2\": {\n   \"name\": \"Hank Schrader\",\n   \"role\": \"Walter White's brother-in-law and DEA agent\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Tenacious\",\n    \"Moral\",\n    \"Loyal\"\n   ],\n   \"motivations\": [\n    \"To uphold the law\",\n    \"To protect his family\",\n    \"To bring Walter White to justice\"\n   ],\n   \"challenges\": [\n    \"The difficulty of catching Walter White\",\n    \"The danger of his job\",\n    \"His own moral struggles\"\n   ],\n   \"image prompt\": \"A middle-aged man with a mustache and short hair. He is dressed in a DEA uniform, and he has a serious expression on his face.\"\n  },\n  \"dialogue\": [\n   \"{Walter White}: 'You're not going to win, Hank. You can't stop me.'\",\n   \"{Hank Schrader}: 'We'll see about that, Heisenberg.'\",\n   \"{Walter White}: 'You're out of your depth. You don't know what you're dealing with.'\",\n   \"{Hank Schrader}: 'I know that you're a murderer. And I'm going to bring you down.'\",\n   \"{Walter White}: 'You're too late. I've already won.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dimly lit interrogation room. Walter White is sitting at a table, handcuffed. Hank Schrader is sitting across from him.\",\n   \"actions or situations\": \"Walter White and Hank Schrader are having a tense confrontation. They are both intelligent and determined, and they both believe that they are right. The scene is building to a climax, and it is clear that one of them is not going to come out of this unscathed.\",\n   \"additional elements\": \"The room is filled with tension and suspense. The only sound is the ticking of the clock.\"\n  }\n }\n}" },
      { text: "output 2: {\n \"title\": \"Breaking Bad: Jesse's Descent into Madness\",\n \"subtitle\": \"Jesse Pinkman struggles to cope with the horrors he has witnessed\",\n \"atmosphere\": \"Dark, disturbing, and psychological\",\n \"scene\": {\n  \"character1\": {\n   \"name\": \"Jesse Pinkman\",\n   \"role\": \"Walter White's former student and meth-cooking partner\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Loyal\",\n    \"Impulsive\",\n    \"Drug-addicted\"\n   ],\n   \"motivations\": [\n    \"To make money\",\n    \"To escape his unhappy home life\",\n    \"To prove himself to Walter White\"\n   ],\n   \"challenges\": [\n    \"His addiction to drugs\",\n    \"His guilt over the people he has hurt\",\n    \"His fear of Walter White\"\n   ],\n   \"image prompt\": \"A young man with long, messy hair and a scruffy beard. He is dressed in a hoodie and jeans, and he has a look of fear and desperation in his eyes.\"\n  },\n  \"character2\": {\n   \"name\": \"Walter White\",\n   \"role\": \"Chemistry teacher turned meth kingpin\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Ruthless\",\n    \"Arrogant\",\n    \"Driven\"\n   ],\n   \"motivations\": [\n    \"To provide for his family\",\n    \"To feel a sense of power and control\",\n    \"To prove his own intelligence\"\n   ],\n   \"challenges\": [\n    \"His declining health\",\n    \"The threat of being caught by the police\",\n    \"His own moral conflicts\"\n   ],\n   \"image prompt\": \"A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\"\n  },\n  \"dialogue\": [\n   \"{Jesse Pinkman}: 'I can't do this anymore. I can't keep living like this.'\",\n   \"{Walter White}: 'You have to. You have to keep going.'\",\n   \"{Jesse Pinkman}: 'But I'm losing my mind. I'm not the same person I used to be.'\",\n   \"{Walter White}: 'You're still the same person. You're just stronger now.'\",\n   \"{Jesse Pinkman}: 'No, I'm not. I'm a monster.'\",\n   \"{Walter White}: 'You're not a monster. You're just a survivor.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dark and empty warehouse. The only light comes from a single flickering bulb hanging from the ceiling. Jesse Pinkman is sitting on the floor, rocking back and forth. He is covered in blood and bruises, and he is clearly traumatized.\",\n   \"actions or situations\": \"Jesse Pinkman is struggling to cope with the horrors he has witnessed. He is haunted by the memories of the people he has killed, and he is afraid that he is losing his mind. Walter White is trying to convince him to keep going, but Jesse is not sure if he can.\",\n   \"additional elements\": \"The warehouse is filled with the sound of dripping water and the hum of machinery. The air is thick with tension and fear.\"\n  }\n }\n}" },
      { text: "output 3: {\n \"title\": \"Breaking Bad: Jesse's Descent into Madness\",\n \"subtitle\": \"Jesse Pinkman struggles to cope with the horrors he has witnessed\",\n \"atmosphere\": \"Dark, disturbing, and psychological\",\n \"scene\": {\n  \"character1\": {\n   \"name\": \"Jesse Pinkman\",\n   \"role\": \"Walter White's former student and meth-cooking partner\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Loyal\",\n    \"Impulsive\",\n    \"Drug-addicted\"\n   ],\n   \"motivations\": [\n    \"To make money\",\n    \"To escape his unhappy home life\",\n    \"To prove himself to Walter White\"\n   ],\n   \"challenges\": [\n    \"His addiction to drugs\",\n    \"His guilt over the people he has hurt\",\n    \"His fear of Walter White\"\n   ],\n   \"image prompt\": \"A young man with long, messy hair and a scruffy beard. He is dressed in a hoodie and jeans, and he has a look of fear and desperation in his eyes.\"\n  },\n  \"character2\": {\n   \"name\": \"Walter White\",\n   \"role\": \"Chemistry teacher turned meth kingpin\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Ruthless\",\n    \"Arrogant\",\n    \"Driven\"\n   ],\n   \"motivations\": [\n    \"To provide for his family\",\n    \"To feel a sense of power and control\",\n    \"To prove his own intelligence\"\n   ],\n   \"challenges\": [\n    \"His declining health\",\n    \"The threat of being caught by the police\",\n    \"His own moral conflicts\"\n   ],\n   \"image prompt\": \"A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\"\n  },\n  \"dialogue\": [\n   \"{Jesse Pinkman}: 'I can't do this anymore. I can't keep living like this.'\",\n   \"{Walter White}: 'You have to. You have to keep going.'\",\n   \"{Jesse Pinkman}: 'But I'm losing my mind. I'm not the same person I used to be.'\",\n   \"{Walter White}: 'You're still the same person. You're just stronger now.'\",\n   \"{Jesse Pinkman}: 'No, I'm not. I'm a monster.'\",\n   \"{Walter White}: 'You're not a monster. You're just a survivor.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dark and empty warehouse. The only light comes from a single flickering bulb hanging from the ceiling. Jesse Pinkman is sitting on the floor, rocking back and forth. He is covered in blood and bruises, and he is clearly traumatized.\",\n   \"actions or situations\": \"Jesse Pinkman is struggling to cope with the horrors he has witnessed. He is haunted by the memories of the people he has killed, and he is afraid that he is losing his mind. Walter White is trying to convince him to keep going, but Jesse is not sure if he can.\",\n   \"additional elements\": \"The warehouse is filled with the sound of dripping water and the hum of machinery. The air is thick with tension and fear.\"\n  }\n }\n}" },
      { text: "output 4: {\n \"title\": \"Breaking Bad: The Road to Redemption\",\n \"subtitle\": \"Jesse Pinkman seeks redemption for his past actions\",\n \"atmosphere\": \"Dark, emotional, and suspenseful\",\n \"scene1\": {\n  \"character1\": {\n   \"name\": \"Jesse Pinkman\",\n   \"role\": \"Former meth-cooking partner of Walter White\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Loyal\",\n    \"Impulsive\",\n    \"Drug-addicted\"\n   ],\n   \"motivations\": [\n    \"To make money\",\n    \"To escape his unhappy home life\",\n    \"To prove himself to Walter White\"\n   ],\n   \"challenges\": [\n    \"His addiction to drugs\",\n    \"His guilt over the people he has hurt\",\n    \"His fear of Walter White\"\n   ],\n   \"image prompt\": \"A young man with long, messy hair and a scruffy beard. He is dressed in a hoodie and jeans, and he has a look of fear and desperation in his eyes.\"\n  },\n  \"character2\": {\n   \"name\": \"Brock Cantillo\",\n   \"role\": \"Jesse's former protégé and the son of Andrea Cantillo\",\n   \"personality traits\": [\n    \"Innocent\",\n    \"Vulnerable\",\n    \"Impressionable\"\n   ],\n   \"motivations\": [\n    \"To have a normal life\",\n    \"To please his mother\",\n    \"To be loved and accepted\"\n   ],\n   \"challenges\": [\n    \"His mother's drug addiction\",\n    \"The influence of Jesse Pinkman\",\n    \"The dangers of living in a violent neighborhood\"\n   ],\n   \"image prompt\": \"A young boy with dark hair and brown eyes. He is wearing a baseball cap and a t-shirt, and he has a shy smile on his face.\"\n  },\n  \"dialogue\": [\n   \"{Jesse Pinkman}: 'Brock, I'm so sorry for what I did.'\",\n   \"{Brock Cantillo}: 'What did you do?'\",\n   \"{Jesse Pinkman}: 'I poisoned you. I gave you ricin.'\",\n   \"{Brock Cantillo}: 'Why?'\",\n   \"{Jesse Pinkman}: 'Because I was angry at your mother. I wanted to hurt her. But I ended up hurting you instead.'\",\n   \"{Brock Cantillo}: 'I forgive you.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dimly lit hospital room. Jesse Pinkman is sitting on a chair next to Brock Cantillo's bed. Brock is lying in bed, asleep.\",\n   \"actions or situations\": \"Jesse Pinkman is visiting Brock Cantillo in the hospital. He is apologizing for poisoning him with ricin. Brock forgives him.\",\n   \"additional elements\": \"The hospital room is filled with the sound of medical equipment. The air is thick with tension and regret.\"\n  }\n },\n \"scene2\": {\n  \"character1\": {\n   \"name\": \"Jesse Pinkman\",\n   \"role\": \"Former meth-cooking partner of Walter White\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Loyal\",\n    \"Impulsive\",\n    \"Drug-addicted\"\n   ],\n   \"motivations\": [\n    \"To make money\",\n    \"To escape his unhappy home life\",\n    \"To prove himself to Walter White\"\n   ],\n   \"challenges\": [\n    \"His addiction to drugs\",\n    \"His guilt over the people he has hurt\",\n    \"His fear of Walter White\"\n   ],\n   \"image prompt\": \"A young man with long, messy hair and a scruffy beard. He is dressed in a hoodie and jeans, and he has a look of fear and desperation in his eyes.\"\n  },\n  \"character2\": {\n   \"name\": \"Walter White\",\n   \"role\": \"Former chemistry teacher turned meth kingpin\",\n   \"personality traits\": [\n    \"Intelligent\",\n    \"Ruthless\",\n    \"Arrogant\",\n    \"Driven\"\n   ],\n   \"motivations\": [\n    \"To provide for his family\",\n    \"To feel a sense of power and control\",\n    \"To prove his own intelligence\"\n   ],\n   \"challenges\": [\n    \"His declining health\",\n    \"The threat of being caught by the police\",\n    \"His own moral conflicts\"\n   ],\n   \"image prompt\": \"A middle-aged man with a shaved head, wearing glasses and a goatee. He is dressed in a black suit and tie, and he has a cold, calculating expression on his face.\"\n  },\n  \"dialogue\": [\n   \"{Jesse Pinkman}: 'Walt, I need your help.'\",\n   \"{Walter White}: 'What do you need?'\",\n   \"{Jesse Pinkman}: 'I need you to help me find Brock's mother.'\",\n   \"{Walter White}: 'Why?'\",\n   \"{Jesse Pinkman}: 'Because I want to make things right. I want to apologize for what I did.'\",\n   \"{Walter White}: 'I'll help you.'\"\n  ],\n  \"scene details\": {\n   \"background image\": \"A dark and dingy warehouse. Jesse Pinkman and Walter White are standing in the middle of the warehouse, talking.\",\n   \"actions or situations\": \"Jesse Pinkman is asking Walter White for help finding Brock Cantillo's mother. Walter White agrees to help.\",\n   \"additional elements\": \"The warehouse is filled with the sound of dripping water and the hum of machinery. The air is thick with tension and regret.\"\n  }\n }\n}  Run to get output  Run to get output add_circleAdd test example" },
      { text: "output: " },
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });

    const response = result.response;
    console.log(response.text());
    return JSON.parse(response.text());
  } catch (error) { console.log(error); }
}

module.exports = makeDaPrompt

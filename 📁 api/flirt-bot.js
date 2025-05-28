import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const { name, interest } = req.body;
    const prompt = `${name} wants to flirt about: ${interest}. Generate a cheeky one-liner or playful message.`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 60
    });

    res.status(200).json({ reply: completion.data.choices[0].text.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

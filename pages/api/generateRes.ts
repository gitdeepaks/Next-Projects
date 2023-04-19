// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import openai from '@/utils/chatgpt';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prompt = req.body.prompt;

  if (!prompt) {
    res.status(404).json({ answer: 'please provide a prompt' });
    return;
  }
  const data = await openai
    .createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 1,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((res) => res.data.choices[0].text);

  res.status(200).json({ answer: data || 'Unable to find the answer!' });
}

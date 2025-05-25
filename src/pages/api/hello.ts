import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const methodHandlers = {
    GET: (): void => res.status(200).json({ message: 'GET' }),
    POST: (): void => res.status(201).json({ message: 'POST' }),
    DELETE: (): void => res.status(200).json({ message: 'DELETE' }),
    default: (): void => res.status(405).json({ error: 'Method not allowed' }),
  };

  const handlerFunc =
    methodHandlers[req.method as keyof typeof methodHandlers] ||
    methodHandlers.default;

  return handlerFunc();
};

export default handler;

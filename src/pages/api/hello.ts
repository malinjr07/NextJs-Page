import type { NextApiRequest, NextApiResponse } from 'next';

type tHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void> | void;

const getTodos = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // Simulate fetching todos from a database
  console.log(req);
  console.log(res);
};
const createTodo = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // Simulate fetching todos from a database
  console.log(req);
  console.log(res);
};

const handler: tHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return getTodos(req, res);
    case 'POST':
      return createTodo(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;

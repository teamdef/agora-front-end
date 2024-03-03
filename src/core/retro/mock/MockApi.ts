import type { NextApiRequest, NextApiResponse } from 'next';
import * as MOCK_RESPONSE from './MockResponse';
import type * as types from '../retroService.types';

export default function handler(req: NextApiRequest, res: NextApiResponse<types.CreateRetroResponse>) {
  if (req.method === 'POST') {
    res.status(200).json(req.body);
  } else {
    // GET 이외의 요청에는 405 Method Not Allowed 반환
    // res.setHeader('Allow', ['POST']);
    // res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

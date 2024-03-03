/** reviews -> retro로 변경 예정 */
import type { NextApiRequest, NextApiResponse } from 'next';
import RetroMockApi from '~/core/retro/mock/MockApi';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  RetroMockApi(req, res);
}

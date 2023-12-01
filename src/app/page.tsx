'use client';

import Button from '@/components/button/Button';
import { ArrowDown } from 'public/assets/svgs';

export default function Page() {
  return (
    <div>
      <Button label="취소" icon={<ArrowDown />} />
    </div>
  );
}

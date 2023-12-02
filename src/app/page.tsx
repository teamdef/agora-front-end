'use client';

import Radio from '@/components/inputs/radio/Radio';

export default function Page() {
  return (
    <div>
      <Radio name="a" disabled />
      <Radio name="a" disabled />
      <Radio name="a" disabled />
      <Radio name="a" checked disabled />
    </div>
  );
}

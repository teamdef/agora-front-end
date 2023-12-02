'use client';

import Button from '@/components/inputs/button/Button';
import CheckBox from '@/components/inputs/checkBox/CheckBox';
import Radio from '@/components/inputs/radio/Radio';

export default function Page() {
  return (
    <div>
      <Radio id="1" name="a" disabled />
      <Radio id="2" name="a" checked disabled />
    </div>
  );
}

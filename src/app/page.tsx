'use client';

import CheckBox from '@/components/inputs/checkBox/CheckBox';

export default function Page() {
  return (
    <div>
      <CheckBox id="list-1" name="a" disabled />
      <CheckBox id="list-2" name="a" checked disabled />
      <CheckBox id="list-3" name="a" />
      <CheckBox id="list-3" name="a" checked />
    </div>
  );
}

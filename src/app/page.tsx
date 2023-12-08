'use client';

import ProfileImage from '@/components/common/profileImage';
import Badge from '@/components/display/Badge';
import Button from '@/components/inputs/button/Button';
import NormalTextField from '@/components/inputs/textField/NormalTextField';

export default function Page() {
  return (
    <div>
      <ProfileImage />
      <Button label="zz" outlined />
      <Badge label="시작 전" status="inProgress" />
      <NormalTextField maxLength={20} placeholder="dd" />
    </div>
  );
}

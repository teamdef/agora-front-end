'use client';

import ProfileImage from '@/components/common/profileImage';
import Badge from '@/components/display/Badge';
import Button from '@/components/inputs/button/Button';

export default function Page() {
  return (
    <div>
      <ProfileImage />
      <Button label="zz" outlined />
      <Badge label="시작 전" status="inProgress" />
    </div>
  );
}

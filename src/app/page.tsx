'use client';

import ProfileImage from '@/components/common/profileImage';
import Badge from '@/components/display/Badge';

export default function Page() {
  return (
    <div>
      <ProfileImage />
      <Badge label="시작 전" status="inProgress" />
    </div>
  );
}

'use client';

import ProfileImage from '@/components/common/profileImage';
import Badge from '@/components/display/Badge';
import Button from '@/components/inputs/button/Button';
import ContentTextField from '@/components/inputs/textField/ContentTextField';
import NormalTextField from '@/components/inputs/textField/NormalTextField';
import TitleTextField from '@/components/inputs/textField/TitleTextField';
import { ChangeEvent, useState } from 'react';

export default function Page() {
  const [text, setText] = useState<string>('');

  const onBlur = () => {
    console.log('d');
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div style={{ padding: '0 10%' }}>
      <ProfileImage />
      <Badge label="시작 전" status="inProgress" />
      <Button label="zz" outlined />
      <TitleTextField
        value={text}
        onChange={onChangeHandler}
        placeholder="시도할 점을 작성해주세요 (최대 20자)"
        maxLength={20}
        onBlur={onBlur}
      />
      <NormalTextField value={text} onChange={onChangeHandler} maxLength={20} placeholder="dd" />
      <ContentTextField value={text} onChange={onChangeHandler} maxLength={20} placeholder="dd" onBlur={onBlur} />
    </div>
  );
}

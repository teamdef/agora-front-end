import { useState } from 'react';
import { UserType } from '~/core/retro/retroService.types';

interface Props {
  init: UserType[];
}
const useMemberDrop = ({ init }: Props) => {
  const [members, setMembers] = useState<UserType[]>(init);
  const [selectedMembers, setSelectedMembers] = useState<UserType[]>([]);

  const memberDropHandler = (newData: UserType[]) => {
    setSelectedMembers(newData);
  };

  return { initMembers: init, selectedMembers, memberDropHandler };
};

export default useMemberDrop;

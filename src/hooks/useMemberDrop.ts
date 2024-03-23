import { useState } from 'react';
import type { UserType } from '~/components/common/dropdown/member/MemberDropdown';

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

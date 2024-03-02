import { useState } from 'react';
import type { DropdownMemberStatus } from '~/components/common/dropdown/MemberDropdown';

interface Props {
  init: DropdownMemberStatus[];
}
const useMemberDrop = ({ init }: Props) => {
  const [members, setMembers] = useState<DropdownMemberStatus[]>(init);
  const [selectedMembers, setSelectedMembers] = useState<DropdownMemberStatus[]>([]);
  
  const memberDropHandler = (newData: DropdownMemberStatus[]) => {
    setSelectedMembers(newData);
  };

  return { initMembers: init, selectedMembers, memberDropHandler };
};

export default useMemberDrop;

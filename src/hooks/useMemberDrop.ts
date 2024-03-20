import { useState } from 'react';
import type { DropdownMemberStatus } from '~/components/common/dropdown/MemberDropdown';

const useMemberDrop = () => {
  const [members, setMembers] = useState<DropdownMemberStatus[]>();
  const [selectedMembers, setSelectedMembers] = useState<DropdownMemberStatus[]>([]);

  const memberDropHandler = (newData: DropdownMemberStatus[]) => {
    setSelectedMembers(newData);
  };

  const initMembers = (init: DropdownMemberStatus[]) => {
    setMembers(init);
  };

  return { members, initMembers, selectedMembers, memberDropHandler };
};

export default useMemberDrop;

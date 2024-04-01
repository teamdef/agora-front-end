import { useState } from 'react';
import { MemberType } from '~/query/common/commonQueries.types';

const useMemberDrop = () => {
  const [members, setMembers] = useState<MemberType[]>();
  const [selectedMembers, setSelectedMembers] = useState<MemberType[]>([]);

  const memberDropHandler = (newData: MemberType[]) => {
    setSelectedMembers(newData);
  };

  const initMembers = (init: MemberType[]) => {
    setMembers(init);
  };

  return { members, initMembers, selectedMembers, memberDropHandler };
};

export default useMemberDrop;

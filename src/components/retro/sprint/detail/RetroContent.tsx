import { useState } from 'react';
import styled from 'styled-components';
import Tab from '~/components/common/navigation/Tab';
import KeepsBoard from './KeepsBoard';
import ProblemsBoard from './ProblemsBoard';

const SPRINT_TAB_MENU = ['이번 회고록', '지난 회고록'] as const;

const RetroContent = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const currentTabHandler = (idx: number) => setCurrentTab(idx);

  return (
    <Wrapper>
      <Title>회고록</Title>
      <Tab menu={SPRINT_TAB_MENU} current={currentTab} handler={currentTabHandler} />
      <RetroBoard>
        <KeepsBoard />
        <ProblemsBoard />
      </RetroBoard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 56px;
`;
const Title = styled.h2`
  position: relative;
  margin-bottom: 24px;
  ${({ theme }) => theme.fontStyle.headline_2};
  color: ${({ theme }) => theme.colors.agoraBlack[900]};
`;

const RetroBoard = styled.div``;

export default RetroContent;

RetroContent.displayName = 'RetroContent';

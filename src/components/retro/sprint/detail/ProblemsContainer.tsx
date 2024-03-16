import styled from 'styled-components';
import Badge, { BadgeStatus } from '~/components/common/display/Badge';
import { Problem } from '~/types/retro/sprint';
import RetroItem from './ProblemCard';
import CreateItemBox from './CreateItemBox';

interface ProblemTryBoxProps {
  state: { label: string; value: BadgeStatus };
  items: Problem[];
}

const ProblemsContainer = ({ state, items }: ProblemTryBoxProps) => {
  return (
    <Wrapper>
      <StatusBox>
        <Badge status={state.value} label={state.label} />
      </StatusBox>
      <Content>
        {items.map((item) => {
          return <RetroItem key={`RetroItem-${crypto.randomUUID()}`} data={item} />;
        })}
        {state.value === 'problem' && <CreateItemBox />}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StatusBox = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 15px;
  background: #e7e7eb4d;
  min-height: 189px;
  height: 100%;
  padding: 16px 12px;
`;
export default ProblemsContainer;

ProblemsContainer.displayName = 'ProblemTryBox';

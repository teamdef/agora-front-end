import styled from 'styled-components';
import { colors } from '~/styles/theme';
import Text from '~/components/common/typo/Text';
import UserList from './UserList';
import { RetroSprintListItemType } from '~/query/retro/retroQueries.types';
import Link from 'next/link';
import { Paths } from '~/constants/Paths';

interface Props {
  retroList: RetroSprintListItemType[];
}
const RetroSprintList = ({ retroList }: Props) => {
  return (
    <Wrapper>
      <ListHeader>
        <Text className="col-1" variant="body_2" color={colors.agoraBlack[500]}>
          제목
        </Text>
        <Text className="col-2" variant="body_2" color={colors.agoraBlack[500]}>
          회고날짜
        </Text>
        <Text className="col-3" variant="body_2" color={colors.agoraBlack[500]}>
          참여자
        </Text>
      </ListHeader>
      <ListBody>
        {retroList.length === 0 && (
          <ListBodyEmptyItem>
            <Text className="col-3" variant="body_2" color={colors.agoraBlack[300]}>
              등록된 회고가 없습니다.
            </Text>
          </ListBodyEmptyItem>
        )}
        {retroList.length > 0 &&
          retroList.map((retro) => {
            return (
              <ListBodyItem key={retro.id}>
                <Link href={Paths.RETRO_SPRINT_DETAIL(retro.id)} className="col-1">
                  <Text variant="detail_1" color={colors.agoraBlack[700]}>
                    {retro.title}
                  </Text>
                </Link>
                <Text className="col-2" variant="detail_2" color={colors.agoraBlack[700]}>
                  {retro.createTime.substring(0, 10)}
                </Text>
                <UserList members={retro.members} />
              </ListBodyItem>
            );
          })}
      </ListBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ListHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.agoraBlue[50]};
  .col-1,
  .col-3 {
    width: 40%;
  }
  .col-2 {
    width: 20%;
  }
`;
const ListBody = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;
const ListBodyItem = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.agoraBlue[50]};
  cursor: pointer;
  .col-1,
  .col-3 {
    width: 40%;
  }
  .col-2 {
    width: 20%;
  }
`;
const ListBodyEmptyItem = styled(ListBodyItem)`
  justify-content: center;
  border-bottom: none;
  text-align: center;
  cursor: default;
`;

export default RetroSprintList;

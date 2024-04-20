import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { LNB_MENUS } from './constant';

const LNB = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <Text variant="detail_2" className="menu-title">
        Menu
      </Text>
      {LNB_MENUS.map((menu) => {
        const isMatch = pathname === menu.path;
        const hasSubMenu = menu?.subMenu;
        return (
          <Group key={crypto.randomUUID()}>
            <Link href={`${menu.path}`} className={isMatch && !hasSubMenu ? 'active' : ''}>
              <GroupTitle>
                {menu.icon}
                <Text variant="headline_2">{menu.title}</Text>
              </GroupTitle>
            </Link>

            {menu?.subMenu && (
              <GroupList>
                {menu.subMenu.map((subMenu) => {
                  const isMatch = pathname === subMenu.path;
                  return (
                    <Link href={`${subMenu.path}`} key={crypto.randomUUID()}>
                      <GroupItem className={isMatch ? 'active' : ''}>
                        <Text variant="body_1">{subMenu.title}</Text>
                      </GroupItem>
                    </Link>
                  );
                })}
              </GroupList>
            )}
          </Group>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  padding: 48px 16px 0px 16px;
  border-right: solid 1px #e7eafc;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .menu-title {
    padding: 0 10px;
  }
  a {
    text-decoration: none;
  }
  .active {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;

const Group = styled.ul`
  width: 176px;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.div`
  padding: 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;
const GroupList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const GroupItem = styled.li`
  padding: 6px 10px;
  border-radius: 6px;
  .active {
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.agoraBlack[50]};
  }
`;
export default LNB;

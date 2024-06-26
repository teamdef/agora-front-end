import styled from 'styled-components';
import Text from '~/components/common/typo/Text';
import { LNB_MENUS } from './constant';
import { useRouter } from 'next/router';
import { PathsType } from '~/constants/Paths';
const LNB = () => {
  const { pathname, query, push } = useRouter();

  const pathnameWithoutProjectId = `/${pathname.split('/').slice(2).join('/')}`;

  const handlePathClick = (path: PathsType) => {
    push({ pathname: `/${query.projectId}${path}` });
  };
  return (
    <Wrapper>
      <Text variant="detail_2" className="menu-title">
        Menu
      </Text>
      {LNB_MENUS.map((menu) => {
        const isMatch = pathnameWithoutProjectId === menu.path;
        const hasSubMenu = menu?.subMenu;
        return (
          <Group key={`${menu.path}`}>
            <div onClick={() => handlePathClick(menu.path)} className={isMatch && !hasSubMenu ? 'active' : ''}>
              <GroupTitle>
                {menu.icon}
                <Text variant="headline_2">{menu.title}</Text>
              </GroupTitle>
            </div>

            {menu?.subMenu && (
              <GroupList>
                {menu.subMenu.map((subMenu) => {
                  const isMatch = pathnameWithoutProjectId === subMenu.path;
                  return (
                    <div onClick={() => handlePathClick(subMenu.path)} key={`${subMenu.path}`}>
                      <GroupItem className={isMatch ? 'active' : ''}>
                        <Text variant="body_1">{subMenu.title}</Text>
                      </GroupItem>
                    </div>
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

import * as S from '../SidebarStyles'

export const SideListBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <S.SidebarLink href="#!">
            <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="#!">
            <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="#!">
            <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export const SideListBlockLoading = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

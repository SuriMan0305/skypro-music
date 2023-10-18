import * as S from '../MenuStyles.js'

export function MenuItemComponent(props) {
  return <S.MenuItem>
  <S.MenuLink href={props.adress}>
    {props.title}
  </S.MenuLink>
</S.MenuItem>
}
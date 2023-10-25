import * as S from "../MenuStyles.js";
import { NavLink } from "react-router-dom";

export function MenuItemComponent(props) {
  return (
    <S.MenuItem>
      <NavLink to={props.adress}> {props.title} </NavLink>
    </S.MenuItem>
  );
}

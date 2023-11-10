
import * as S from "../MenuStyles.js";
import { NavLink } from "react-router-dom";

export function MenuItemComponent(props) {
  const letExit = () => {
    return localStorage.removeItem('idUser')
  }

  if (props.adress === '/login') {
    return (
      <S.MenuItem>
        <NavLink to={props.adress} onClick={letExit}> {props.title} </NavLink>
      </S.MenuItem>
    );
  } else {
    return (
      <S.MenuItem>
        <NavLink to={props.adress}> {props.title} </NavLink>
      </S.MenuItem>
    )
  }

}

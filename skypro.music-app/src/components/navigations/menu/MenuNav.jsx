import * as S from "../MenuStyles.js";
import { NavLink } from "react-router-dom";

export function MenuItemComponent(props) {
  const letExit = () => {
    console.log('dsitk');
    return localStorage.setItem('token', false)
  }

  if (props.adress === '/login') {
    return (
      <S.MenuItem onClick={letExit}>
        <NavLink to={props.adress}> {props.title} </NavLink>
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

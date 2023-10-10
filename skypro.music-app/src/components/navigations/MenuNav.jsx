function NavMenu(props) {
  return <li className="menu__item">
  <a href={props.adress} className="menu__link">
    {props.title}
  </a>
</li>
}

export { NavMenu };
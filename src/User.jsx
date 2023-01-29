//javascript minuscula
export const ModalComponent = () => {
  return (
    <div>
      <h1> Soy un componente Modal</h1>
    </div>
  );
};

//component mayuscula
export const UserComponent = (props) => {
  return (
    <div>
      <h1>
        Buenas {props.name} {props.surname} de {props.age} años
      </h1>
    </div>
  );
};

//component mayuscula
export const NavBarComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#logout">
            <img
              src="images/poweroff.png"
              height={30}
              width={30}
              alt="Power Off"
            />
          </a>
        </li>
        <li>
          <a href="#alumnos">ALUMNOS</a>
        </li>
        <li>
          <a href="#cursos">CURSOS</a>
        </li>
        <li>
          <a href="#perfil">Lluc Pirilla</a>
          <img
            id="logo"
            src="https://thispersondoesnotexist.com/image"
            alt="Wikipedia File:Font Awesome 5 solid power-off.svg"
            height={30}
            width={30}
          />
        </li>
      </ul>
    </nav>
  );
};

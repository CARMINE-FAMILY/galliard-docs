import { ButtonGal } from "galliard-ui";

export default function Functions() {
  return (
    <>
      <h1>Hola</h1>
      <p>1</p>
      <p>2</p>
      <p>3</p>

      <ButtonGal 
      label="cerrar sesion"
      action={() => handleLogout()}
      styleType="ThemeRed"
      icon="tabler:logout"
      />
    </>
  );
}

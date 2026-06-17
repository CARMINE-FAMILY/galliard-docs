import { Icon } from "@iconify/react";

export default function Prueba({iconP, title, text}: {iconP: string; title:string; text:string;}) {

  return (
    <div className="cardComponent">

      <div className="icon">
        <Icon icon={iconP ?? "game-icons:feather"} className="icono" />
      </div>

      <div className="detalle">
        <h2>{title ?? "Lorem, ipsum."} </h2>
        <p>{text} ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eius!"</p>
      </div>
    </div>
  );
}

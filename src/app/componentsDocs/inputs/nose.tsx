import { useState } from "react";
import { DropDownGal } from "galliard-ui";

export default function Nose() {
  const [selected, setSelected] = useState(null);
  const opciones = [
    { valueOption: "manzana", text: "Manzana" },
    { valueOption: "pera", text: "Pera" },
  ];

  return (
    <div style={{ padding: "100px" }}>
      <DropDownGal
        label="Prueba"
        value={selected}
        setValue={setSelected}
        options={opciones}
      />
    </div>
  );
}
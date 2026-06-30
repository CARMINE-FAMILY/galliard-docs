import { ButtonGal } from "galliard-ui";
import { ComponentPreview } from "../../components/ComponentPreview";

export default function Button() {
  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">Button</h1>

      <p className="text">
        El componente ButtonGal permite ejecutar acciones mediante la
        interacción del usuario. Ofrece soporte para temas, tamaños, bordes,
        sombras, íconos y estilos personalizados, permitiendo adaptarse a
        diferentes diseños de interfaz.
      </p>

      <h2 className="titleSecundary">Props</h2>
      <h3 className="subtitle">Contenido</h3>
      <table className="tableProps">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Valor por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>label</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"Texto del Botón"</code>
            </td>
            <td>Texto que se muestra en el botón.</td>
          </tr>

          <tr>
            <td>
              <code>action</code>
            </td>
            <td>
              <code>() =&gt; void</code>
            </td>
            <td>
              <code>alert("Botón presionado")</code>
            </td>
            <td>Función que se ejecuta al hacer clic sobre el botón.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="subtitle">Apariencia</h3>
      <table className="tableProps">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Valor por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>styleType</code>
            </td>
            <td>
              <code>
                ThemeDark | ThemeLight | ThemeGreen | ThemeRed | ThemeBlue |
                ThemeYellow | ThemePurple | ThemeGray
              </code>
            </td>
            <td>
              <code>ThemeDark</code>
            </td>
            <td>Define el tema visual del botón.</td>
          </tr>

          <tr>
            <td>
              <code>bgColor</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Color de fondo personalizado.</td>
          </tr>

          <tr>
            <td>
              <code>txtColor</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Color del texto.</td>
          </tr>

          <tr>
            <td>
              <code>font</code>
            </td>
            <td>
              <code>OpenSans...</code>
            </td>
            <td>—</td>
            <td>Fuente utilizada para el texto.</td>
          </tr>

          <tr>
            <td>
              <code>textSize</code>
            </td>
            <td>
              <code>string | number</code>
            </td>
            <td>—</td>
            <td>Tamaño del texto.</td>
          </tr>

          <tr>
            <td>
              <code>width</code>
            </td>
            <td>
              <code>string | number</code>
            </td>
            <td>
              <code>auto</code>
            </td>
            <td>Ancho del botón.</td>
          </tr>

          <tr>
            <td>
              <code>height</code>
            </td>
            <td>
              <code>string | number</code>
            </td>
            <td>
              <code>auto</code>
            </td>
            <td>Alto del botón.</td>
          </tr>

          <tr>
            <td>
              <code>padding</code>
            </td>
            <td>
              <code>string | number</code>
            </td>
            <td>—</td>
            <td>Espaciado interno.</td>
          </tr>

          <tr>
            <td>
              <code>rounded</code>
            </td>
            <td>
              <code>none | sm | md | lg | full</code>
            </td>
            <td>
              <code>md</code>
            </td>
            <td>Redondeo de las esquinas.</td>
          </tr>

          <tr>
            <td>
              <code>borderedStyle</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>Aplica un estilo con borde.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="subtitle">Iconos</h3>
      <table className="tableProps">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Valor por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>seeIcon</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>Indica si se muestra el ícono en el botón.</td>
          </tr>

          <tr>
            <td>
              <code>icon</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>"tabler:send"</code>
            </td>
            <td>Identificador del ícono obtenido desde YesIcon.</td>
          </tr>

          <tr>
            <td>
              <code>iconOn</code>
            </td>
            <td>
              <code>"left" | "right"</code>
            </td>
            <td>
              <code>"right"</code>
            </td>
            <td>Define la posición del ícono respecto al texto.</td>
          </tr>

          <tr>
            <td>
              <code>iconSize</code>
            </td>
            <td>
              <code>string | number</code>
            </td>
            <td>—</td>
            <td>Especifica el tamaño del ícono.</td>
          </tr>

          <tr>
            <td>
              <code>iconColor</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Define el color del ícono.</td>
          </tr>

          <tr>
            <td>
              <code>customIcon</code>
            </td>
            <td>
              <code>React.ReactNode</code>
            </td>
            <td>—</td>
            <td>
              Reemplaza el ícono de YesIcon por un elemento personalizado.
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="subtitle">Sombras</h3>
      <table className="tableProps">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Valor por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>shadow</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>Activa una sombra alrededor del botón.</td>
          </tr>

          <tr>
            <td>
              <code>colorShadow</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>#000</code>
            </td>
            <td>Color de la sombra aplicada al botón.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="subtitle">Personalización</h3>
      <table className="tableProps">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Valor por defecto</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>customClassButton</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Clase CSS adicional aplicada al botón.</td>
          </tr>

          <tr>
            <td>
              <code>customClassLabel</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Clase CSS adicional aplicada al texto.</td>
          </tr>

          <tr>
            <td>
              <code>customClassIcon</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>—</td>
            <td>Clase CSS adicional aplicada al ícono.</td>
          </tr>

          <tr>
            <td>
              <code>args</code>
            </td>
            <td>
              <code>ButtonHTMLAttributes&lt;HTMLButtonElement&gt;</code>
            </td>
            <td>—</td>
            <td>
              Permite agregar atributos nativos del elemento{" "}
              <code>&lt;button&gt;</code>, como <code>disabled</code>,{" "}
              <code>type</code>, <code>name</code> o <code>aria-label</code>.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botón */}
      <h2 className="titleSecundary">Botón</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<ButtonGal label="Button" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<ButtonGal label="Button" />`,
          },
        ]}
      >
        <ButtonGal label="Button" />
      </ComponentPreview>

      {/* Colores */}
      <h2 className="titleSecundary">Colores que hay por defecto</h2>
      <p className="text">
        Estos son los colores que hay, si quieres poner otro color lo puedes
        hacer
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="ThemeDark"/>
        <ButtonGal label="ThemeLight" styleType="ThemeLight"/>
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen"/>
        <ButtonGal label="ThemeRed" styleType="ThemeRed"/>
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue"/>
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow"/>
        <ButtonGal label="ThemePurple" styleType="ThemePurple"/>
        <ButtonGal label="ThemeGray" styleType="ThemeGray"/>
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="ThemeDark"/>
        <ButtonGal label="ThemeLight" styleType="ThemeLight"/>
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen"/>
        <ButtonGal label="ThemeRed" styleType="ThemeRed"/>
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue"/>
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow"/>
        <ButtonGal label="ThemePurple" styleType="ThemePurple"/>
        <ButtonGal label="ThemeGray" styleType="ThemeGray"/>
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />`,
          },
        ]}
      >
        <ButtonGal label="ThemeDark" />
        <ButtonGal label="ThemeLight" styleType="ThemeLight" />
        <ButtonGal label="ThemeGreen" styleType="ThemeGreen" />
        <ButtonGal label="ThemeRed" styleType="ThemeRed" />
        <ButtonGal label="ThemeBlue" styleType="ThemeBlue" />
        <ButtonGal label="ThemeYellow" styleType="ThemeYellow" />
        <ButtonGal label="ThemePurple" styleType="ThemePurple" />
        <ButtonGal label="ThemeGray" styleType="ThemeGray" />
        <ButtonGal label="ColorDiferente" bgColor="#2aa198" />
      </ComponentPreview>

      {/* Tamaño del Botón */}
      <h2 className="titleSecundary">Tamaño del Botón</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />`,
          },
        ]}
      >
        <ButtonGal label="TamañoNormal" />
        <ButtonGal label="HeightyWidth" width="220px" height="55px" />
        <ButtonGal label="TamañoDelTexto" textSize="18px" />
        <ButtonGal label="Padding" padding="20px 35px" />
      </ComponentPreview>

      {/* Iconos */}
      <h2 className="titleSecundary">Diseño de Iconos</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal label="Configuración" icon="tabler:settings" iconSize="26px" />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal label="Game" customIcon={<img src="tu ruta de la imagen"} />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal label="Configuración" icon="tabler:settings" iconSize="26px" />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal label="Game" customIcon={<img src="tu ruta de la imagen"} />`,
          },
        ]}
      >
        <ButtonGal label="Descargar" icon="tabler:download" />
        <ButtonGal label="Eliminar" icon="tabler:trash" iconColor="red" />
        <ButtonGal
          label="Configuración"
          icon="tabler:settings"
          iconSize="26px"
        />
        <ButtonGal label="Sin icono" seeIcon={false} />
        <ButtonGal
          label="Game"
          customIcon={
            <img
              src="https://c.tenor.com/ce1sLbXLif8AAAAM/la-roca.gif"
              alt="Game"
              width={12}
              height={12}
            />
          }
        />
      </ComponentPreview>

      {/* Posición del icono */}
      <h2 className="titleSecundary">Posición del icono</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />`,
          },
        ]}
      >
        <ButtonGal label="Izquierda" iconOn="left" />
        <ButtonGal label="Derecha" iconOn="right" />
      </ComponentPreview>

      {/* Bordes */}
      <h2 className="titleSecundary">Bordes</h2>
      <p className="text">
        El nombre de los botones son los diferentes tamaños que son posibles
      </p>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />`,
          },
        ]}
      >
        <ButtonGal label="none" rounded="none" />
        <ButtonGal label="sm" rounded="sm" />
        <ButtonGal label="md" rounded="md" />
        <ButtonGal label="lg" rounded="lg" />
        <ButtonGal label="full" rounded="full" />
      </ComponentPreview>

      {/* Botón con borde */}
      <h2 className="titleSecundary">Botón con borde</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />`,
          },
        ]}
      >
        <ButtonGal borderedStyle />
        <ButtonGal borderedStyle styleType="ThemeBlue" />
      </ComponentPreview>

      {/* Tipografia */}
      <h2 className="titleSecundary">Tipografía</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />`,
          },
        ]}
      >
        <ButtonGal font="OpenSansRegular" />
        <ButtonGal textSize="20px" />
        <ButtonGal font="Georgia" textSize="18px" />
      </ComponentPreview>

      {/* Sombras */}
      <h2 className="titleSecundary">Sombras</h2>
      <ComponentPreview
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `
        <ButtonGal shadow/>
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `
        <ButtonGal shadow/>
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />`,
          },
        ]}
      >
        <ButtonGal shadow />
        <ButtonGal shadow colorShadow="#2563eb" />
        <ButtonGal shadow colorShadow="red" />
      </ComponentPreview>
    </div>
  );
}

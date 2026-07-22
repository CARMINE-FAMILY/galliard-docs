import { useState } from "react";
import { BottomSheetGal, ButtonGal, ComponentPreviewGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../components/DocsPagination";

export default function BottomSheet() {
  const [openBasic, setOpenBasic] = useState<boolean>(false);
  const [openDisapear, setOpenDisapear] = useState<boolean>(false);
  const [openLimits, setOpenLimits] = useState<boolean>(false);
  const [openWidth, setOpenWidth] = useState<boolean>(false);
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);
  const [openAppearance, setOpenAppearance] = useState<boolean>(false);
  const [openCustom, setOpenCustom] = useState<boolean>(false);

  const contenidoProps: PropRow[] = [
    {
      name: "children",
      type: "React.ReactNode",
      description: "Contenido que se muestra dentro del cuerpo del panel.",
    },
  ];

  const controlProps: PropRow[] = [
    {
      name: "isOpen",
      type: "boolean",
      defaultValue: "true",
      description: "Controla si el panel está visible.",
    },
    {
      name: "setIsOpen",
      type: "(isOpen: boolean) => void",
      defaultValue: 'console.log("Open change")',
      description:
        "Función que actualiza el estado de apertura del panel (patrón controlado).",
    },
    {
      name: "canDisapear",
      type: "boolean",
      defaultValue: "false",
      description:
        "Permite que el panel se cierre al arrastrarlo por debajo del umbral definido en disapearPercent.",
    },
    {
      name: "disapearPercent",
      type: "0, 10, 20, 30, 40, 50, 60, 70, 80, 90",
      defaultValue: "20",
      description:
        "Porcentaje de la pantalla que define el umbral de cierre al arrastrar. Solo aplica si canDisapear es true.",
    },
    {
      name: "closeOnBackdropClick",
      type: "boolean",
      defaultValue: "false",
      description:
        "Cierra el panel al hacer click sobre el backdrop. Sin efecto si useBackdrop es false.",
    },
  ];

  const tamanoProps: PropRow[] = [
    {
      name: "startHeightPercentPosition",
      type: "0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
      defaultValue: "50",
      description: "Altura inicial del panel, como porcentaje de la pantalla.",
    },
    {
      name: "minHeightPercentPosition",
      type: "0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
      defaultValue: "20",
      description:
        "Altura mínima a la que se puede reducir el panel al arrastrar.",
    },
    {
      name: "maxHeightPercentPosition",
      type: "0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
      defaultValue: "90",
      description:
        "Altura máxima a la que se puede expandir el panel al arrastrar.",
    },
    {
      name: "widthPercent",
      type: '"20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"',
      defaultValue: '"90%"',
      description: "Ancho del panel.",
    },
  ];

  const aparienciaProps: PropRow[] = [
    {
      name: "transitionDuration",
      type: "0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1",
      defaultValue: "0.5",
      description:
        "Duración en segundos de las transiciones de apertura y cierre.",
    },
    {
      name: "headerBg",
      type: "string",
      description: "Color de fondo del header (barra de arrastre).",
    },
    {
      name: "bodyBg",
      type: "string",
      description: "Color de fondo del cuerpo del panel.",
    },
    {
      name: "draggElementColor",
      type: "string",
      defaultValue: '"#000"',
      description: "Color del ícono indicador de arrastre en el header.",
    },
    {
      name: "useBackdrop",
      type: "boolean",
      defaultValue: "true",
      description:
        "Muestra u oculta el fondo semitransparente detrás del panel.",
    },
    {
      name: "backdropBlur",
      type: "number",
      description: "Cantidad de blur (px) aplicado al backdrop.",
    },
    {
      name: "backdropColor",
      type: "string",
      description: "Color del backdrop.",
    },
  ];

  const personalizacionProps: PropRow[] = [
    {
      name: "customContainerClass",
      type: "string",
      description: "Clase CSS adicional aplicada al contenedor del panel.",
    },
    {
      name: "customBodyClass",
      type: "string",
      description: "Clase CSS adicional aplicada al cuerpo del panel.",
    },
    {
      name: "customBackdropClass",
      type: "string",
      description: "Clase CSS adicional aplicada al backdrop.",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">BottomSheet</h1>

      <p className="text">
        El componente BottomSheetGal muestra un panel deslizable desde la parte
        inferior de la pantalla. Soporta arrastre para ajustar su altura entre
        un mínimo y un máximo, cierre por desaparición, backdrop opcional y
        estilos personalizados.
      </p>

      <h2 className="titleSecundary">Props</h2>

      <h3 className="subtitle">Contenido</h3>
      <DataTable
        columns={propsColumns}
        data={contenidoProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Control</h3>
      <DataTable
        columns={propsColumns}
        data={controlProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Tamaño y posición</h3>
      <DataTable
        columns={propsColumns}
        data={tamanoProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Apariencia</h3>
      <DataTable
        columns={propsColumns}
        data={aparienciaProps}
        rowKey={(r) => r.name}
      />

      <h3 className="subtitle">Personalización</h3>
      <DataTable
        columns={propsColumns}
        data={personalizacionProps}
        rowKey={(r) => r.name}
      />

      {/* Panel básico */}
      <h2 className="titleSecundaryButton">Panel</h2>
      <p className="text">
        Ejemplo base del componente: un panel controlado mediante{" "}
        <span className="inline-code">isOpen</span> y{" "}
        <span className="inline-code">setIsOpen</span>. Como el panel se
        renderiza con <span className="inline-code">position: fixed</span>{" "}
        relativo al viewport completo, en esta doc inicia cerrado y se abre con
        un botón para no tapar el contenido al hacer scroll. Se cierra haciendo
        click fuera del panel, gracias a{" "}
        <span className="inline-code">closeOnBackdropClick</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal isOpen={isOpen} setIsOpen={setIsOpen} closeOnBackdropClick>
  <div style={{ padding: "20px" }}>Contenido del panel</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `const [isOpen, setIsOpen] = useState<boolean>(false);

<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal isOpen={isOpen} setIsOpen={setIsOpen} closeOnBackdropClick>
  <div style={{ padding: "20px" }}>Contenido del panel</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenBasic(true)}
        />
        <BottomSheetGal
          isOpen={openBasic}
          setIsOpen={setOpenBasic}
          closeOnBackdropClick
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Contenido del panel
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Cierre por arrastre */}
      <h2 className="titleSecundaryButton">Cierre al arrastrar</h2>
      <p className="text">
        Con <span className="inline-code">canDisapear</span> el panel se cierra
        al arrastrarlo hacia abajo más allá del umbral definido en{" "}
        <span className="inline-code">disapearPercent</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  canDisapear
  disapearPercent={20}
>
  <div style={{ padding: "20px" }}>Arrástrame hacia abajo</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  canDisapear
  disapearPercent={20}
>
  <div style={{ padding: "20px" }}>Arrástrame hacia abajo</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenDisapear(true)}
        />
        <BottomSheetGal
          isOpen={openDisapear}
          setIsOpen={setOpenDisapear}
          canDisapear
          disapearPercent={20}
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Arrástrame hacia abajo
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Límites de altura */}
      <h2 className="titleSecundaryButton">Límites de altura</h2>
      <p className="text">
        Con <span className="inline-code">startHeightPercentPosition</span>,{" "}
        <span className="inline-code">minHeightPercentPosition</span> y{" "}
        <span className="inline-code">maxHeightPercentPosition</span> defines
        entre qué alturas se puede mover el panel al arrastrarlo.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  startHeightPercentPosition={50}
  minHeightPercentPosition={20}
  maxHeightPercentPosition={90}
  closeOnBackdropClick
>
  <div style={{ padding: "20px" }}>Arrastra para expandir o reducir</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  startHeightPercentPosition={50}
  minHeightPercentPosition={20}
  maxHeightPercentPosition={90}
  closeOnBackdropClick
>
  <div style={{ padding: "20px" }}>Arrastra para expandir o reducir</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenLimits(true)}
        />
        <BottomSheetGal
          isOpen={openLimits}
          setIsOpen={setOpenLimits}
          startHeightPercentPosition={50}
          minHeightPercentPosition={20}
          maxHeightPercentPosition={90}
          closeOnBackdropClick
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Arrastra para expandir o reducir
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Ancho */}
      <h2 className="titleSecundaryButton">Ancho del panel</h2>
      <p className="text">
        Con <span className="inline-code">widthPercent</span> ajustas el ancho
        del panel respecto al viewport.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal isOpen={isOpen} setIsOpen={setIsOpen} widthPercent="60%" closeOnBackdropClick>
  <div style={{ padding: "20px" }}>Panel más angosto</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal isOpen={isOpen} setIsOpen={setIsOpen} widthPercent="60%" closeOnBackdropClick>
  <div style={{ padding: "20px" }}>Panel más angosto</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenWidth(true)}
        />
        <BottomSheetGal
          isOpen={openWidth}
          setIsOpen={setOpenWidth}
          widthPercent="60%"
          closeOnBackdropClick
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Panel más angosto
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Backdrop */}
      <h2 className="titleSecundaryButton">Backdrop</h2>
      <p className="text">
        Con <span className="inline-code">useBackdrop</span> muestras un fondo
        semitransparente detrás del panel, y con{" "}
        <span className="inline-code">closeOnBackdropClick</span> permites
        cerrarlo al hacer click sobre él.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  useBackdrop
  closeOnBackdropClick
  backdropBlur={5}
  backdropColor="#00000050"
>
  <div style={{ padding: "20px" }}>Click fuera del panel para cerrar</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  useBackdrop
  closeOnBackdropClick
  backdropBlur={5}
  backdropColor="#00000050"
>
  <div style={{ padding: "20px" }}>Click fuera del panel para cerrar</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenBackdrop(true)}
        />
        <BottomSheetGal
          isOpen={openBackdrop}
          setIsOpen={setOpenBackdrop}
          useBackdrop
          closeOnBackdropClick
          backdropBlur={5}
          backdropColor="#00000050"
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Click fuera del panel para cerrar
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Colores y apariencia */}
      <h2 className="titleSecundaryButton">Colores y apariencia</h2>
      <p className="text">
        Con <span className="inline-code">headerBg</span>,{" "}
        <span className="inline-code">bodyBg</span> y{" "}
        <span className="inline-code">draggElementColor</span> personalizas los
        colores del header, el cuerpo y el ícono de arrastre.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  headerBg="#212528"
  bodyBg="#2f343a"
  draggElementColor="#fff"
  closeOnBackdropClick
>
  <div style={{ padding: "20px", color: "#fff" }}>Panel con tema oscuro</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  headerBg="#212528"
  bodyBg="#2f343a"
  draggElementColor="#fff"
  closeOnBackdropClick
>
  <div style={{ padding: "20px", color: "#fff" }}>Panel con tema oscuro</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenAppearance(true)}
        />
        <BottomSheetGal
          isOpen={openAppearance}
          setIsOpen={setOpenAppearance}
          headerBg="#212528"
          bodyBg="#2f343a"
          draggElementColor="#fff"
          closeOnBackdropClick
        >
          <div style={{ padding: "20px", color: "#fff", fontSize: "3.5rem" }}>
            Panel con tema oscuro
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      {/* Personalización */}
      <h2 className="titleSecundaryButton">Personalización del BottomSheet</h2>
      <p className="text">
        Con <span className="inline-code">customContainerClass</span>,{" "}
        <span className="inline-code">customBodyClass</span> y{" "}
        <span className="inline-code">customBackdropClass</span> puedes agregar
        clases CSS propias al panel, su contenido y el backdrop. Estas props
        solo agregan el nombre de clase al elemento; el estilo real lo defines
        tú en tu hoja de estilos (aquí se agregó uno de ejemplo para que se note
        el efecto).
      </p>
      <p className="note">Nota:</p>
      <p className="text">
        Durante el arrastre, el componente intenta bloquear la selección de
        texto en la página alternando una clase en{" "}
        <span className="inline-code">document.body</span>, pero por un
        desajuste de nombres entre el JS y el SCSS ese bloqueo no llega a
        aplicarse. Si necesitas evitar la selección de texto mientras se
        arrastra, agrégala manualmente mediante{" "}
        <span className="inline-code">customContainerClass</span>.
      </p>
      <ComponentPreviewGal
        codeTabs={[
          {
            label: "JSX",
            language: "jsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  customContainerClass="bsgDocsPanel"
  customBodyClass="bsgDocsBody"
  customBackdropClass="bsgDocsBackdrop"
  closeOnBackdropClick
>
  <div style={{ padding: "20px" }}>Panel con clases personalizadas</div>
</BottomSheetGal>`,
          },
          {
            label: "TSX",
            language: "tsx",
            code: `<button onClick={() => setIsOpen(true)}>Abrir panel</button>

<BottomSheetGal
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  customContainerClass="bsgDocsPanel"
  customBodyClass="bsgDocsBody"
  customBackdropClass="bsgDocsBackdrop"
  closeOnBackdropClick
>
  <div style={{ padding: "20px" }}>Panel con clases personalizadas</div>
</BottomSheetGal>`,
          },
        ]}
      >
        <ButtonGal
          label="Abrir panel"
          seeIcon={false}
          action={() => setOpenCustom(true)}
        />
        <BottomSheetGal
          isOpen={openCustom}
          setIsOpen={setOpenCustom}
          customContainerClass="bsgDocsPanel"
          customBodyClass="bsgDocsBody"
          customBackdropClass="bsgDocsBackdrop"
          closeOnBackdropClick
        >
          <div style={{ padding: "20px", fontSize: "3.5rem" }}>
            Panel con clases personalizadas
          </div>
        </BottomSheetGal>
      </ComponentPreviewGal>

      <DocsPagination />
    </div>
  );
}

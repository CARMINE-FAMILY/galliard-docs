import { Icon } from "@iconify/react";

export default function Card() {
  return (
    <section className="card">
      <div className="header">
        <h1 className="title">Caracteristicas</h1>
        <p className="subtitle">
          Todo lo que necesitas para construir aplicaciones modernas
        </p>
      </div>

      <div className="general">
        <div className="tarjeta">
          <div className="icon">
            <Icon icon="game-icons:feather" />
          </div>
          <div className="detalle">
            <h2>Ligera</h2>
            <p>Optimizada para no pesar en tu bundle final</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="icon">
            <Icon icon="glyphs-poly:palette" />
          </div>
          <div className="detalle">
            <h2>Personalizable</h2>
            <p>Usa Mixins de Sass para adaptar los estilos a tu marca.</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="icon">
            <Icon icon="vscode-icons:file-type-ng-service-ts2" />
          </div>
          <div className="detalle">
            <h2>TypeScript</h2>
            <p>Tipado completo para una mejor experiencia de desarrollo.</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="icon">
            <Icon icon="mdi:cellphone" />
          </div>
          <div className="detalle">
            <h2>Responsiva</h2>
            <p>Disenada para funcionar en cualquier tamano de pantalla.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

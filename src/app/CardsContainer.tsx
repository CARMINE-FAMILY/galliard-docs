import { Icon } from "@iconify/react";

export default function CardsContainer() {
  return (
    <section className="cardsContainer">
      <div className="headerCardContainer">
        <h1 className="title">Caracteristicas</h1>
        <p className="subtitle">
          Todo lo que necesitas para construir aplicaciones modernas
        </p>
      </div>

      <div className="general">
        <div className="cardComponent">
          <div className="icon">
            <Icon icon="game-icons:feather" className="iconContainer" />
          </div>
          <div className="detail">
            <h2>Ligera</h2>
            <p>Optimizada para no pesar en tu bundle final</p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="icon">
            <Icon icon="material-symbols-light:palette" className="iconContainer" />
          </div>
          <div className="detail">
            <h2>Personalizable</h2>
            <p>Usa Mixins de Sass para adaptar los estilos a tu marca.</p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="icon">
            <Icon icon="proicons:typescript" className="iconContainer" />
          </div>
          <div className="detail">
            <h2>TypeScript</h2>
            <p>Tipado completo para una mejor experiencia de desarrollo.</p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="icon">
            <Icon icon="mdi:cellphone" className="iconContainer" />
          </div>
          <div className="detail">
            <h2>Responsiva</h2>
            <p>Disenada para funcionar en cualquier tamaño de pantalla.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

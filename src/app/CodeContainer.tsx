export default function CodeExample() {
  return (
    <section className="codeContainer">
      <div className="headerCodeContainer">
        <h1 className="title">Uso Basico</h1>
        <p className="subtitle">
          Importa los componentes y comienza a construir en segundos
        </p>
      </div>

      <div className="general">
        <div className="codeComponent">
          <pre>
            <code>
              <span className="keyword">import</span>{" "}
              {"{ ButtonGal, InputTextGal }"}{" "}
              <span className="keyword">from</span>{" "}
              <span className="string">'galliard-ui'</span>
              {"\n\n"}
              <span className="keyword">const</span> App = () =&gt; ({"\n"}
              {"  "}
              <span className="tag">&lt;div&gt;</span>
              {"\n    "}
              <span className="tag">&lt;InputTextGal</span>
              {"\n      "}label=<span className="string">"Email"</span>
              {"\n      "}placeholder=
              <span className="string">"tu@email.com"</span>
              {"\n      "}typeInput=<span className="string">"email"</span>
              {"\n      "}iconLeft=<span className="string">"mi:mail"</span>
              {"\n    "}
              <span className="tag">/&gt;</span>
              {"\n\n    "}
              <span className="tag">&lt;ButtonGal</span>
              {"\n      "}label=<span className="string">"Cerrar sesion"</span>
              {"\n      "}action=&#123;() =&gt; handleLogout()&#125;
              {"\n      "}styleType=<span className="string">"ThemeRed"</span>
              {"\n      "}icon=<span className="string">"tabler:logout"</span>
              {"\n    "}
              <span className="tag">/&gt;</span>
              {"\n  "}
              <span className="tag">&lt;/div&gt;</span>
              {"\n"}
              );
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

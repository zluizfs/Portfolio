import './styles.css';

export default function Card({ image, alt, title, description, tech, buttons }) {
  return (
    <div className="card">
      <div className="card-imagem">
        <img src={image} alt={alt} />
      </div>
      <div className="card-informacoes">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="card-informacoes-tecnologias">
          <p>Tecnologias:</p>
          <p>{tech}</p>
        </div>
        <div className="card-informacoes-botoes">
         {buttons}
        </div>
      </div>
    </div>
  )
}
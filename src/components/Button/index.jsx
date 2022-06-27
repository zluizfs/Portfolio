import './styles.css';

export default function Button({ title, link, ...props }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="button" {...props}>
        {title}
      </button>
    </a>
  )
}
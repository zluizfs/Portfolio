import './styles.css';

export default function IconButton({ icon, link, ...props }) {
  return (
   <a href={link} target="_blank" rel="noreferrer">
     <button className="circle-button" {...props}>
      {icon}
    </button>
   </a>
  )
}
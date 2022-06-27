import './styles.css';

export default function Container({ children }){
  return (
    <div className="container">
      {children}
    </div>
  )
}
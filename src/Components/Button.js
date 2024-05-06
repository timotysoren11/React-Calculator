import './Button.css';

const Button = ({symbols, color, handleClick}) =>{
  return(
    <div 

    onClick={() =>handleClick(symbols)}
    className='button-wrapper' 
    style={{backgroundColor: color}}>{symbols}
    
    </div>
  );
}
export default Button;
import Button from '../Button/Button'

const Counter = (props) => {
    console.log(props)
    return(
    <div>
        <h1>{props.tittle}</h1>
        {/*<button>-</button>*/}
        <Button handleclick={() => console.log('restar')} label='-'/>
        <h1>{props.initial}</h1>
        {/*<button onClick={props.handleIncrement}>+</button>*/}
        <Button handleclick={() => console.log('sumar')} label='+'/>
    </div>)
}
export default Counter
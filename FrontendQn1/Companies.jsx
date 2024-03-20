const Companies =(props)=>{
    return(
        <>
        <div className="products-list">
        <div>  {props.productName} </div>
        <div> {props.price}</div>
        <div>{props.rating}</div>
        <div>{props.discount}</div>
        <div>{props.availability}</div>
        </div>
        
        </>
    )
}
export default Companies
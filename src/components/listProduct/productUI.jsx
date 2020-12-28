

export default  function ProductsUI (props){

    return(
        <div className="card mt-5" style={{width: '18rem'}}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )

}
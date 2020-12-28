export default function AddProductUI (props) {

    return(
        <div className="col-4 mt-5">

        <form>
          <div className="mb-3">
            <label htmlFor="tit" className="form-label">Title :</label>
            <input type="text" 
                   name="title"  
                   onChange={props.onChangeInput}
                   className="form-control" id="tit"  />
            <small 
                   className={ props.errorTitle == true ? 'text-danger d-block' : 'd-none'}> Title is required !
            </small>
          </div>
        
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description :</label>
            <textarea type="password"
                      name="desc"  
                      onChange={props.onChangeInput} 
                      className="form-control" id="desc" />
         <small 
                      className={props.errorDesc == true ? " text-danger d-block " : 'd-none'}> Description is required !
         </small>
          </div>
         
        
        <div>
          <label htmlFor="basic-url" className="form-label">Image</label>
          <div     className="input-group">
            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" 
                   name="img" 
                   onChange={props.onChangeInput} 
                   className="form-control" id="basic-url"  />
          </div>
          <small 
                  className={props.errorImg == true ? 'text-danger d-block' : 'd-none'}> Image is required !</small>
        
        </div>
        <div className="text-center">
          <button 
                  type="submit" 
                  onClick={props.onAddProduct} 
                  className="  btn btn-info  mt-3" style={{width : '100px'}}>Add <i className="fa fa-plus"></i>
                   </button>
                   </div>
        </form>
        
              </div>
    )
}
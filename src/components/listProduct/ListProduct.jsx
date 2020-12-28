import React from 'react'
import axios from '../../utils/axios';
import ProductsUI from './productUI';

export default class ListProduct extends React.Component{

    constructor(props){
        super(props)
    }
    
    state = {
        products:[
            {
                id:1,
                title:"The North Face",
                desc :"The weather and landscape dictate our adventures in the mountains",
                img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/4956_KT0_hero?$638x745$" 
            },
            {
                id:2,
                title:"The North Face",
                desc :"The weather and landscape dictate our adventures in the mountains",
                img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/3XEO_JK3_hero?$638x745$" 
            },
            {
                  
                id:3,
                title:"The North Face",
                desc :"The weather and landscape dictate our adventures in the mountains",
                img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/CYG9_JK3_hero?$638x745$" 
            },
            {
                 
                id:4,
                title:"The North Face",
                desc :"The weather and landscape dictate our adventures in the mountains",
                img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/A8AZ_JK3_hero?$638x745$" 
            }
        ]
    }
 
   
    render(){

        return(

       <div className="col-6" >
<table className="table overflow-auto " style={{height : '200px'}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">IMAGE</th>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
        {
         this.state.products.map( (produit) => {

            return(

                <tr>
      <th scope="row">{produit.id}</th>
      <td><img src={produit.img} style={{width : '150px'}} alt=""/></td>
      <td>{produit.title}</td>
      <td>{produit.desc}</td>
      <td className="d-flex justify-content-between ">
          <button className="btn btn-primary mr-2"> <i class="fa fa-edit"></i> </button>
          <button className="btn btn-danger"> <i class="fa fa-trash"></i> </button>
      </td>
    </tr>
            )
         } )
        }
  </tbody>
</table>

       </div>

        );

    }
    
    }
   

    // axios.get("products.json").then((getData) => {
    //    // console.log(getData.data)  
    //     let dt = getData.data
    //     console.log(dt)
    //   })


     




   
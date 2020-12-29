import React from 'react'
import axios from '../../utils/axios';
import ProductsUI from './productUI';

export default class ListProduct extends React.Component{

    constructor(props){
        super(props)
   
    
   this.state = {
        products:[
            // {
            //     id:1,
            //     title:"The North Face",
            //     desc :"The weather and landscape dictate our adventures in the mountains",
            //     img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/4956_KT0_hero?$638x745$" 
            // },
            // {
            //     id:2,
            //     title:"The North Face",
            //     desc :"The weather and landscape dictate our adventures in the mountains",
            //     img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/3XEO_JK3_hero?$638x745$" 
            // },
            // {
                  
            //     id:3,
            //     title:"The North Face",
            //     desc :"The weather and landscape dictate our adventures in the mountains",
            //     img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/CYG9_JK3_hero?$638x745$" 
            // },
            // {
                 
            //     id:4,
            //     title:"The North Face",
            //     desc :"The weather and landscape dictate our adventures in the mountains",
            //     img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/A8AZ_JK3_hero?$638x745$" 
            // }
        ],

       
    }
 
  
}
    
   
 componentDidMount(){
    // axios.get("products.json").then((getData) => {
    //     // let fetchData = [];
    //     // Object.keys(getData.data).map( (key) => {
    //     //     fetchData.push({...getData.data[key], id: key });
    //     // })
    //     // this.setState({products:fetchData})
    //     //  let id = getData.data["-MPh_dbbU8WwGy6pcN3V"]
    //     //  console.log(id)
    //     // console.log(Object.keys(getData.data))
    //     // gha y-t'afficha key dyalna 
    //     Object.keys(getData.data).map( (key) => {
    //       // hna zadna map bache nparcouri kola id po7dha 
    //       console.log(getData.data[key])
    //       // declarina key west [] hit hia array
    //       // hna t'afficha lina value dyal key li fiha property : value
    //     })
    //    })

    axios.get("products.json").then( (getData) => {
      
      console.log(getData.data)

      let keys = Object.keys(getData.data)
      console.log(keys)
      
      let fetchData = []

   

      keys.map( (key) => {
        console.log(getData.data[key])
        console.log(getData.data[key].title)

        let product = {
          id : key,
          title : getData.data[key].title,
          desc  : getData.data[key].desc,
          img   : getData.data[key].img

          // // hade spread kat3tek lcontenu dyal object oula array
          // ...getData.data[key]
        }

        fetchData.push(product)

        this.setState({ products : fetchData})
        
      })
    })



 
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
      <th scope="row">{produit.key}</th>
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

 
// import React from 'react';
// import axios from '../../utils/axios';

// export default class ListProduct extends React.Component {

//   constructor(props){
//     super(props)

//     this.state = {

//       products : [

//         {
//          id:1,
//          title:"The North Face",
//                  desc :"The weather and landscape dictate our adventures in the mountains",
//                  img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/4956_KT0_hero?$638x745$" 
//              },
//              {
//                  id:2,
//                  title:"The North Face",
//                  desc :"The weather and landscape dictate our adventures in the mountains",
//                  img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/3XEO_JK3_hero?$638x745$" 
//              },
//              {
                            
//                  id:3,
//                  title:"The North Face",
//                  desc :"The weather and landscape dictate our adventures in the mountains",
//                  img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/CYG9_JK3_hero?$638x745$" 
//               },
//              {
                           
//                 id:4,
//                 title:"The North Face",
//                  desc :"The weather and landscape dictate our adventures in the mountains",
//                  img  :"https://images.thenorthface.com/is/image/TheNorthFaceEU/A8AZ_JK3_hero?$638x745$" 
//              }
//       ]
//     }
//   }
//    render(){

//     return(
//       <div>
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">image</th>
//       <th scope="col">Title</th>
//       <th scope="col">Description</th>
//     </tr>
//   </thead>
//   <tbody>
   
//    {
//      this.state.products.map( (prod) =>{

//       return(
//         <tr>
//         <th scope="row"> {prod.id} </th>
//         <td> <img src={prod.img} style={{ width : '150px'}} alt=""/></td>
//         <td> {prod.title} </td>
//         <td>{prod.desc}</td>
//       </tr>
//       )
//      })
//    }
//   </tbody>
// </table>
//       </div>
//     )
//    }
// }

    


     




   
import React from 'react'
import axios from '../../utils/axios';
import ProductsUI from './productUI';

export default class ListProduct extends React.Component{

    constructor(props){
        super(props)
    }
    state = {
        title : '',
        desc  : '',
        img   : ''
    }
 
   
    render(){

        return(

       <div>
           <ProductsUI 
            title = {this.state.title}
            desc  = {this.state.desc}
            img   = {this.state.img}
           />
       </div>

        );

    }
    
    }
   

    axios.get("products.json").then((getData) => {
       // console.log(getData.data)  
        let dt = getData.data
        console.log(dt)

        object.keys(dt).map( (key) => {

            <ProductsUI title = {this.key}/>
        })
      })


     




   
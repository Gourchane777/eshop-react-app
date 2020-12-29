import axios from '../../utils/axios';
import React from 'react' ;
import AddProductUI from './addProductUI';

export default class AddProduct extends React.Component {



  constructor(props){
    super(props);

    this.state = {
      title      : ''    ,
      desc       : ''    ,
      img        : ''    ,
      errorTitle : false ,
      errorDesc  : false ,
      errorImg   : false 
    }
  }
 
  

  


 
   render(){
     return(
        
      < AddProductUI
        onChangeInput = {this.onChangeInput}
        onAddProduct  =  {this.onAddProduct}
        validateInput = {this.validateInput}
        title     = {this.state.title}
        desc  = {this.state.desc}
        img   = {this.state.img}
        errorTitle = {this.state.errorTitle}
        errorDesc = {this.state.errorDesc}
        errorImg = {this.state.errorImg}
        
      
      />
     );

   }

  //  onChangeTitle =  (event) => {
  //   // console.log(event.target.value)
  //     this.setState({title:event.target.value})
  //  }

  //  onChangeDesc =  (event) => {
  //     this.setState({desc:event.target.value})

  //  }
  //  onChangeImg =  (event) => {
  //     this.setState({img:event.target.value})
  //  }

  
  onChangeInput = (event) => {
    // bache n2acceder chemin dyal name ou input value
    //console.log(event.target.name,event.target.value)

    // ankhdam b variable d'aide 
    let name   = event.target.name
    let value = event.target.value

    // refactoring 1
    // 3lache darte name f kola input bache ndiro lcomparison l kola input bache tala3 lia lvalue dyal kola wahda 
    // if( name  == 'title') this.setState({title: value})
    // if( name  == 'desc' ) this.setState({desc:value})
    // if( name  == 'img'  ) this.setState({img:value})
     
    // refactoring 2
     this.setState({ [name] : value})
  }


  onAddProduct = (chemin) => {
    chemin.preventDefault()
    console.log(this.state)  
    // etape 1 de validation du form
    //  if(this.state.title == "" ) this.setState({ errorTitle : true })
    //  else this.setState({ errorTitle : false })
     
    //  if(this.state.desc  == "" ) this.setState({ errorDesc : true })
    //  else this.setState({ errorDesc : false })
      
    //  if(this.state.img == "" ) this.setState({ errorImg : true }) 
    //  else this.setState({ errorImg : false })

     // etap 2 refactoring on validation form

     this.validateInput(this.state.title,'errorTitle')
     this.validateInput(this.state.desc,'errorDesc')
     this.validateInput(this.state.img,'errorImg')  
     
     let ti  = this .state.title
     let de  = this.state.desc
     let im = this .state.img
     
     if(!ti == "" && !de == "" && !im == ""){

      const Data = {
        title : this.state.title,
        desc  : this.state.desc,
        img   : this.state.img
      }
  
      axios.post("products.json",Data).then( (data) => {
        console.log(data)
      })

   

     }

 
  
    } 

     validateInput = (input,error) => {
        if( input == "")  this.setState({ [error] : true })
        else this.setState({ [error] : false })
     }


}
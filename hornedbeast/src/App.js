import React from 'react';
import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main';
import data from './assests/data';
import SelectedBeast from './component/selectedbeast'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {


  constructor(props){
    super(props);
    this.state={
      SelectedBeast:{},
      state:false,
      show:false
    }
  }
  displayModel=(title)=>{
    const tempSelectedBeast=data.filter((item)=>{
      return (item.title===title);
    });
    this.setState({
      show:true,
      SelectedBeast:tempSelectedBeast[0],
    })
  }
  
  handleClose= () =>{
    this.setState({show:false})
  }

   

  
 
  render() {


  return (
    <div className="App">
     <Header/>
     <Main data={data}
     displayModel={this.displayModel}
  />
<SelectedBeast
 SelectedBeast={this.state.SelectedBeast}
show={this.state.show}
handleClose={this.handleClose}
/>

     <Footer/>
    </div>
  );
}
}
export default App;

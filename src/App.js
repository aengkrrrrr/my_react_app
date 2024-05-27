import { Component } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myarticle from './components/Myarticle';


// 클래스 버전
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{
        title:'React',
        desc:'Single Page Application'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup language'},
        {id:2, title:'CSS', desc:'Css is for design'},
        {id:3, title:'JAVASCRIPT', desc:'javascript is for interaction'},
      ]
    };
  }

  render(){
   
    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/>
        <Mynav data={this.state.menus}/>
        <Myarticle subtit="HTML" content="Hypertext markup language"/>
       </div>
    );
  }
}

//함수 버전
// function App() {
//   return (
//     <div className="App">
//       Hello, World!
//     </div>
//   );
// }

export default App;

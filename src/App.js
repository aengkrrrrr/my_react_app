import { Component,setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myarticle from './components/Myarticle';


// 클래스 버전
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{
        title:'React',
        desc:'Single Page Application'
      },
      welcome:{
        subtit:'Welcome',
        content:'Welcome to React'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup language'},
        {id:2, title:'CSS', desc:'Css is for design'},
        {id:3, title:'JAVASCRIPT', desc:'javascript is for interaction'},
      ]
    };
  }

  render(){
    console.log("App 실행");
   let _title, _desc =null;
   if(this.state.mode === 'welcome'){
    _title = this.state.welcome.subtit;
    _desc = this.state.welcome.content;
   } else if(this.state.mode === 'read') {
    _title = this.state.menus[0].title;
    _desc = this.state.menus[0].desc;
   }
    return (
      <div className="App">
        {/* <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/> */}

        <header>
        <h1 className="logo">
          {/* <a href="" onClick={function(e){
            e.preventDefault();
            this.setState({mode: 'welcome'});
          }.bind(this)}> */}

           <a href="" onClick={(e)=>{
            e.preventDefault();
            this.setState({
              mode: 'welcome'
            });
          }}>

            {this.state.subject.title}</a>
          </h1>
        <p>{this.state.subject.desc}</p>
      </header>

        <Mynav data={this.state.menus}/>
        <Myarticle subtit={_title} content={_desc}/>
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

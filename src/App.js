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
      mode:'welcome',
      selected_id:2,
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
    let i=0;
    while(i<this.state.menus.length){
      let data = this.state.menus[i];
      if(data.id === this.state.selected_id){
        _title = data.title;
        _desc = data.desc;
      }
      i++;
    }

   }
    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChangePage={function(wc){
          this.setState({mode:wc})
        }.bind(this)}/>
        <Mynav data={this.state.menus} onChangePage={(id)=>{
          this.setState({
            mode:'read',
            selected_id:Number(id)
          })
          }}/>
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

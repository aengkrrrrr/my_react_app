import { Component,setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/controls';
import CreateArticle from './components/CreateArticle';


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

  render() {
    console.log("App 실행");
   let _title, _desc, _article =null;
   if(this.state.mode === 'welcome'){
    _title = this.state.welcome.subtit;
    _desc = this.state.welcome.content;
    _article = <ReadArticle subtit={_title} content={_desc}/>;

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
    _article = <ReadArticle subtit={_title} content={_desc}/>;
   } else if(this.state.mode === 'create'){
    _article = <CreateArticle/>
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

        
        {_article}

        <hr/>

        <Controls onChangeMode={(id)=>{
          this.setState({
            mode:id

          })
        }}/>

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

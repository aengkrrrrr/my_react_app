import { Component,setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/controls';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';


// 클래스 버전
class App extends Component {
  constructor(props){
    super(props);
    this.max_id = 3;
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
        {id:1, title:'HTML', desc:'Hypertext markup language', level:1},
        {id:2, title:'CSS', desc:'Css is for design', level:2},
        {id:3, title:'JAVASCRIPT', desc:'javascript is for interaction', level:3},
      ]
    };
  }


  getArticles(){
    let _title, _desc, _article =null;
    if(this.state.mode === 'welcome'){
     _title = this.state.welcome.subtit;
     _desc = this.state.welcome.content;
     _article = <ReadArticle subtit={_title} content={_desc}/>;
 
    } else if(this.state.mode === 'read') {
      let _data = this.getReadArticle();
     _article = <ReadArticle subtit={_data.title} content={_data.desc} level={_data.level}
     onChangeMode={(id)=>{
      this.setState({
        mode:id

      })
    }}/>;

    } else if(this.state.mode === 'create'){
      _article = <CreateArticle onSubmit={(_subtit,_content,_level)=>{
        this.max_id += 1;
       //  this.state.menus.push({id:this.max_id, title:_subtit, desc:_content});
       // let _menus = this.state.menus.concat({
       //   id:this.max_id, title:_subtit, desc:_content
       // })
       //let _menus = Array.from(this.state.menus); //Array.from으로 복사본을 만듦
       let _menus = [...this.state.menus]; //Array.from으로 복사본을 만듦
       _menus.push({id:this.max_id, title:_subtit, desc:_content, level:_level});
 
        this.setState({
         // menus:this.state.menus
         menus:_menus,
         mode:'read',
         selected_id:this.max_id
        });
     }}/>
    } else if(this.state.mode === 'update'){

      let _data = this.getReadArticle();
      
        _article = <UpdateArticle data={_data} onSubmit={(_id,_subtit,_content,_level)=>{
          console.log(_id,_subtit,_content);
          let _menus = Array.from(this.state.menus);
          _menus.forEach((item,idx)=>{
            if(item.id === _id){
              _menus[idx] = {id: _id, title:_subtit, desc:_content, level:_level}
            }
          })
          this.setState({
           menus:_menus,
           mode:'read'
          });
        }} />;

    }
    return _article;
  }
  getReadArticle(){
    let i=0;
    while(i<this.state.menus.length){
      let data = this.state.menus[i];
      if(data.id === this.state.selected_id){
        return data;
        break;
      }
      i++;
    } 
  }

  render() {
    console.log("App 실행");
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

        
        {this.getArticles()}

        <hr/>

        <Controls mode={this.state.mode} onChangeMode={(id)=>{
          if(id === 'delete'){
            if(window.confirm('정말 삭제하시겠습니까?')){
              let _menus = [...this.state.menus];

              _menus.forEach((item,idx)=>{
                if(item.id === this.state.selected_id){
                  _menus.splice(idx,1);
                }
              })
              // let i = 0;
              // while(i < _menus.length){
              //   if(_menus[i].id === this.state.selected_id){
              //     _menus.splice(i,1);
              //     break;
              //   }
              //   i++;
              // }
              this.setState({
                menus:_menus,
                mode:'welcome'
              })
            }
          } else {
            this.setState({
              mode:id,
            })
          }
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

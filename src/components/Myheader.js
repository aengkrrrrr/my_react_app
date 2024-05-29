import { Component } from 'react';

class Myheader extends Component {
  shouldComponentUpdate(){
    return false;
  }
  
  render(){
    console.log("Myheader 실행");
    return (
      <header>
        <h1 className="logo">
         <a href="" onClick={(e)=>{
            e.preventDefault();
            this.props.onChangePage('welcome');

          }}>{this.props.title}</a>

          </h1>
        <p>{this.props.desc}</p>
      </header>
      //빈 프레그먼트로 부모 대체가능 = <> </>
    );
  }
}

export default Myheader;
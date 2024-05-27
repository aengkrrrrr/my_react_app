import { Component } from 'react';

class Myheader extends Component {
  render(){
    console.log("Myheader 실행");
    return (
      <header>
        <h1 className="logo">
          <a>{this.props.title}</a>
          </h1>
        <p>{this.props.desc}</p>
      </header>
      //빈 프레그먼트로 부모 대체가능 = <> </>
    );
  }
}

export default Myheader;
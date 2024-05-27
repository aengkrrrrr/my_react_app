import { Component } from 'react';

class Myheader extends Component {
  render(){
    return (
      <header>
        <h1 className="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
      //빈 프레그먼트로 부모 대체가능 = <> </>
    );
  }
}

export default Myheader;
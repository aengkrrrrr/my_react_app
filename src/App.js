import { Component } from 'react';
import './App.css';


// 클래스 버전
class App extends Component {
  render(){
   
    return (
      <div className="App">
        <Myheader title="React" desc="Single Page Application"/>
        <Mynav/>
        <Myarticle/>
       </div>
    );
  }
}

class Myheader extends Component {
  render(){
    console.log(this)
    return (
      <header>
        <h1 class="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
      //빈 프레그먼트로 부모 대체가능 = <> </>
    );
  }
}
class Mynav extends Component {
  render(){
    return (
      <nav>
      <ul>
        <li><a href="">HTML</a></li>
        <li><a href="">CSS</a></li>
        <li><a href="">JAVASCRIPT</a></li>
      </ul>
    </nav>
    );
  }
}
class Myarticle extends Component {
  render(){
    return (
    <section>
      <article>
        <h2>HTML</h2>
        <p>Hypertext markup language</p>
      </article>
    </section>
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

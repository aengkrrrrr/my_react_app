import { Component } from 'react';
import './App.css';


// 클래스 버전
class App extends Component {
  render(){
    return (
      <div className="App">
        <Myheader></Myheader>
       </div>
    );
  }
}

class Myheader extends Component {
  render(){
    return (
      <header>
        <h1 class="logo">React</h1>
        <p>Single Page Application</p>
      </header>
      //빈 프레그먼트로 부모 대체가능 = <> </>
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
// export default Myheader;

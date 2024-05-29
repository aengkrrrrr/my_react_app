import { Component } from 'react';

class ReadArticle extends Component {
  render(){
    console.log("ReadArticle 실행");
    return (
    <section>
      <article>
        <h2>{this.props.subtit}</h2>
        <p>{this.props.content}</p>
     {
      this.props.level &&
      <>
        <p>난이도 : {this.props.level}</p>
      </> 
  
    }
      </article>
    </section>
    );
  }
}


export default ReadArticle;
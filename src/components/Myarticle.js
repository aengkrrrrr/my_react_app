import { Component } from 'react';

class Myarticle extends Component {
  render(){
    return (
    <section>
      <article>
      <h2>{this.props.subtit}</h2>
      <p>{this.props.content}</p>
      </article>
    </section>
    );
  }
}


export default Myarticle;
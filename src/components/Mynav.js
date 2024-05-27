import { Component } from 'react';

class Mynav extends Component {
  render(){
    let lists = [];
    let data = this.props.data;
    let i = 0;

    while(i<data.length){
      lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>)
      i++;
    }


    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Mynav;
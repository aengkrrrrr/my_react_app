import { Component } from 'react';

class CreateArticle extends Component {
  render(){
    console.log("CreateArticle 실행");
    return (
     <section>
      <article>
        <h2>Create Article</h2>
        <form method='post' onSubmit={(e)=>{
          e.preventDefault();
          // debugger; 여기서 멈추고 값을 확인가능함
          this.props.onSubmit(e.target.title.value, e.target.desc.value,e.target.level.value,);
        }}>
          <p>
            <input type="text" name="title" placeholder='title'/>
          </p>
          <p>
            <textarea name="desc" placeholder='description'/>
          </p>
          <p>
            <input type="number" min="4" name="level" />
          </p>
          <button type='submit'>입력</button>
        </form>
      </article>
     </section>
    );
  }
}


export default CreateArticle;
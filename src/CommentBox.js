import React, { PropTypes } from 'react'
import './comment-box.css'
import store from './redux/store'
class CommentBox extends React.Component {
  state ={
    comments:[
      'hello1',
      'hello2'
    ]
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    let comments=this.state.comments.slice();
    let comment=this.commentInput.value
    comments.push(comment)
    this.setState({
      comments
    })
    this.commentInput.value=''
  }
  render () {
    console.log(store.getState())
    let commentList = this.state.comments.slice().reverse().map((item,i) => (
      <li key={i}> {item}</li>
    ))
    let commentForm = (
      <form onSubmit={this.handleSubmit} className='form'>
        <input type='text' ref={value => this.commentInput=value}/>
        <button type='submit'>提交</button>
      </form>
    )
    return(
      <div className='comment-box'>
        {commentForm}
        <ul className='comment-list'>
          {commentList}
        </ul>

      </div>
    )

  }
}

export default CommentBox;

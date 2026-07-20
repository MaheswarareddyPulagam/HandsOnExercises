import React,{Component} from 'react';

class Posts extends Component{
  constructor(props){
    super(props);
    this.state={posts:[],error:null};
  }

  loadPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>this.setState({posts:data}))
      .catch(err=>this.setState({error:err.message}));
  }

  componentDidMount(){
    this.loadPosts();
  }

  componentDidCatch(error){
    this.setState({error:error.toString()});
  }

  render(){
    if(this.state.error){
      return <h3>Error: {this.state.error}</h3>;
    }
    return (
      <div style={{padding:'20px'}}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post=>(
          <div key={post.id} style={{border:'1px solid #ccc',margin:'10px',padding:'10px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;

import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost=()=>{

const {addPost}=useContext(PostList)


  const postTitleElement=useRef();
  const userIdElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();

    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');


    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value.split(' ');





    addPost(userId,postTitle,postBody,reactions,tags);

  }


    return <>
    <form onSubmit={handleSubmit} className="create-post">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" ref={postTitleElement} placeholder="how are you feeling today" />
    
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <input type="text" className="form-control" id="body" ref={postBodyElement} placeholder="Tell us more about it" />
    
  </div>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your userId</label>
    <textarea type="text" rows="4" className="form-control" id="userId" 
   ref={userIdElement} placeholder="your userId" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">number of reactions
    </label>
    <input type="text" className="form-control" id="reactions" ref={reactionsElement} placeholder="how many people reacted to this post" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
    <input type="text" className="form-control" id="tags" ref={tagsElement}  placeholder="please enter tags using space" />
    
  </div>












  {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div> */}
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    
    </>
}
export default CreatePost;
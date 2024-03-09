
import { useContext } from "react";
import Post from "./Post";
import  PostListProvider, {PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";



const PostList = ()=>{

        const {postList,addInitialPosts} = useContext(PostListData);
        const handleGetPostsClick=()=>{
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data =>{addInitialPosts(data.posts)});
            

            

        }

        


    return (<div>

    {postList.length===0 && <WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}

    {postList.map((post)=>(<Post key={post.id} post={post} />))}
    </div>)


    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/> 

    
}
export default PostList;
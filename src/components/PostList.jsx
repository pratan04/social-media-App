
import { useContext } from "react";
import Post from "./Post";
import  PostListProvider, {PostList as PostListData } from "../store/post-list-store";



const PostList = ()=>{

        const {postList} = useContext(PostListData);
        console.log(postList)

        


    return (<div>

    
    {postList.map((post)=>(<Post key={post.id} post={post} />))}
    </div>)


    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/>
    // <Post/> 

    
}
export default PostList;
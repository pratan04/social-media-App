import { createContext, useReducer } from "react";



 export const PostList=createContext({

    postList:[] ,
    addPost: ()=>{},
    deletePost: ()=>{},
    addInitialPosts: ()=>{},





})

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST" )
    {newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)}


    else if(action.type ==="ADD_INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }


    else if (action.type ==="ADD_POST"){
        newPostList=[action.payload, ...currPostList];
    }

    
    return newPostList;

}



const PostListProvider=({children})=>{

    const [postList,dispatchPostList]=useReducer(postListReducer, []);

    // const [postList,dispatchPostList]=useReducer(postListReducer, DEFAULT_POST_LIST);
    

    const addPost=(userId,postTitle,postBody,reactions,tags)=>{

        dispatchPostList({
            type: "ADD_POST",
            payload:{

            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: reactions,
            userId: userId,
            tags: tags,

            }
        })

       
    };


    const addInitialPosts=(posts)=>{

        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload:{
                posts,

            }
        })

       
    };
    

    const deletePost=(postId)=>{

        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        })
       
    };

    

    
    return (<div>
         <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost,
            addInitialPosts,

        } }>
        {children}
    </PostList.Provider>
    </div>)

}

//     const DEFAULT_POST_LIST=[
//         {
//         id: "1",
//         title: "going haridwar",
//         body: "ssuplets dive in ganga river",
//         reactions: 2,
//         userId:"user-9",
//         tags: ["vacation","yoga","meditation"],
//     },

//     {
//         id: "2",
//         title: "going haridwar",
        
//         reactions: 2,
//         userId:"user-9",
//         tags: ["vacation","yoga","meditation"],
//         body: "ssuplets dive in ganga river",
//     },
// ];


export default PostListProvider;
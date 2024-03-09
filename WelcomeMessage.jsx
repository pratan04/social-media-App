const WelcomeMessage=({onGetPostsClick})=>{

    return <center className="welcome-message" ><h1>their are no posts to show here</h1>
    <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Get post from server</button>
    </center>
}

export default WelcomeMessage
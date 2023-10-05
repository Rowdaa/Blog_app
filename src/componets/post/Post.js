import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/721999/pexels-photo-721999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">story</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet,</span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        tempore, voluptatibus similique animi aspernatur deleniti ducimus. Ut
        deleniti itaque nostrum sit magni! Velit cumque deserunt magnam ut unde
        molestiae minus? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Maxime voluptatum illum in vel excepturi sit deleniti omnis,
        veritatis distinctio nostrum. Veritatis facere voluptatem possimus
        veniam, commodi rerum dolores qui reprehenderit.
      </p>
    </div>
  );
}

export default Post;

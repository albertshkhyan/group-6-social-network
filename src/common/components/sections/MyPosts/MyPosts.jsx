import React from "react";
import Post from "./Post";

import s from "./style.module.css";

const MyPosts = (props) => {
  const postArrayComp = props.posts.map((item) => (
    <Post key={item.id} post={item.post} id={item.id} />
  ));
  // const postArrayComp = posts.map(item => <div key={item.id}>hello</div>)

  // let myRef = React.createRef();
  // const foo = () => {
  // console.log(myRef);
  // alert( myRef.current.value)
  // }

  ////without ref
  const foo = (event) => {
    // console.log('event', event.target.parentElement.previousElementSibling.children[0].value);//
    let text = event.target.value;
    // console.log('text', text);
    props.addPost(text);


  };

  ////when need give paramat

  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div>
        {/* <textarea id="a1">karam inc vor  ban grem</textarea> */}
        {/* <textarea ref={myRef}/> */}
        {/* <textarea onChange={ function(e) {
                    foo(e, 10)
                } } /> */}

        <textarea value="alik" onChange={foo} />
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={s.postsContainer}>{postArrayComp}</div>
    </div>
  );
};
export default MyPosts;

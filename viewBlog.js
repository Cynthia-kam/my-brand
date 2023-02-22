document.addEventListener("DOMContentLoaded", function(event) { 
  
    blogData=document.querySelector('.blog-data');
    const like= document.getElementById('like');
    var likesNumber= document.getElementById("likesNumber");

    // number=likesNumber.innerHTML;
    //like button
//     like.addEventListener('click', () => {
//         if(like.style.backgroundColor=='rgba(0, 0, 0, 0.84)'){
//             like.style.backgroundColor='rgba(255, 138, 0, 1)'   
//            // likesNumber.innerHTML=++number;   
//     }
//     else{
//         like.style.background='rgba(0, 0, 0, 0.84)';
//        // likesNumber.innerHTML=--number;
// }
       
})
    var blogData=document.querySelector('.blog-data');   
    const blogData1 = JSON.parse(localStorage.getItem('blogs')) || [];

    var id=localStorage.getItem('ToReadMore');
    blogData.insertAdjacentHTML('afterbegin',
    `<div class="image"><img src="${blogData1[id].image}"></div>
    <div class="content">
        <h3>${blogData1[id].title}}</h3>
        <p>${blogData1[id].body}</p>
        <button class="like" id="like" onclick=""><i class="fa fa-thumbs-up"></i>Like</button>
        <label id="likesNumber">0</label>
    </div>`)

//Adding a comment to the localstorage
document.querySelector('.comment').addEventListener('click',()=>{
    let commenter=document.getElementById('nameOfCommenter')
    let commentContent= document.getElementById('commentMessage')
    commentFromLS= JSON.parse(localStorage.getItem('comments'))||[];
    CurrentId = JSON.parse(localStorage.getItem('ToComment'));
    let comment={};
    comment.id=CurrentId;
    comment.name=commenter.value;
    comment.commentMessage=commentContent.value;
    commentFromLS.push(comment)
    localStorage.setItem('comments',JSON.stringify(commentFromLS))
 
})
  
//load comments
const Arrcomments=JSON.parse(localStorage.getItem('comments')||[])
const IdToComment=JSON.parse(localStorage.getItem('ToComment')||[])
var targetComments=[]
 targetComments= Arrcomments.filter(comments=>comments.id==IdToComment);
console.log(targetComments)
//display all comments with matching id
div = document.getElementById('footer')
targetComments.forEach(element => {
    let content = document.createElement('div');
     content.classList.add('Commentcard')
    content.innerHTML = `
   
    <label id="nameOfCommenter">Name:${element.name}</label>
    <label id="commentingMessage">Comment:${element.commentMessage}</label>

    `

    div.appendChild(content)
});
    
//     function likeBlog(){
//         if(like.style.backgroundColor!=='rgba(255, 138, 0, 1)'){
//         like.style.backgroundColor='rgba(255, 138, 0, 1)';
    
//        // console.log("button clicked and background changed");}

//         // if(like.style.backgroundColor=='rgba(255, 138, 0, 1)'){
//         // like.style.backgroundColor='rgba(0, 0, 0, 0.84))'
//         // console.log("button clicked and background changed")}
//     }
  
// }


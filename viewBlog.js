document.addEventListener("DOMContentLoaded", function (event) {

    blogData = document.querySelector('.blog-data');
    const like = document.getElementById('like');
    var likesNumber = document.getElementById("likesNumber");



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


    var blogData = document.querySelector('.blog-data');
    const idToReadMore = localStorage.getItem('ToReadMore');

    fetch(`https://pink-thankful-oyster.cyclic.app/blogs/${idToReadMore}`, {
        headers: {
            "Content-Type": "application/json"
        },
    })

        .then((response) =>
            response.json()
            // console.log (response)
        )
        .then((blog) => {
            console.log(blog.data)
            blogData.insertAdjacentHTML('afterbegin',
                `<div class="image"><img src="${blog.data.image}"></div>
        <div class="content">
            <h3>${blog.data.title}</h3>
            <p>${blog.data.content}</p>
            <button class="like" id="like" onclick=""><i class="fa fa-thumbs-up"></i>Like</button>
            <label id="likesNumber">0</label>
        </div>`)
            const comments = (blog.data.comments)
            // console.log("comments:",comments)
            console.log(comments[0].name)

            div = document.getElementById('footer')
            comments.forEach((element, index) => {
                let content = document.createElement('div');
                content.classList.add('Commentcard')
                content.innerHTML = `
          
           <label id="nameOfCommenter">Name : ${element.name}</label>
           <label id="commentingMessage">Comment : ${element.comment}</label>
       
           `

                div.appendChild(content)

            })

        })
        .catch(error => alert(error))


   


    //     function likeBlog(){
    //         if(like.style.backgroundColor!=='rgba(255, 138, 0, 1)'){
    //         like.style.backgroundColor='rgba(255, 138, 0, 1)';

    //        // console.log("button clicked and background changed");}

    //         // if(like.style.backgroundColor=='rgba(255, 138, 0, 1)'){
    //         // like.style.backgroundColor='rgba(0, 0, 0, 0.84))'
    //         // console.log("button clicked and background changed")}
    //     }

    // }

})
commentForm = document.querySelector('form');
commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const commenter = document.getElementById('nameOfCommenter').value
    const commentContent = document.getElementById('commentMessage').value
   
    const data = { name:commenter, comment:commentContent }
    console.log(data)
    const idToReadMore = localStorage.getItem('ToReadMore');
    fetch(`https://pink-thankful-oyster.cyclic.app/comment/${idToReadMore}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

        .then((response) =>
            response.json()
            // console.log (response)
        )
        .then((blog) => {
            const comments = (blog.data.comments.reverse())
           // if (div.hasChildNodes()) return div.innerHTML = "";
            comments.forEach((element, index) => {
                let content = document.createElement('div');
                content.classList.add('Commentcard')
                content.innerHTML = `
          
           <label id="nameOfCommenter">Name : ${element.name}</label>
           <label id="commentingMessage">Comment : ${element.comment}</label>
       
           `

                div.appendChild(content)

            })
        })
    // console.log(JSON.stringify(data))
    alert("comment sent successfully")

})
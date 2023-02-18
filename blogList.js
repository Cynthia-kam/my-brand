document.addEventListener("DOMContentLoaded", function(event) { 
    addBlog=document.getElementById('btn-login');
    addBlog.addEventListener('click', e=> {
      
   
    if (document.getElementById('flex-cards').hasChildNodes()) return document.getElementById('flex-cards').innerHTML = "";
    SavedBlog = JSON.parse(localStorage.getItem('blogs'));
    SavedBlog.forEach(element =>{
        let content = document.createElement('div');
        content.classList.add('card1');
         content.innerHTML=`
         <img src="${(element.image)}" alt="blog" style="width:100%" id="blogImage">
         <p class="title" id="blogTitle">${(element.title)}</p>
         <a href="#"><i class="fa fa-dribbble"></i></a>
         <a href="#"><i class="fa fa-twitter"></i></a>
         <a href="#"><i class="fa fa-linkedin"></i></a>
         <a href="#"><i class="fa fa-facebook"></i></a>
         <p><a href="blogEdit.html"><button class="update">update</button></a></p><p><button class="delete">delete</button></p>`
   
         document.getElementById('flex-cards').appendChild(content)
    }  );
})
   
    // const divItem = document.getElementById('blogcard');
    // const deleteBlog=document.getElementById('deleteBlog');
    // addBlog=document.getElementById('btn-login');

    // Saveduser = JSON.parse(localStorage.getItem('currentUser')) || [];
    // if(Saveduser.role==='admin'){
    //     addBlog.style.display='none';
    // }
    // deleteBlog.addEventListener('click', (e) => {
    //     divDelete()
    // })
    // function divDelete() {
    //    message= confirm("Are you sure you want to delete this blog?")
    //    if(message){
    //     divItem.style.display = 'none';}
       
    //     //console.log('div is removed');
    // }

    
});
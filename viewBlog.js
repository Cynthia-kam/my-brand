document.addEventListener("DOMContentLoaded", function(event) { 
  
  
    const like= document.getElementById('like');
    var likesNumber= document.getElementById("likesNumber");
    number=likesNumber.innerHTML;
    like.addEventListener('click', () => {
        if(like.style.backgroundColor=='rgba(0, 0, 0, 0.84)'){
            like.style.backgroundColor='rgba(255, 138, 0, 1)'   
            likesNumber.innerHTML=++number;   
    }
    else{
        like.style.background='rgba(0, 0, 0, 0.84)';
        likesNumber.innerHTML=--number;
}
       
})

    
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
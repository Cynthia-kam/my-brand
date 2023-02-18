document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load',()=>{
        let imagePreview=document.querySelector('#image');
        savedImage =  JSON.parse(localStorage.getItem('blogs'));
      savedImage.forEach(element => {
      //  console.log(element.title);
      document.getElementById('image').setAttribute('src',element.image)
      document.getElementById('blogtitle').innerText=element.title
      document.getElementById('blogBody').innerText= element.body
      });
    //  imagePreview.setAttribute("src",savedImage.image);
      console.log(savedImage)
      
    })
 // console.log( localStorage.getItem('blogs'));
 
});
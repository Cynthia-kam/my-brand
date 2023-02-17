document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load',()=>{
        let imagePreview=document.querySelector('#image');
        savedImage =  JSON.parse(localStorage.getItem('blogs'))|| [];
    //  imagePreview.setAttribute("src",savedImage.image);
      console.log(savedImage)
      document.getElementById('blogBody').innerText= savedImage.title
    })
 // console.log( localStorage.getItem('blogs'));
 
});
document.addEventListener("DOMContentLoaded", function(event) { 
    const titleOfBlog=document.getElementById('blog-title')
    const bodyOfBlog=document.getElementById('blogtext')
    let  imageOfBlog=document.getElementById('image-of-blog')
    let image=document.getElementById('image')

    const blogs = JSON.parse(localStorage.getItem('blogs'))||[];
    const toupdateID=localStorage.getItem('ToUpdate')
    let targetBlog= blogs.find(blogs=>blogs.blogId==toupdateID);
    titleOfBlog.value=targetBlog.title
    bodyOfBlog.value=targetBlog.body
    imageOfBlog.src=targetBlog.image

    document.querySelector('form').addEventListener('submit',()=>{

        const blogs = JSON.parse(localStorage.getItem('blogs'))||[];
        const toupdateID=localStorage.getItem('ToUpdate')
        let targetBlog= blogs.find(blogs=>blogs.blogId==toupdateID);
        var reader = new FileReader()
        reader.addEventListener('load', function () {
        targetBlog.title=titleOfBlog.value
        targetBlog.body=bodyOfBlog.value
        targetBlog.image=reader.result;
        localStorage.setItem('blogs',JSON.stringify(blogs))
        })
        reader.readAsDataURL(image.files[0])
       
        
        
    })


//     targetBlog.title="remedy"
//    localStorage.setItem('blogs',JSON.stringify(blogs))
})
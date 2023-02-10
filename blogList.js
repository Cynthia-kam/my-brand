document.addEventListener("DOMContentLoaded", function(event) { 
    const divItem = document.getElementById('blogcard');
    const deleteBlog=document.getElementById('deleteBlog');

    deleteBlog.addEventListener('click', (e) => {
        divDelete()
    })
    function divDelete() {
       message= confirm("Are you sure you want to delete this blog?")
       if(message){
        divItem.style.display = 'none';}
       
        //console.log('div is removed');
    }
});
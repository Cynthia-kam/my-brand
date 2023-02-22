
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work

            const divItem = document.getElementById('mainMessage');
            const divItem2 = document.getElementById('mainMessage2');
            const divItem3 = document.getElementById('mainMessage3');
            const message = document.getElementById('message');
            const reply = document.getElementById('reply');
            const like= document.getElementById('like');
            const userprofile=document.getElementById('userprofile');
            totalMessages=document.getElementById('totalMessages');
            totalBlogs=document.getElementById('totalBlogs');
            totalUsers=document.getElementById('totalUsers');
            superAdminEmail='abijurucyn@gmail.com'
            const boxUsers=document.getElementById('boxUsers');
            messageButton=document.getElementById('message-btn');
             main_body=document.getElementById('mainbody');
            logout=document.getElementById('logout');

            document.getElementById('ham-menu').addEventListener('click',()=>{
               if(document.getElementById('sidebar').style.display='none'){
                document.getElementById('sidebar').style.backgroundColor='black'
                document.getElementById('sidebar').style.border='none'
                document.getElementById('sidebar').style.display='block'
               }
               main_body.addEventListener('click',()=>{
                if(document.getElementById('sidebar').style.display='block'){
                    document.getElementById('sidebar').style.display='none'
                }
               })
            })
           document.getElementById('ShowBlogButton').addEventListener('click',()=>{
            main_body.style.display='block'
           })

            logout.addEventListener('click',e=>{
                localStorage.removeItem('currentUser');
                window.location="/login.html"
            })
            Saveduser = JSON.parse(localStorage.getItem('currentUser')) || [];
            if(Saveduser.email!='abijurucyn@gmail.com'){
                messageButton.style.display='none';
            }
            window.addEventListener('load', e=> {
                if(Saveduser.email==='abijurucyn@gmail.com'){userprofile.innerText='superAdmin'}
                else{userprofile.innerText='Admin'}
                totalUsers.innerText=JSON.parse(localStorage.users).length;
                totalBlogs.innerText=JSON.parse(localStorage.blogs).length;
                totalMessages.innerText=JSON.parse(localStorage.messages).length;
                console.log(JSON.parse(localStorage.users).length)
              //  bodydiv.style.display='none'
                });
            
            boxUsers.addEventListener('click',()=>{
                SavedUsers = JSON.parse(localStorage.getItem('users')) || []; 
                if (main_body.hasChildNodes()) return main_body.innerHTML = "";
                SavedUsers.forEach(element=>{
                    let content = document.createElement('div');
                    content.innerHTML=`
                   
                    <div class="main-content" id="mainMessage">
                    
                    <table>
                        <tr>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>${(element.email)}</td>
                            <td><button>Delete</button>
                        </tr>
                    </table>
                </div>`  
                    main_body.appendChild(content) 
                })
            })

            messageButton.addEventListener('click',e=>{
                Savedmessage = JSON.parse(localStorage.getItem('messages')) || [];
                if (main_body.hasChildNodes()) return main_body.innerHTML = "";
                Savedmessage.forEach(element =>{
                let content = document.createElement('div');
                 content.innerHTML=`
              <div class="main-content" id="mainMessage">
              <table>
                  <tr>
                      <th>Message</th>
                      <th>Content</th>
                  </tr>
                  <tr>
                      <td>${(element.email)}</td>
                      <td>${(element.message)}</td>
                  </tr>
              </table>
          </div>`
        main_body.appendChild(content)
                  }  ); })

 //bloglist contents
 addBlog=document.getElementById('btn-login');
 addBlog.addEventListener('click', e=> {
 if (document.getElementById('flex-cards').hasChildNodes()) return document.getElementById('flex-cards').innerHTML = "";
 SavedBlog = JSON.parse(localStorage.getItem('blogs'))||[];
 if(!SavedBlog||SavedBlog.length===0){
    let content=document.createElement('p')
    content.innerText='No blogs found'
    document.getElementById('flex-cards').appendChild(content)}
    else{
      
 SavedBlog.forEach(element =>{
    var date=new Date();  
      var day=date.getDate();  
      var month=date.getMonth()+1;  
       var year=date.getFullYear(); 
     let content = document.createElement('div');
      content.classList.add('card1');
      content.innerHTML=`
      <img src="${(element.image)}" alt="blog" style="width:100%" id="blogImage">
      <p class="title" id="blogTitle">${(element.title)}</p>
<<<<<<< HEAD
      <p id="date">Date created:${day}/${month}/${year}</p>
      <p><button class="update" id="${(element.blogId)}">Edit</button></p><p><button class="delete" id="${element.blogId}">delete</button></p>`

      document.getElementById('flex-cards').appendChild(content)
      
        
      //delete
      var ButtonDelete=document.querySelectorAll('.delete')
      var cardToDelete=document.querySelectorAll('.card1')
=======
      <a href="#"><i class="fa fa-dribbble"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <p id="Blogstatus">status: ${(element.status)}</p>
      <p><button class="update" id="${element.blogId}">update</button></p><p><button class="delete" id="${element.blogId}">delete</button></p>`

      document.getElementById('flex-cards').appendChild(content)

    var ButtonUpdate=  document.querySelectorAll('.update');
        //save blog id in localstorage
        for(let i=0;i<ButtonUpdate.length;i++){
            ButtonUpdate[i].addEventListener('click',()=>{
                var id=ButtonUpdate[i].getAttribute("id")
                console.log(id);
                localStorage.setItem("ToUpdate",id)
                window.location="/BlogEdit.html"
            })
        }
       
     



     } )
     var ButtonDelete=document.querySelectorAll('.delete')
    
>>>>>>> 60d6adf86f70a43dadc035d7dbecb86c1c1a8f75
     var SavedBlog = localStorage.getItem('blogs');
     for(let i=0;i<ButtonDelete.length;i++){
         ButtonDelete[i].addEventListener('click',()=>{
          
             id=ButtonDelete[i].getAttribute("id")
            
             localStorage.setItem("ToDelete",id)
            
             blogs1=JSON.parse(SavedBlog)
             id=JSON.parse(localStorage.getItem('ToDelete'))
             let blogCopy=[]
             blogs1.forEach(element => {
                if(element.blogId!=id){  
                    
                 blogCopy.push(element)
                }
               
              cardToDelete[i].style.display='none'
             localStorage.setItem("blogs",JSON.stringify(blogCopy))
            
            });
            }
            
     )}
<<<<<<< HEAD
     //update
     var ButtonUpdate=  document.querySelectorAll('.update');
     //save blog id in localstorage
     for(let i=0;i<ButtonUpdate.length;i++){
         ButtonUpdate[i].addEventListener('click',()=>{
             var id=ButtonUpdate[i].getAttribute("id")
             console.log(id);
             localStorage.setItem("ToUpdate",id)
             window.location="/BlogEdit.html"
         })
        }

})


     } 
    
    
    })



    })
=======
    //put update button

    }}
     
     )
});
>>>>>>> 60d6adf86f70a43dadc035d7dbecb86c1c1a8f75

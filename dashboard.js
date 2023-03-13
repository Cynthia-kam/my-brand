
document.addEventListener("DOMContentLoaded", function (event) {
    //do work

    const divItem = document.getElementById('mainMessage');
    const divItem2 = document.getElementById('mainMessage2');
    const divItem3 = document.getElementById('mainMessage3');
    const message = document.getElementById('message');
    const reply = document.getElementById('reply');
    const like = document.getElementById('like');
    const userprofile = document.getElementById('userprofile');
    totalMessages = document.getElementById('totalMessages');
    totalBlogs = document.getElementById('totalBlogs');
    totalUsers = document.getElementById('totalUsers');
    superAdminEmail = 'abijurucyn@gmail.com'
    const boxUsers = document.getElementById('boxUsers');
    messageButton = document.getElementById('message-btn');
    main_body = document.getElementById('mainbody');
    logout = document.getElementById('logout');

    document.getElementById('ham-menu').addEventListener('click', () => {
        if (document.getElementById('sidebar').style.display = 'none') {
            document.getElementById('sidebar').style.backgroundColor = 'black'
            document.getElementById('sidebar').style.border = 'none'
            document.getElementById('sidebar').style.display = 'block'
        }
        main_body.addEventListener('click', () => {
            if (document.getElementById('sidebar').style.display = 'block') {
                document.getElementById('sidebar').style.display = 'none'
            }
        })
    })
    document.getElementById('ShowBlogButton').addEventListener('click', () => {
        main_body.style.display = 'block'
    })

    logout.addEventListener('click', e => {
        localStorage.removeItem('token');
        window.location = "/login.html"
        alert("logged out sucessfully")
    })
    Saveduser = JSON.parse(localStorage.getItem('currentUser')) || [];

    window.addEventListener('load', e => {
        fetch('https://pink-thankful-oyster.cyclic.app/blogs')
            .then(response => response.json())
            .then(blogs => {
                totalBlogs.innerText = blogs.data.length
            })
        fetch('https://pink-thankful-oyster.cyclic.app/message')
            .then(response => response.json())
            .then(messages => {
                totalMessages.innerText = messages.data.length
            })

        totalUsers.innerText = JSON.parse(localStorage.users).length;
        console.log(JSON.parse(localStorage.users).length)
        //  bodydiv.style.display='none'
    });

    boxUsers.addEventListener('click', () => {
       
        if (main_body.hasChildNodes()) return main_body.innerHTML = "";
        SavedUsers.forEach(element => {
            let content = document.createElement('div');
            content.innerHTML = `
                   
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

    messageButton.addEventListener('click', e => {
        // Savedmessage = JSON.parse(localStorage.getItem('messages')) || [];
        if (main_body.hasChildNodes()) return main_body.innerHTML = "";
        fetch('https://pink-thankful-oyster.cyclic.app/message')
            .then(response => response.json())
            .then(messages => {
                console.log(messages)
                messages.data.reverse().forEach(element => {
                    let content = document.createElement('div');
                    content.innerHTML = `
              <div class="main-content" id="mainMessage">
              <table>
                  <tr>
                      <th>Message</th>
                      <th>Content</th>
                  </tr>
                  <tr>
                      <td>${(element.fullname)}</td>
                      <td>${(element.content)}</td>
                  </tr>
              </table>
          </div>`
                    main_body.appendChild(content)
                });
            })


    })

    //bloglist contents
    addBlog = document.getElementById('btn-login');
    addBlog.addEventListener('click', e => {
        // if (document.getElementById('flex-cards').hasChildNodes()) return document.getElementById('flex-cards').innerHTML = "";
        // SavedBlog = JSON.parse(localStorage.getItem('blogs')) || [];
        // if (!SavedBlog || SavedBlog.length === 0) {
        //     let content = document.createElement('p')
        //     content.innerText = 'No blogs found'
        //     document.getElementById('flex-cards').appendChild(content)
        // }


        fetch('https://pink-thankful-oyster.cyclic.app/blogs')
            .then(response => response.json())
            .then(blogs => {
                console.log(blogs.data.length)
                blogs.data.forEach(blog => {
                    console.log(blog)
                    var date = new Date();
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    let content = document.createElement('div');
                    content.classList.add('card1');
                    content.innerHTML = `
      <img src="${(blog.image)}" alt="blog" style="width:100%" id="blogImage">
      <p class="title" id="blogTitle">${(blog.title)}</p>
      <p id="date">Created:${(blog.createdAt.split("T")[0])}</p>
      <p><button class="update" id="${(blog._id)}">Edit</button></p><p><button class="delete" id="${blog._id}">delete</button></p>`
                    document.getElementById('flex-cards').appendChild(content)

                    //button delete
                    var ButtonDelete = document.querySelectorAll('.delete')
                    var cardToDelete = document.querySelectorAll('.card1')

                    for (let i = 0; i < ButtonDelete.length; i++) {
                        ButtonDelete[i].addEventListener('click', function () {
                            var toDelete = this.getAttribute("id");
                            const token = localStorage.getItem('token');
                            if(!token){
                            alert("you must login first")
                            window.location = "/login.html"
                            }else{
                                fetch(`https://pink-thankful-oyster.cyclic.app/blogs/${toDelete}`, {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Authorization": `Bearer ${token}`
                                    },
                                })
                                    .then(response => response.json())
                                    .then( blogs => {
                                         if((blogs.message).includes("success")){
                                          document.getElementById('success-signup').style.display='block'
                                          document.getElementById('success-signup').innerText=blogs.message 
                                          cardToDelete[i].style.display = 'none' 
                                         }
                                         setTimeout(function(){
                                            document.getElementById('success-signup').style.display = 'none';
                                        }, 5000);
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                             
                            }
                            // localStorage.setItem('ToReadMore',id)
                  
                            
                        }
                        )



                    }
                    //button update
                    var ButtonUpdate = document.querySelectorAll('.update');
                    for (let i = 0; i < ButtonUpdate.length; i++) {
                        ButtonUpdate[i].addEventListener('click', function () {
                            var id = this.getAttribute("id");
                            localStorage.setItem('ToUpdate', id);
                            window.location = "/BlogEdit.html"

                        }
                        )
                    }

                })

            })
        // .catch(error => alert(error))
        //         SavedBlog.forEach(element => {
        //             var date = new Date();
        //             var day = date.getDate();
        //             var month = date.getMonth() + 1;
        //             var year = date.getFullYear();
        //             let content = document.createElement('div');
        //             content.classList.add('card1');
        //             content.innerHTML = `
        //   <img src="${(element.image)}" alt="blog" style="width:100%" id="blogImage">
        //   <p class="title" id="blogTitle">${(element.title)}</p>
        //   <p id="date">Date created:${day}/${month}/${year}</p>
        //   <p><button class="update" id="${(element.blogId)}">Edit</button></p><p><button class="delete" id="${element.blogId}">delete</button></p>`

        //             document.getElementById('flex-cards').appendChild(content)


        //             //delete
        //             var ButtonDelete = document.querySelectorAll('.delete')
        //             var cardToDelete = document.querySelectorAll('.card1')
        //             var SavedBlog = localStorage.getItem('blogs');
        //             for (let i = 0; i < ButtonDelete.length; i++) {
        //                 ButtonDelete[i].addEventListener('click', () => {

        //                     id = ButtonDelete[i].getAttribute("id")

        //                     localStorage.setItem("ToDelete", id)

        //                     blogs1 = JSON.parse(SavedBlog)
        //                     id = JSON.parse(localStorage.getItem('ToDelete'))
        //                     let blogCopy = []
        //                     blogs1.forEach(element => {
        //                         if (element.blogId != id) {

        //                             blogCopy.push(element)
        //                         }

        //                         cardToDelete[i].style.display = 'none'
        //                         localStorage.setItem("blogs", JSON.stringify(blogCopy))

        //                     });
        //                 }

        //                 )
        //             }
        //             //update
        //             var ButtonUpdate = document.querySelectorAll('.update');
        //             //save blog id in localstorage
        //             for (let i = 0; i < ButtonUpdate.length; i++) {
        //                 ButtonUpdate[i].addEventListener('click', () => {
        //                     var id = ButtonUpdate[i].getAttribute("id")
        //                     console.log(id);
        //                     localStorage.setItem("ToUpdate", id)
        //                     window.location = "/BlogEdit.html"
        //                 })
        //             }

        //         })





    })



})

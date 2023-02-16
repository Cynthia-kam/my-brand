
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work

            const divItem = document.getElementById('mainMessage');
            const divItem2 = document.getElementById('mainMessage2');
            const divItem3 = document.getElementById('mainMessage3');
            const message = document.getElementById('message');
            const reply = document.getElementById('reply');
            const like= document.getElementById('like');
            const userprofile=document.getElementById('userprofile');
            Totalusers=document.getElementById('Totalusers');
          
            messageButton=document.getElementById('message-btn');
             main_body=document.getElementById('mainbody');
            logout=document.getElementById('logout');


            logout.addEventListener('click',e=>{
                localStorage.removeItem('currentUser');
                window.location="/login.html"
            })
            Saveduser = JSON.parse(localStorage.getItem('currentUser')) || [];
            if(Saveduser.role==='admin'){
                messageButton.style.display='none';
            }
            window.addEventListener('load', e=> {
                userprofile.innerText=Saveduser.role;
                Totalusers.innerText=JSON.parse(localStorage.messages).length;
                console.log(JSON.parse(localStorage.users).length)
              //  bodydiv.style.display='none'
                });
            
            // divItem.addEventListener('click', (e) => {
            //     divClick()
            // })
            // function divClick() {
            //     divItem.style.display = 'none';
            //     divItem2.style.display = 'none';
            //     divItem3.style.display = 'none';
            //     message.style.display = 'block';
            //     reply.style.display = 'block';
            //     //console.log('div is removed');
            // }

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

           
        });
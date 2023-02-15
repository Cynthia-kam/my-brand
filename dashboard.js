
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work

            const divItem = document.getElementById('mainMessage');
            const divItem2 = document.getElementById('mainMessage2');
            const divItem3 = document.getElementById('mainMessage3');
            const message = document.getElementById('message');
            const reply = document.getElementById('reply');
            const like= document.getElementById('like');
            const userprofile=document.getElementById('userprofile');
            bodydiv=document.querySelector('.main-body');
            messageButton=document.getElementById('message-btn');
             main_body=document.getElementById('mainbody');



            window.addEventListener('load', e=> {
                Saveduser = JSON.parse(localStorage.getItem('currentUser')) || [];
                userprofile.innerText=Saveduser.role;
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
                Savedmessage.forEach(element =>
            //    console.log(Savedmessage)
              //  bodydiv.style.display='block'
              main_body.innerHTML=`
              <div class="main-content" id="mainMessage">
              <table>
                  <tr>
                      <th>Message</th>
                      <th>Subject</th>
                  </tr>
                  <tr>
                      <td>"${(element.email)}"</td>
                      <td>Greetings</td>
                  </tr>
              </table>
          </div>`

             ); })
           
        });
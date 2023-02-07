
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work

            const divItem = document.getElementById('mainMessage');
            const divItem2 = document.getElementById('mainMessage2');
            const divItem3 = document.getElementById('mainMessage3');
            const message = document.getElementById('message');
            const reply = document.getElementById('reply');
            const like= document.getElementById('like');
            
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
            like.addEventListener('click', (e) => {
                likeBlog()
            })
            
            function likeBlog(){
                if(like.style.backgroundColor!=='rgba(255, 138, 0, 1)'){
                like.style.backgroundColor='rgba(255, 138, 0, 1)';
            
               // console.log("button clicked and background changed");}

                // if(like.style.backgroundColor=='rgba(255, 138, 0, 1)'){
                // like.style.backgroundColor='rgba(0, 0, 0, 0.84))'
                // console.log("button clicked and background changed")}
            }
          
        }
        });
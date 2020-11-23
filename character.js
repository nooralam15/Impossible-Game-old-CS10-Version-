// impossible game level 1

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 700
cnv.height = 450

//global variables
let level1 = document.getElementById("level1")
let square = {
    X: 100,
    Y: 200,
    w: 27,
    h: 27,
    speed: 4,
}

let obstacle1 = {
    x: 148,
    y: 50,
    w: 41,
    h: 300,
}

let obstacle2 = { 
    x: 228,
    y: 351,
    w: 280,
    h: 40,
}

let obstacle3 = {
    x: 510, 
    y: 150,
    w: 35,
    h: 400,
}

let obstacle4 = {
    x: 190,
    y: 110,
    w: 278,
    h: 40

}

let circle1 = {
    x: 490,
    y: 290,
    r: 9,
    speed: 6
}

let circle2 = {
    x: 490,
    y: 210,
    r: 9,
    speed: 6
}


let circle3 = {
    x: 200,
    y: 330,
    r: 9,
    speed: 6
}


let circle4 = {
    x: 200,
    y: 250,
    r: 9,
    speed: 6
}

let circle5 = {
    x: 200,
    y: 170,
    r: 9,
    speed: 6
}


let gamestate = true
let rightPressed = false
let leftPressed = false
let upPressed = false 
let downPressed = false
let deaths = 0 


//animation

requestAnimationFrame(loop)

function loop() {
    if (gamestate) {

        if (rightPressed) {
            square.X += square.speed
        }
        if (leftPressed) {
            square.X -=square.speed
        }
         if (upPressed) {
            square.Y -= square.speed
        }
         if (downPressed) {
            square.Y += square.speed
        }

        //if right arrow is clicked and guy moves to the right
        // if (rightPressed) { 
        //     //first onstacle
        //     if (square.X > obstacle1.x - obstacle1.w + 12 && square.X < obstacle1.x + obstacle1.w +1  && square.Y  > obstacle1.y - obstacle1.h  && square.Y < obstacle1.y + obstacle1.h + 6 ) {
        //         console.log("collisionONE")
        //         square.speed = 0
        //     }
        //     //second obsatcl;e
        //     else if (square.X > obstacle2.x - obstacle2.w + 250 && square.X < obstacle2.x + obstacle2.w +1  && square.Y  > obstacle2.y - obstacle2.h + 12 && square.Y < obstacle2.y + obstacle2.h + 5 ) {
        //         console.log("collisionTWO")
        //         square.X = 198
        //     }
        //     //thjrid obatcle
        //     else if (square.X > obstacle3.x - obstacle3.w +3 && square.X < obstacle3.x + obstacle3.w +6  && square.Y  > obstacle3.y - obstacle3.h + 372 && square.Y < obstacle3.y + obstacle3.h + 0) {
        //         console.log("collisionTHREE")
        //         square.X = 478
        //     } 
        //     else { 
        //         square.X += square.speed
        //     }
        // } 
        
        
        
        //  if (leftPressed ) {
        //     // first object 
        //     if (square.X > obstacle1.x - obstacle1.w + 12 && square.X < obstacle1.x + obstacle1.w +1  && square.Y  > obstacle1.y - obstacle1.h  && square.Y < obstacle1.y + obstacle1.h + 6 ) {
        //         console.log("collisionONE")
        //         square.X = 190
        //     }
        //     //thirdf wall
        //     else if (square.X > obstacle3.x - obstacle3.w +3 && square.X < obstacle3.x + obstacle3.w +6  && square.Y  > obstacle3.y - obstacle3.h + 372 && square.Y < obstacle3.y + obstacle3.h + 0) {
        //         console.log("collisionTHREE")
        //         square.X = 550
        //     }
        //     // fourth wall
        //     else if (square.X > obstacle4.x - obstacle4.w +220 && square.X < obstacle4.x + obstacle4.w +3  && square.Y  > obstacle4.y - obstacle4.h + 0 && square.Y < obstacle4.y + obstacle4.h + 5) {
        //         console.log("collisionFOUR")
        //         square.X = 471
        //     }
        //     else { 
        //         square.X -= square.speed
        //     }
        // } 
        
        
        //  if (upPressed) {
        //     //forst wall 
        //     if (square.X > obstacle1.x - obstacle1.w + 12 && square.X < obstacle1.x + obstacle1.w +1  && square.Y  > obstacle1.y - obstacle1.h  && square.Y < obstacle1.y + obstacle1.h + 6 ) {
        //         console.log("collisionONE")
        //         square.Y = 352
        //     }
        //     // fourht wall obstacle
        //     if (square.X > obstacle4.x - obstacle4.w +220 && square.X < obstacle4.x + obstacle4.w +3  && square.Y  > obstacle4.y - obstacle4.h + 0 && square.Y < obstacle4.y + obstacle4.h + 5) {
        //         console.log("collisionFOUR")
        //         square.Y = 153
        //     } else {
        //         square.Y -= square.speed
        //     }

            
        // }  
        
        // if (downPressed) {
        //     // seocnd wall 
        //     if (square.X > obstacle2.x - obstacle2.w + 250 && square.X < obstacle2.x + obstacle2.w +1  && square.Y  > obstacle2.y - obstacle2.h + 12 && square.Y < obstacle2.y + obstacle2.h + 5 ) {
        //         console.log("collisionTWO")
        //         square.Y = 322
        //     }
        //     // third wall
        //     if (square.X > obstacle3.x - obstacle3.w +3 && square.X < obstacle3.x + obstacle3.w +6  && square.Y  > obstacle3.y - obstacle3.h + 372 && square.Y < obstacle3.y + obstacle3.h + 0) {
        //         console.log("collisionTHREE") 
        //         square.Y = 124
        //     } else {
        //         square.Y += square.speed
        //     }
        // }

        

       

    // collision with first obstacle 
      if (square.X > obstacle1.x - obstacle1.w + 12 && square.X < obstacle1.x + obstacle1.w +1  && square.Y  > obstacle1.y - obstacle1.h  && square.Y < obstacle1.y + obstacle1.h + 6 ) {
        console.log("collisionONE")
         if (rightPressed) {
            square.X = 120
        } 
         else if (leftPressed) {
            square.X = 190
        } 
         else if (upPressed) {
            square.Y = 356
        }
       
    } 
 

    // collisoopn with second obatcle 
    if (square.X > obstacle2.x - obstacle2.w + 250 && square.X < obstacle2.x + obstacle2.w +1  && square.Y  > obstacle2.y - obstacle2.h + 12 && square.Y < obstacle2.y + obstacle2.h + 5 ) {
         console.log("collisionTWO")
         if (downPressed) {
            square.Y = 322
        }
         else if (rightPressed) {
            square.X = 198
        }   
     } 
     //collsion detecion thrid obstacle
     if (square.X > obstacle3.x - obstacle3.w +3 && square.X < obstacle3.x + obstacle3.w +6  && square.Y  > obstacle3.y - obstacle3.h + 372 && square.Y < obstacle3.y + obstacle3.h + 0) {
        console.log("collisionTHREE")
        if (downPressed) {
            square.Y = 122
        }
        else if (rightPressed) {
            square.X = 478
        } 
         else if (leftPressed) {
            square.X = 551
        } 
        
    } 
    //foutrh obstacle collision
    if (square.X > obstacle4.x - obstacle4.w +220 && square.X < obstacle4.x + obstacle4.w +3  && square.Y  > obstacle4.y - obstacle4.h + 0 && square.Y < obstacle4.y + obstacle4.h + 5) {
        console.log("collisionFOUR")
        //square.speed = square.speed *-1
         if (upPressed) {
            square.Y = 154
        }
         else if (leftPressed) {
            square.X = 471
        } 
    } 

    


    // circle 1 movement
    circle1.x -= circle1.speed
    if (circle1.x + circle1.r < obstacle1.x + obstacle1.w + 18) {
        circle1.speed *=-1

    } if (circle1.x + circle1.r > obstacle3.x) {
        circle1.speed *=-1
    }

    //circle 2 movement
    circle2.x -= circle2.speed
    if (circle2.x + circle2.r < obstacle1.x + obstacle1.w + 18) {
        circle2.speed *=-1

    } if (circle2.x + circle2.r > obstacle3.x) {
        circle2.speed *=-1
    }

    //cirlce 3 movment 
    circle3.x += circle3.speed
    if (circle3.x + circle3.r > obstacle3.x) {
        circle3.speed *=-1
    }
   
    if (circle3.x + circle3.r < obstacle1.x + obstacle1.w + 18) {
        circle3.speed *=-1

    } 
    //circle 4 movment 
    circle4.x += circle4.speed
    if (circle4.x + circle4.r > obstacle3.x) {
        circle4.speed *=-1
    }
   
    if (circle4.x + circle4.r < obstacle1.x + obstacle1.w + 18) {
        circle4.speed *=-1

    } 
    //cirlce 5 movmenet 
    circle5.x += circle5.speed
    if (circle5.x + circle5.r > obstacle3.x) {
        circle5.speed *=-1
    }
   
    if (circle5.x + circle5.r < obstacle1.x + obstacle1.w + 18) {
        circle5.speed *=-1

    } 


    //circle1 && square collision dtetcion
    if(circle1.x + circle1.r > square.X  && circle1.x - circle1.r < square.X + square.w  && circle1.y - circle1.r > square.Y - square.h + 12 && circle1.y - circle1.r < square.Y + square.h ) {
        console.log("circle1collisobn")
       square.X = 50
        deaths++
    }
    // circle2 && square collison 
    if(circle2.x + circle2.r > square.X && circle2.x - circle2.r < square.X + square.w && circle2.y - circle2.r > square.Y - square.h + 12 && circle2.y - circle2.r < square.Y + square.h ) {
        console.log("circle2collisobn")
        square.X = 50
        deaths++
    }
    //circle 3 and square collsion
    if(circle3.x + circle3.r > square.X  && circle3.x - circle3.r < square.X + square.w && circle3.y - circle3.r > square.Y - square.h + 12 && circle3.y - circle3.r < square.Y + square.h ) {
        console.log("circle3collisobn")
        square.X = 50
        deaths++
    }
    //circle 4 amd square collison
    if(circle4.x + circle4.r > square.X  && circle4.x - circle4.r < square.X + square.w && circle4.y - circle4.r > square.Y - square.h + 12 && circle4.y - circle4.r < square.Y + square.h ) {
        console.log("circle4collisobn")
      square.X = 50
        deaths++
    }
    // circle 5 and square collison 
    if(circle5.x + circle5.r > square.X  && circle5.x - circle5.r < square.X + square.w && circle5.y - circle5.r > square.Y - square.h + 12 && circle5.y - circle5.r < square.Y + square.h ) {
        console.log("circle5collisobn")
       square.X = 50
        deaths++
    }



        //last far wall
        if (square.X  > 640) {
            square.X  = 640
        }

        //top part of first and last box
        if (square.Y < 114) {
            square.Y = 114
        }
        //bottom part of first and last box
        if (square.Y > 364) {
            square.Y = 364
        }
        //back wall of first box
        if (square.X  < 30) {
            square.X  = 30



            let mouseCoordsStr = "(" + mouseX + "," + mouseY + ")";
           ctx.fillText(mouseCoordsStr, mouseX, mouseY);
        }




        //drawing all the shapes
        ctx.drawImage(level1, -50, 0)
        ctx.fillStyle = "red"
        ctx.fillRect(square.X, square.Y, square.w, square.h)
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(circle1.x,circle1.y, circle1.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(circle2.x,circle2.y, circle2.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(circle3.x,circle3.y, circle3.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(circle4.x,circle4.y, circle4.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(circle5.x,circle5.y, circle5.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = "black"
        ctx.fillText("Deaths:", 500, 45)
        ctx.font = "30px 'Anton', sans-serif"
        ctx.fillStyle = "black"
        ctx.fillText(deaths, 600, 45)
        ctx.font = "30px 'Anton', sans-serif"
        //ctx.fillStyle = "white"
        //ctx.fillRect(obstacle1.x, obstacle1.y, obstacle1.w, obstacle1.h)
        //ctx.fillStyle = "white"
       // ctx.fillRect(obstacle2.x, obstacle2.y, obstacle2.w, obstacle2.h)
        //ctx.fillStyle = "white"
        //ctx.fillRect(obstacle3.x, obstacle3.y, obstacle3.w, obstacle3.h)


    }




    requestAnimationFrame(loop)


}


//control mechanics
document.addEventListener("keydown", keyhandlerdown)
document.addEventListener("keyup", keyhandlerup)

//let a = false;

function keyhandlerdown() {
    //console.log(event)
    if (gamestate) {
        if(!event.repeat) {
            if (event.code == "ArrowRight") {
               rightPressed = true
            }
            else if (event.code == "ArrowLeft") {
                leftPressed = true 
            }
            else if (event.code == "ArrowUp") {
                upPressed = true
            }
            else if (event.code == "ArrowDown") {
                downPressed = true
            }

        }
        

    }
}


function keyhandlerup() {
    if(gamestate) {
        if (event.code == "ArrowRight") {
            rightPressed = false
         }
         else if (event.code == "ArrowLeft") {
             leftPressed = false
         }
         else if (event.code == "ArrowUp") {
             upPressed = false
         }
         else if (event.code == "ArrowDown") {
             downPressed = false
         }

    }
}



document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
    //Get rectangle info about canvas location
 let cnvRect = cnv.getBoundingClientRect();

    //Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
    //console.log(mouseY)
}
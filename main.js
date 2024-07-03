//get elmints

const gameContainer = document.querySelector(".container"),
usreResult = document.querySelector(".user_result img"),
cbuResult = document.querySelector(".cbu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");






//loop trough each option image element



optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        usreResult.src = cbuResult.src = "images/rock.png";

        result.textContent = "wait...";
        
    //loop trough each option image again
    optionImages.forEach((image2, index2) => {

        index !== index2 && image2.classList.remove("active")

    })

    gameContainer.classList.add("start")

    let time = setTimeout(() => {
        gameContainer.classList.remove("start")

        let imageSrc = e.target.querySelector("img").src;

    usreResult.src = imageSrc;


    let randomNumber = Math.floor(Math.random()*3)

    let cbuImage = ["images/paper.png" , "images/rock.png" , "images/scissors.png"   ]

    cbuResult.src = cbuImage[randomNumber];


    let cpuValue = ["R" , "P" , "S"][randomNumber];
    
    let userValue = ["R" , "P" , "S"][index];


    let outcomes = {
        RR: "Draw ",
        RP: "User" ,
        RS: "Cpu",
        PP: "Draw ",
        PR: "Cpu" ,
        PS: "User ",
        SS: "Draw ",
        SR: "User" ,
        SP: "Cpu ",
    };

    let outComeValue = outcomes[userValue + cpuValue]
    result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`
    
    }, 2000 );

    })
})
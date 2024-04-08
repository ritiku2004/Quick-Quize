let urlGk = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
let urlHis = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
let urlPol = 'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple';
let urlGeo = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple';
let urlCs = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
let urlAnim = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';

let que = [];
let response,data,score=0;
let rule= document.querySelector(".rule-btn");
let rule_close= document.querySelector(".rule-close");
let rule_cont= document.querySelector(".rule_cont");
let que_block= document.querySelector(".que-container");
let opt_cont = document.querySelector(".opt-container");
let score_cont = document.querySelector(".score_container");
let btn = document.querySelector("#btn");
let scr = document.querySelector(".score");
let que_cont = document.querySelector(".que");
let menu = document.querySelector(".select-menu");
let gk = document.querySelector("#gk");
let hist = document.querySelector("#hist");
let pol = document.querySelector("#pol");
let geo = document.querySelector("#geo");
let cs = document.querySelector("#cs");
let anim = document.querySelector("#anim");
let i = 0;

rule.addEventListener("click",()=>{
    rule_cont.style.zIndex='100';
    rule_cont.style.opacity='1';
})
rule_close.addEventListener("click",()=>{
    rule_cont.style.zIndex='-1';
    rule_cont.style.opacity='0';
})

function showQue(i){
    window.addEventListener('resize', function(event) {
        result();
        return;
    }, true);
    document.addEventListener('visibilitychange', (event) => {
        result();
        return;
    });
    if(i>=10){
        result();
        return;
    } 
    que = data.results;
    const currentQuestion = que[i];
    let correct = currentQuestion.correct_answer;
    const options = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
    shuffleArray(options);
    let tempq = document.createElement("p");
        tempq.className = "que";
        tempq.textContent = i+1+". "+currentQuestion.question;
        que_cont.prepend(tempq);
    options.forEach(opt => {
        let temp = document.createElement("div");
        temp.className = "opt";
        temp.textContent = opt;
        opt_cont.appendChild(temp);
        temp.addEventListener("click",()=>{
            i++;
            if(temp.textContent == correct){
                score++;
            }
            opt_cont.innerHTML=" ";
            que_cont.innerHTML=" ";
            console.log(score);
            showQue(i);
        })
    });
}

async function getdata(a){
    if(a==cs) response = await fetch(urlCs);
    else if(a==anim) response = await fetch(urlAnim);
    else if(a==pol) response = await fetch(urlPol);
    else if(a==hist) response = await fetch(urlHis);
    else if(a==gk) response = await fetch(urlGk);
    else if(a==geo) response = await fetch(urlGeo);
    data = await response.json(); 
    await showQue(i);
}

function result(){
    menu.style.opacity='0';
    menu.style.zIndex='-1';
    que_block.style.opacity='0';
    que_block.style.zIndex='0';
    score_cont.style.opacity='1';
    score_cont.style.zIndex='10';
    scr.textContent = `Your score is ${score}/10`;
    btn.addEventListener("click",()=>{
        score_cont.style.opacity='0';
        score_cont.style.zIndex='0';
        menu.style.opacity='1';
        menu.style.zIndex='10';
        opt_cont.innerHTML=" ";
        que_cont.innerHTML=" ";
        score = 0;
    })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function main(){
    gk.addEventListener("click",()=>{
        getdata(gk);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
    hist.addEventListener("click",()=>{
        getdata(hist);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
    pol.addEventListener("click",()=>{
        getdata(pol);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
    cs.addEventListener("click",()=>{
        getdata(cs);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
    anim.addEventListener("click",()=>{
        getdata(anim);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
    geo.addEventListener("click",()=>{
        getdata(geo);
        menu.style.opacity='0';
        menu.style.zIndex='0';
        que_block.style.opacity='1';
        que_block.style.zIndex='10';
    });
};
main();
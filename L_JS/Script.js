const ArrZap = [
    "Як звати мого кота",
    "Якого кольору мій кіт",
    "Скільки лап у кота",
    "Що робить - кіт",
    "Як звати мого собаку",
    "Якого кольору мій пес",
    "Скільки лап у собаки",
    "Що робить - пес",
    "Якого кольору стіл",
    "Яка вага столу",
    "Який він - стіл",
    "Із чого - стіл",
    "Який у мене стул",
    "Якого кольору  - стул",
    "Стул ?",
    "За що він зі мною так - стул",
    "Сонце яке ",
    "Сонце гарне",
    "Сонце блакитне",
    "Сонце біле",
]

const ArrW = [
    ["Жук","Пес","Ток","Бок"],
    ["Білий","Сірий","Чорний","Рожевий"],
    ["2","4","6","8"],
    ["Спить","Сидить","Грає","Танцює"],
    ["Жук","Кот","Ток","Бок"],
    ["Білий","Сірий","Чорний","Рожевий"],
    ["2","4","6","8"],
    ["Спить","Сидить","Грає","Танцює"],
    ["Білий","Сірий","Чорний","Рожевий"],
    ["1","2","3","4"],
    ["Гарний","Гарний","Гарний","Гарний"],
    ["Дерево","Камінь","Пил","Скло"],
    ["Білий","Сірий","Чорний","Рожевий"],
    ["Гарний","Гарний","Гарний","Гарний"],
    ["?","?","?","?"],
    ["Білий","Сірий","Чорний","Рожевий"],
    ["Просто","Бостон","Бос","Про"],
    ["Гарне","Гарне","Гарне","Гарне"],
    ["Так","Ні","Можливо","Слива"],
    ["Так","Ні","Можливо","Слива"]
]

const ArrWinW = [2,2,2,3,2,3,2,4,4,3,1,1,3,2,1,1,1,3,1,1,1]

N = 0;
const Zap = document.querySelector(".Zap");
const W = document.querySelectorAll(".W");

function ZapGo(N){
    Zap.innerText = ArrZap[N];
    for(let x = 0; x < 4; x++){
        W[x].innerText = ArrW[N][x];
    }
}ZapGo(N);

let WN = 0;

const Win = document.querySelector(".Win");

function Go (Num){
    if(Num == ArrWinW[N]){WN++;}
    Win.innerText = WN;
    N++;
    ZapGo(N);
}
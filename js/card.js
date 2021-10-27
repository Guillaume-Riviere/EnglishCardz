function init_card(){
    //console.log(data);
    random = getRandomInt(0, (data.length));
    console.log(data.length);

    document.getElementById("easy_word").innerHTML=data[random].word;
    document.getElementById("easy_definition").innerHTML=data[random].definition;
    document.getElementById("easy_hint").innerHTML=data[random].hint;


    random = getRandomInt(0, (data2.length));

    document.getElementById("medium_word").innerHTML=data2[random].word;
    document.getElementById("medium_def").innerHTML=data2[random].definition;


    random = getRandomInt(0, (data3.length));

    document.getElementById("hard_word").innerHTML=data3[random].word;
    document.getElementById("hard_sentence").innerHTML=data3[random].sentence;

   
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//  document.getElementById("button").onclick=init_card();
init_card();
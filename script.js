let word = document.getElementById("txt");

let th_row = document.querySelector(".thirdrow");
let col = document.createElement("div");
col.className = "col-lg-12";
col.className = "col-sm-6";
col.classList.add("col");

async function foo(){
    try{
    //th_row.innerHTML ="";
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`);
    let data1 = await data.json();
    console.log(data1);

    col.innerHTML = `<p>Word : ${data1[0].word}<p>
    <p>Synonyms : ${data1[0].meanings[0].synonyms}<p>
    <p>Definition : ${data1[0].meanings[0].definitions[0].definition}</p>
    <p>Example : ${data1[0].meanings[0].definitions[0].example}</p>
    <p>Source URL : ${data1[0].sourceUrls}</p>`;
    th_row.append(col);
    }
    catch(error){
        console.log(error);
    }
}
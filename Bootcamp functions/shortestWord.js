export default function shortestWord(sentence) {
    //split the sentence and store the values in an array "senty" 
    let senty = sentence.split(" ");
    let shortestWord = senty[0];
    //display the array for myself 
    console.log(senty);
    //loop through the array
    for (let i in senty) {
        if (senty[i].length <= shortestWord.length) {
            shortestWord = senty[i];
        }
    }
     return shortestWord;
}
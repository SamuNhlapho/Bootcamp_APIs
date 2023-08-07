export default function longestWord(sentence) {
    let senty = sentence.split(" ");
    let longestWord = senty[0];
    //display the array for myself 
    console.log(senty);
    //loop through the array
    for (let i in senty) {
      if (senty[i].length >= longestWord.length) {
        longestWord = senty[i];
      }
    }
    return longestWord;
}
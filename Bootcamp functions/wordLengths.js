export default function wordLengths(sentence) {
    //initialize sum of values to 0
    let sum = 0;
    //split the sentence and store the values in an array "senty" 
    let senty = sentence.split(" ");
    //display the array for myself 
    console.log(senty);
    //loop through the array
    for (let i in senty) {
        //add all the lenghts of the words of the array
        sum += senty[i].length;
    }
    //return the sum
    return sum;
}
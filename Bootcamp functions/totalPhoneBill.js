export default function totalPhoneBill(phoneBill){
  var total = 0;
  const callAndSms = phoneBill.split(",");
  for( var i=0; i<callAndSms.length; i++){
    let callOrSms = callAndSms[i].trim();
    if (callOrSms === "call"){
      total = total + 2.75;
    } 
    else {
      total = total + 0.65;
    }
  }
  return "R" + total.toFixed(2);
}
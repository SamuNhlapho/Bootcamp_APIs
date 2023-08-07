// document.addEventListener('alpine:init', () => {
//     Alpine.data('bootcampAPI', () => {
//         return {
//             phoneBill: '',
//             billMessage: '',
//             Usage : '',
//             availableAirtime : 0,
//             airtimeMessage : '',


//             totalPhoneBill() {
//                 axios.get(`/api/phonebill/prices?phoneBill=${this.phoneBill}`)
//                 .then(result => {
//                     this.billMessage = result.data.bill;
//                 })
//             },

//             calculateAirtime() {

//                 axios.get(`/api/enough?Usage=${this.Usage}&availableAirtime=${this.availableAirtime}`)
//                 .then(result => {
//                     if (result.data.error) {
//                         alert (result.data.error);
//                 } else {
//                     this.airtimeMessage = result.data.totalBill;
//                 }}
//                 )}

// }
//         })
//         });

// document.addEventListener('alpine:init', () => {
// Alpine.data('enoughAirtime', function(){

//     return {
//         Usage : '',
//         availableAirtime : 0,
//         airtimeMessage : '',

//         calculateAirtime() {

//             axios.get(`/api/enough?Usage=${this.Usage}&availableAirtime=${this.availableAirtime}`)
//             .then(result => {
//                 if (result.data.error) {
//                     alert (result.data.error);
//             } else {
//                 this.airtimeMessage = result.data.totalBill;
//             }}
//             )}
                    
                    
//                 }}
// )

                
                
                    
                


                            // .then(result => {
                            //     if (result.data.error) {
                            //         alert (result.data.error);
                            // } else {
                            //     this.airtimeMessage = result.data.totalBill;

            setTimeout(() => {
                this.Usage = '',
                this.availableAirtime = '',
                this.airtimeMessage = ''
               }, 5000);
               

        
    

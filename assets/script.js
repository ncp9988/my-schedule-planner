// Display current day
$('#currentDay').text(moment().format('LLLL'))

//time block is color-coded
let now = moment().hour(); 
let textEntry ="#text-entry"
let time = "#time";
let timeString =$(time).text();
let timeBlock = switchHours(timeString);
if (timeBlock < now) {
    $(textEntry).addClass("past");
} else if (timeBlock > now) {
    $(textEntry).addClass("future")
} else {
    $(textEntry).addClass("present")
}

//switch time to 24 hours clock
function switchHours(timeString) {
switch(timeString) {
    case "8AM" : return 8 ; 
    case "9AM" : return 9 ;
    case "10AM" : return 10 ;
    case "11AM" : return 11 ;
    case "12AM" : return 12 ;
    case "1PM" : return 13 ;     
    case "2PM" : return 14 ;
    case "3PM" : return 15 ;
    case "4PM" : return 16 ;
    case "5PM" : return 17 ;

}
}
// var textEl = document.querySelector('#text-entry')
// let schedule = {
//     "9AM": textEl.value,
//     "10AM": textEntry,
//     "11AM": "",

// }

$("button").click(function(){
   
    var timeBlock = $(this).attr("id").split("-")[1]
    var userEntry = $(this).siblings("textarea").val()
    console.log(timeBlock,userEntry)
    localStorage.setItem(timeBlock,userEntry)
})
function saveLocal() {
    
}




document.addEventListener("DOMContentLoaded", function(){

    DocumentEdit.logMessage()
    
    EventHandlers.initialize()
})



var DocumentEdit = (function(){

    function logMessage() {

        console.log("Hello there")
        console.log("Hello again")
    }



    return {

        logMessage
    }

})()



var EventHandlers = (function(){

    function initialize(){

        var clickMeBtn = document.getElementById("click-me-btn")
        clickMeBtn.addEventListener("click", onClickClickMeBtn)


        var startCountdownBtn = document.getElementById("start-countdown")
        startCountdownBtn.addEventListener("click",startCountDown)

        var ClearFields = document.getElementById("ClearFields")
        ClearFields.addEventListener("click",onClickClearFields)

    }



    function onClickClickMeBtn(){
        
        var inputTextarea = document.getElementById("input-textarea")
        var editText = document.getElementById("edit-text");

        editText.innerText = inputTextarea.value
        var onClickClickMeBtn = document.getElementById("input-textarea").value = "";
        

    }



    function startCountDown(){
        var countdown = 10

        var interval = setInterval(function(){
            var countdownParagraph = document.getElementById("countdown")
            countdownParagraph.innerText = countdown
            

            if(countdown == 0){
                clearInterval(interval)
                
            }
            countdown = countdown - 1
        }, 1000)
    }

    function onClickClearFields() {

        var ClearFields = document.getElementById("input-textarea").value = "";
        
    }

    return {

        initialize

    }

})()
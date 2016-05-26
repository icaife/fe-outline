! function() {
    var one = document.getElementById("J_event_one");
    var two = document.getElementById("J_event_two");
    var three = document.getElementById("J_event_three");
    
    //dom1 dom2 dom3
    
    one.addEventListener("click", function(event) {
        console.log(event.target.className);
        console.log(event.currentTarget.className);
        // console.log(this.className);
    },true);

    two.addEventListener("click", function(event) {
        // console.log(this.className);
    },true);

    three.addEventListener("click", function(event) {
        // console.log(this.className);

    },true);

    var list = document.getElementById('J_list');
    list.addEventListener('click',function(event){
        var target = event.target;
        target.style.background = target.style.background !== 'blue' ? 'blue' : 'red';
    });

}();
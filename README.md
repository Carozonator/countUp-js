# countUp-js
jQuery Plugin to count up

Easy to use! 
Default Settings:

    	speed: 1 // miliseconds
    	number: 0 // number to finish
    	after: "" // text after the number 
    	before: "" // text before the number
    	commaIndex: 3 // where to place the comma in the number
    	triggerClass: "" // class of element that will trigger the counter when reach on the screen ( on scroll )
    	start: false // start without a trigger
    	step: 1 // increase in every iteration 
    	
Example 1: 
```html
  <p id="count-up"></p>

<script>
$(document).ready(function(){
  $("#count-up").countUp();
});
</script>
```
Example 2: 
```html
  <p id="count-up"></p>

<script>
$(document).ready(function(){
  $("#count-up").countUp({
    	speed: 10,
    	number: 2500,
    	before: "$",
    	triggerClass: "my-container",
    	step: 5
    });
});
</script>
```

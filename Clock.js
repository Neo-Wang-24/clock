window.onload= function (){
var audio = document.querySelector("audio");
var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
	var ampm = h >= 12 ? 'PM' : 'AM';
  
	
    m = checkTime(m);
    s = checkTime(s);
	
	function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   	return i;
	}
	
	

var paper = new Raphael( 0, 0, 800, 800);

var backGround = paper.rect(0, 80, 500, 800);

backGround.attr({ fill: "270-#f00-#FF8C00"});

var digitalBackGround = paper.rect(175, 435, 150, 40);

digitalBackGround.attr({ fill: "#80ffff"});


var today = new Date();
	var year = today.getYear();
		if(year < 1000){
			year += 1900
		}
	var day = today.getDay();
	var month = today.getMonth();
	var daym = today.getDate();
	var dayarray = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
	var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec");
	

	//time zone buttons
    var Button1 = paper.rect(30,550,50,30);
	Button1.attr({fill: "red"});
	var buttontext = paper.text(55,560,"UK");
	buttontext.attr({fill:"#ffff80","font-size": 15});
	Button1.click(function(){
		
		var display = paper.text(230, 560,  "London:  " + (h-8)%24 + ":" + m );
display.attr({fill:"yellow","font-size":"20"});
	}); 
	
	var Button2 = paper.rect(30,600,50,30);
	Button2.attr({fill: "#33bbff"});
	var buttontext = paper.text(55,615,"USA");
	buttontext.attr({"font-size": 15});
	Button2.click(function(){
		
		var display = paper.text(230, 615,  "New York:  " + (h-21)%24 + ":" + m );
display.attr({fill:"#00ff55","font-size":"20"});
	});
	
	var Button3 = paper.rect(30,650,50,30);
	Button3.attr({fill: "0-#0ff-#fff:30-#f00"});
	var buttontext = paper.text(55,660,"France");
	buttontext.attr({"font-size": 15});
	Button3.click(function(){
		
		var display = paper.text(230, 660,  "Paris:  " + (h-17)%24 + ":" + m );
display.attr({fill:"#000080","font-size":"20"});
	});
	
//date
	 var Button0 = paper.circle(30,50,20);
	Button0.attr({fill: "180-#f00-#000"});
	var buttontext = paper.text(28,50,"Date");
	buttontext.attr({fill:"white","font-size": 15});
	Button0.click(function(){
	var calendar = paper.ellipse(250,50,150,30);
	
		var display1 = paper.text(250, 50,  "" +dayarray[day]+ " / " +daym+ " "+montharray[month]+ " / " +year);
   display1.attr({fill:"black","font-size": 25,"font-family":"Cooper Black"});
   });

   
   //color
   
   var Button1 = paper.rect(400,100,50,20);
	Button1.attr({fill: "#ffff66"});
	var buttontext = paper.text(420,110,"Night");
	buttontext.attr({"font-size": 15});
	Button1.click(function(){
		backGround.attr({ fill: "90-#f00-#00008B"});
		face .attr({"stroke-width" : 10,
    fill : "r(0.5,0)#fff-#FFD700"});
	});
		
	var Button2 = paper.rect(10,100,50,20);
	Button2.attr({fill: "#087cc4"});
	var buttontext = paper.text(30,110,"Day");
	buttontext.attr({"font-size": 15,fill:"white"});
	Button2.click(function(){
		backGround.attr({ fill: "270-#f00-#FF8C00"});
		face .attr({"stroke-width" : 10,
    fill : "r(0.5,0)#fff-#087cc4"});
	});
   
   
//draw analog clock
   var face1 = paper.circle(254,255,155)
    .attr({fill : "45-#000-#fff"});
	
    var face = paper.circle(250,250,150)
    .attr({"stroke-width" : 10,
    fill : "r(0.5,0)#fff-#087cc4"});
	var face2 = paper.circle(251,251,144)
    .attr({"stroke-width" : 2});
	
	var number12 = paper.text(250,120, "12");
	number12.attr({"font-size" : 25});
	var number1 = paper.text(320,145, "1");
	number1.attr({"font-size" : 13});
	var number2 = paper.text(360,190, "2");
	number2.attr({"font-size" : 13});
	var number3 = paper.text(380,250, "3");
	number3.attr({"font-size" : 20});
	var number4 = paper.text(360,310, "4");
	number4.attr({"font-size" : 13});
	var number5 = paper.text(320,360, "5");
	number5.attr({"font-size" : 13});
	var number6 = paper.text(250,380, "6");
	number6.attr({"font-size" : 20});
	var number7 = paper.text(190,360, "7");
	number7.attr({"font-size" : 13});
	var number8 = paper.text(140,320, "8");
	number8.attr({"font-size" : 13});
	var number9 = paper.text(120,250, "9");
	number9.attr({"font-size" : 20});
	var number10 = paper.text(140,190, "10");
	number10.attr({"font-size" : 13});
	var number11 = paper.text(180,145, "11");
	number11.attr({"font-size" : 13});
	
	var secondsHand1 = paper.rect(245,250,6.5,137)
	.attr({fill : "gray"});
	  var secondsHand = paper.rect(245,250,5,135)
	.attr({fill : "90-#fff-#000"});
	 var minutesHand1 = paper.rect(245,250,12,120)
    .attr({fill : "gray"});
	  var minutesHand = paper.rect(245,250,10,117)
    .attr({fill : "90-#ff0-#000"});
	var hoursHand1 = paper.rect(244,250,12,82)
    .attr({fill : "darkgray"});
	  var hoursHand = paper.rect(245,250,10,80)
    .attr({fill : "90-#f00-#000"});
	 
  var centre = paper.circle(250,250,9)
    .attr({fill : "r(0.5,0.5)#fff-#000"});
		
		
	
	
  //change time
     //hours
  var num1 = 0;
	var plus = paper.rect(50,400,50,40)
    .attr({fill : "red"})
	.click(
      function(){
        num1 ++;
        return num1;
      }
    )
	
	var minus = paper.rect(400,400,50,40)
    .attr({fill : "red"})
    .click(
      function(){
        num1 --;
        return num1;
		}
    ) 
	
	//mintues
	var num2 = 0;
	var plus = paper.rect(50,450,50,40)
    .attr({fill : "yellow"})
    .click(
      function(){
        num2 ++;
        return num2;
      }
    )
	var minus = paper.rect(400,450,50,40)
    .attr({fill : "yellow"})
    .click(
      function(){
        num2 --;
        return num2;
      }
    ) 
	//seconds
	var num3 = 0;
	var plus = paper.rect(50,500,50,40)
    .attr({fill : "blue"})
    .click(
      function(){
        num3 ++;
        return num3;
      }
    )
	var minus = paper.rect(400,500,50,40)
    .attr({fill : "blue"})
    .click(
      function(){
        num3 --;
        return num3;
      }
    ) 
//button layout
	var num11text = paper.text(70,420,"H +");
	num11text.attr({"font-size": 20,fill :"white",});
	var num12text = paper.text(420,420,"H -");
	num12text.attr({"font-size": 20,fill :"white",});
	var num21text = paper.text(70,470,"M +");
	num21text.attr({"font-size": 20,fill :"black",});
	var num22text = paper.text(420,470,"M -");
	num22text.attr({"font-size": 20,fill :"black",});
	var num31text = paper.text(70,520,"S +");
	num31text.attr({"font-size": 20,fill :"white",});
	var num32text = paper.text(420,520,"S -");
	num32text.attr({"font-size": 20,fill :"white",});
	
  //digital time display
var display = paper.text(252, 457, "");
var display1 = paper.text(250, 455,"");


//stopwatch

var t = 0;
var a = 0;
var b = 0;
var c = 0;

var timerFace = paper.circle(400,750,50)
    .attr({"stroke-width" : 3,
    fill : "white"});
  var seconds1 = paper.rect(398,750,5,40)
	.attr({fill : "black"});
	var display3 = paper.text(230, 750, "");
	var number0 = paper.text(400,790, "0");
	number0.attr({"font-size" : 5});
	var number30 = paper.text(400,710, "30");
	number30.attr({"font-size" : 5});
	
var Button11 = paper.rect(50,710,50,20);
	Button11.attr({fill: "blue"});
	var buttontext = paper.text(70,720,"start");
	buttontext.attr({"font-size": 15,fill :"white"});
	Button11.click(function(){
		a = 6;
		c = 1;
		});

var Button12 = paper.rect(50,740,50,20);
	Button12.attr({fill: "blue"});
	var buttontext = paper.text(70,750,"stop");
	buttontext.attr({"font-size": 15,fill :"white"});
	Button12.click(function(){
		a = 0;
		c = 0;
		});

var Button13 = paper.rect(50,770,50,20);
	Button13.attr({fill: "blue"});
	var buttontext = paper.text(70,780,"reset");
	buttontext.attr({"font-size": 15,fill :"white"});
	Button13.click(function(){
		t = 0;
		b = 0;
		});
	
 


  function startTime(){

    
   var now = new Date();
   var h = now.getHours();
   var m = now.getMinutes();
   var s = now.getSeconds();
   var ampm = h >= 12 ? 'PM' : 'AM';

    m = checkTime(m);
    s = checkTime(s);
	
	
   function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
		
   } 



    secondsHand.animate({transform: [ 'r',((s*6)+180+num3*6),250,250]});
	secondsHand1.animate({transform: [ 'r',((s*6)+180+num3*6),250,250]});
   
    minutesHand.animate({transform: [ 'r',((m*6)+180+num2*6),250,250]});
minutesHand1.animate({transform: [ 'r',((m*6)+180+num2*6),250,250]});
    hoursHand.animate({transform: [ 'r',((h*30)+180+num1*30)+(m/2),250,250]});
	hoursHand1.animate({transform: [ 'r',((h*30)+180+num1*30)+(m/2),250,250]});
display.attr({text: (h + num1)  % 12 + ":" + m + ":" + s+ ' ' + ampm,
fill:"#778899","font-size":"20","font-family":"Arial Black"});
display1.attr({text: (h + num1)  % 12 + ":" + m + ":" + s+ ' ' + ampm,
fill:"0-#000080-#00f","font-size":"20","font-family":"Arial Black"});

seconds1.animate({transform: [ 'r',t,400,750]});
t=t+a;
display3.attr({text: "Stopwatch: " +b+" senconds",
fill:"white","font-size":"10","font-family":"Arial Black"});
b=b+c;
    setTimeout(function(){startTime()},1000);

	}

    startTime(); //Function call that starts the startTime function.
audio.volume = .5;//50% 
audio.play();
	
}
 
 

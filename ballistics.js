
function calculate() 
{
  // Get the values from the form
  var bselectedOption =document.getElementById("option").selectedOptions[0];
  var boptionValue = bselectedOption.value;
  if(boptionValue == "op1")
  {
   var A = document.getElementById("A").value =0.0000228 ;
   var V0 =  document.getElementById("V0").value  =715;
   var m =  document.getElementById("m").value  =0.08;
  }
  if(boptionValue == "op2")
  {
   var A = document.getElementById("A").value =0.0000228 ;
   var V0 = document.getElementById("V0").value  =850;
   var m = document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op3")
  {
   var A = document.getElementById("A").value = 0.0000228;
   var V0 =  document.getElementById("V0").value  =1000;
   var m =  document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op4")
  {
   var A = document.getElementById("A").value =0.0000228 ;
   var V0 = document.getElementById("V0").value  =900;
   var m = document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op5")
  {
   var A = document.getElementById("A").value = 0.0000228;
   var V0= document.getElementById("V0").value  =868;
   var m  = document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op16")
  {
   var A = document.getElementById("A").value = 0.0000291;
   var V0 =  document.getElementById("V0").value  =936;
   var m =  document.getElementById("m").value =0.016;
  }
  else if(boptionValue == "op7")
  {
   var A =  document.getElementById("A").value =0.0000228 ;
   var V0 =  document.getElementById("V0").value  =868;
   var m =  document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op8")
  {
   var A =  document.getElementById("A").value = 0.0000228;
   var v0 =  document.getElementById("V0").value  =790;
   var m =  document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op9")
  {
   var A =  document.getElementById("A").value = 0.0000228;
   var V0 =  document.getElementById("V0").value  =830;
   var m =  document.getElementById("m").value =0.01;
  }
  else if(boptionValue == "op10")
  {
   var A =  document.getElementById("A").value = 0.0000318;
   var V0 =  document.getElementById("V0").value  =397;
   var m =  document.getElementById("m").value =0.009;
  }
  else if(boptionValue == "op11")
  {
   var A =  document.getElementById("A").value = 0.0000318;
   var V0 =  document.getElementById("V0").value  =375;
   var m =  document.getElementById("m").value =0.009;
  }
  else if(boptionValue == "op12")
  {
   var A =  document.getElementById("A").value =0.0000318 ;
   var V0 =  document.getElementById("V0").value  =400;
   var m =  document.getElementById("m").value =0.009;
  }
  else if(boptionValue == "op13")
  {
   var A =  document.getElementById("A").value =0.0000318 ;
   var V0 =  document.getElementById("V0").value  =350;
   var m =  document.getElementById("m").value =0.009;
  }
  else if(boptionValue == "op14")
  {
   var A =  document.getElementById("A").value = 0.0000122;
   var V0 =  document.getElementById("V0").value  =915;
   var m =  document.getElementById("m").value =0.0055;
  }
  else if(boptionValue == "op15")
  {
   var A =  document.getElementById("A").value = 0.0000228;
   var V0 =  document.getElementById("V0").value  =807;
   var m =  document.getElementById("m").value =0.010;
  }
  else if(boptionValue == "op16")
  {
   var A = document.getElementById("A").value = 0.0000228;
   var V0 =  document.getElementById("V0").value  =730;
   var m =  document.getElementById("m").value =0.08;
  }
  else if(boptionValue == "op17")
  {
   var A =  document.getElementById("A").value = 0.0000122;
   var V0 =  document.getElementById("V0").value  =910;
   var m =  document.getElementById("m").value =0.0055;
  }
  else if(boptionValue == "op18")
  {
   var A =  document.getElementById("A").value = 0.0000122;
   var V0 =  document.getElementById("V0").value  =910;
   var m =  document.getElementById("m").value =0.0055;
  }
  else if(boptionValue == "op19")
  {
   var A =  document.getElementById("A").value = 0.0000122;
   var V0 =  document.getElementById("V0").value  =870;
   var m = document.getElementById("m").value =0.0055;
  }
  else if(boptionValue == "op20")
  {
   var A =  document.getElementById("A").value = 0.0000228;
   var V0 = document.getElementById("V0").value  =710;
   var m =  document.getElementById("m").value =0.010;
  }
  else if(boptionValue == "op21")
  {
   var A =  document.getElementById("A").value = 0.0000122;
   var V0 =  document.getElementById("V0").value  =975;
   var m =  document.getElementById("m").value =0.0055;
  }
  else(boptionValue == "op0")
  {
   var A =  document.getElementById("A").value;
   var V0 =  document.getElementById("V0").value;
   var m =  document.getElementById("m").value;
  }
//         var getA = document.getElementById("A");
//         input.addEventListener("getA", function() {
//   // Get the value of the input element
//          var A = input.value;
//         }
//         var getV0 = document.getElementById("V0");
//         input.addEventListener("getV0", function() {
//   // Get the value of the input element
//          var V0 = input.value;
//         }
//         var getm = document.getElementById("m");
//         input.addEventListener("input", function() 
//   // Get the value of the input element
//          var m = input.value;

  var h = document.getElementById("h").value;
  var D = document.getElementById("D").value;
  var g = 9.8;
  var c = 0.295;
  var rhoselectedOption =document.getElementById("rhoi").selectedOptions[0];
  var rhooptionValue = rhoselectedOption.value;
  if(rhooptionValue == "ro1")
  {
      var rho = 1.58;
  }
  if (rhooptionValue == "ro2") {
      var rho = 1.32;
  } 
  if (rhooptionValue == "ro3") {
      var rho = 1.23;
  }
  if (rhooptionValue == "ro4") {
      var rho = 1.16;
  }
  else {rhooptionValue == "ro5"
  var rho = 1.10;
  }
  
  // Calculate the time it takes for the bullet to reach its peak height
  var t = Math.sqrt((2*h)/g);
  // Calculate the distance traveled by the bullet
  var v = V0;
  var x = (V0 * t)- ( c * rho * A * (Math.pow(v,2)) * (Math.pow(t,2)))/( 2 * m);
  // Calculate the angle at which the muzzle should be inclined
  var hypo = Math.sqrt((Math.pow(x,2)+Math.pow(h,2)));
  var J = (h/x);
  var Q = ((Math.atan(J))*57.32);
  // Calculate the height at which the bullet will hit the target when it is parallel to the ground
  var Y = x-D;
  var U = Y*Math.tan(Q)*.017455;
  // Display the results
  document.getElementById("result").innerHTML = "Optimum angle of the muzzle: " + Q + "<br>" + "The target will hit at this height when parallel to ground: " + U;
}

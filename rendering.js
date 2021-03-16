function answers() {
    var first = document.getElementById('one').value;
	var second = document.getElementById('two').value;
	var third = document.getElementById('three').value;
	var fourth = document.getElementById('four').value;
	var fifth = document.getElementById('five').value;
	var sixth = document.getElementById('six').value;	
		
    if (first == 6) {
      document.getElementById('one').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('one').style.backgroundColor = '#ff0000';
    };
	if (second == 20) {
      document.getElementById('two').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('two').style.backgroundColor = '#ff0000';
    }	
	if (third == 32) {
      document.getElementById('three').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('three').style.backgroundColor = '#ff0000';
    }
	if (fourth == 80) {
      document.getElementById('four').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('four').style.backgroundColor = '#ff0000';
    }	
	if (fifth == 94) {
      document.getElementById('five').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('five').style.backgroundColor = '#ff0000';
    }
	if (sixth == 2021) {
      document.getElementById('six').style.backgroundColor = '#ffffff';
    }
    else {
      document.getElementById('six').style.backgroundColor = '#ff0000';
    }	
	if (first == 6 && second == 20 && third == 32 && fourth == 80 && fifth == 94 && sixth == 2021) {
     document.getElementById('winners').style.opacity = '1';
		confetti.start()
    }		
	};		

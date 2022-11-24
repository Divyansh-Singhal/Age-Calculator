function dobcal() {
    var userinput = document.getElementById("dob").value;
    var dob = new Date(userinput);
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();
    var dateasper= document.getElementById("dateasper").value;
    var dateper = new Date(dateasper);
    var currentYear = dateper.getYear();
    var currentMonth = dateper.getMonth();
    var currentDate = dateper.getDate();
	
    var age = {};
    var ageString = "";
  
    yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth)
      var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate)
      var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
    };
      
      
       ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
   
    return document.getElementById("age").innerHTML = ageString; 
}

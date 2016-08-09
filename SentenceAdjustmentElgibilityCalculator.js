

var applicablePercentage = 0.75;
var dateSentenceBegan = {};
var lengthOfConfinement = {};
var timeTilElgibility = {};
var releaseElgibilityDate = {};


$('input[name=applicablePercentage]').click(function() {
    applicablePercentage = $('input[name=applicablePercentage]:checked').val();
});

var calculate = function() {

    lengthOfConfinement.year = parseInt($('#LOCyear').val());
    lengthOfConfinement.month = parseInt($('#LOCmonth').val()); 
    lengthOfConfinement.day = parseInt($('#LOCday').val()); 

    dateSentenceBegan.year =  parseInt($('#DSByear').val());
    // until the result is printed, month go from 0-11. 0 = January, 11 = December 
    dateSentenceBegan.month =  parseInt($('#DSBmonth').val() - 1); 
    dateSentenceBegan.day =  parseInt($('#DSBday').val()); 

    releaseElgibilityDate.year = 0;
    releaseElgibilityDate.month = 0;
    releaseElgibilityDate.day = 0;
    timeTilElgibility.year = 0;
    timeTilElgibility.month = 0;
    timeTilElgibility.day = 0;


    // converting total length confinement into day
    lengthOfConfinement.total = (lengthOfConfinement.year * 365) + (lengthOfConfinement.month * 30) + lengthOfConfinement.day;
console.log("initial total days: " + lengthOfConfinement.total);
    // multiplying by the applicable percentage to get total time to serve in day
    console.log(applicablePercentage);
    timeTilElgibility.day = Math.floor(lengthOfConfinement.total * applicablePercentage);
console.log("days after multiplying by applicablePercentage: " + timeTilElgibility.day);
    // converting back into year, month, and day
    timeTilElgibility.year = Math.floor(timeTilElgibility.day / 360);
    timeTilElgibility.month = Math.floor((timeTilElgibility.day % 360) / 30);
    timeTilElgibility.day = Math.floor((timeTilElgibility.day % 360) % 30);
console.log("timeTilElgibility year, month, day: " + timeTilElgibility.year + " y "+ timeTilElgibility.month + " m "+ timeTilElgibility.day + " d ");
    // calculate release elgibility date 
    releaseElgibilityDate.day = dateSentenceBegan.day + timeTilElgibility.day;
console.log("unclean days: " + releaseElgibilityDate.day);
    if (releaseElgibilityDate.day>=30){
        releaseElgibilityDate.day = releaseElgibilityDate.day % 30;
        releaseElgibilityDate.month = Math.floor(releaseElgibilityDate.day / 30);
    }
console.log("clean days: " + releaseElgibilityDate.day + " bonus month " + releaseElgibilityDate.month);
    releaseElgibilityDate.month += dateSentenceBegan.month + timeTilElgibility.month;
console.log("clean months: " + releaseElgibilityDate.month);
    if (releaseElgibilityDate.month >= 12){
        releaseElgibilityDate.month = releaseElgibilityDate.month % 12;
        releaseElgibilityDate.year = Math.floor(releaseElgibilityDate.month / 12);
    }
    // add one back to month to start counting at 1
    releaseElgibilityDate.month++;
console.log("years to add: " + releaseElgibilityDate.year + " sentence began year: " + dateSentenceBegan.year);
    releaseElgibilityDate.year += dateSentenceBegan.year + timeTilElgibility.year;

    if (isNaN(releaseElgibilityDate.year) || isNaN(releaseElgibilityDate.month) || isNaN(releaseElgibilityDate.day) ){
        document.getElementById("result").innerHTML = "Please fill in all input fields. " 
        $('#result').show();
    }else{
    document.getElementById("result").innerHTML = "This prisoner will be released " + releaseElgibilityDate.month + "/" + releaseElgibilityDate.day + "/" + releaseElgibilityDate.year;
    $('#result').show();
    console.log("This prisoner will be released " + releaseElgibilityDate.month + "/" + releaseElgibilityDate.day + "/" + releaseElgibilityDate.year + "   (mm/dd/yyyy)");
    }
};
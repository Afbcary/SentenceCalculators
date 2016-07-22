// NOTE : this doesn't work atm!

var applicablePercentage = 0;
var dateSentenceBegan = {};
var lengthOfConfinement = {};
var timeTilElgibility = {};
var releaseElgibilityDate = {};


$('input[name=applicablePercentage]').click(function() {
    applicablePercentage = $('input[name=applicablePercentage]:checked').val();
    document.getElementById("applicablePercentage").innerHTML = "Applicable Percentage " + applicablePercentage;
});

var calculate = function() {

    lengthOfConfinement.year = $('#LOCyear').val();
    lengthOfConfinement.month = $('#LOCmonth').val(); 
    lengthOfConfinement.day = $('#LOCday').val(); 

    dateSentenceBegan.year =  $('#DSByear').val(); 
    dateSentenceBegan.month =  $('#DSBmonth').val(); 
    dateSentenceBegan.day =  $('#DSBday').val(); 

    releaseElgibilityDate.year = 0;
    releaseElgibilityDate.month = 0;
    releaseElgibilityDate.day = 0;
    timeTilElgibility.year = 0;
    timeTilElgibility.month = 0;
    timeTilElgibility.day = 0;


    // converting total length confinement into days
    lengthOfConfinement.total = lengthOfConfinement.year * 365 + lengthOfConfinement.month * 30 + lengthOfConfinement.day;

    //multiplying by the applicable percentage to get total time to serve in days
    timeTilElgibility.day = Math.floor(lengthOfConfinement.total * applicablePercentage);

    //converting back into year, months, and days
    timeTilElgibility.year = Math.floor(timeTilElgibility.day / 360);
    timeTilElgibility.month = Math.floor((timeTilElgibility.day - timeTilElgibility.year * 360) / 30);
    timeTilElgibility.day = (timeTilElgibility.day - timeTilElgibility.month * 30 - timeTilElgibility.year * 360);


    releaseElgibilityDate.year = dateSentenceBegan.year + timeTilElgibility.year;
    releaseElgibilityDate.month = dateSentenceBegan.month + timeTilElgibility.month;
    releaseElgibilityDate.day = dateSentenceBegan.day + timeTilElgibility.day;

    if (releaseElgibilityDate.day >= 30) {
        releaseElgibilityDate.month += Math.floor(releaseElgibilityDate.day / 30);
        releaseElgibilityDate.day = releaseElgibilityDate.day - releaseElgibilityDate.month * 30;
    }


    if (releaseElgibilityDate.month >= 12) {
        releaseElgibilityDate.year += Math.floor(releaseElgibilityDate.month / 12);
        releaseElgibilityDate.month = releaseElgibilityDate.month - releaseElgibilityDate.year * 12;
    }


    document.getElementById("result").innerHTML = "This prisoner will be released " + releaseElgibilityDate.month + "/" + releaseElgibilityDate.day + "/" + releaseElgibilityDate.year;
    $('#result').show();
    console.log("This prisoner will be released " + releaseElgibilityDate.month + "/" + releaseElgibilityDate.day + "/" + releaseElgibilityDate.year);
};
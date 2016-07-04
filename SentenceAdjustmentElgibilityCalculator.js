// angular.module('myModule', ['ui.bootstrap']);
// angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope) {

    // we will store our form data in this object
    $scope.formData = {};
    $scope.myDate = new Date();
    $scope.showCalculation = false;
    $scope.releaseElgibilityDate = {};
    $scope.dateSentenceBegan = {};
    $scope.lengthOfConfinement = {};

    $scope.calculate = function() {
        $scope.showCalculation = true;
        console.log("bam");
        // converting total length confinement into days
        lengthOfConfinement.total = lengthOfConfinement.year * 365 + lengthOfConfinement.months * 30 + lengthOfConfinement.days;

        //multiplying by the applicable percentage to get total time to serve in days
        var totalDaysToElgibility = Math.floor(lengthOfConfinement.total * applicablePercentage);

        //converting back into year, months, and days
        var yearToElgibility = Math.floor(totalDaysToElgibility / 360);
        var monthsToElgibility = Math.floor((totalDaysToElgibility - yearToElgibility * 360) / 30);
        var daysToElgibility = (totalDaysToElgibility - monthsToElgibility * 30 - yearToElgibility * 360);

        var releaseElgibilityDate = {};
        releaseElgibilityDate.year = dateSentenceBegan.year + yearToElgibility;
        releaseElgibilityDate.month = dateSentenceBegan.month + monthsToElgibility;
        releaseElgibilityDate.day = dateSentenceBegan.day + daysToElgibility;

        if (releaseElgibilityDate.day >= 30) {
            releaseElgibilityDate.month += Math.floor(releaseElgibilityDate.day / 30);
            releaseElgibilityDate.day = releaseElgibilityDate.day - releaseElgibilityDate.month * 30;
        }


        if (releaseElgibilityDate.month >= 12) {
            releaseElgibilityDate.year += Math.floor(releaseElgibilityDate.month / 12);
            releaseElgibilityDate.month = releaseElgibilityDate.month - releaseElgibilityDate.year * 12;
        }

    };


});


// //setting variables

// lengthOfConfinement.year = 10;
// lengthOfConfinement.months = 2;
// lengthOfConfinement.days = 4;
// var applicablePercentage = formData.applicablePercentage;

// var dateSentenceBegan = {};
// dateSentenceBegan.year = 2000;
// dateSentenceBegan.month = 0;
// dateSentenceBegan.day = 0;

// // converting total length confinement into days
// lengthOfConfinement.total = lengthOfConfinement.year * 365 + lengthOfConfinement.months * 30 + lengthOfConfinement.days;

// //multiplying by the applicable percentage to get total time to serve in days
// var totalDaysToElgibility = Math.floor(lengthOfConfinement.total * applicablePercentage);

// //converting back into year, months, and days
// var yearToElgibility = Math.floor(totalDaysToElgibility / 360);
// var monthsToElgibility = Math.floor((totalDaysToElgibility - yearToElgibility * 360) / 30);
// var daysToElgibility = (totalDaysToElgibility - monthsToElgibility * 30 - yearToElgibility * 360);

// var releaseElgibilityDate = {};
// releaseElgibilityDate.year = dateSentenceBegan.year + yearToElgibility;
// releaseElgibilityDate.month = dateSentenceBegan.month + monthsToElgibility;
// releaseElgibilityDate.day = dateSentenceBegan.day + daysToElgibility;

// if (releaseElgibilityDate.day >= 30) {
//     releaseElgibilityDate.month += Math.floor(releaseElgibilityDate.day / 30);
//     releaseElgibilityDate.day = releaseElgibilityDate.day - releaseElgibilityDate.month * 30;
// }


// if (releaseElgibilityDate.month >= 12) {
//     releaseElgibilityDate.year += Math.floor(releaseElgibilityDate.month / 12);
//     releaseElgibilityDate.month = releaseElgibilityDate.month - releaseElgibilityDate.year * 12;
// }

// alert("This prisoner will be released " + releaseElgibilityDate.month + "/" + releaseElgibilityDate.day + "/" + releaseElgibilityDate.year);

/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Eva Pathak
      Date:   01/30/26

      Filename: js02.js
 */
      const EMP_cost = 100;
      const BOOK_cost = 350;
      const REPRO_cost = 1250;
      const TRAVEL_cost = 2;
      
      
      window.addEventListener("load", setupForm);

      function setupForm() {
            document.getElementById("photoNum").value = 1;
            document.getElementById("photoHrs").value = 2;
            document.getElementById("makeBook").checked = false;
            document.getElementById("photoRights").checked = false;
            document.getElementById("photoDist").value = 0;

            getEstimate();

            document.getElementById("photoNum").onchange = getEstimate;
            document.getElementById("photoHrs").onchange = getEstimate;
            document.getElementById("photoDist").onchange = getEstimate;
            document.getElementById("makeBook").onchange = getEstimate;
            document.getElementById("photoRights").onchange = getEstimate;
      }

      function getEstimate() {
            let totalCost = 0;
            let photographers = document.getElementById("photoNum").value;
            let hours = document.getElementById("photoHrs").value;
            let distance = document.getElementById("photoDist").value;
            let buyBook = document.getElementById("makeBook").checked;
            let buyRights = document.getElementById("photoRights").checked;

            totalCost += photographers * hours * EMP_cost;
            totalCost += photographers * distance * TRAVEL_cost;
            totalCost += buyBook ? BOOK_cost : 0;
            totalCost += buyRights ? REPRO_cost : 0;
            document.getElementById("estimate").innerHTML = "$" + totalCost;
      }

     

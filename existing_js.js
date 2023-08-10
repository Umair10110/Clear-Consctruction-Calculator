var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Refresh";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
//   x[n].className += " active";
}

// function onclickhandler(input) {
//     // console.log(e);

// gutter_unit_total = document.getElementById("gutter_unit_total");

// }


function calculateResult(inputElement) {

// 1st two step total

asbuilt_total = document.getElementById("asbuilt_unit_total");
asbuilt_qty = document.getElementById("asbuilt_qty").value
asbuilt_cost_unit = document.getElementById("asbuilt_unit_cost").value
asbuilt_total.innerHTML = asbuilt_qty * asbuilt_cost_unit;

estimated_unit_total = document.getElementById("estimated_unit_total");
estimated_qty = document.getElementById("estimated_qty").value;
estimated_unit_cost = document.getElementById("estimated_unit_cost").value;
estimated_unit_total.innerHTML = estimated_qty * estimated_unit_cost ;

archectecitual_unit_total = document.getElementById("archectecitual_unit_total");
archectecitual_qty = document.getElementById("archectecitual_qty").value;
archectecitual_unit_cost = document.getElementById("archectecitual_unit_cost").value;
archectecitual_unit_total.innerHTML = archectecitual_qty * archectecitual_unit_cost;


engineering_unit_total = document.getElementById("engineering_unit_total");
engineering_qty = document.getElementById("engineering_qty").value;
engineering_unit_cost = document.getElementById("engineering_unit_cost").value;
engineering_unit_total.innerHTML = engineering_qty * engineering_unit_cost;

other1_unit_total = document.getElementById("other1_unit_total");
other1_qty = document.getElementById("other1_qty").value;
other1_unit_cost = document.getElementById("other1_unit_cost").value;
other1_unit_total.innerHTML = other1_qty * other1_unit_cost;

other2_unit_total = document.getElementById("other2_unit_total");
other2_qty = document.getElementById("other2_qty").value;
other2_unit_cost = document.getElementById("other2_unit_cost").value;
other2_unit_total.innerHTML = other2_qty * other2_unit_cost;

other3_unit_total = document.getElementById("other3_unit_total");
other3_qty = document.getElementById("other3_qty").value;
other3_unit_cost = document.getElementById("other3_unit_cost").value;
other3_unit_total.innerHTML = other3_qty * other3_unit_cost;


other4_unit_total = document.getElementById("other4_unit_total");
other4_qty = document.getElementById("other4_qty").value;
other4_unit_cost = document.getElementById("other4_unit_cost").value;
other4_unit_total.innerHTML = other4_qty * other4_unit_cost;

other5_unit_total = document.getElementById("other5_unit_total");
other5_qty = document.getElementById("other5_qty").value;
other5_unit_cost = document.getElementById("other5_unit_cost").value;
other5_unit_total.innerHTML = other5_qty * other5_unit_cost;


other6_unit_total = document.getElementById("other6_unit_total");
other6_qty = document.getElementById("other6_qty").value;
other6_unit_cost = document.getElementById("other6_unit_cost").value;
other6_unit_total.innerHTML = other6_qty * other6_unit_cost;

other7_unit_total = document.getElementById("other7_unit_total");
other7_qty = document.getElementById("other7_qty").value;
other7_unit_cost = document.getElementById("other7_unit_cost").value;
other7_unit_total.innerHTML = other7_qty * other7_unit_cost;


step1_total = document.getElementById("step1_total");
step1_total.innerHTML = parseFloat(other7_unit_total.innerHTML) + parseFloat(other6_unit_total.innerHTML) + parseFloat(other5_unit_total.innerHTML) + parseFloat(other4_unit_total.innerHTML) + parseFloat(other3_unit_total.innerHTML) + parseFloat(other2_unit_total.innerHTML) +  parseFloat(other1_unit_total.innerHTML) + parseFloat(engineering_unit_total.innerHTML) + parseFloat(archectecitual_unit_total.innerHTML) + parseFloat(estimated_unit_total.innerHTML) + parseFloat(asbuilt_total.innerHTML);  

interior_unit_total = document.getElementById("interior_unit_total");
interior_qty = document.getElementById("interior_qty").value;
interior_unit_cost = document.getElementById("interior_unit_cost").value;
interior_unit_total.innerHTML = interior_qty * interior_unit_cost;


cosmetic_unit_total = document.getElementById("cosmetic_unit_total");
cosmetic_qty = document.getElementById("cosmetic_qty").value;
cosmetic_unit_cost = document.getElementById("cosmetic_unit_cost").value;
cosmetic_unit_total.innerHTML = cosmetic_qty * cosmetic_unit_cost;

general_unit_total = document.getElementById("general_unit_total");
general_qty = document.getElementById("general_qty").value;
general_unit_cost = document.getElementById("general_unit_cost").value;
general_unit_total.innerHTML = general_qty * general_unit_cost;

chiminey_unit_total = document.getElementById("chiminey_unit_total");
chiminey_qty = document.getElementById("chiminey_qty").value
chiminey_unit_cost = document.getElementById("chiminey_unit_cost").value;
chiminey_unit_total.innerHTML = chiminey_qty * chiminey_unit_cost;

trash_unit_total = document.getElementById("trash_unit_total");
trash_qty = document.getElementById("trash_qty").value;
trash_unit_cost = document.getElementById("trash_unit_cost").value;
trash_unit_total.innerHTML = trash_qty * trash_unit_cost;

otherdemo2_unit_total = document.getElementById("otherdemo2_unit_total");
otherdemo2_qty = document.getElementById("otherdemo2_qty").value;
otherdemo2_unit_cost = document.getElementById("otherdemo2_unit_cost").value;
otherdemo2_unit_total.innerHTML = otherdemo2_qty * otherdemo2_unit_cost;

otherdemo3_unit_total = document.getElementById("otherdemo3_unit_total");
otherdemo3_qty = document.getElementById("otherdemo3_qty").value;
otherdemo3_unit_cost = document.getElementById("otherdemo3_unit_cost").value;
otherdemo3_unit_total.innerHTML = otherdemo3_qty * otherdemo3_unit_cost;

otherdemo4_unit_total = document.getElementById("otherdemo4_unit_total");
otherdemo4_qty = document.getElementById("otherdemo4_qty").value;
otherdemo4_unit_cost = document.getElementById("otherdemo4_unit_cost").value;
otherdemo4_unit_total.innerHTML = otherdemo4_qty * otherdemo4_unit_cost;

otherdemo5_unit_total = document.getElementById("otherdemo5_unit_total");
otherdemo5_qty = document.getElementById("otherdemo5_qty").value;
otherdemo5_unit_cost = document.getElementById("otherdemo5_unit_cost").value;
otherdemo5_unit_total.innerHTML = otherdemo5_qty * otherdemo5_unit_cost;

otherdemo6_unit_total = document.getElementById("otherdemo6_unit_total");
otherdemo6_qty = document.getElementById("otherdemo6_qty").value;
otherdemo6_unit_cost = document.getElementById("otherdemo6_unit_cost").value;
otherdemo6_unit_total.innerHTML = otherdemo6_qty * otherdemo6_unit_cost;

otherdemo7_unit_total = document.getElementById("otherdemo7_unit_total");
otherdemo7_qty = document.getElementById("otherdemo7_qty").value;
otherdemo7_unit_cost = document.getElementById("otherdemo7_unit_cost").value;
otherdemo7_unit_total.innerHTML = otherdemo7_qty * otherdemo7_unit_cost;

step2_total = document.getElementById("step2_total");
step2_total.innerHTML = parseFloat(otherdemo7_unit_total.innerHTML) + parseFloat(otherdemo6_unit_total.innerHTML) + parseFloat(otherdemo5_unit_total.innerHTML)
+ parseFloat(otherdemo4_unit_total.innerHTML) + parseFloat(otherdemo3_unit_total.innerHTML) + parseFloat(otherdemo2_unit_total.innerHTML) 
+  parseFloat(trash_unit_total.innerHTML) + parseFloat(chiminey_unit_total.innerHTML ) + parseFloat(general_unit_total.innerHTML) + parseFloat(cosmetic_unit_total.innerHTML) + parseFloat(interior_unit_total.innerHTML);  



// 1st two step end here 

    const row = inputElement.parentNode.parentNode;
    const quantity = parseFloat(row.querySelector('.column1').value);
    const unitCost = parseFloat(row.querySelector('.column2').value);
    const totalCost = (quantity * unitCost).toFixed(2);
    // row.querySelector('.result').value = totalCost;
    row.querySelector('.result').innerHTML = totalCost;
    // document.getElementsByClassName(".result").innerHTML = totalCost;
    // updateTotal();

    const column4Sum = calculateColumnSum(4,"myTable");
    step3_total = document.getElementById("step3_total");
    step3_total.innerHTML = column4Sum;

    const paint_drywall = calculateColumnSum(4,"paint_drywall");
    step4_total = document.getElementById("step4_total");
    step4_total.innerHTML = paint_drywall;

    const framing = calculateColumnSum(4,"framing");
    step5_total = document.getElementById("step5_total");
    step5_total.innerHTML = framing;

    const plumbing = calculateColumnSum(4,"plumbing");
    step6_total = document.getElementById("step6_total");
    step6_total.innerHTML = plumbing;

    const electrical = calculateColumnSum(4,"electrical");
    step7_total = document.getElementById("step7_total");
    step7_total.innerHTML = electrical;

    const hvac = calculateColumnSum(4,"hvac");
    step8_total = document.getElementById("step8_total");
    step8_total.innerHTML = hvac;

    const cabinets = calculateColumnSum(4, "cabinets");
    step9_total = document.getElementById("step9_total");
    step9_total.innerHTML = cabinets;

    const milwork = calculateColumnSum(4,"milwork");
    step10_total = document.getElementById("step10_total");
    step10_total.innerHTML = milwork;

    const flooring_tile = calculateColumnSum(4,"flooring_tile");
    step11_total = document.getElementById("step11_total");
    step11_total.innerHTML = flooring_tile;

    const interior_general = calculateColumnSum(4, "interior_general");
    step12_total = document.getElementById("step12_total");
    step12_total.innerHTML = interior_general;

    const applainces = calculateColumnSum(4,"applainces");
    step13_total = document.getElementById("step13_total");
    step13_total.innerHTML = applainces;

    const landscaping = calculateColumnSum(4, "landscaping");
    step14_total = document.getElementById("step14_total");
    step14_total.innerHTML = landscaping;


    // calculating total and taxe

    prep_before_total = document.getElementById("prep_before_total");
    prep_before_total.innerHTML =  step1_total.innerHTML;

    demo_before_total = document.getElementById("demo_before_total");
    demo_before_total.innerHTML = step2_total.innerHTML;

    exterior_before_total = document.getElementById("exterior_before_total");
    exterior_before_total.innerHTML = step3_total.innerHTML;

    paint_before_total = document.getElementById("paint_before_total");
    paint_before_total.innerHTML = step4_total.innerHTML;

    framing_before_total = document.getElementById("framing_before_total");
    framing_before_total.innerHTML = step5_total.innerHTML;

    plumbing_before_total = document.getElementById("plumbing_before_total");
    plumbing_before_total.innerHTML = step6_total.innerHTML;

    electrical_before_total = document.getElementById("electrical_before_total");
    electrical_before_total.innerHTML = step7_total.innerHTML;

    hvac_before_total = document.getElementById("hvac_before_total");
    hvac_before_total.innerHTML = step8_total.innerHTML;

    cabinets_before_total = document.getElementById("cabinets_before_total");
    cabinets_before_total.innerHTML = step9_total.innerHTML;

    milwork_before_total = document.getElementById("milwork_before_total");
    milwork_before_total.innerHTML = step10_total.innerHTML;

    flooring_before_total = document.getElementById("flooring_before_total");
    flooring_before_total.innerHTML = step11_total.innerHTML;

    interior_before_total = document.getElementById("interior_before_total");
    interior_before_total.innerHTML = step12_total.innerHTML;

    appliances_before_total = document.getElementById("appliances_before_total");
    appliances_before_total.innerHTML = step13_total.innerHTML;

    landscaping_before_total = document.getElementById("landscaping_before_total");
    landscaping_before_total.innerHTML = step14_total.innerHTML;

    total_befor_tax = document.getElementById("total_befor_tax");
    total_befor_tax.innerHTML = parseFloat(prep_before_total.innerHTML) + parseFloat(demo_before_total.innerHTML) + parseFloat(exterior_before_total.innerHTML) + parseFloat(paint_before_total.innerHTML)
    + parseFloat(framing_before_total.innerHTML) + parseFloat(plumbing_before_total.innerHTML) + parseFloat(electrical_before_total.innerHTML) + parseFloat(hvac_before_total.innerHTML) +
    parseFloat(cabinets_before_total.innerHTML) + parseFloat(milwork_before_total.innerHTML) + parseFloat(flooring_before_total.innerHTML) + parseFloat(interior_before_total.innerHTML) +
    parseFloat(appliances_before_total.innerHTML) + parseFloat(landscaping_before_total.innerHTML);

    total_tax = document.getElementById("total_tax");
    total_tax.innerHTML = parseFloat(total_befor_tax.innerHTML * 0.098).toFixed(2);

    total_contingency = document.getElementById("total_contingency");
    total_contingency.innerHTML = parseFloat(total_befor_tax.innerHTML * 0.05).toFixed(2);

    total_main = document.getElementById("total_main");
    total_main_decimal = parseFloat(total_befor_tax.innerHTML) + parseFloat(total_tax.innerHTML) + parseFloat(total_contingency.innerHTML);
    total_main.innerHTML = total_main_decimal.toFixed(2);

     
  }


  function calculateColumnSum(columnIndex, tableID ) {
    const table = document.getElementById(tableID); // Replace 'yourTableId' with the actual ID of your table
    const rows = table.getElementsByTagName('tr');
    let sum = 0;
  
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const cellValue = parseFloat(cells[columnIndex]?.innerHTML);
  
      if (!isNaN(cellValue)) {
        sum += cellValue;
      }
    }
  
    return sum;
  }


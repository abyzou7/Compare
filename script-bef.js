<script>
    const formatter1 = new Intl.NumberFormat('fr-FR', {
    style: 'currency',currency: 'EUR',minimumFractionDigits: 2
  })
  const formatter2 = new Intl.NumberFormat('fr-FR', {
    style: 'currency', currency: 'EUR',minimumFractionDigits: 0
  })
  var tjmcheck = url.searchParams.get("tjm");
  if (tjmcheck <= 100 ) {
          window.alert("Votre TJM ne peut pas être inférieur à 100.");
          window.location = "https://www.compareportage.fr/";
  }
  var tjm = url.searchParams.get("tjm");
  var tjmPortup = url.searchParams.get("tjm");
  var fraisPortup = 360;
  var nbJoursPortup = document.getElementById("nbJoursPortup").innerHTML = "20";
  var caPortup = tjmPortup * nbJoursPortup ;
  var caPourcentPortup;
  var cainto100Portup = caPortup / 100 ;
  var fraisGestionPortup = 7;
  
  if(tjmPortup <= 300 & tjmPortup < 310){
      caPourcentPortup = 51.40;
  }
  else if(tjmPortup <= 310 && tjmPortup < 320){
      caPourcentPortup = 51.31;
  }
  else if(tjmPortup <= 320 && tjmPortup < 330){
      caPourcentPortup = 51.23;
  }
  else if(tjmPortup <= 330 && tjmPortup < 340){
      caPourcentPortup = 51.15;
  }
  else if(tjmPortup <= 340 && tjmPortup < 350){  
      caPourcentPortup = 51.07;
  } 
  else if(tjmPortup <= 350 && tjmPortup < 360){
      caPourcentPortup = 51.01;
  }
  else if(tjmPortup <= 360 && tjmPortup < 370){
      caPourcentPortup = 50.94;
  }
  else if(tjmPortup <= 370 && tjmPortup < 380){
      caPourcentPortup = 50.88;
  }
  else if(tjmPortup <= 380 && tjmPortup < 390){
      caPourcentPortup = 50.83;
  }
  else if(tjmPortup <= 390 && tjmPortup < 400){
      caPourcentPortup = 50.77;
  }
  else if(tjmPortup <= 400 && tjmPortup < 410){
      caPourcentPortup = 50.71;
  }
  else if(tjmPortup <= 410 && tjmPortup < 420){
      caPourcentPortup = 50.67;
  }
  else if(tjmPortup <= 420 && tjmPortup < 430){
      caPourcentPortup = 50.62;
  }
  else if(tjmPortup <= 430 && tjmPortup < 440){
      caPourcentPortup = 50.57;
  }
  else if(tjmPortup <= 440 && tjmPortup < 450){
      caPourcentPortup = 50.53;
  }
  else if(tjmPortup <= 450 && tjmPortup < 460){
      caPourcentPortup = 50.49;
  }
  else if(tjmPortup <= 460 && tjmPortup < 470){
      caPourcentPortup = 50.45;
  }
  else if(tjmPortup <= 470 && tjmPortup < 480){
      caPourcentPortup = 50.41;
  }
  else if(tjmPortup <= 480 && tjmPortup < 490){
      caPourcentPortup = 50.38;
  }
  else if(tjmPortup <= 490 && tjmPortup < 500){
      caPourcentPortup = 50.34;
  }
  else if(tjmPortup <= 500 && tjmPortup < 510){
      caPourcentPortup = 50.31;
  }
  else if(tjmPortup <= 510 && tjmPortup < 520){
      caPourcentPortup = 50.27;
  }
  else if(tjmPortup <= 520 && tjmPortup < 530){
      caPourcentPortup = 50.24;
  }
  else if(tjmPortup <= 530 && tjmPortup < 540){
      caPourcentPortup = 50.22;
  }
  else if(tjmPortup <= 540 && tjmPortup < 550){
      caPourcentPortup = 50.19;
  }
  else if(tjmPortup <= 550 && tjmPortup < 560){
      caPourcentPortup = 50.15;
  }
  else if(tjmPortup <= 560 && tjmPortup < 570){
      caPourcentPortup = 50.13;
  }
  else if(tjmPortup <= 570 && tjmPortup < 580){
      caPourcentPortup = 50.11;
  }
  else if(tjmPortup <= 580 && tjmPortup < 590){
      caPourcentPortup = 50.08;
  }
  else if(tjmPortup <= 590 && tjmPortup < 600){
      caPourcentPortup = 50.06;
  }
  else if(tjmPortup <= 600 && tjmPortup < 610){
      caPourcentPortup = 50.03;
  }
  else if(tjmPortup <= 610 && tjmPortup < 620){
      caPourcentPortup = 50.01;
  }
  else if(tjmPortup <= 620 && tjmPortup < 630){
      caPourcentPortup = 49.99;
  }
  else if(tjmPortup <= 630 && tjmPortup < 640){
      caPourcentPortup = 49.97;
  }
  else if(tjmPortup <= 640 && tjmPortup < 650){
      caPourcentPortup = 49.95;
  }
  else if(tjmPortup <= 650 && tjmPortup < 660){
      caPourcentPortup = 49.93;
  }
  else if(tjmPortup <= 660 && tjmPortup < 670){
      caPourcentPortup = 49.91;
  }
  else if(tjmPortup <= 670 && tjmPortup < 680){
      caPourcentPortup = 49.90;
  }
  else if(tjmPortup <= 680 && tjmPortup < 690){
      caPourcentPortup = 49.88;
  }
  else if(tjmPortup <= 690 && tjmPortup < 700){
      caPourcentPortup = 49.86;
  }
  else if(tjmPortup >= 700){
      caPourcentPortup = 49.84;
  }
  var remunerationPortup = cainto100Portup * caPourcentPortup;
  var fraisGestionPortupPourcentage = fraisGestionPortup / 100 ;
  var SubTotalMarkUpPortup = caPortup * fraisGestionPortupPourcentage;
  var TotalMarkUpPortup = caPortup - SubTotalMarkUpPortup;
  var capitalRestantPortup = TotalMarkUpPortup - fraisPortup;
  var salaireBrutMajorePortup = TotalMarkUpPortup * 0.66;
  var salaireBrutPortup = salaireBrutMajorePortup / 1.1;
  document.getElementById("mySalaireBrutPortup").innerHTML = formatter1.format(salaireBrutPortup);
  document.getElementById("mySocietePortup").innerHTML = caPourcentPortup + "%";
  document.getElementById("myRemTotalePortup").innerHTML = formatter1.format(remunerationPortup);
  document.getElementById("myTjmPortup").innerHTML = formatter2.format(tjmPortup);
  document.getElementById("caTotalPortup").innerHTML = formatter2.format(caPortup);
  document.getElementById("myFraisPortup").innerHTML = formatter2.format(fraisPortup);
  document.getElementById("myFraisGestionPortup").innerHTML = fraisGestionPortup + "%";
  document.getElementById("subcription").addEventListener("submit", function(e){
      e.preventDefault();
      window.location = "/hg042vuo2nvejak" + "?tjm=" + tjm;
  });
</script>
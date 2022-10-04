var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})

// Société EGS
var tjmEGS = url.searchParams.get("tjm");
var fraisEGS = 360;
var nbJoursEGS = document.getElementById("nbJoursEGS").innerHTML = "20";
var caEGS = tjmEGS * nbJoursEGS ;
var caPourcentEGS;
var cainto100EGS = caEGS / 100;
var fraisGestionEGS = 6;

if(tjmEGS <= 300 && tjmEGS < 310){
    caPourcentEGS = 56.08;
}
else if(tjmEGS <= 310 && tjmEGS < 320){
    caPourcentEGS = 55.88;
}
else if(tjmEGS <= 320 && tjmEGS < 330){
    caPourcentEGS = 54.13;
}
else if(tjmEGS <= 330 && tjmEGS < 340){
    caPourcentEGS = 53.87;
}
else if(tjmEGS <= 340 && tjmEGS < 350){
    caPourcentEGS = 53.83;
}
else if(tjmEGS <= 350 && tjmEGS < 360){
    caPourcentEGS = 53.79;
}
else if(tjmEGS <= 360 && tjmEGS < 370){
    caPourcentEGS = 53.75;
}
else if(tjmEGS <= 370 && tjmEGS < 380){
    caPourcentEGS = 53.71;
}
else if(tjmEGS <= 380 && tjmEGS < 390){
    caPourcentEGS = 53.67;
}
else if(tjmEGS <= 390 && tjmEGS < 400){
    caPourcentEGS = 53.65;
}
else if(tjmEGS <= 400 && tjmEGS < 410){
    caPourcentEGS = 53.62;
}
else if(tjmEGS <= 410 && tjmEGS < 420){
    caPourcentEGS = 53.59;
}
else if(tjmEGS <= 420 && tjmEGS < 430){
    caPourcentEGS = 53.56;
}
else if(tjmEGS <= 430 && tjmEGS < 440){
    caPourcentEGS = 53.53;
}
else if(tjmEGS <= 440 && tjmEGS < 450){
    caPourcentEGS = 53.22;
}
else if(tjmEGS <= 450 && tjmEGS < 460){
    caPourcentEGS = 52.88;
}
else if(tjmEGS <= 460 && tjmEGS < 470){
    caPourcentEGS = 52.85;
}
else if(tjmEGS <= 470 && tjmEGS < 480){
    caPourcentEGS = 52.83;
}
else if(tjmEGS <= 480 && tjmEGS < 490){
    caPourcentEGS = 52.81;
}
else if(tjmEGS <= 490 && tjmEGS < 500){
    caPourcentEGS = 52.79;
}
else if(tjmEGS <= 500 && tjmEGS < 510){
    caPourcentEGS = 53.32;
}
else if(tjmEGS <= 510 && tjmEGS < 520){
    caPourcentEGS = 53.30;
}
else if(tjmEGS <= 520 && tjmEGS < 530){
    caPourcentEGS = 53.28;
}
else if(tjmEGS <= 530 && tjmEGS < 540){
    caPourcentEGS = 53.26;
}
else if(tjmEGS <= 540 && tjmEGS < 550){
    caPourcentEGS = 53.24;
}
else if(tjmEGS <= 550 && tjmEGS < 560){
    caPourcentEGS = 53.22;
}
else if(tjmEGS <= 560 && tjmEGS < 570){
    caPourcentEGS = 53.21;
}
else if(tjmEGS <= 570 && tjmEGS < 580){
    caPourcentEGS = 53.19;
}
else if(tjmEGS <= 580 && tjmEGS < 590){
    caPourcentEGS = 53.18;
}
else if(tjmEGS <= 590 && tjmEGS < 600){
    caPourcentEGS = 53.16;
}
else if(tjmEGS <= 600 && tjmEGS < 610){
    caPourcentEGS = 53.15;
}
else if(tjmEGS <= 610 && tjmEGS < 620){
    caPourcentEGS = 53.13;
}
else if(tjmEGS <= 620 && tjmEGS < 630){
    caPourcentEGS = 53.12;
}
else if(tjmEGS <= 630 && tjmEGS < 640){
    caPourcentEGS = 53.11;
}
else if(tjmEGS <= 640 && tjmEGS < 650){
    caPourcentEGS = 52.88;
}
else if(tjmEGS <= 650 && tjmEGS < 660){
    caPourcentEGS = 53.08;
}
else if(tjmEGS <= 660 && tjmEGS < 670){
    caPourcentEGS = 53.07;
}
else if(tjmEGS <= 670 && tjmEGS < 680){
    caPourcentEGS = 53.06;
}
else if(tjmEGS <= 680 && tjmEGS < 690){
    caPourcentEGS = 53.05;
}
else if(tjmEGS <= 690 && tjmEGS < 700){
    caPourcentEGS = 53.04;
}
else if(tjmEGS >= 700){
    caPourcentEGS = 53.03;
}

var remunerationEGS = cainto100EGS * caPourcentEGS;

document.getElementById("mySocieteEGS").innerHTML = caPourcentEGS + "%";
document.getElementById("myRemTotaleEGS").innerHTML = formatter1.format(remunerationEGS);
document.getElementById("myTjmEGS").innerHTML = formatter2.format(tjmEGS);
document.getElementById("caTotalEGS").innerHTML = formatter2.format(caEGS);
document.getElementById("myFraisEGS").innerHTML = formatter2.format(fraisEGS);
document.getElementById("myFraisGestionEGS").innerHTML = fraisGestionEGS + "%";



// Calcul pour la société Portageo
var tjmPortageo = url.searchParams.get("tjm");
var fraisPortageo = 360;
var nbJoursPortageo = document.getElementById("nbJoursPortageo").innerHTML = "20";
var caPortageo = tjmPortageo * nbJoursPortageo ;
var caPourcentPortageo;
var cainto100Portageo = caPortageo / 100 ;
var fraisGestionPortageo = 5;

if(tjmPortageo <= 300 && tjmPortageo < 310){
    caPourcentPortageo = 50.58;
}
else if(tjmPortageo <= 310 && tjmPortageo < 320){
    caPourcentPortageo = 52.32;
}
else if(tjmPortageo <= 320 && tjmPortageo < 330){
    caPourcentPortageo = 52.23;
}
else if(tjmPortageo <= 330 && tjmPortageo < 340){
    caPourcentPortageo = 52.15;
}
else if(tjmPortageo <= 340 && tjmPortageo < 350){
    caPourcentPortageo = 50.35;
}
else if(tjmPortageo <= 350 && tjmPortageo < 360){
    caPourcentPortageo = 52.00;
}
else if(tjmPortageo <= 360 && tjmPortageo < 370){
    caPourcentPortageo = 50.24;
}
else if(tjmPortageo <= 370 && tjmPortageo < 380){
    caPourcentPortageo = 51.86;
}
else if(tjmPortageo <= 380 && tjmPortageo < 390){
    caPourcentPortageo = 51.80;
}
else if(tjmPortageo <= 390 && tjmPortageo < 400){
    caPourcentPortageo = 51.74;
}
else if(tjmPortageo <= 400 && tjmPortageo < 410){
    caPourcentPortageo = 51.69;
}
else if(tjmPortageo <= 410 && tjmPortageo < 420){
    caPourcentPortageo = 51.63;
}
else if(tjmPortageo <= 420 && tjmPortageo < 430){
    caPourcentPortageo = 51.58;
}
else if(tjmPortageo <= 430 && tjmPortageo < 440){
    caPourcentPortageo = 51.53;
}
else if(tjmPortageo <= 440 && tjmPortageo < 450){
    caPourcentPortageo = 51.49;
}
else if(tjmPortageo <= 450 && tjmPortageo < 460){
    caPourcentPortageo = 51.46;
}
else if(tjmPortageo <= 460 && tjmPortageo < 470){
    caPourcentPortageo = 51.41;
}
else if(tjmPortageo <= 470 && tjmPortageo < 480){
    caPourcentPortageo = 51.37;
}
else if(tjmPortageo <= 480 && tjmPortageo < 490){
    caPourcentPortageo = 51.33;
}
else if(tjmPortageo <= 490 && tjmPortageo < 500){
    caPourcentPortageo = 51.30;
}
else if(tjmPortageo <= 500 && tjmPortageo < 510){
    caPourcentPortageo = 51.26;
}
else if(tjmPortageo <= 510 && tjmPortageo < 520){
    caPourcentPortageo = 51.23;
}
else if(tjmPortageo <= 520 && tjmPortageo < 530){
    caPourcentPortageo = 51.19;
}
else if(tjmPortageo <= 530 && tjmPortageo < 540){
    caPourcentPortageo = 51.16;
}
else if(tjmPortageo <= 540 && tjmPortageo < 550){
    caPourcentPortageo = 51.13;
}
else if(tjmPortageo <= 550 && tjmPortageo < 560){
    caPourcentPortageo = 51.10;
}
else if(tjmPortageo <= 560 && tjmPortageo < 570){
    caPourcentPortageo = 50.52;
}
else if(tjmPortageo <= 570 && tjmPortageo < 580){
    caPourcentPortageo = 51.04;
}
else if(tjmPortageo <= 580 && tjmPortageo < 590){
    caPourcentPortageo = 51.04;
}
else if(tjmPortageo <= 590 && tjmPortageo < 600){
    caPourcentPortageo = 51.02;
}
else if(tjmPortageo <= 600 && tjmPortageo < 610){
    caPourcentPortageo = 50.99;
}
else if(tjmPortageo <= 610 && tjmPortageo < 620){
    caPourcentPortageo = 51.02;
}
else if(tjmPortageo <= 620 && tjmPortageo < 630){
    caPourcentPortageo = 51.05;
}
else if(tjmPortageo <= 630 && tjmPortageo < 640){
    caPourcentPortageo = 51.07;
}
else if(tjmPortageo <= 640 && tjmPortageo < 650){
    caPourcentPortageo = 51.09;
}
else if(tjmPortageo <= 650 && tjmPortageo < 660){
    caPourcentPortageo = 51.10;
}
else if(tjmPortageo <= 660 && tjmPortageo < 670){
    caPourcentPortageo = 51.11;
}
else if(tjmPortageo <= 670 && tjmPortageo < 680){
    caPourcentPortageo = 51.13;
}
else if(tjmPortageo <= 680 && tjmPortageo < 690){
    caPourcentPortageo = 51.15;
}
else if(tjmPortageo <= 690 && tjmPortageo < 700){
    caPourcentPortageo = 51.16;
}
else if(tjmPortageo <= 700){
    caPourcentPortageo = 51.17;
}

var remunerationPortageo = cainto100Portageo * caPourcentPortageo;
document.getElementById("mySocietePortageo").innerHTML = caPourcentPortageo + "%";
document.getElementById("myRemTotalePortageo").innerHTML = formatter1.format(remunerationPortageo);
document.getElementById("myTjmPortageo").innerHTML = formatter2.format(tjmPortageo);
document.getElementById("caTotalPortageo").innerHTML = formatter2.format(caPortageo);
document.getElementById("myFraisPortageo").innerHTML = formatter2.format(fraisPortageo);
document.getElementById("myFraisGestionPortageo").innerHTML = fraisGestionPortageo + "%";

// Calcul pour la société Portup

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
else if(tjmPortup <= 700){
    caPourcentPortup = 49.84;
}

var remunerationPortup = cainto100Portup * caPourcentPortup;
document.getElementById("mySocietePortup").innerHTML = caPourcentPortup + "%";
document.getElementById("myRemTotalePortup").innerHTML = formatter1.format(remunerationPortup);
document.getElementById("myTjmPortup").innerHTML = formatter2.format(tjmPortup);
document.getElementById("caTotalPortup").innerHTML = formatter2.format(caPortup);
document.getElementById("myFraisPortup").innerHTML = formatter2.format(fraisPortup);
document.getElementById("myFraisGestionPortup").innerHTML = fraisGestionPortup + "%";

// Calcul pour la société Cegelem

var tjmCegelem = url.searchParams.get("tjm");
var fraisCegelem = 360;
var nbJoursCegelem = document.getElementById("nbJoursCegelem").innerHTML = "20";
var caCegelem = tjmCegelem * nbJoursCegelem ;
var caPourcentCegelem;
var cainto100Cegelem = caCegelem / 100 ;
var fraisGestionCegelem = 4;

if(tjmCegelem <= 300  && tjmCegelem < 310){
    caPourcentCegelem = 54.87;
}
else if(tjmCegelem <= 310 && tjmCegelem < 320){
    caPourcentCegelem = 54.78;
}
else if(tjmCegelem <= 320 && tjmCegelem < 330){
    caPourcentCegelem = 54.70;
}
else if(tjmCegelem <= 330 && tjmCegelem < 340){
    caPourcentCegelem = 54.62;
}
else if(tjmCegelem <= 340 && tjmCegelem < 350){
    caPourcentCegelem = 54.55;
}
else if(tjmCegelem <= 350 && tjmCegelem < 360){
    caPourcentCegelem = 54.48;
}
else if(tjmCegelem <= 360 && tjmCegelem < 370){
    caPourcentCegelem = 54.41;
}
else if(tjmCegelem <= 370 && tjmCegelem < 380){
    caPourcentCegelem = 54.35;
}
else if(tjmCegelem <= 380 && tjmCegelem < 390){
    caPourcentCegelem = 54.29;
}
else if(tjmCegelem <= 390 && tjmCegelem < 400){
    caPourcentCegelem = 54.24;
}
else if(tjmCegelem <= 400 && tjmCegelem < 410){
    caPourcentCegelem = 54.18;
}
else if(tjmCegelem <= 410 && tjmCegelem < 420){
    caPourcentCegelem = 54.13;
}
else if(tjmCegelem <= 420 && tjmCegelem < 430){
    caPourcentCegelem = 54.09;
}
else if(tjmCegelem <= 430 && tjmCegelem < 440){
    caPourcentCegelem = 54.04;
}
else if(tjmCegelem <= 440 && tjmCegelem < 450){
    caPourcentCegelem = 54.00;
}
else if(tjmCegelem <= 450 && tjmCegelem < 460){
    caPourcentCegelem = 53.96;
}
else if(tjmCegelem <= 460 && tjmCegelem < 470){
    caPourcentCegelem = 53.92;
}
else if(tjmCegelem <= 470 && tjmCegelem < 480){
    caPourcentCegelem = 53.88;
}
else if(tjmCegelem <= 480 && tjmCegelem < 490){
    caPourcentCegelem = 53.84;
}
else if(tjmCegelem <= 490 && tjmCegelem < 500){
    caPourcentCegelem = 53.81;
}
else if(tjmCegelem <= 500 && tjmCegelem < 510){
    caPourcentCegelem = 53.77;
}
else if(tjmCegelem <= 510 && tjmCegelem < 520){
    caPourcentCegelem = 53.74;
}
else if(tjmCegelem <= 520 && tjmCegelem < 530){
    caPourcentCegelem = 53.71;
}
else if(tjmCegelem <= 530 && tjmCegelem < 540){
    caPourcentCegelem = 53.68;
}
else if(tjmCegelem <= 540 && tjmCegelem < 550){
    caPourcentCegelem = 53.65;
}
else if(tjmCegelem <= 550 && tjmCegelem < 560){
    caPourcentCegelem = 53.62;
}
else if(tjmCegelem <= 560 && tjmCegelem < 570){
    caPourcentCegelem = 53.60;
}
else if(tjmCegelem <= 570 && tjmCegelem < 580){
    caPourcentCegelem = 53.57;
}
else if(tjmCegelem <= 580 && tjmCegelem < 590){
    caPourcentCegelem = 53.55;
}
else if(tjmCegelem <= 590 && tjmCegelem < 600){
    caPourcentCegelem = 53.52;
}
else if(tjmCegelem <= 600 && tjmCegelem < 610){
    caPourcentCegelem = 53.50;
}
else if(tjmCegelem <= 610 && tjmCegelem < 620){
    caPourcentCegelem = 53.48;
}
else if(tjmCegelem <= 620 && tjmCegelem < 630){
    caPourcentCegelem = 53.45;
}
else if(tjmCegelem <= 630 && tjmCegelem < 640){
    caPourcentCegelem = 53.43;
}
else if(tjmCegelem <= 640 && tjmCegelem < 650){
    caPourcentCegelem = 53.41;
}
else if(tjmCegelem <= 650 && tjmCegelem < 660){
    caPourcentCegelem = 53.39;
}
else if(tjmCegelem <= 660 && tjmCegelem < 670){
    caPourcentCegelem = 53.37;
}
else if(tjmCegelem <= 670 && tjmCegelem < 680){
    caPourcentCegelem = 53.36;
}
else if(tjmCegelem <= 680 && tjmCegelem < 690){
    caPourcentCegelem = 53.34;
}
else if(tjmCegelem <= 690 && tjmCegelem < 700){
    caPourcentCegelem = 53.32;
}
else if(tjmCegelem <= 700){
    caPourcentCegelem = 53.30;
}

var remunerationCegelem = cainto100Cegelem * caPourcentCegelem;
document.getElementById("mySocieteCegelem").innerHTML = caPourcentCegelem + "%";
document.getElementById("myRemTotaleCegelem").innerHTML = formatter1.format(remunerationCegelem);
document.getElementById("myTjmCegelem").innerHTML = formatter2.format(tjmCegelem);
document.getElementById("caTotalCegelem").innerHTML = formatter2.format(caCegelem);
document.getElementById("myFraisCegelem").innerHTML = formatter2.format(fraisCegelem);
document.getElementById("myFraisGestionCegelem").innerHTML = fraisGestionCegelem + "%";

// Calcul pour la société Label-Vie

var tjmLabelVie = url.searchParams.get("tjm");
var fraisLabelVie = 360;
var nbJoursLabelVie = document.getElementById("nbJoursLabelVie").innerHTML = "20";
var caLabelVie = tjmLabelVie * nbJoursLabelVie ;
var caPourcentLabelVie;
var cainto100LabelVie = caLabelVie / 100 ;
var fraisGestionLabelVie = 7;

if(tjmLabelVie <= 300  && tjmLabelVie < 310){
    caPourcentLabelVie = 49.24;
}
else if(tjmLabelVie <= 310 && tjmLabelVie < 320){
    caPourcentLabelVie = 49.14;
}
else if(tjmLabelVie <= 320 && tjmLabelVie < 330){
    caPourcentLabelVie = 49.04;
}  
else if(tjmLabelVie <= 330 && tjmLabelVie < 340){
    caPourcentLabelVie = 48.95;
}
else if(tjmLabelVie <= 340 && tjmLabelVie < 350){
    caPourcentLabelVie = 48.86;
}
else if(tjmLabelVie <= 350 && tjmLabelVie < 360){
    caPourcentLabelVie = 48.78;
}
else if(tjmLabelVie <= 360 && tjmLabelVie < 370){
    caPourcentLabelVie = 48.70;
}
else if(tjmLabelVie <= 370 && tjmLabelVie < 380){
    caPourcentLabelVie = 48.63;
}
else if(tjmLabelVie <= 380 && tjmLabelVie < 390){
    caPourcentLabelVie = 48.56;
}
else if(tjmLabelVie <= 390 && tjmLabelVie < 400){
    caPourcentLabelVie = 48.49;
}
else if(tjmLabelVie <= 400 && tjmLabelVie < 410){
    caPourcentLabelVie = 48.43;
}
else if(tjmLabelVie <= 410 && tjmLabelVie < 420){
    caPourcentLabelVie = 48.37;
}
else if(tjmLabelVie <= 420 && tjmLabelVie < 430){
    caPourcentLabelVie = 48.31;
}
else if(tjmLabelVie <= 430 && tjmLabelVie < 440){
    caPourcentLabelVie = 48.26;
}
else if(tjmLabelVie <= 440 && tjmLabelVie < 450){
    caPourcentLabelVie = 48.21;
}
else if(tjmLabelVie <= 450 && tjmLabelVie < 460){
    caPourcentLabelVie = 48.16;
}
else if(tjmLabelVie <= 460 && tjmLabelVie < 470){
    caPourcentLabelVie = 48.11;
}
else if(tjmLabelVie <= 470 && tjmLabelVie < 480){
    caPourcentLabelVie = 48.07;
}
else if(tjmLabelVie <= 480 && tjmLabelVie < 490){
    caPourcentLabelVie = 48.03;
}
else if(tjmLabelVie <= 490 && tjmLabelVie < 500){
    caPourcentLabelVie = 47.98 ;
}
else if(tjmLabelVie <= 500 && tjmLabelVie < 510){
    caPourcentLabelVie = 47.94;
}
else if(tjmLabelVie <= 510 && tjmLabelVie < 520){
    caPourcentLabelVie = 47.91;
}
else if(tjmLabelVie <= 520 && tjmLabelVie < 530){
    caPourcentLabelVie = 47.87;
}
else if(tjmLabelVie <= 530 && tjmLabelVie < 540){
    caPourcentLabelVie = 47.83;
}
else if(tjmLabelVie <= 540 && tjmLabelVie < 550){
    caPourcentLabelVie = 47.80;
}
else if(tjmLabelVie <= 550 && tjmLabelVie < 560){
    caPourcentLabelVie = 47.77;
}
else if(tjmLabelVie <= 560 && tjmLabelVie < 570){
    caPourcentLabelVie = 47.74;
}
else if(tjmLabelVie <= 570 && tjmLabelVie < 580){
    caPourcentLabelVie = 47.71;
}
else if(tjmLabelVie <= 580 && tjmLabelVie < 590){
    caPourcentLabelVie = 47.68;
}
else if(tjmLabelVie <= 590 && tjmLabelVie < 600){
    caPourcentLabelVie = 47.65;
}
else if(tjmLabelVie <= 600 && tjmLabelVie < 610){
    caPourcentLabelVie = 47.62;
}
else if(tjmLabelVie <= 610 && tjmLabelVie < 620){
    caPourcentLabelVie = 47.59;
}
else if(tjmLabelVie <= 620 && tjmLabelVie < 630){
    caPourcentLabelVie = 47.57;
}
else if(tjmLabelVie <= 630 && tjmLabelVie < 640){
    caPourcentLabelVie = 47.54;
}
else if(tjmLabelVie <= 640 && tjmLabelVie < 650){
    caPourcentLabelVie = 47.52;
}
else if(tjmLabelVie <= 650 && tjmLabelVie < 660){
    caPourcentLabelVie = 47.50;
}
else if(tjmLabelVie <= 660 && tjmLabelVie < 670){
    caPourcentLabelVie = 47.47;
}
else if(tjmLabelVie <= 670 && tjmLabelVie < 680){
    caPourcentLabelVie = 47.45;
}
else if(tjmLabelVie <= 680 && tjmLabelVie < 690){
    caPourcentLabelVie = 47.43;
}
else if(tjmLabelVie <= 690 && tjmLabelVie < 700){
    caPourcentLabelVie = 47.41;
}
else if(tjmLabelVie <= 700){
    caPourcentLabelVie = 47.39;
}

var remunerationLabelVie = cainto100LabelVie * caPourcentLabelVie;
document.getElementById("mySocieteLabelVie").innerHTML = caPourcentLabelVie + "%";
document.getElementById("myRemTotaleLabelVie").innerHTML = formatter1.format(remunerationLabelVie);
document.getElementById("myTjmLabelVie").innerHTML = formatter2.format(tjmLabelVie);
document.getElementById("caTotalLabelVie").innerHTML = formatter2.format(caLabelVie);
document.getElementById("myFraisLabelVie").innerHTML = formatter2.format(fraisLabelVie);
document.getElementById("myFraisGestionLabelVie").innerHTML = fraisGestionLabelVie + "%";


// Société BePortage

document.getElementById("myFraisGestionBePortage").addEventListener("change", updateBePortage);
var tjmBePortage = url.searchParams.get("tjm");
var fraisBePortage = 360;
var nbJoursBePortage = document.getElementById("nbJoursBePortage").innerHTML = "20";
var caBePortage = tjmBePortage * nbJoursBePortage;
var caPourcentBePortage;
var fraisGestionBePortage = 5;
var cainto100BePortage = caBePortage / 100;

// Frais de gestion
document.getElementById("myFraisGestionBePortage").value = fraisGestionBePortage;
function updateBePortage() { 
    fraisGestionBePortage = document.getElementById("myFraisGestionBePortage").value;
    if (fraisGestionBePortage == 5){
        if(tjmBePortage <= 300  && tjmBePortage < 310){
            caPourcentBePortage = 55.88;
        }
        else if(tjmBePortage <= 310 && tjmBePortage < 320){
            caPourcentBePortage = 54.07;
        }
        else if(tjmBePortage <= 320 && tjmBePortage < 330){
            caPourcentBePortage = 53.94;
        }
        else if(tjmBePortage <= 330 && tjmBePortage < 340){
            caPourcentBePortage = 53.82;
        }
        else if(tjmBePortage <= 340 && tjmBePortage < 350){
            caPourcentBePortage = 53.70;
        }
        else if(tjmBePortage <= 350 && tjmBePortage < 360){
            caPourcentBePortage = 53.59;
        }
        else if(tjmBePortage <= 360 && tjmBePortage < 370){
            caPourcentBePortage = 53.49;
        }
        else if(tjmBePortage <= 370 && tjmBePortage < 380){
            caPourcentBePortage = 53.39;
        }
        else if(tjmBePortage <= 380 && tjmBePortage < 390){
            caPourcentBePortage = 53.30;
        }
        else if(tjmBePortage <= 390 && tjmBePortage < 400){
            caPourcentBePortage = 53.21;
        }
        else if(tjmBePortage <= 400 && tjmBePortage < 410){
            caPourcentBePortage = 53.13;
        }
        else if(tjmBePortage <= 410 && tjmBePortage < 420){
            caPourcentBePortage = 53.05;
        }
        else if(tjmBePortage <= 420 && tjmBePortage < 430){
            caPourcentBePortage = 52.98;
        }
        else if(tjmBePortage <= 430 && tjmBePortage < 440){
            caPourcentBePortage = 52.91;
        }
        else if(tjmBePortage <= 440 && tjmBePortage < 450){
            caPourcentBePortage = 52.83;
        }
        else if(tjmBePortage <= 450 && tjmBePortage < 460){
            caPourcentBePortage = 52.77;
        }
        else if(tjmBePortage <= 460 && tjmBePortage < 470){
            caPourcentBePortage = 52.70;
        }
        else if(tjmBePortage <= 470 && tjmBePortage < 480){
            caPourcentBePortage = 52.64;
        }
        else if(tjmBePortage <= 480 && tjmBePortage < 490){
            caPourcentBePortage = 52.59;
        }
        else if(tjmBePortage <= 490 && tjmBePortage < 500){
            caPourcentBePortage = 52.53;
        }
        else if(tjmBePortage <= 500 && tjmBePortage < 510){
            caPourcentBePortage = 52.48;
        }
        else if(tjmBePortage <= 510 && tjmBePortage < 520){
            caPourcentBePortage = 52.43;
        }
        else if(tjmBePortage <= 520 && tjmBePortage < 530){
            caPourcentBePortage = 52.38;
        }
        else if(tjmBePortage <= 530 && tjmBePortage < 540){
            caPourcentBePortage = 52.33;
        }
        else if(tjmBePortage <= 540 && tjmBePortage < 550){
            caPourcentBePortage = 52.29;
        }
        else if(tjmBePortage <= 550 && tjmBePortage < 560){
            caPourcentBePortage = 52.25;
        }
        else if(tjmBePortage <= 560 && tjmBePortage < 570){
            caPourcentBePortage = 52.20;
        }
        else if(tjmBePortage <= 570 && tjmBePortage < 580){
            caPourcentBePortage = 52.16;
        }
        else if(tjmBePortage <= 580 && tjmBePortage < 590){
            caPourcentBePortage = 52.12;
        }
        else if(tjmBePortage <= 590 && tjmBePortage < 600){
            caPourcentBePortage = 52.08;
        }
        else if(tjmBePortage <= 600 && tjmBePortage < 610){
            caPourcentBePortage = 52.04;
        }
        else if(tjmBePortage <= 610 && tjmBePortage < 620){
            caPourcentBePortage = 52.01;
        }
        else if(tjmBePortage <= 620 && tjmBePortage < 630){
            caPourcentBePortage = 51.97;
        }
        else if(tjmBePortage <= 630 && tjmBePortage < 640){
            caPourcentBePortage = 51.94;
        }
        else if(tjmBePortage <= 640 && tjmBePortage < 650){
            caPourcentBePortage = 51.90;
        }
        else if(tjmBePortage <= 650 && tjmBePortage < 660){
            caPourcentBePortage = 52.64;
        }
        else if(tjmBePortage <= 660 && tjmBePortage < 670){
            caPourcentBePortage = 51.85;
        }
        else if(tjmBePortage <= 670 && tjmBePortage < 680){
            caPourcentBePortage = 51.82;
        }
        else if(tjmBePortage <= 680 && tjmBePortage < 690){
            caPourcentBePortage = 51.79;
        }
        else if(tjmBePortage <= 690 && tjmBePortage < 700){
            caPourcentBePortage = 51.76;
        }
        else if(tjmBePortage <= 700){
            caPourcentBePortage = 51.73;
        }
    }
    // Frais de Gestion = 10
    else if (fraisGestionBePortage == 6){
        if (tjmBePortage <= 300  && tjmBePortage < 310){
            caPourcentBePortage = 53.69;
        }
        else if(tjmBePortage <= 310 && tjmBePortage < 320){
            caPourcentBePortage = 53.55;
        }
        else if(tjmBePortage <= 320 && tjmBePortage < 330){
            caPourcentBePortage = 53.42;
        }
        else if(tjmBePortage <= 330 && tjmBePortage < 340){
            caPourcentBePortage = 53.29;
        }
        else if(tjmBePortage <= 340 && tjmBePortage < 350){
            caPourcentBePortage = 53.17;
        }
        else if(tjmBePortage <= 350 && tjmBePortage < 360){
            caPourcentBePortage = 53.07;
        }
        else if(tjmBePortage <= 360 && tjmBePortage < 370){
            caPourcentBePortage = 52.97;
        }
        else if(tjmBePortage <= 370 && tjmBePortage < 380){
            caPourcentBePortage = 52.87;
        }
        else if(tjmBePortage <= 380 && tjmBePortage < 390){
            caPourcentBePortage = 52.78;
        }
        else if(tjmBePortage <= 390 && tjmBePortage < 400){
            caPourcentBePortage = 52.69;
        }
        else if(tjmBePortage <= 400 && tjmBePortage < 410){
            caPourcentBePortage = 52.61;
        }
        else if(tjmBePortage <= 410 && tjmBePortage < 420){
            caPourcentBePortage = 52.53;
        }
        else if(tjmBePortage <= 420 && tjmBePortage < 430){
            caPourcentBePortage = 52.45;
        }
        else if(tjmBePortage <= 430 && tjmBePortage < 440){
            caPourcentBePortage = 52.38;
        }
        else if(tjmBePortage <= 440 && tjmBePortage < 450){
            caPourcentBePortage = 52.31;
        }  
        else if(tjmBePortage <= 450 && tjmBePortage < 460){
            caPourcentBePortage = 52.24;
        }
        else if(tjmBePortage <= 460 && tjmBePortage < 470){
            caPourcentBePortage = 52.17;
        }
        else if(tjmBePortage <= 470 && tjmBePortage < 480){
            caPourcentBePortage = 52.11;
        }
        else if(tjmBePortage <= 480 && tjmBePortage < 490){
            caPourcentBePortage = 52.05;
        }
        else if(tjmBePortage <= 490 && tjmBePortage < 500){
            caPourcentBePortage = 52.01;
        }
        else if(tjmBePortage <= 500 && tjmBePortage < 510){
            caPourcentBePortage = 51.95;
        }
        else if(tjmBePortage <= 510 && tjmBePortage < 520){
            caPourcentBePortage = 51.90;
        }
        else if(tjmBePortage <= 520 && tjmBePortage < 530){
            caPourcentBePortage = 51.85;
        }
        else if(tjmBePortage <= 530 && tjmBePortage < 540){
            caPourcentBePortage = 51.80;
        }
        else if(tjmBePortage <= 540 && tjmBePortage < 550){
            caPourcentBePortage = 51.76;
        }
        else if(tjmBePortage <= 550 && tjmBePortage < 560){
            caPourcentBePortage = 51.71;
        }
        else if(tjmBePortage <= 560 && tjmBePortage < 570){
            caPourcentBePortage = 51.67;
        }
        else if(tjmBePortage <= 570 && tjmBePortage < 580){
            caPourcentBePortage = 51.63;
        }
        else if(tjmBePortage <= 580 && tjmBePortage < 590){
            caPourcentBePortage = 51.59;
        }
        else if(tjmBePortage <= 590 && tjmBePortage < 600){
            caPourcentBePortage = 51.55;
        }
        else if(tjmBePortage <= 600 && tjmBePortage < 610){
            caPourcentBePortage = 51.52;
        }
        else if(tjmBePortage <= 610 && tjmBePortage < 620){
            caPourcentBePortage = 51.48;
        }
        else if(tjmBePortage <= 620 && tjmBePortage < 630){
            caPourcentBePortage = 51.45;
        }
        else if(tjmBePortage <= 630 && tjmBePortage < 640){
            caPourcentBePortage = 51.42;
        }
        else if(tjmBePortage <= 640 && tjmBePortage < 650){
            caPourcentBePortage = 51.39;
        }
        else if(tjmBePortage <= 650 && tjmBePortage < 660){
            caPourcentBePortage = 51.36;
        }
        else if(tjmBePortage <= 660 && tjmBePortage < 670){
            caPourcentBePortage = 51.33;
        }
        else if(tjmBePortage <= 670 && tjmBePortage < 680){
            caPourcentBePortage = 51.29;
        }
        else if(tjmBePortage <= 680 && tjmBePortage < 690){
            caPourcentBePortage = 51.26;
        }
        else if(tjmBePortage <= 690 && tjmBePortage < 700){
            caPourcentBePortage = 51.24;
        }
        else if(tjmBePortage <= 700){
            caPourcentBePortage = 51.21;
        }
    }
    // Frais de Gestion = 8
    else if (fraisGestionBePortage == 8){
        if(tjmBePortage <= 300  && tjmBePortage < 310){
            caPourcentBePortage = 52.64;
        }
        else if(tjmBePortage <= 310 && tjmBePortage < 320){
            caPourcentBePortage = 52.50;
        }
        else if(tjmBePortage <= 320 && tjmBePortage < 330){
            caPourcentBePortage = 52.37;
        }
        else if(tjmBePortage <= 330 && tjmBePortage < 340){
            caPourcentBePortage = 52.24;
        }
        else if(tjmBePortage <= 340 && tjmBePortage < 350){
            caPourcentBePortage = 52.13;
        }
        else if(tjmBePortage <= 350 && tjmBePortage < 360){
            caPourcentBePortage = 52.02;
        }
        else if(tjmBePortage <= 360 && tjmBePortage < 370){
            caPourcentBePortage = 51.92;
        }
        else if(tjmBePortage <= 370 && tjmBePortage < 380){
            caPourcentBePortage = 51.83;
        }
        else if(tjmBePortage <= 380 && tjmBePortage < 390){
            caPourcentBePortage = 51.74;
        }
        else if(tjmBePortage <= 390 && tjmBePortage < 400){
            caPourcentBePortage = 51.64;
        }
        else if(tjmBePortage <= 400 && tjmBePortage < 410){
            caPourcentBePortage = 51.55;
        }
        else if(tjmBePortage <= 410 && tjmBePortage < 420){
            caPourcentBePortage = 51.47;
        }
        else if(tjmBePortage <= 420 && tjmBePortage < 430){
            caPourcentBePortage = 51.39;
        }
        else if(tjmBePortage <= 430 && tjmBePortage < 440){
            caPourcentBePortage = 51.33;
        }
        else if(tjmBePortage <= 440 && tjmBePortage < 450){
            caPourcentBePortage = 51.26;
        }
        else if(tjmBePortage <= 450 && tjmBePortage < 460){
            caPourcentBePortage = 51.20;
        }
        else if(tjmBePortage <= 460 && tjmBePortage < 470){
            caPourcentBePortage = 51.14;
        }
        else if(tjmBePortage <= 470 && tjmBePortage < 480){
            caPourcentBePortage = 49.01;
        }
        else if(tjmBePortage <= 480 && tjmBePortage < 490){
            caPourcentBePortage = 51.01;
        }
        else if(tjmBePortage <= 490 && tjmBePortage < 500){
            caPourcentBePortage = 50.96;
        }
        else if(tjmBePortage <= 500 && tjmBePortage < 510){
            caPourcentBePortage = 50.91;
        }
        else if(tjmBePortage <= 510 && tjmBePortage < 520){
            caPourcentBePortage = 50.86;
        }
        else if(tjmBePortage <= 520 && tjmBePortage < 530){
            caPourcentBePortage = 50.81;
        }
        else if(tjmBePortage <= 530 && tjmBePortage < 540){
            caPourcentBePortage = 50.76;
        }
        else if(tjmBePortage <= 540 && tjmBePortage < 550){
            caPourcentBePortage = 50.71;
        }
        else if(tjmBePortage <= 550 && tjmBePortage < 560){
            caPourcentBePortage = 50.66;
        }
        else if(tjmBePortage <= 560 && tjmBePortage < 570){
            caPourcentBePortage = 50.61;
        }
        else if(tjmBePortage <= 570 && tjmBePortage < 580){
            caPourcentBePortage = 50.58;
        }
        else if(tjmBePortage <= 580 && tjmBePortage < 590){
            caPourcentBePortage = 50.54;
        }
        else if(tjmBePortage <= 590 && tjmBePortage < 600){
            caPourcentBePortage = 50.51;
        }
        else if(tjmBePortage <= 600 && tjmBePortage < 610){
            caPourcentBePortage = 50.47;
        }
        else if(tjmBePortage <= 610 && tjmBePortage < 620){
            caPourcentBePortage = 50.43;
        }
        else if(tjmBePortage <= 620 && tjmBePortage < 630){
            caPourcentBePortage = 50.40;
        }
        else if(tjmBePortage <= 630 && tjmBePortage < 640){
            caPourcentBePortage = 50.37;
        }
        else if(tjmBePortage <= 640 && tjmBePortage < 650){
            caPourcentBePortage = 50.33;
        }
        else if(tjmBePortage <= 650 && tjmBePortage < 660){
            caPourcentBePortage = 50.30;
        }
        else if(tjmBePortage <= 660 && tjmBePortage < 670){
            caPourcentBePortage = 50.27;
        }
        else if(tjmBePortage <= 670 && tjmBePortage < 680){
            caPourcentBePortage = 50.24;
        }
        else if(tjmBePortage <= 680 && tjmBePortage < 690){
            caPourcentBePortage = 50.21;
        }
        else if(tjmBePortage <= 690 && tjmBePortage < 700){
            caPourcentBePortage = 50.19;
        }
        else if(tjmBePortage <= 700){
            caPourcentBePortage = 50.16;
        }
    }
    var remunerationBePortage = cainto100BePortage * caPourcentBePortage;
    document.getElementById("mySocieteBePortage").innerHTML = caPourcentBePortage + "%";
    document.getElementById("myRemTotaleBePortage").innerHTML = formatter1.format(remunerationBePortage);
    document.getElementById("myTjmBePortage").innerHTML = formatter2.format(tjmBePortage);
    document.getElementById("caTotalBePortage").innerHTML = formatter2.format(caBePortage);
    document.getElementById("myFraisBePortage").innerHTML = formatter2.format(fraisBePortage);
}

updateBePortage();


// Société Didaxis

document.getElementById("myFraisGestionDidaxis").addEventListener("change", updateDidaxis);

var tjmDidaxis = url.searchParams.get("tjm");
var fraisDidaxis = 360;
var nbJoursDidaxis = document.getElementById("nbJoursDidaxis").innerHTML = "20";
var caDidaxis = tjmDidaxis * nbJoursDidaxis;
var caPourcentDidaxis;
var fraisGestionDidaxis = 5; 
var cainto100Didaxis = caDidaxis / 100 ;

// Frais de gestion

document.getElementById("myFraisGestionDidaxis").value = fraisGestionDidaxis;

function updateDidaxis(){
    fraisGestionDidaxis = document.getElementById("myFraisGestionDidaxis").value;

    if(fraisGestionDidaxis == 5){
        if(tjmDidaxis <= 300  && tjmDidaxis < 310){
            caPourcentDidaxis = 53.33;
        }
        else if(tjmDidaxis <= 310 && tjmDidaxis < 320){
            caPourcentDidaxis = 53.24;
        }
        else if(tjmDidaxis <= 320 && tjmDidaxis < 330){
            caPourcentDidaxis = 53.16;
        }
        else if(tjmDidaxis <= 330 && tjmDidaxis < 340){
            caPourcentDidaxis = 53.09;
        }
        else if(tjmDidaxis <= 340 && tjmDidaxis < 350){
            caPourcentDidaxis = 53.01;
        }
        else if(tjmDidaxis <= 350 && tjmDidaxis < 360){
            caPourcentDidaxis = 52.94;
        }
        else if(tjmDidaxis <= 360 && tjmDidaxis < 370){
            caPourcentDidaxis = 52.88;
        }
        else if(tjmDidaxis <= 370 && tjmDidaxis < 380){
            caPourcentDidaxis = 52.81;
        }
        else if(tjmDidaxis <= 380 && tjmDidaxis < 390){
            caPourcentDidaxis = 52.75;
        }
        else if(tjmDidaxis <= 390 && tjmDidaxis < 400){
            caPourcentDidaxis = 52.69;
        }
        else if(tjmDidaxis <= 400 && tjmDidaxis < 410){
            caPourcentDidaxis = 52.64;
        }
        else if(tjmDidaxis <= 410 && tjmDidaxis < 420){
            caPourcentDidaxis = 52.59;
        }
        else if(tjmDidaxis <= 420 && tjmDidaxis < 430){
            caPourcentDidaxis = 52.54;
        }
        else if(tjmDidaxis <= 430 && tjmDidaxis < 440){
            caPourcentDidaxis = 52.49;
        }
        else if(tjmDidaxis <= 440 && tjmDidaxis < 450){
            caPourcentDidaxis = 52.44;
        }
        else if(tjmDidaxis <= 450 && tjmDidaxis < 460){
            caPourcentDidaxis = 52.40;
        }
        else if(tjmDidaxis <= 460 && tjmDidaxis < 470){
            caPourcentDidaxis = 52.36;
        }
        else if(tjmDidaxis <= 470 && tjmDidaxis < 480){
            caPourcentDidaxis = 52.32;
        }
        else if(tjmDidaxis <= 480 && tjmDidaxis < 490){
            caPourcentDidaxis = 52.28;
        }
        else if(tjmDidaxis <= 490 && tjmDidaxis < 500){
            caPourcentDidaxis = 52.25;
        }
        else if(tjmDidaxis <= 500 && tjmDidaxis < 510){
            caPourcentDidaxis = 52.22;
        }
        else if(tjmDidaxis <= 510 && tjmDidaxis < 520){
            caPourcentDidaxis = 52.19;
        }
        else if(tjmDidaxis <= 520 && tjmDidaxis < 530){
            caPourcentDidaxis = 52.15;
        }
        else if(tjmDidaxis <= 530 && tjmDidaxis < 540){
            caPourcentDidaxis = 52.12;
        }
        else if(tjmDidaxis <= 540 && tjmDidaxis < 550){
            caPourcentDidaxis = 52.09;
        }
        else if(tjmDidaxis <= 550 && tjmDidaxis < 560){
            caPourcentDidaxis = 52.06;
        }   
        else if(tjmDidaxis <= 560 && tjmDidaxis < 570){
            caPourcentDidaxis = 52.04;
        }
        else if(tjmDidaxis <= 570 && tjmDidaxis < 580){
            caPourcentDidaxis = 52.01;
        }
        else if(tjmDidaxis <= 580 && tjmDidaxis < 590){
            caPourcentDidaxis = 51.98;
        }
        else if(tjmDidaxis <= 590 && tjmDidaxis < 600){
            caPourcentDidaxis = 51.96;
        }
        else if(tjmDidaxis <= 600 && tjmDidaxis < 610){
            caPourcentDidaxis = 51.93;
        }
        else if(tjmDidaxis <= 610 && tjmDidaxis < 620){
            caPourcentDidaxis = 51.91;
        }
        else if(tjmDidaxis <= 620 && tjmDidaxis < 630){
            caPourcentDidaxis = 51.89;
        }
        else if(tjmDidaxis <= 630 && tjmDidaxis < 640){
            caPourcentDidaxis = 51.87;
        }
        else if(tjmDidaxis <= 640 && tjmDidaxis < 650){
            caPourcentDidaxis = 51.85;
        }
        else if(tjmDidaxis <= 650 && tjmDidaxis < 660){
            caPourcentDidaxis = 51.83;
        }
        else if(tjmDidaxis <= 660 && tjmDidaxis < 670){
            caPourcentDidaxis = 51.81;
        }
        else if(tjmDidaxis <= 670 && tjmDidaxis < 680){
            caPourcentDidaxis = 51.79;
        }
        else if(tjmDidaxis <= 680 && tjmDidaxis < 690){
            caPourcentDidaxis = 51.77;
        }
        else if(tjmDidaxis <= 690 && tjmDidaxis < 700){
            caPourcentDidaxis = 51.76;
        }
        else if(tjmDidaxis <= 700){
            caPourcentDidaxis = 51.74;
        }
    }
    else if(fraisGestionDidaxis == 6){
        if(tjmDidaxis <= 300  && tjmDidaxis < 310){
            caPourcentDidaxis = 52.80;
        }
        else if(tjmDidaxis <= 310 && tjmDidaxis < 320){
            caPourcentDidaxis = 52.71;
        }
        else if(tjmDidaxis <= 320 && tjmDidaxis < 330){
            caPourcentDidaxis = 52.63;
        }
        else if(tjmDidaxis <= 330 && tjmDidaxis < 340){
            caPourcentDidaxis = 52.55;
        }
        else if(tjmDidaxis <= 340 && tjmDidaxis < 350){
            caPourcentDidaxis = 52.47;
        }
        else if(tjmDidaxis <= 350 && tjmDidaxis < 360){
            caPourcentDidaxis = 52.40;
        }
        else if(tjmDidaxis <= 360 && tjmDidaxis < 370){
            caPourcentDidaxis = 51.81;
        }
        else if(tjmDidaxis <= 370 && tjmDidaxis < 380){
            caPourcentDidaxis = 52.27;
        }
        else if(tjmDidaxis <= 380 && tjmDidaxis < 390){
            caPourcentDidaxis = 52.21;
        }
        else if(tjmDidaxis <= 390 && tjmDidaxis < 400){
            caPourcentDidaxis = 52.15;
        }
        else if(tjmDidaxis <= 400 && tjmDidaxis < 410){
            caPourcentDidaxis = 52.10;
        }
        else if(tjmDidaxis <= 410 && tjmDidaxis < 420){
            caPourcentDidaxis = 52.05;
        }
        else if(tjmDidaxis <= 420 && tjmDidaxis < 430){
            caPourcentDidaxis = 52.00;
        }
        else if(tjmDidaxis <= 430 && tjmDidaxis < 440){
            caPourcentDidaxis = 51.95;
        }
        else if(tjmDidaxis <= 440 && tjmDidaxis < 450){
            caPourcentDidaxis = 51.91;
        }
        else if(tjmDidaxis <= 450 && tjmDidaxis < 460){
            caPourcentDidaxis = 51.87;
        }
        else if(tjmDidaxis <= 460 && tjmDidaxis < 470){
            caPourcentDidaxis = 51.83;
        }
        else if(tjmDidaxis <= 470 && tjmDidaxis < 480){
            caPourcentDidaxis = 51.79;
        }
        else if(tjmDidaxis <= 480 && tjmDidaxis < 490){
            caPourcentDidaxis = 51.75;
        }
        else if(tjmDidaxis <= 490 && tjmDidaxis < 500){
            caPourcentDidaxis = 51.71;
        }
        else if(tjmDidaxis <= 500 && tjmDidaxis < 510){
            caPourcentDidaxis = 51.68;
        }
        else if(tjmDidaxis <= 510 && tjmDidaxis < 520){
            caPourcentDidaxis = 51.65;
        }
        else if(tjmDidaxis <= 520 && tjmDidaxis < 530){
            caPourcentDidaxis = 51.62;
        }
        else if(tjmDidaxis <= 530 && tjmDidaxis < 540){
            caPourcentDidaxis = 51.58;
        }
        else if(tjmDidaxis <= 540 && tjmDidaxis < 550){
            caPourcentDidaxis = 51.56;
        }
        else if(tjmDidaxis <= 550 && tjmDidaxis < 560){
            caPourcentDidaxis = 51.53;
        }   
        else if(tjmDidaxis <= 560 && tjmDidaxis < 570){
            caPourcentDidaxis = 51.50;
        }
        else if(tjmDidaxis <= 570 && tjmDidaxis < 580){
            caPourcentDidaxis = 51.47;
        }
        else if(tjmDidaxis <= 580 && tjmDidaxis < 590){
            caPourcentDidaxis = 51.45;
        }
        else if(tjmDidaxis <= 590 && tjmDidaxis < 600){
            caPourcentDidaxis = 51.42;
        }
        else if(tjmDidaxis <= 600 && tjmDidaxis < 610){
            caPourcentDidaxis = 51.40;
        }
        else if(tjmDidaxis <= 610 && tjmDidaxis < 620){
            caPourcentDidaxis = 51.38;
        }
        else if(tjmDidaxis <= 620 && tjmDidaxis < 630){
            caPourcentDidaxis = 51.35;
        }
        else if(tjmDidaxis <= 630 && tjmDidaxis < 640){
            caPourcentDidaxis = 51.33;
        }
        else if(tjmDidaxis <= 640 && tjmDidaxis < 650){
            caPourcentDidaxis = 51.31;
        }
        else if(tjmDidaxis <= 650 && tjmDidaxis < 660){
            caPourcentDidaxis = 51.29;
        }
        else if(tjmDidaxis <= 660 && tjmDidaxis < 670){
            caPourcentDidaxis = 51.27;
        }
        else if(tjmDidaxis <= 670 && tjmDidaxis < 680){
            caPourcentDidaxis = 51.25;
        }
        else if(tjmDidaxis <= 680 && tjmDidaxis < 690){
            caPourcentDidaxis = 51.24;
        }
        else if(tjmDidaxis <= 690 && tjmDidaxis < 700){
            caPourcentDidaxis = 51.22;
        }
        else if(tjmDidaxis <= 700){
            caPourcentDidaxis = 51.20;
        }
    }
    else if(fraisGestionDidaxis == 7){
        if(tjmDidaxis <= 300  && tjmDidaxis < 310){
            caPourcentDidaxis = 52.28;
        }
        else if(tjmDidaxis <= 310 && tjmDidaxis < 320){
            caPourcentDidaxis = 52.18;
        }
        else if(tjmDidaxis <= 320 && tjmDidaxis < 330){
            caPourcentDidaxis = 52.09;
        }
        else if(tjmDidaxis <= 330 && tjmDidaxis < 340){
            caPourcentDidaxis = 52.02;
        }
        else if(tjmDidaxis <= 340 && tjmDidaxis < 350){
            caPourcentDidaxis = 51.94;
        }
        else if(tjmDidaxis <= 350 && tjmDidaxis < 360){
            caPourcentDidaxis = 51.87;
        }
        else if(tjmDidaxis <= 360 && tjmDidaxis < 370){
            caPourcentDidaxis = 51.81;
        }
        else if(tjmDidaxis <= 370 && tjmDidaxis < 380){
            caPourcentDidaxis = 51.74;
        }
        else if(tjmDidaxis <= 380 && tjmDidaxis < 390){
            caPourcentDidaxis = 51.68;
        }
        else if(tjmDidaxis <= 390 && tjmDidaxis < 400){
            caPourcentDidaxis = 51.63;
        }
        else if(tjmDidaxis <= 400 && tjmDidaxis < 410){
            caPourcentDidaxis = 51.58;
        }
        else if(tjmDidaxis <= 410 && tjmDidaxis < 420){
            caPourcentDidaxis = 51.52;
        }
        else if(tjmDidaxis <= 420 && tjmDidaxis < 430){
            caPourcentDidaxis = 51.48;
        }
        else if(tjmDidaxis <= 430 && tjmDidaxis < 440){
            caPourcentDidaxis = 51.43;
        }
        else if(tjmDidaxis <= 440 && tjmDidaxis < 450){
            caPourcentDidaxis = 51.39;
        }
        else if(tjmDidaxis <= 450 && tjmDidaxis < 460){
            caPourcentDidaxis = 51.34;
        }
        else if(tjmDidaxis <= 460 && tjmDidaxis < 470){
            caPourcentDidaxis = 51.29;
        }
        else if(tjmDidaxis <= 470 && tjmDidaxis < 480){
            caPourcentDidaxis = 51.26;
        }
        else if(tjmDidaxis <= 480 && tjmDidaxis < 490){
            caPourcentDidaxis = 51.22;
        }
        else if(tjmDidaxis <= 490 && tjmDidaxis < 500){
            caPourcentDidaxis = 51.18;
        }
        else if(tjmDidaxis <= 500 && tjmDidaxis < 510){
            caPourcentDidaxis = 51.15;
        }
        else if(tjmDidaxis <= 510 && tjmDidaxis < 520){
            caPourcentDidaxis = 51.12;
        }
        else if(tjmDidaxis <= 520 && tjmDidaxis < 530){
            caPourcentDidaxis = 51.09;
        }
        else if(tjmDidaxis <= 530 && tjmDidaxis < 540){
            caPourcentDidaxis = 51.06;
        }
        else if(tjmDidaxis <= 540 && tjmDidaxis < 550){
            caPourcentDidaxis = 51.03;
        }
        else if(tjmDidaxis <= 550 && tjmDidaxis < 560){
            caPourcentDidaxis = 51.00;
        }   
        else if(tjmDidaxis <= 560 && tjmDidaxis < 570){
            caPourcentDidaxis = 50.97;
        }
        else if(tjmDidaxis <= 570 && tjmDidaxis < 580){
            caPourcentDidaxis = 50.95;
        }
        else if(tjmDidaxis <= 580 && tjmDidaxis < 590){
            caPourcentDidaxis = 50.92;
        }
        else if(tjmDidaxis <= 590 && tjmDidaxis < 600){
            caPourcentDidaxis = 50.90;
        }
        else if(tjmDidaxis <= 600 && tjmDidaxis < 610){
            caPourcentDidaxis = 50.88;
        }
        else if(tjmDidaxis <= 610 && tjmDidaxis < 620){
            caPourcentDidaxis = 50.84;
        }
        else if(tjmDidaxis <= 620 && tjmDidaxis < 630){
            caPourcentDidaxis = 50.82;
        }
        else if(tjmDidaxis <= 630 && tjmDidaxis < 640){
            caPourcentDidaxis = 50.80;
        }
        else if(tjmDidaxis <= 640 && tjmDidaxis < 650){
            caPourcentDidaxis = 50.78;
        }
        else if(tjmDidaxis <= 650 && tjmDidaxis < 660){
            caPourcentDidaxis = 50.76;
        }
        else if(tjmDidaxis <= 660 && tjmDidaxis < 670){
            caPourcentDidaxis = 50.74;
        }
        else if(tjmDidaxis <= 670 && tjmDidaxis < 680){
            caPourcentDidaxis = 50.72;
        }
        else if(tjmDidaxis <= 680 && tjmDidaxis < 690){
            caPourcentDidaxis = 50.71;
        }
        else if(tjmDidaxis <= 690 && tjmDidaxis < 700){
            caPourcentDidaxis = 50.69;
        }
        else if(tjmDidaxis <= 700){
            caPourcentDidaxis = 510.67;
        }
    }

    var remunerationDidaxis = cainto100Didaxis * caPourcentDidaxis;
    document.getElementById("mySocieteDidaxis").innerHTML = caPourcentDidaxis + "%";
    document.getElementById("myRemTotaleDidaxis").innerHTML = formatter1.format(remunerationDidaxis);
    document.getElementById("myTjmDidaxis").innerHTML = formatter2.format(tjmDidaxis);
    document.getElementById("caTotalDidaxis").innerHTML = formatter2.format(caDidaxis);
    document.getElementById("myFraisDidaxis").innerHTML = formatter2.format(fraisDidaxis);
    
}
updateDidaxis();

// Société Kingurley

var tjmKingurley = url.searchParams.get("tjm");
var fraisKingurley = 360;
var nbJoursKingurley = document.getElementById("nbJoursKingurley").innerHTML = "20";
var caKingurley = tjmKingurley * nbJoursKingurley ;
var caPourcentKingurley;
var cainto100Kingurley = caKingurley / 100;
var fraisGestionKingurley = 12;

if(tjmKingurley <= 300  && tjmKingurley < 310){
    caPourcentKingurley = 52.82;
}
else if(tjmKingurley <= 310 && tjmKingurley < 320){
    caPourcentKingurley = 52.73;
}
else if(tjmKingurley <= 320 && tjmKingurley < 330){
    caPourcentKingurley = 52.64;
}
else if(tjmKingurley <= 330 && tjmKingurley < 340){
    caPourcentKingurley = 52.55;
}
else if(tjmKingurley <= 340 && tjmKingurley < 350){
    caPourcentKingurley = 52.46;
}
else if(tjmKingurley <= 350 && tjmKingurley < 360){
    caPourcentKingurley = 52.40;
}
else if(tjmKingurley <= 360 && tjmKingurley < 370){
    caPourcentKingurley = 52.33;
}
else if(tjmKingurley <= 370 && tjmKingurley < 380){
    caPourcentKingurley = 52.26;
}
else if(tjmKingurley <= 380 && tjmKingurley < 390){
    caPourcentKingurley = 52.21;
}
else if(tjmKingurley <= 390 && tjmKingurley < 400){
    caPourcentKingurley = 52.15;
}
else if(tjmKingurley <= 400 && tjmKingurley < 410){
    caPourcentKingurley = 52.10;
}
else if(tjmKingurley <= 410 && tjmKingurley < 420){
    caPourcentKingurley = 52.05;
}
else if(tjmKingurley <= 420 && tjmKingurley < 430){
    caPourcentKingurley = 52.00;
}
else if(tjmKingurley <= 430 && tjmKingurley < 440){
    caPourcentKingurley = 51.95;
}
else if(tjmKingurley <= 440 && tjmKingurley < 450){
    caPourcentKingurley = 51.91;
}
else if(tjmKingurley <= 450 && tjmKingurley < 460){
    caPourcentKingurley = 51.87;
}
else if(tjmKingurley <= 460 && tjmKingurley < 470){
    caPourcentKingurley = 51.83;
}
else if(tjmKingurley <= 470 && tjmKingurley < 480){
    caPourcentKingurley = 51.79;
}
else if(tjmKingurley <= 480 && tjmKingurley < 490){
    caPourcentKingurley = 51.76;
}
else if(tjmKingurley <= 490 && tjmKingurley < 500){
    caPourcentKingurley = 51.72;
}
else if(tjmKingurley <= 500 && tjmKingurley < 510){
    caPourcentKingurley = 51.69;
}
else if(tjmKingurley <= 510 && tjmKingurley < 520){
    caPourcentKingurley = 51.66;
}
else if(tjmKingurley <= 520 && tjmKingurley < 530){
    caPourcentKingurley = 51.62;
}
else if(tjmKingurley <= 530 && tjmKingurley < 540){
    caPourcentKingurley = 52.65;
}
else if(tjmKingurley <= 540 && tjmKingurley < 550){
    caPourcentKingurley = 52.62;
}
else if(tjmKingurley <= 550 && tjmKingurley < 560){
    caPourcentKingurley = 52.59;
}
else if(tjmKingurley <= 560 && tjmKingurley < 570){
    caPourcentKingurley = 52.57;
}
else if(tjmKingurley <= 570 && tjmKingurley < 580){
    caPourcentKingurley = 52.54;
}
else if(tjmKingurley <= 580 && tjmKingurley < 590){
    caPourcentKingurley = 52.54;
}
else if(tjmKingurley <= 590 && tjmKingurley < 600){
    caPourcentKingurley = 52.52;
}
else if(tjmKingurley <= 600 && tjmKingurley < 610){
    caPourcentKingurley = 52.47;
}
else if(tjmKingurley <= 610 && tjmKingurley < 620){
    caPourcentKingurley = 52.44;
}
else if(tjmKingurley <= 620 && tjmKingurley < 630){
    caPourcentKingurley = 52.42;
}
else if(tjmKingurley <= 630 && tjmKingurley < 640){
    caPourcentKingurley = 52.40;
}
else if(tjmKingurley <= 640 && tjmKingurley < 650){
    caPourcentKingurley = 52.38;
}
else if(tjmKingurley <= 650 && tjmKingurley < 660){
    caPourcentKingurley = 52.36;
}
else if(tjmKingurley <= 660 && tjmKingurley < 670){
    caPourcentKingurley = 52.33;
}
else if(tjmKingurley <= 670 && tjmKingurley < 680){
    caPourcentKingurley = 52.32;
}
else if(tjmKingurley <= 680 && tjmKingurley < 690){
    caPourcentKingurley = 52.29;
}
else if(tjmKingurley <= 690 && tjmKingurley < 700){
    caPourcentKingurley = 52.28;
}
else if(tjmKingurley <= 700){
    caPourcentKingurley = 52.26;
}

var remunerationKingurley = cainto100Kingurley * caPourcentKingurley;
document.getElementById("mySocieteKingurley").innerHTML = caPourcentKingurley + "%";
document.getElementById("myRemTotaleKingurley").innerHTML = formatter1.format(remunerationKingurley);
document.getElementById("myTjmKingurley").innerHTML = formatter2.format(tjmKingurley);
document.getElementById("caTotalKingurley").innerHTML = formatter2.format(caKingurley);
document.getElementById("myFraisKingurley").innerHTML = formatter2.format(fraisKingurley);
document.getElementById("myFraisGestionKingurley").innerHTML = fraisGestionKingurley + "%";



// Société Admission

var tjmAdmission = url.searchParams.get("tjm");
var fraisAdmission = 360;
var nbJoursAdmission = document.getElementById("nbJoursAdmission").innerHTML = "20";
var caAdmission = tjmAdmission * nbJoursAdmission ;
var caPourcentAdmission;
var cainto100Admission = caAdmission / 100;
var fraisGestionAdmission = 5;

if(tjmAdmission <= 300  && tjmAdmission < 310){
    caPourcentAdmission = 52.65;
}
else if(tjmAdmission <= 310 && tjmAdmission < 320){
    caPourcentAdmission = 52.55;
}
else if(tjmAdmission <= 320 && tjmAdmission < 330){
    caPourcentAdmission = 52.47;
}
else if(tjmAdmission <= 330 && tjmAdmission < 340){
    caPourcentAdmission = 52.39;
}
else if(tjmAdmission <= 340 && tjmAdmission < 350){
    caPourcentAdmission = 52.31;
}
else if(tjmAdmission <= 350 && tjmAdmission < 360){
    caPourcentAdmission = 52.24;
}
else if(tjmAdmission <= 360 && tjmAdmission < 370){
    caPourcentAdmission = 52.17;
}
else if(tjmAdmission <= 370 && tjmAdmission < 380){
    caPourcentAdmission = 52.10;
}
else if(tjmAdmission <= 380 && tjmAdmission < 390){
    caPourcentAdmission = 52.05;
}
else if(tjmAdmission <= 390 && tjmAdmission < 400){
    caPourcentAdmission = 51.99;
}
else if(tjmAdmission <= 400 && tjmAdmission < 410){
    caPourcentAdmission = 51.93;
}
else if(tjmAdmission <= 410 && tjmAdmission < 420){
    caPourcentAdmission = 51.88;
}
else if(tjmAdmission <= 420 && tjmAdmission < 430){
    caPourcentAdmission = 51.83;
}
else if(tjmAdmission <= 430 && tjmAdmission < 440){
    caPourcentAdmission = 51.79;
}
else if(tjmAdmission <= 440 && tjmAdmission < 450){
    caPourcentAdmission = 51.74;
}
else if(tjmAdmission <= 450 && tjmAdmission < 460){
    caPourcentAdmission = 51.69;
}
else if(tjmAdmission <= 460 && tjmAdmission < 470){
    caPourcentAdmission = 51.65;
}
else if(tjmAdmission <= 470 && tjmAdmission < 480){
    caPourcentAdmission = 51.61;
}
else if(tjmAdmission <= 480 && tjmAdmission < 490){
    caPourcentAdmission = 51.58;
}
else if(tjmAdmission <= 490 && tjmAdmission < 500){
    caPourcentAdmission = 51.54;
}
else if(tjmAdmission <= 500 && tjmAdmission < 510){
    caPourcentAdmission = 51.50;
}
else if(tjmAdmission <= 510 && tjmAdmission < 520){
    caPourcentAdmission = 51.47;
}
else if(tjmAdmission <= 520 && tjmAdmission < 530){
    caPourcentAdmission = 51.43;
}
else if(tjmAdmission <= 530 && tjmAdmission < 540){
    caPourcentAdmission = 51.40;
}
else if(tjmAdmission <= 540 && tjmAdmission < 550){
    caPourcentAdmission = 51.38;
}
else if(tjmAdmission <= 550 && tjmAdmission < 560){
    caPourcentAdmission = 51.35;
}
else if(tjmAdmission <= 560 && tjmAdmission < 570){
    caPourcentAdmission = 51.32;
}
else if(tjmAdmission <= 570 && tjmAdmission < 580){
    caPourcentAdmission = 51.29;
}
else if(tjmAdmission <= 580 && tjmAdmission < 590){
    caPourcentAdmission = 51.27;
}
else if(tjmAdmission <= 590 && tjmAdmission < 600){
    caPourcentAdmission = 51.24;
}
else if(tjmAdmission <= 600 && tjmAdmission < 610){
    caPourcentAdmission = 51.22;
}
else if(tjmAdmission <= 610 && tjmAdmission < 620){
    caPourcentAdmission = 51.20;
}
else if(tjmAdmission <= 620 && tjmAdmission < 630){
    caPourcentAdmission = 51.18;
}
else if(tjmAdmission <= 630 && tjmAdmission < 640){
    caPourcentAdmission = 51.16;
}
else if(tjmAdmission <= 640 && tjmAdmission < 650){
    caPourcentAdmission = 51.13;
}
else if(tjmAdmission <= 650 && tjmAdmission < 660){
    caPourcentAdmission = 51.11;
}
else if(tjmAdmission <= 660 && tjmAdmission < 670){
    caPourcentAdmission = 51.09;
}
else if(tjmAdmission <= 670 && tjmAdmission < 680){
    caPourcentAdmission = 51.07;
}
else if(tjmAdmission <= 680 && tjmAdmission < 690){
    caPourcentAdmission = 51.05;
}
else if(tjmAdmission <= 690 && tjmAdmission < 700){
    caPourcentAdmission = 51.03;
}
else if(tjmAdmission <= 700){
    caPourcentAdmission = 51.01;
}


var remunerationAdmission = cainto100Admission * caPourcentAdmission;
document.getElementById("mySocieteAdmission").innerHTML = caPourcentAdmission + "%";
document.getElementById("myRemTotaleAdmission").innerHTML = formatter1.format(remunerationAdmission);
document.getElementById("myTjmAdmission").innerHTML = formatter2.format(tjmAdmission);
document.getElementById("caTotalAdmission").innerHTML = formatter2.format(caAdmission);
document.getElementById("myFraisAdmission").innerHTML = formatter2.format(fraisAdmission);
document.getElementById("myFraisGestionAdmission").innerHTML = fraisGestionAdmission + "%";



// Société EPPortage

var tjmEPPortage = url.searchParams.get("tjm");
var fraisEPPortage = 360;
var nbJoursEPPortage = document.getElementById("nbJoursEPPortage").innerHTML = "20";
var caEPPortage = tjmEPPortage*nbJoursEPPortage;
var caPourcentEPPortage;
var fraisGestionEPPortage = 7; 
var cainto100EPPortage = caEPPortage / 100;

if(tjmEPPortage <= 300  && tjmEPPortage < 310){
    caPourcentEPPortage = 48.83;
}
else if(tjmEPPortage <= 310 && tjmEPPortage < 320){
    caPourcentEPPortage = 48.88;
}
else if(tjmEPPortage <= 320 && tjmEPPortage < 330){
    caPourcentEPPortage = 48.93;
}
else if(tjmEPPortage <= 330 && tjmEPPortage < 340){
    caPourcentEPPortage = 48.97;
}
else if(tjmEPPortage <= 340 && tjmEPPortage < 350){
    caPourcentEPPortage = 49.01;
}
else if(tjmEPPortage <= 350 && tjmEPPortage < 360){
    caPourcentEPPortage = 49.23;
}
else if(tjmEPPortage <= 360 && tjmEPPortage < 370){
    caPourcentEPPortage = 49.27;
}
else if(tjmEPPortage <= 370 && tjmEPPortage < 380){
    caPourcentEPPortage = 49.30;
}
else if(tjmEPPortage <= 380 && tjmEPPortage < 390){
    caPourcentEPPortage = 49.33;
}
else if(tjmEPPortage <= 390 && tjmEPPortage < 400){
    caPourcentEPPortage = 49.36;
}
else if(tjmEPPortage <= 400 && tjmEPPortage < 410){
    caPourcentEPPortage = 49.39;
}
else if(tjmEPPortage <= 410 && tjmEPPortage < 420){
    caPourcentEPPortage = 49.42;
}
else if(tjmEPPortage <= 420 && tjmEPPortage < 430){
    caPourcentEPPortage = 49.45;
}
else if(tjmEPPortage <= 430 && tjmEPPortage < 440){
    caPourcentEPPortage = 49.47;
}
else if(tjmEPPortage <= 440 && tjmEPPortage < 450){
    caPourcentEPPortage = 49.49;
}
else if(tjmEPPortage <= 450 && tjmEPPortage < 460){
    caPourcentEPPortage = 49.52;
}
else if(tjmEPPortage <= 460 && tjmEPPortage < 470){
    caPourcentEPPortage = 49.54;
}
else if(tjmEPPortage <= 470 && tjmEPPortage < 480){
    caPourcentEPPortage = 49.56;
}
else if(tjmEPPortage <= 480 && tjmEPPortage < 490){
    caPourcentEPPortage = 49.58;
}
else if(tjmEPPortage <= 490 && tjmEPPortage < 500){
    caPourcentEPPortage = 49.60;
}
else if(tjmEPPortage <= 500 && tjmEPPortage < 510){
    caPourcentEPPortage = 49.62;
}
else if(tjmEPPortage <= 510 && tjmEPPortage < 520){
    caPourcentEPPortage = 49.63;
}
else if(tjmEPPortage <= 520 && tjmEPPortage < 530){
    caPourcentEPPortage = 49.65;
}
else if(tjmEPPortage <= 530 && tjmEPPortage < 540){
    caPourcentEPPortage = 49.67;
}
else if(tjmEPPortage <= 540 && tjmEPPortage < 550){
    caPourcentEPPortage = 49.68;
}
else if(tjmEPPortage <= 550 && tjmEPPortage < 560){
    caPourcentEPPortage = 49.70;
}
else if(tjmEPPortage <= 560 && tjmEPPortage < 570){
    caPourcentEPPortage = 49.71;
}
else if(tjmEPPortage <= 570 && tjmEPPortage < 580){
    caPourcentEPPortage = 49.73;
}
else if(tjmEPPortage <= 580 && tjmEPPortage < 590){
    caPourcentEPPortage = 49.74;
}
else if(tjmEPPortage <= 590 && tjmEPPortage < 600){
    caPourcentEPPortage = 49.75;
}
else if(tjmEPPortage <= 600 && tjmEPPortage < 610){
    caPourcentEPPortage = 49.77;
}
else if(tjmEPPortage <= 610 && tjmEPPortage < 620){
    caPourcentEPPortage = 49.78;
}
else if(tjmEPPortage <= 620 && tjmEPPortage < 630){
    caPourcentEPPortage = 49.79;
}
else if(tjmEPPortage <= 630 && tjmEPPortage < 640){
    caPourcentEPPortage = 49.80;
}
else if(tjmEPPortage <= 640 && tjmEPPortage < 650){
    caPourcentEPPortage = 49.81;
}
else if(tjmEPPortage <= 650 && tjmEPPortage < 660){
    caPourcentEPPortage = 49.82;
}
else if(tjmEPPortage <= 660 && tjmEPPortage < 670){
    caPourcentEPPortage = 51.37;
}
else if(tjmEPPortage <= 670 && tjmEPPortage < 680){
    caPourcentEPPortage = 51.35;
}
else if(tjmEPPortage <= 680 && tjmEPPortage < 690){
    caPourcentEPPortage = 50.28;
}
else if(tjmEPPortage <= 690 && tjmEPPortage < 700){
    caPourcentEPPortage = 49.86;
}
else if(tjmEPPortage <= 700){
    caPourcentEPPortage = 50.60;
}

var remunerationEPPortage = cainto100EPPortage * caPourcentEPPortage;
document.getElementById("mySocieteEPPortage").innerHTML = caPourcentEPPortage + "%";
document.getElementById("myRemTotaleEPPortage").innerHTML = formatter1.format(remunerationEPPortage);
document.getElementById("myTjmEPPortage").innerHTML = formatter2.format(tjmEPPortage);
document.getElementById("caTotalEPPortage").innerHTML = formatter2.format(caEPPortage);
document.getElementById("myFraisEPPortage").innerHTML = formatter2.format(fraisEPPortage);
document.getElementById("myFraisGestionEPPortage").innerHTML = fraisGestionEPPortage + "%";


// Société RHSolutions

var tjmRHSolutions = url.searchParams.get("tjm");
var fraisRHSolutions = 360;
var nbJoursRHSolutions = document.getElementById("nbJoursRHSolutions").innerHTML = "20";
var caRHSolutions = tjmRHSolutions * nbJoursRHSolutions;
var caPourcentRHSolutions;
var cainto100RHSolutions = caRHSolutions / 100;
var fraisGestionRHSolutions = 9;

if(tjmRHSolutions <= 400){
    fraisGestionRHSolutions = 8;
} 

if(tjmRHSolutions <= 300  && tjmRHSolutions < 310){
    caPourcentRHSolutions = 51.76;
}
else if(tjmRHSolutions <= 310 && tjmRHSolutions < 320){
    caPourcentRHSolutions = 51.67;
}
else if(tjmRHSolutions <= 320 && tjmRHSolutions < 330){
    caPourcentRHSolutions = 51.59;
}
else if(tjmRHSolutions <= 330 && tjmRHSolutions < 340){
    caPourcentRHSolutions = 51.51;
}
else if(tjmRHSolutions <= 340 && tjmRHSolutions < 350){
    caPourcentRHSolutions = 51.44;
}
else if(tjmRHSolutions <= 350 && tjmRHSolutions < 360){
    caPourcentRHSolutions = 51.37;
}
else if(tjmRHSolutions <= 360 && tjmRHSolutions < 370){
    caPourcentRHSolutions = 51.30;
}
else if(tjmRHSolutions <= 370 && tjmRHSolutions < 380){
    caPourcentRHSolutions = 51.24;
}
else if(tjmRHSolutions <= 380 && tjmRHSolutions < 390){
    caPourcentRHSolutions = 51.18;
}
else if(tjmRHSolutions <= 390 && tjmRHSolutions < 400){
    caPourcentRHSolutions = 51.12;
}
else if(tjmRHSolutions <= 400 && tjmRHSolutions < 410){
    caPourcentRHSolutions = 51.06;
}
else if(tjmRHSolutions <= 410 && tjmRHSolutions < 420){
    caPourcentRHSolutions = 51.56;
}
else if(tjmRHSolutions <= 420 && tjmRHSolutions < 430){
    caPourcentRHSolutions = 51.51;
}
else if(tjmRHSolutions <= 430 && tjmRHSolutions < 440){
    caPourcentRHSolutions = 51.47;
}
else if(tjmRHSolutions <= 440 && tjmRHSolutions < 450){
    caPourcentRHSolutions = 51.42;
}
else if(tjmRHSolutions <= 450 && tjmRHSolutions < 460){
    caPourcentRHSolutions = 51.38;
}
else if(tjmRHSolutions <= 460 && tjmRHSolutions < 470){
    caPourcentRHSolutions = 51.34;
}
else if(tjmRHSolutions <= 470 && tjmRHSolutions < 480){
    caPourcentRHSolutions = 51.30;
}
else if(tjmRHSolutions <= 480 && tjmRHSolutions < 490){
    caPourcentRHSolutions = 51.26;
}
else if(tjmRHSolutions <= 490 && tjmRHSolutions < 500){
    caPourcentRHSolutions = 51.23;
}
else if(tjmRHSolutions <= 500 && tjmRHSolutions < 510){
    caPourcentRHSolutions = 51.19;
}
else if(tjmRHSolutions <= 510 && tjmRHSolutions < 520){
    caPourcentRHSolutions = 51.16;
}
else if(tjmRHSolutions <= 520 && tjmRHSolutions < 530){
    caPourcentRHSolutions = 51.13;
}
else if(tjmRHSolutions <= 530 && tjmRHSolutions < 540){
    caPourcentRHSolutions = 51.10;
}
else if(tjmRHSolutions <= 540 && tjmRHSolutions < 550){
    caPourcentRHSolutions = 51.07;
}
else if(tjmRHSolutions <= 550 && tjmRHSolutions < 560){
    caPourcentRHSolutions = 51.04;
}
else if(tjmRHSolutions <= 560 && tjmRHSolutions < 570){
    caPourcentRHSolutions = 51.01;
}
else if(tjmRHSolutions <= 570 && tjmRHSolutions < 580){
    caPourcentRHSolutions = 50.99;
}
else if(tjmRHSolutions <= 580 && tjmRHSolutions < 590){
    caPourcentRHSolutions = 50.96;
}
else if(tjmRHSolutions <= 590 && tjmRHSolutions < 600){
    caPourcentRHSolutions = 50.94;
}
else if(tjmRHSolutions <= 600 && tjmRHSolutions < 610){
    caPourcentRHSolutions = 50.91;
}
else if(tjmRHSolutions <= 610 && tjmRHSolutions < 620){
    caPourcentRHSolutions = 50.89;
}
else if(tjmRHSolutions <= 620 && tjmRHSolutions < 630){
    caPourcentRHSolutions = 50.87;
}
else if(tjmRHSolutions <= 630 && tjmRHSolutions < 640){
    caPourcentRHSolutions = 50.85;
}
else if(tjmRHSolutions <= 640 && tjmRHSolutions < 650){
    caPourcentRHSolutions = 50.83;
}
else if(tjmRHSolutions <= 650 && tjmRHSolutions < 660){
    caPourcentRHSolutions = 50.81;
}
else if(tjmRHSolutions <= 660 && tjmRHSolutions < 670){
    caPourcentRHSolutions = 50.79;
}
else if(tjmRHSolutions <= 670 && tjmRHSolutions < 680){
    caPourcentRHSolutions = 50.77;
}
else if(tjmRHSolutions <= 680 && tjmRHSolutions < 690){
    caPourcentRHSolutions = 50.75;
}
else if(tjmRHSolutions <= 690 && tjmRHSolutions < 700){
    caPourcentRHSolutions = 50.73;
}
else if(tjmRHSolutions <= 700){
    caPourcentRHSolutions = 50.72;
}

var remunerationRHSolutions = cainto100RHSolutions * caPourcentRHSolutions;
document.getElementById("mySocieteRHSolutions").innerHTML = caPourcentRHSolutions + "%";
document.getElementById("myRemTotaleRHSolutions").innerHTML = formatter1.format(remunerationRHSolutions);
document.getElementById("myTjmRHSolutions").innerHTML = formatter2.format(tjmRHSolutions);
document.getElementById("caTotalRHSolutions").innerHTML = formatter2.format(caRHSolutions);
document.getElementById("myFraisRHSolutions").innerHTML = formatter2.format(fraisRHSolutions);
document.getElementById("myFraisGestionRHSolutions").innerHTML = fraisGestionRHSolutions + "%";


// Société ITG

var tjmITG = url.searchParams.get("tjm");
var fraisITG = 360;
var nbJoursITG = document.getElementById("nbJoursITG").innerHTML = "20";
var caITG = tjmITG * nbJoursITG 
var caPourcentITG;
var cainto100ITG = caITG / 100;
var fraisGestionITG = 8;

if(tjmITG <= 300  && tjmITG < 310){
   caPourcentITG = 51.30;
}
else if(tjmITG <= 310 && tjmITG < 320){
    caPourcentITG = 51.21;
}
else if(tjmITG <= 320 && tjmITG < 330){
    caPourcentITG = 51.11;
}
else if(tjmITG <= 330 && tjmITG < 340){
    caPourcentITG = 51.03;
}
else if(tjmITG <= 340 && tjmITG < 350){
    caPourcentITG = 50.96;
}
else if(tjmITG <= 350 && tjmITG < 360){
    caPourcentITG = 50.89;
}
else if(tjmITG <= 360 && tjmITG < 370){
    caPourcentITG = 50.78;
}
else if(tjmITG <= 370 && tjmITG < 380){
    caPourcentITG = 50.76;
}  
else if(tjmITG <= 380 && tjmITG < 390){
    caPourcentITG = 50.61;
}
else if(tjmITG <= 390 && tjmITG < 400){
    caPourcentITG = 50.64;
}
else if(tjmITG <= 400 && tjmITG < 410){
    caPourcentITG = 50.46;
}   
else if(tjmITG <= 410 && tjmITG < 420){
    caPourcentITG = 50.52;
}
else if(tjmITG <= 420 && tjmITG < 430){
    caPourcentITG = 50.33;
}
else if(tjmITG <= 430 && tjmITG < 440){
    caPourcentITG = 50.44;
}
else if(tjmITG <= 440 && tjmITG < 450){
    caPourcentITG = 50.22;
}
else if(tjmITG <= 450 && tjmITG < 460){
    caPourcentITG = 50.34;
}
else if(tjmITG <= 460 && tjmITG < 470){
    caPourcentITG = 50.11;
}
else if(tjmITG <= 470 && tjmITG < 480){
    caPourcentITG = 50.27;
}
else if(tjmITG <= 480 && tjmITG < 490){
    caPourcentITG = 50.00;
}
else if(tjmITG <= 490 && tjmITG < 500){
    caPourcentITG = 50.19;
}
else if(tjmITG <= 500 && tjmITG < 510){
    caPourcentITG = 50.15;
}
else if(tjmITG <= 510 && tjmITG < 520){
    caPourcentITG = 50.13;
}
else if(tjmITG <= 520 && tjmITG < 530){
    caPourcentITG = 50.08;
}
else if(tjmITG <= 530 && tjmITG < 540){
    caPourcentITG = 50.06;
}
else if(tjmITG <= 540 && tjmITG < 550){
    caPourcentITG = 50.03;
}
else if(tjmITG <= 550 && tjmITG < 560){
    caPourcentITG = 50.01;
}
else if(tjmITG <= 560 && tjmITG < 570){
    caPourcentITG = 49.98;
}
else if(tjmITG <= 570 && tjmITG < 580){
    caPourcentITG = 49.95;
}
else if(tjmITG <= 580 && tjmITG < 590){
    caPourcentITG = 49.94;
}
else if(tjmITG <= 590 && tjmITG < 600){
    caPourcentITG = 49.90;
}
else if(tjmITG <= 600 && tjmITG < 610){
    caPourcentITG = 49.88;
}
else if(tjmITG <= 610 && tjmITG < 620){
    caPourcentITG = 49.85;
}
else if(tjmITG <= 620 && tjmITG < 630){
    caPourcentITG = 49.83;
}
else if(tjmITG <= 630 && tjmITG < 640){
    caPourcentITG = 49.81;
}
else if(tjmITG <= 640 && tjmITG < 650){
    caPourcentITG = 49.80;
}
else if(tjmITG <= 650 && tjmITG < 660){
    caPourcentITG = 49.76;
}
else if(tjmITG <= 660 && tjmITG < 670){
    caPourcentITG = 49.74;
}
else if(tjmITG <= 670 && tjmITG < 680){
    caPourcentITG = 49.72;
}
else if(tjmITG <= 680 && tjmITG < 690){
    caPourcentITG = 49.71;
}
else if(tjmITG <= 690 && tjmITG < 700){
    caPourcentITG = 49.69;
}
else if(tjmITG <= 700){
    caPourcentITG = 49.67;
}

var remunerationITG = cainto100ITG * caPourcentITG;
document.getElementById("mySocieteITG").innerHTML = caPourcentITG + "%";
document.getElementById("myRemTotaleITG").innerHTML = formatter1.format(remunerationITG);
document.getElementById("myTjmITG").innerHTML = formatter2.format(tjmITG);
document.getElementById("caTotalITG").innerHTML = formatter2.format(caITG);
document.getElementById("myFraisITG").innerHTML = formatter2.format(fraisITG);
document.getElementById("myFraisGestionITG").innerHTML = fraisGestionITG + "%";


// Société Freecadre

var tjmFreecadre = url.searchParams.get("tjm");
var fraisFreecadre = 360;
var nbJoursFreecadre = document.getElementById("nbJoursFreecadre").innerHTML = "20";
var caFreecadre = tjmFreecadre * nbJoursFreecadre 
var caPourcentFreecadre;
var cainto100Freecadre = caFreecadre / 100;
var fraisGestionFreecadre = 10;


if(tjmFreecadre <= 300  && tjmFreecadre < 310){
   caPourcentFreecadre = 52.20;
}
else if(tjmFreecadre <= 310 && tjmFreecadre < 320){
    caPourcentFreecadre = 52.11;
}
else if(tjmFreecadre <= 320 && tjmFreecadre < 330){
    caPourcentFreecadre = 52.03;
}
else if(tjmFreecadre <= 330 && tjmFreecadre < 340){
    caPourcentFreecadre = 51.95;
}
else if(tjmFreecadre <= 340 && tjmFreecadre < 350){
    caPourcentFreecadre = 51.88;
}
else if(tjmFreecadre <= 350 && tjmFreecadre < 360){
    caPourcentFreecadre = 51.81;
}
else if(tjmFreecadre <= 360 && tjmFreecadre < 370){
    caPourcentFreecadre = 51.75;
}
else if(tjmFreecadre <= 370 && tjmFreecadre < 380){
    caPourcentFreecadre = 51.69;
}
else if(tjmFreecadre <= 380 && tjmFreecadre < 390){
    caPourcentFreecadre = 51.63;
}
else if(tjmFreecadre <= 390 && tjmFreecadre < 400){
    caPourcentFreecadre = 51.58;
}
else if(tjmFreecadre <= 400 && tjmFreecadre < 410){
    caPourcentFreecadre = 51.53;
}
else if(tjmFreecadre <= 410 && tjmFreecadre < 420){
    caPourcentFreecadre = 51.48;
}
else if(tjmFreecadre <= 420 && tjmFreecadre < 430){
    caPourcentFreecadre = 51.43;
}
else if(tjmFreecadre <= 430 && tjmFreecadre < 440){
    caPourcentFreecadre = 51.38;
}
else if(tjmFreecadre <= 440 && tjmFreecadre < 450){
    caPourcentFreecadre = 51.34;
}
else if(tjmFreecadre <= 450 && tjmFreecadre < 460){
    caPourcentFreecadre = 51.30;
}
else if(tjmFreecadre <= 460 && tjmFreecadre < 470){
    caPourcentFreecadre = 51.26;
}
else if(tjmFreecadre <= 470 && tjmFreecadre < 480){
    caPourcentFreecadre = 51.22;
}
else if(tjmFreecadre <= 480 && tjmFreecadre < 490){
    caPourcentFreecadre = 51.19;
}
else if(tjmFreecadre <= 490 && tjmFreecadre < 500){
    caPourcentFreecadre = 51.15;
}
else if(tjmFreecadre <= 500 && tjmFreecadre < 510){
    caPourcentFreecadre = 51.12;
}
else if(tjmFreecadre <= 510 && tjmFreecadre < 520){
    caPourcentFreecadre = 51.09;
}
else if(tjmFreecadre <= 520 && tjmFreecadre < 530){
    caPourcentFreecadre = 51.06;
}
else if(tjmFreecadre <= 530 && tjmFreecadre < 540){
    caPourcentFreecadre = 51.03;
}
else if(tjmFreecadre <= 540 && tjmFreecadre < 550){
    caPourcentFreecadre = 51.00;
}
else if(tjmFreecadre <= 550 && tjmFreecadre < 560){
    caPourcentFreecadre = 50.97;
}
else if(tjmFreecadre <= 560 && tjmFreecadre < 570){
    caPourcentFreecadre = 50.95;
}
else if(tjmFreecadre <= 570 && tjmFreecadre < 580){
    caPourcentFreecadre = 50.92;
}
else if(tjmFreecadre <= 580 && tjmFreecadre < 590){
    caPourcentFreecadre = 50.90;
}
else if(tjmFreecadre <= 590 && tjmFreecadre < 600){
    caPourcentFreecadre = 50.87;
}
else if(tjmFreecadre <= 600 && tjmFreecadre < 610){
    caPourcentFreecadre = 50.85;
}
else if(tjmFreecadre <= 610 && tjmFreecadre < 620){
    caPourcentFreecadre = 50.83;
}
else if(tjmFreecadre <= 620 && tjmFreecadre < 630){
    caPourcentFreecadre = 50.81;
}
else if(tjmFreecadre <= 630 && tjmFreecadre < 640){
    caPourcentFreecadre = 50.79;
}
else if(tjmFreecadre <= 640 && tjmFreecadre < 650){
    caPourcentFreecadre = 50.77;
}
else if(tjmFreecadre <= 650 && tjmFreecadre < 660){
    caPourcentFreecadre = 50.75;
}
else if(tjmFreecadre <= 660 && tjmFreecadre < 670){
    caPourcentFreecadre = 50.73;
}
else if(tjmFreecadre <= 670 && tjmFreecadre < 680){
    caPourcentFreecadre = 50.71;
}
else if(tjmFreecadre <= 680 && tjmFreecadre < 690){
    caPourcentFreecadre = 50.69;
}
else if(tjmFreecadre <= 690 && tjmFreecadre < 700){
    caPourcentFreecadre = 50.67;
}
else if(tjmFreecadre <= 700){
    caPourcentFreecadre = 50.66;
}

var remunerationFreecadre = cainto100Freecadre * caPourcentFreecadre;

document.getElementById("mySocieteFreecadre").innerHTML = caPourcentFreecadre + "%";
document.getElementById("myRemTotaleFreecadre").innerHTML = formatter1.format(remunerationFreecadre);
document.getElementById("myTjmFreecadre").innerHTML = formatter2.format(tjmFreecadre);
document.getElementById("caTotalFreecadre").innerHTML = formatter2.format(caFreecadre);
document.getElementById("myFraisFreecadre").innerHTML = formatter2.format(fraisFreecadre);
document.getElementById("myFraisGestionFreecadre").innerHTML = fraisGestionFreecadre + "%";


// Société PortageLab

var tjmPortageLab = url.searchParams.get("tjm");
var fraisPortageLab = 360;
var nbJoursPortageLab = document.getElementById("nbJoursPortageLab").innerHTML = "20";
var caPortageLab = tjmPortageLab * nbJoursPortageLab ;
var caPourcentPortageLab;
var cainto100PortageLab = caPortageLab / 100;
var fraisGestionPortageLab = 12;

if(tjmPortageLab <= 300  && tjmPortageLab < 310){
    caPourcentPortageLab = 55.18;
}
else if(tjmPortageLab <= 310 && tjmPortageLab < 320){
    caPourcentPortageLab = 55.96;
}
else if(tjmPortageLab <= 320 && tjmPortageLab < 330){
    caPourcentPortageLab = 56.68;
}
else if(tjmPortageLab <= 330 && tjmPortageLab < 340){
    caPourcentPortageLab = 57.36;
}
else if(tjmPortageLab <= 340 && tjmPortageLab < 350){
    caPourcentPortageLab = 58.01;
}
else if(tjmPortageLab <= 350 && tjmPortageLab < 360){
    caPourcentPortageLab = 58.61;
}
else if(tjmPortageLab <= 360 && tjmPortageLab < 370){
    caPourcentPortageLab = 59.18;
}
else if(tjmPortageLab <= 370 && tjmPortageLab < 380){
    caPourcentPortageLab = 59.73;
}
else if(tjmPortageLab <= 380 && tjmPortageLab < 390){
    caPourcentPortageLab = 60.24;
}
else if(tjmPortageLab <= 390 && tjmPortageLab < 400){
    caPourcentPortageLab = 60.72;
}
else if(tjmPortageLab <= 400 && tjmPortageLab < 410){
    caPourcentPortageLab = 61.19;
}
else if(tjmPortageLab <= 410 && tjmPortageLab < 420){
    caPourcentPortageLab = 61.63;
}
else if(tjmPortageLab <= 420 && tjmPortageLab < 430){
    caPourcentPortageLab = 62.04;
}
else if(tjmPortageLab <= 430 && tjmPortageLab < 440){
    caPourcentPortageLab = 62.44;
}
else if(tjmPortageLab <= 440 && tjmPortageLab < 450){
    caPourcentPortageLab = 62.82;
}
else if(tjmPortageLab <= 450 && tjmPortageLab < 460){
    caPourcentPortageLab = 63.19;
}
else if(tjmPortageLab <= 460 && tjmPortageLab < 470){
    caPourcentPortageLab = 63.54;
}
else if(tjmPortageLab <= 470 && tjmPortageLab < 480){
    caPourcentPortageLab = 63.87;
}
else if(tjmPortageLab <= 480 && tjmPortageLab < 490){
    caPourcentPortageLab = 64.19;
}
else if(tjmPortageLab <= 490 && tjmPortageLab < 500){
    caPourcentPortageLab = 64.49;
}
else if(tjmPortageLab <= 500 && tjmPortageLab < 510){
    caPourcentPortageLab = 64.79;
}
else if(tjmPortageLab <= 510 && tjmPortageLab < 520){
    caPourcentPortageLab = 65.07;
}
else if(tjmPortageLab <= 520 && tjmPortageLab < 530){
    caPourcentPortageLab = 65.34;
}
else if(tjmPortageLab <= 530 && tjmPortageLab < 540){
    caPourcentPortageLab = 65.60;
}
else if(tjmPortageLab <= 540 && tjmPortageLab < 550){
    caPourcentPortageLab = 65.86;
}
else if(tjmPortageLab <= 550 && tjmPortageLab < 560){
    caPourcentPortageLab = 66.10;
}
else if(tjmPortageLab <= 560 && tjmPortageLab < 570){
    caPourcentPortageLab = 66.33;
}
else if(tjmPortageLab <= 570 && tjmPortageLab < 580){
    caPourcentPortageLab = 66.56;
}   
else if(tjmPortageLab <= 580 && tjmPortageLab < 590){
    caPourcentPortageLab = 66.78;
}
else if(tjmPortageLab <= 590 && tjmPortageLab < 600){
    caPourcentPortageLab = 66.99;
}
else if(tjmPortageLab <= 600 && tjmPortageLab < 610){
    caPourcentPortageLab = 67.19;
}
else if(tjmPortageLab <= 610 && tjmPortageLab < 620){
    caPourcentPortageLab = 67.39;
}
else if(tjmPortageLab <= 620 && tjmPortageLab < 630){
    caPourcentPortageLab = 67.58;
}
else if(tjmPortageLab <= 630 && tjmPortageLab < 640){
    caPourcentPortageLab = 67.76;
}
else if(tjmPortageLab <= 640 && tjmPortageLab < 650){
    caPourcentPortageLab = 67.94;
}
else if(tjmPortageLab <= 650 && tjmPortageLab < 660){
    caPourcentPortageLab = 68.11;
}
else if(tjmPortageLab <= 660 && tjmPortageLab < 670){
    caPourcentPortageLab = 68.28;
}
else if(tjmPortageLab <= 670 && tjmPortageLab < 680){
    caPourcentPortageLab = 68.45;
}
else if(tjmPortageLab <= 680 && tjmPortageLab < 690){
    caPourcentPortageLab = 68.60;
}
else if(tjmPortageLab <= 690 && tjmPortageLab < 700){
    caPourcentPortageLab = 68.76;
}
else if(tjmPortageLab <= 700){
    caPourcentPortageLab = 68.91;
}


var remunerationPortageLab = cainto100PortageLab * caPourcentPortageLab;
document.getElementById("mySocietePortageLab").innerHTML = caPourcentPortageLab + "%";
document.getElementById("myRemTotalePortageLab").innerHTML = formatter1.format(remunerationPortageLab);
document.getElementById("myTjmPortageLab").innerHTML = formatter2.format(tjmPortageLab);
document.getElementById("caTotalPortageLab").innerHTML = formatter2.format(caPortageLab);
document.getElementById("myFraisPortageLab").innerHTML = formatter2.format(fraisPortageLab);
document.getElementById("myFraisGestionPortageLab").innerHTML = fraisGestionPortageLab + "%";



// Société Umalis

var tjmUmalis = url.searchParams.get("tjm");
var fraisUmalis = 360;
var nbJoursUmalis = document.getElementById("nbJoursUmalis").innerHTML = "20";
var caUmalis = tjmUmalis * nbJoursUmalis 
var caPourcentUmalis;
var cainto100Umalis = caUmalis / 100;
var fraisGestionUmalis = 4;

if (tjmUmalis >= 500){
    fraisGestionUmalis = 3;
}

if(tjmUmalis <= 300  && tjmUmalis < 310){
   caPourcentUmalis = 56.05;
}
else if(tjmUmalis <= 310 && tjmUmalis < 320){
    caPourcentUmalis = 55.98;
}
else if(tjmUmalis <= 320 && tjmUmalis < 330){
    caPourcentUmalis = 55.75;
}
else if(tjmUmalis <= 330 && tjmUmalis < 340){
    caPourcentUmalis = 55.70;
}
else if(tjmUmalis <= 340 && tjmUmalis < 350){
    caPourcentUmalis = 55.49;
}
else if(tjmUmalis <= 350 && tjmUmalis < 360){
    caPourcentUmalis = 55.42;
}
else if(tjmUmalis <= 360 && tjmUmalis < 370){
    caPourcentUmalis = 55.25;
}
else if(tjmUmalis <= 370 && tjmUmalis < 380){
    caPourcentUmalis = 55.18;
}
else if(tjmUmalis <= 380 && tjmUmalis < 390){
    caPourcentUmalis = 55.04;
}
else if(tjmUmalis <= 390 && tjmUmalis < 400){
    caPourcentUmalis = 54.96;
}
else if(tjmUmalis <= 400 && tjmUmalis < 410){
    caPourcentUmalis = 54.86;
}
else if(tjmUmalis <= 410 && tjmUmalis < 420){
    caPourcentUmalis = 54.75;
}
else if(tjmUmalis <= 420 && tjmUmalis < 430){
    caPourcentUmalis = 54.70;
}
else if(tjmUmalis <= 430 && tjmUmalis < 440){
    caPourcentUmalis = 54.58;
}
else if(tjmUmalis <= 440 && tjmUmalis < 450){
    caPourcentUmalis = 55.50;
}
else if(tjmUmalis <= 450 && tjmUmalis < 460){
    caPourcentUmalis = 54.41;
}
else if(tjmUmalis <= 460 && tjmUmalis < 470){
    caPourcentUmalis = 55.31;
}
else if(tjmUmalis <= 470 && tjmUmalis < 480){
    caPourcentUmalis = 54.26;
}
else if(tjmUmalis <= 480 && tjmUmalis < 490){
    caPourcentUmalis = 55.15;
}
else if(tjmUmalis <= 490 && tjmUmalis < 500){
    caPourcentUmalis = 54.12;
}
else if(tjmUmalis <= 500 && tjmUmalis < 510){
    caPourcentUmalis = 54.99;
}
else if(tjmUmalis <= 510 && tjmUmalis < 520){
    caPourcentUmalis = 54.52;
}
else if(tjmUmalis <= 520 && tjmUmalis < 530){
    caPourcentUmalis = 54.48;
}
else if(tjmUmalis <= 530 && tjmUmalis < 540){
    caPourcentUmalis = 54.41;
}
else if(tjmUmalis <= 540 && tjmUmalis < 550){
    caPourcentUmalis = 54.36;
}
else if(tjmUmalis <= 550 && tjmUmalis < 560){
    caPourcentUmalis = 54.30;
}
else if(tjmUmalis <= 560 && tjmUmalis < 570){
    caPourcentUmalis = 54.25;
}
else if(tjmUmalis <= 570 && tjmUmalis < 580){
    caPourcentUmalis = 54.20;
}
else if(tjmUmalis <= 580 && tjmUmalis < 590){
    caPourcentUmalis = 54.15;
}
else if(tjmUmalis <= 590 && tjmUmalis < 600){
    caPourcentUmalis = 54.10;
}
else if(tjmUmalis <= 600 && tjmUmalis < 610){
    caPourcentUmalis = 54.06;
}
else if(tjmUmalis <= 610 && tjmUmalis < 620){
    caPourcentUmalis = 54.01;
}
else if(tjmUmalis <= 620 && tjmUmalis < 630){
    caPourcentUmalis = 53.98;
}
else if(tjmUmalis <= 630 && tjmUmalis < 640){
    caPourcentUmalis = 53.93;
}
else if(tjmUmalis <= 640 && tjmUmalis < 650){
    caPourcentUmalis = 53.90;
}
else if(tjmUmalis <= 650 && tjmUmalis < 660){
    caPourcentUmalis = 53.85;
}
else if(tjmUmalis <= 660 && tjmUmalis < 670){
    caPourcentUmalis = 53.82;
}
else if(tjmUmalis <= 670 && tjmUmalis < 680){
    caPourcentUmalis = 53.78;
}
else if(tjmUmalis <= 680 && tjmUmalis < 690){
    caPourcentUmalis = 53.74;
}
else if(tjmUmalis <= 690 && tjmUmalis < 700){
    caPourcentUmalis = 53.71;
}
else if(tjmUmalis <= 700){
    caPourcentUmalis = 53.67;
}

var remunerationUmalis = cainto100Umalis * caPourcentUmalis;
document.getElementById("mySocieteUmalis").innerHTML = caPourcentUmalis + "%";
document.getElementById("myRemTotaleUmalis").innerHTML = formatter1.format(remunerationUmalis);
document.getElementById("myTjmUmalis").innerHTML = formatter2.format(tjmUmalis);
document.getElementById("caTotalUmalis").innerHTML = formatter2.format(caUmalis);
document.getElementById("myFraisUmalis").innerHTML = formatter2.format(fraisUmalis);;
document.getElementById("myFraisGestionUmalis").innerHTML = fraisGestionUmalis + "%";


// Société Highteckers 

var tjmHighteckers = url.searchParams.get("tjm");
var fraisHighteckers = 360;
var nbJoursHighteckers = document.getElementById("nbJoursHighteckers").innerHTML = "20";
var caHighteckers = tjmHighteckers * nbJoursHighteckers ;
var caPourcentHighteckers;
var cainto100Highteckers = caHighteckers / 100;
var fraisGestionHighteckers = 15;

if(tjmHighteckers <= 300  && tjmHighteckers < 310){
    caPourcentHighteckers = 51.36;
}
else if(tjmHighteckers <= 310 && tjmHighteckers < 320){
    caPourcentHighteckers = 52.17;
}
else if(tjmHighteckers <= 320 && tjmHighteckers < 330){
    caPourcentHighteckers = 52.93;
}
else if(tjmHighteckers <= 330 && tjmHighteckers < 340){
    caPourcentHighteckers = 53.65;
}
else if(tjmHighteckers <= 340 && tjmHighteckers < 350){
    caPourcentHighteckers = 54.32;
}
else if(tjmHighteckers <= 350 && tjmHighteckers < 360){
    caPourcentHighteckers = 54.95;
}
else if(tjmHighteckers <= 360 && tjmHighteckers < 370){
    caPourcentHighteckers = 55.55;
}
else if(tjmHighteckers <= 370 && tjmHighteckers < 380){
    caPourcentHighteckers = 56.12;
}
else if(tjmHighteckers <= 380 && tjmHighteckers < 390){
    caPourcentHighteckers = 56.65;
}
else if(tjmHighteckers <= 390 && tjmHighteckers < 400){
    caPourcentHighteckers = 57.16;
}
else if(tjmHighteckers <= 400 && tjmHighteckers < 410){
    caPourcentHighteckers = 57.65;
}
else if(tjmHighteckers <= 410 && tjmHighteckers < 420){
    caPourcentHighteckers = 58.11;
}
else if(tjmHighteckers <= 420 && tjmHighteckers < 430){
    caPourcentHighteckers = 58.54;
}
else if(tjmHighteckers <= 430 && tjmHighteckers < 440){
    caPourcentHighteckers = 58.96;
}
else if(tjmHighteckers <= 440 && tjmHighteckers < 450){
    caPourcentHighteckers = 59.36;
}
else if(tjmHighteckers <= 450 && tjmHighteckers < 460){
    caPourcentHighteckers = 59.74;
}
else if(tjmHighteckers <= 460 && tjmHighteckers < 470){
    caPourcentHighteckers = 60.11;
}
else if(tjmHighteckers <= 470 && tjmHighteckers < 480){
    caPourcentHighteckers = 60.45;
}
else if(tjmHighteckers <= 480 && tjmHighteckers < 490){
    caPourcentHighteckers = 60.79;
}
else if(tjmHighteckers <= 490 && tjmHighteckers < 500){
    caPourcentHighteckers = 61.11;
}
else if(tjmHighteckers <= 500 && tjmHighteckers < 510){
    caPourcentHighteckers = 61.42;
}
else if(tjmHighteckers <= 510 && tjmHighteckers < 520){
    caPourcentHighteckers = 61.71;
}
else if(tjmHighteckers <= 520 && tjmHighteckers < 530){
    caPourcentHighteckers = 62.00;
}
else if(tjmHighteckers <= 530 && tjmHighteckers < 540){
    caPourcentHighteckers = 62.27;
}
else if(tjmHighteckers <= 540 && tjmHighteckers < 550){
    caPourcentHighteckers = 62.53;
}
else if(tjmHighteckers <= 550 && tjmHighteckers < 560){
    caPourcentHighteckers = 62.79;
}
else if(tjmHighteckers <= 560 && tjmHighteckers < 570){
    caPourcentHighteckers = 63.03;
}
else if(tjmHighteckers <= 570 && tjmHighteckers < 580){
    caPourcentHighteckers = 63.27;
}
else if(tjmHighteckers <= 580 && tjmHighteckers < 590){
    caPourcentHighteckers = 63.50;
}
else if(tjmHighteckers <= 590 && tjmHighteckers < 600){
    caPourcentHighteckers = 63.72;
}
else if(tjmHighteckers <= 600 && tjmHighteckers < 610){
    caPourcentHighteckers = 63.93;
}
else if(tjmHighteckers <= 610 && tjmHighteckers < 620){
    caPourcentHighteckers = 64.14;
}
else if(tjmHighteckers <= 620 && tjmHighteckers < 630){
    caPourcentHighteckers = 64.34;
}
else if(tjmHighteckers <= 630 && tjmHighteckers < 640){
    caPourcentHighteckers = 64.53;
}
else if(tjmHighteckers <= 640 && tjmHighteckers < 650){
    caPourcentHighteckers = 64.72;
}
else if(tjmHighteckers <= 650 && tjmHighteckers < 660){
    caPourcentHighteckers = 64.90;
}
else if(tjmHighteckers <= 660 && tjmHighteckers < 670){
    caPourcentHighteckers = 65.07;
}
else if(tjmHighteckers <= 670 && tjmHighteckers < 680){
    caPourcentHighteckers = 65.24;
}
else if(tjmHighteckers <= 680 && tjmHighteckers < 690){
    caPourcentHighteckers = 65.41;
}
else if(tjmHighteckers <= 690 && tjmHighteckers < 700){
    caPourcentHighteckers = 65.57;
}
else if(tjmHighteckers <= 700){
    caPourcentHighteckers = 65.73;
}

var remunerationHighteckers = cainto100Highteckers * caPourcentHighteckers;
document.getElementById("mySocieteHighteckers").innerHTML = caPourcentHighteckers + "%";
document.getElementById("myRemTotaleHighteckers").innerHTML = formatter1.format(remunerationHighteckers);
document.getElementById("myTjmHighteckers").innerHTML = formatter2.format(tjmHighteckers);
document.getElementById("caTotalHighteckers").innerHTML = formatter2.format(caHighteckers);
document.getElementById("myFraisHighteckers").innerHTML = formatter2.format(fraisHighteckers);
document.getElementById("myFraisGestionHighteckers").innerHTML = fraisGestionHighteckers + "%";




// Société ABCPortage

var tjmABCPortage = url.searchParams.get("tjm");
var fraisABCPortage = 360;
var nbJoursABCPortage = document.getElementById("nbJoursABCPortage").innerHTML = "20";
var caABCPortage = tjmABCPortage * nbJoursABCPortage ;
var caPourcentABCPortage;
var cainto100ABCPortage = caABCPortage / 100;
var fraisGestionABCPortage = 8 ;

if(tjmABCPortage >= 500){
    fraisGestionABCPortage = 7;
}
document.getElementById("myFraisGestionABCPortage").innerHTML = fraisGestionABCPortage + "%";

if(tjmABCPortage <= 300  && tjmABCPortage< 310){
    caPourcentABCPortage = 50.40;
}
else if(tjmABCPortage <= 310 && tjmABCPortage < 320){
    caPourcentABCPortage = 50.31;
}
else if(tjmABCPortage <= 320 && tjmABCPortage < 330){
    caPourcentABCPortage = 50.22;
}
else if(tjmABCPortage <= 330 && tjmABCPortage < 340){
    caPourcentABCPortage = 50.14;
}
else if(tjmABCPortage <= 340 && tjmABCPortage < 350){
    caPourcentABCPortage = 50.06;
}
else if(tjmABCPortage <= 350 && tjmABCPortage < 360){
    caPourcentABCPortage = 49.99;
}
else if(tjmABCPortage <= 360 && tjmABCPortage < 370){
    caPourcentABCPortage = 49.92;
}
else if(tjmABCPortage <= 370 && tjmABCPortage < 380){
    caPourcentABCPortage = 49.85;
}
else if(tjmABCPortage <= 380 && tjmABCPortage < 390){
    caPourcentABCPortage = 49.79;
}
else if(tjmABCPortage <= 390 && tjmABCPortage < 400){
    caPourcentABCPortage = 49.73;
}
else if(tjmABCPortage <= 400 && tjmABCPortage < 410){
    caPourcentABCPortage = 49.68;
}
else if(tjmABCPortage <= 410 && tjmABCPortage < 420){
    caPourcentABCPortage = 49.62;
}
else if(tjmABCPortage <= 420 && tjmABCPortage < 430){
    caPourcentABCPortage = 49.58;
}
else if(tjmABCPortage <= 430 && tjmABCPortage < 440){
    caPourcentABCPortage = 49.55;
}
else if(tjmABCPortage <= 440 && tjmABCPortage < 450){
    caPourcentABCPortage = 49.51;
}
else if(tjmABCPortage <= 450 && tjmABCPortage < 460){
    caPourcentABCPortage = 49.47;
}
else if(tjmABCPortage <= 460 && tjmABCPortage < 470){
    caPourcentABCPortage = 49.42;
}
else if(tjmABCPortage <= 470 && tjmABCPortage < 480){
    caPourcentABCPortage = 49.39;
}
else if(tjmABCPortage <= 480 && tjmABCPortage < 490){
    caPourcentABCPortage = 49.35;
}
else if(tjmABCPortage <= 490 && tjmABCPortage < 500){
    caPourcentABCPortage = 49.32;
}
else if(tjmABCPortage <= 500 && tjmABCPortage < 510){
    caPourcentABCPortage = 49.29;
}
else if(tjmABCPortage <= 510 && tjmABCPortage < 520){
    caPourcentABCPortage = 49.25;
}
else if(tjmABCPortage <= 520 && tjmABCPortage < 530){
    caPourcentABCPortage = 49.23;
}
else if(tjmABCPortage <= 530 && tjmABCPortage < 540){
    caPourcentABCPortage = 49.21;
}
else if(tjmABCPortage <= 540 && tjmABCPortage < 550){
    caPourcentABCPortage = 49.18;
}
else if(tjmABCPortage <= 550 && tjmABCPortage < 560){
    caPourcentABCPortage = 49.15;
}
else if(tjmABCPortage <= 560 && tjmABCPortage < 570){
    caPourcentABCPortage = 49.13;
}
else if(tjmABCPortage <= 570 && tjmABCPortage < 580){
    caPourcentABCPortage = 49.11;
}
else if(tjmABCPortage <= 580 && tjmABCPortage < 590){
    caPourcentABCPortage = 49.09;
}
else if(tjmABCPortage <= 590 && tjmABCPortage < 600){
    caPourcentABCPortage = 49.06;
}
else if(tjmABCPortage <= 600 && tjmABCPortage < 610){
    caPourcentABCPortage = 49.04;
}
else if(tjmABCPortage <= 610 && tjmABCPortage < 620){
    caPourcentABCPortage = 49.02;
}
else if(tjmABCPortage <= 620 && tjmABCPortage < 630){
    caPourcentABCPortage = 49.00;
}
else if(tjmABCPortage <= 630 && tjmABCPortage < 640){
    caPourcentABCPortage = 48.98;
}
else if(tjmABCPortage <= 640 && tjmABCPortage < 650){
    caPourcentABCPortage = 48.96;
}
else if(tjmABCPortage <= 650 && tjmABCPortage < 660){
    caPourcentABCPortage = 48.94;
}
else if(tjmABCPortage <= 660 && tjmABCPortage < 670){
    caPourcentABCPortage = 48.92;
}
else if(tjmABCPortage <= 670 && tjmABCPortage < 680){
    caPourcentABCPortage = 48.90;
}
else if(tjmABCPortage <= 680 && tjmABCPortage < 690){
    caPourcentABCPortage = 48.89;
}
else if(tjmABCPortage <= 690 && tjmABCPortage < 700){
    caPourcentABCPortage = 48.88;
}
else if(tjmABCPortage <= 700){
    caPourcentABCPortage = 48.86;
}

var remunerationABCPortage = cainto100ABCPortage * caPourcentABCPortage;
document.getElementById("mySocieteABCPortage").innerHTML = caPourcentABCPortage + "%";
document.getElementById("myRemTotaleABCPortage").innerHTML = formatter1.format(remunerationABCPortage);
document.getElementById("myTjmABCPortage").innerHTML = formatter2.format(tjmABCPortage);
document.getElementById("caTotalABCPortage").innerHTML = formatter2.format(caABCPortage);
document.getElementById("myFraisABCPortage").innerHTML = formatter2.format(fraisABCPortage);

// Société Prium

var tjmPrium = url.searchParams.get("tjm");
var fraisPrium = 360;
var nbJoursPrium = document.getElementById("nbJoursPrium").innerHTML = "20";
var caPrium = tjmPrium * nbJoursPrium ;
var caPourcentPrium;
var cainto100Prium = caPrium / 100;
var fraisGestionPrium = 7;

if(tjmPrium <= 300 && tjmPrium < 310){
    caPourcentPrium = 55.34;
}
else if(tjmPrium <= 310 && tjmPrium < 320){
    caPourcentPrium = 54.99;
}
else if(tjmPrium <= 320 && tjmPrium < 330){
    caPourcentPrium = 54.67;
}
else if(tjmPrium <= 330 && tjmPrium < 340){
    caPourcentPrium = 54.36;
}
else if(tjmPrium <= 340 && tjmPrium < 350){
    caPourcentPrium = 54.07;
}
else if(tjmPrium <= 350 && tjmPrium < 360){
    caPourcentPrium = 53.80;
}
else if(tjmPrium <= 360 && tjmPrium < 370){
    caPourcentPrium = 53.55;
}
else if(tjmPrium <= 370 && tjmPrium < 380){
    caPourcentPrium = 53.30;
}
else if(tjmPrium <= 380 && tjmPrium < 390){
    caPourcentPrium = 53.07;
}
else if(tjmPrium <= 390 && tjmPrium < 400){
    caPourcentPrium = 52.86;
}
else if(tjmPrium <= 400 && tjmPrium < 410){
    caPourcentPrium = 52.65;
}
else if(tjmPrium <= 410 && tjmPrium < 420){
    caPourcentPrium = 52.53;
}
else if(tjmPrium <= 420 && tjmPrium < 430){
    caPourcentPrium = 52.42;
}
else if(tjmPrium <= 430 && tjmPrium < 440){
    caPourcentPrium = 52.31;
}
else if(tjmPrium <= 440 && tjmPrium < 450){
    caPourcentPrium = 52.20;
}
else if(tjmPrium <= 450 && tjmPrium < 460){
    caPourcentPrium = 52.11;
}
else if(tjmPrium <= 460 && tjmPrium < 470){
    caPourcentPrium = 52.01;
}
else if(tjmPrium <= 470 && tjmPrium < 480){
    caPourcentPrium = 51.92;
}
else if(tjmPrium <= 480 && tjmPrium < 490){
    caPourcentPrium = 51.83;
}
else if(tjmPrium <= 490 && tjmPrium < 500){
    caPourcentPrium = 51.75;
}
else if(tjmPrium <= 500 && tjmPrium < 510){
    caPourcentPrium = 51.67;
}
else if(tjmPrium <= 510 && tjmPrium < 520){
    caPourcentPrium = 51.64;
}
else if(tjmPrium <= 520 && tjmPrium < 530){
    caPourcentPrium = 51.61;
}
else if(tjmPrium <= 530 && tjmPrium < 540){
    caPourcentPrium = 51.58;
}
else if(tjmPrium <= 540 && tjmPrium < 550){
    caPourcentPrium = 51.56;
}
else if(tjmPrium <= 550 && tjmPrium < 560){
    caPourcentPrium = 51.53;
}
else if(tjmPrium <= 560 && tjmPrium < 570){
    caPourcentPrium = 51.51;
}
else if(tjmPrium <= 570 && tjmPrium < 580){
    caPourcentPrium = 51.48;
}
else if(tjmPrium <= 580 && tjmPrium < 590){
    caPourcentPrium = 51.46;
}
else if(tjmPrium <= 590 && tjmPrium < 600){
    caPourcentPrium = 51.44;
}
else if(tjmPrium <= 600 && tjmPrium < 610){
    caPourcentPrium = 51.42;
}
else if(tjmPrium <= 610 && tjmPrium < 620){
    caPourcentPrium = 51.40;
}
else if(tjmPrium <= 620 && tjmPrium < 630){
    caPourcentPrium = 51.38;
}
else if(tjmPrium <= 630 && tjmPrium < 640){
    caPourcentPrium = 51.36;
}
else if(tjmPrium <= 640 && tjmPrium < 650){
    caPourcentPrium = 51.34;
}
else if(tjmPrium <= 650 && tjmPrium < 660){
    caPourcentPrium = 51.32;
}
else if(tjmPrium <= 660 && tjmPrium < 670){
    caPourcentPrium = 51.30;
}
else if(tjmPrium <= 670 && tjmPrium < 680){
    caPourcentPrium = 51.28;
}
else if(tjmPrium <= 680 && tjmPrium < 690){
    caPourcentPrium = 51.27;
}
else if(tjmPrium <= 690 && tjmPrium < 700){
    caPourcentPrium = 51.25;
}
else if(tjmPrium <= 700){
    caPourcentPrium = 51.23;
}

var remunerationPrium = cainto100Prium * caPourcentPrium;
var fraisGestionPriumPourcentage = fraisGestionPrium / 100 ;
var SubTotalMarkUpPrium = caPrium * fraisGestionPriumPourcentage;
var TotalMarkUpPrium = caPrium - SubTotalMarkUpPrium;
var capitalRestantPrium = TotalMarkUpPrium - fraisPrium;
var salaireBrutMajorePrium = TotalMarkUpPrium * 0.66;
var salaireBrutPrium = salaireBrutMajorePrium / 1.1;

console.log("caPrium : " + caPrium);
console.log("TotalMarkUpPrium : " + TotalMarkUpPrium);
console.log("capitalRestantPrium : " + capitalRestantPrium);
console.log("salaireBrutMajorePrium : " + salaireBrutMajorePrium);
console.log("salaireBrutPrium : " + salaireBrutPrium);

document.getElementById("mySalaireBrutPrium").innerHTML = formatter2.format(salaireBrutPrium);

document.getElementById("mySocietePrium").innerHTML = caPourcentPrium + "%";
document.getElementById("myRemTotalePrium").innerHTML = formatter1.format(remunerationPrium);
document.getElementById("myTjmPrium").innerHTML = formatter2.format(tjmPrium);
document.getElementById("caTotalPrium").innerHTML = formatter2.format(caPrium);
document.getElementById("myFraisPrium").innerHTML = formatter2.format(fraisPrium);
document.getElementById("myFraisGestionPrium").innerHTML = fraisGestionPrium + "%";



// Société Pns

var tjmPns = url.searchParams.get("tjm");
var fraisPns = 360;
var nbJoursPns = document.getElementById("nbJoursPns").innerHTML = "20";
var caPns = tjmPns * nbJoursPns 
var caPourcentPns;
var cainto100Pns = caPns / 100;
var fraisGestionPns = 8;


if(tjmPns <= 300  && tjmPns < 330){
   caPourcentPns = 53.05;
}
else if(tjmPns <= 330 && tjmPns < 420){
    caPourcentPns = 53.06;
}
else if(tjmPns <= 420 && tjmPns < 430){
    caPourcentPns = 51.79;
}
else if(tjmPns <= 430 && tjmPns < 440){
    caPourcentPns = 51.83;
}
else if(tjmPns <= 440 && tjmPns < 450){
    caPourcentPns = 51.86;
}
else if(tjmPns <= 450 && tjmPns < 460){
    caPourcentPns = 51.88;
}
else if(tjmPns <= 460 && tjmPns < 470){
    caPourcentPns = 51.91;
}
else if(tjmPns <= 470 && tjmPns < 480){
    caPourcentPns = 51.94;
}
else if(tjmPns <= 480 && tjmPns < 490){
    caPourcentPns = 51.96;
}
else if(tjmPns <= 490 && tjmPns < 500){
    caPourcentPns = 51.99;
}
else if(tjmPns <= 500 && tjmPns < 510){
    caPourcentPns = 53.08;
}
else if(tjmPns <= 510 && tjmPns < 520){
    caPourcentPns = 52.34;
}
else if(tjmPns <= 520 && tjmPns < 530){
    caPourcentPns = 52.36;
}
else if(tjmPns <= 530 && tjmPns < 540){
    caPourcentPns = 52.37;
}
else if(tjmPns <= 540 && tjmPns < 550){
    caPourcentPns = 52.38;
}
else if(tjmPns <= 550 && tjmPns < 560){
    caPourcentPns = 52.40;
}
else if(tjmPns <= 560 && tjmPns < 570){
    caPourcentPns = 52.41;
}
else if(tjmPns <= 570 && tjmPns < 580){
    caPourcentPns = 52.42;
}
else if(tjmPns <= 580 && tjmPns < 590){
    caPourcentPns = 52.44;
}
else if(tjmPns <= 590 && tjmPns < 600){
    caPourcentPns = 52.45;
}
else if(tjmPns <= 600 && tjmPns < 690){
    caPourcentPns = 53.06;
}
else if(tjmPns <= 690 && tjmPns < 700){
    caPourcentPns = 53.07;
}
else if(tjmPns <= 700){
    caPourcentPns = 53.06;
}

var remunerationPns = cainto100Pns * caPourcentPns;
document.getElementById("mySocietePns").innerHTML = caPourcentPns + "%";
document.getElementById("myRemTotalePns").innerHTML = formatter1.format(remunerationPns);
document.getElementById("myTjmPns").innerHTML = formatter2.format(tjmPns);
document.getElementById("caTotalPns").innerHTML = formatter2.format(caPns);
document.getElementById("myFraisPns").innerHTML = formatter2.format(fraisPns);
document.getElementById("myFraisGestionPns").innerHTML = fraisGestionPns + "%";

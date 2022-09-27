// remuneration min à 2200 pour Rocketz, TF et GardenIT

// Société EGS
var tjmEGS = url.searchParams.get("tjm");
var fraisEGS = url.searchParams.get("frais");
var salaireEGS = url.searchParams.get("salaire");
var nbJoursEGS = document.getElementById("nbJoursEGS").innerHTML = "20";
var caEGS = tjmEGS * nbJoursEGS ;
var caPourcentEGS;
var cainto100EGS = caEGS / 100;

if(300 <= tjmEGS < 320){
    caPourcentEGS = 56.08;
}
else if(320 <= tjmEGS < 340){
    caPourcentEGS = 54.13;
}
else if(340 <= tjmEGS < 360){
    caPourcentEGS = 53.83;
}
else if(360 <= tjmEGS < 380){
    caPourcentEGS = 53.75;
}
else if(380 <= tjmEGS < 400){
    caPourcentEGS = 53.68;
}
else if(400 <= tjmEGS < 420){
    caPourcentEGS = 53.62;
}
else if(420 <= tjmEGS < 440){
    caPourcentEGS = 53.56;
}
else if(440 <= tjmEGS < 460){
    caPourcentEGS = 53.22;
}
else if(460 <= tjmEGS < 480){
    caPourcentEGS = 52.85;
}
else if(480 <= tjmEGS < 500){
    caPourcentEGS = 52.81;
}
else if(500 <= tjmEGS < 520){
    caPourcentEGS = 53.32;
}
else if(520 <= tjmEGS < 540){
    caPourcentEGS = 53.28;
}
else if(540 <= tjmEGS < 560){
    caPourcentEGS = 53.24;
}
else if(560 <= tjmEGS < 580){
    caPourcentEGS = 53.21;
}
else if(580 <= tjmEGS < 600){
    caPourcentEGS = 53.18;
}
else if(600 <= tjmEGS < 620){
    caPourcentEGS = 53.15;
}
else if(620 <= tjmEGS < 640){
    caPourcentEGS = 53.12;
}
else if(640 <= tjmEGS < 660){
    caPourcentEGS = 52.88;
}
else if(660 <= tjmEGS < 680){
    caPourcentEGS = 53.07;
}
else if(680 <= tjmEGS < 700){
    caPourcentEGS = 53.05;
}
else if(tjmEGS >= 700){
    caPourcentEGS = 53.03;
}
var remunerationEGS = cainto100EGS * caPourcentEGS;
document.getElementById("mySocieteEGS").innerHTML = caPourcentEGS + "%";
document.getElementById("myRemTotaleEGS").innerHTML = formatter1.format(remunerationEGS);
document.getElementbyId("myTjmEGS").innerHTML = formatter2.format(tjmEGS);
document.getElementById("caTotalEFGS").innerHTML = formatter2.format(caEGS);
document.getElementById("myFraisEGS").innerHTML = formatter2.format(fraisEGS);


// Société Portageo

var tjmPortageo = url.searchParams.get("tjm");
var fraisPortageo = url.searchParams.get("frais");
var salairePortageo = url.searchParams.get("salaire");
var nbJoursPortageo = document.getElementById("nbJoursPortageo").innerHTML = "20";
var caPortageo = tjmPortageo * nbJoursPortageo ;
var caPourcentPortageo;
var cainto100Portageo = caPortageo / 100 ;

if(300 <= tjmPortageo < 320){
    caPourcentPortageo = 50.58;
}
else if(320 <= tjmPortageo < 340){
    caPourcentPortageo = 50.45;
}
else if(340 <= tjmPortageo < 360){
    caPourcentPortageo = 50.35;
}
else if(360 <= tjmPortageo < 380){
    caPourcentPortageo = 50.24;
}
else if(380 <= tjmPortageo < 400){
    caPourcentPortageo = 50.14;
}
else if(400 <= tjmPortageo < 420){
    caPourcentPortageo = 50.06;
}
else if(420 <= tjmPortageo < 440){
    caPourcentPortageo = 49.99;
}
else if(440 <= tjmPortageo < 460){
    caPourcentPortageo = 50.07;
}
else if(460 <= tjmPortageo < 480){
    caPourcentPortageo = 50.16;
}
else if(480 <= tjmPortageo < 500){
    caPourcentPortageo = 50.24;
}
else if(500 <= tjmPortageo < 520){
    caPourcentPortageo = 50.32;
}
else if(520 <= tjmPortageo < 540){
    caPourcentPortageo = 50.39;
}
else if(540 <= tjmPortageo < 560){
    caPourcentPortageo = 50.45;
}
else if(560 <= tjmPortageo < 580){
    caPourcentPortageo = 50.52;
}
else if(580 <= tjmPortageo < 600){
    caPourcentPortageo = 50.57;
}
else if(600 <= tjmPortageo < 620){
    caPourcentPortageo = 50.62;
}
else if(620 <= tjmPortageo < 640){
    caPourcentPortageo = 50.67;
}  
else if(640 <= tjmPortageo < 660){
    caPourcentPortageo = 50.71;
}
else if(660 <= tjmPortageo < 680){
    caPourcentPortageo = 50.75;
}
else if(680 <= tjmPortageo < 700){
    caPourcentPortageo = 50.80;
}
else if(700 >= tjmPortageo){
    caPourcentPortageo = 50.84;
}
var remunerationPortageo = cainto100Portageo * caPourcentPortageo;
document.getElementById("mySocietePortageo").innerHTML = caPourcentPortageo + "%";
document.getElementById("myRemTotalePortageo").innerHTML = formatter1.format(remunerationPortageo);
document.getElementbyId("myTjmPortageo").innerHTML = formatter2.format(tjmPortageo);
document.getElementById("caTotalPortageo").innerHTML = formatter2.format(caPortageo);
document.getElementById("myFraisPortageo").innerHTML = formatter2.format(fraisPortageo);


// Société Portup

var tjmPortup = url.searchParams.get("tjm");
var fraisPortup = url.searchParams.get("frais");
var salairePortup = url.searchParams.get("salaire");
var nbJoursPortup = document.getElementById("nbJoursPortup").innerHTML = "20";
var caPortup = tjmPortup * nbJoursPortup ;
var caPourcentPortup;
var cainto100Portup = caPortup / 100 ;

if(300 <= tjmPortup < 320){
    caPourcentPortup = 51.40;
}
else if(320 <= tjmPortup < 340){
    caPourcentPortup = 51.23;
}
else if(340 <= tjmPortup < 360){
    caPourcentPortup = 51.07;
}
else if(360 <= tjmPortup < 380){
    caPourcentPortup = 50.94;
}
else if(380 <= tjmPortup < 400){
    caPourcentPortup = 50.82;
}
else if(400 <= tjmPortup < 420){    
    caPourcentPortup = 50.71;
}
else if(420 <= tjmPortup < 440){
    caPourcentPortup = 50.62;
}
else if(440 <= tjmPortup < 460){
    caPourcentPortup = 50.53;
}
else if(460 <= tjmPortup < 480){
    caPourcentPortup = 50.45;
}
else if(480 <= tjmPortup < 500){
    caPourcentPortup = 50.38;
}
else if(500 <= tjmPortup < 520){
    caPourcentPortup = 50.31;
}
else if(520 <= tjmPortup < 540){
    caPourcentPortup = 50.25;
}
else if(540 <= tjmPortup < 560){
    caPourcentPortup = 50.19;
}
else if(560 <= tjmPortup < 580){
    caPourcentPortup = 50.14;
}
else if(580 <= tjmPortup < 600){
    caPourcentPortup = 50.09;
}
else if(600 <= tjmPortup < 620){
    caPourcentPortup = 50.05;
}
else if(620 <= tjmPortup < 640){
    caPourcentPortup = 49.99;
}
else if(640 <= tjmPortup < 660){
    caPourcentPortup = 49.95;
}
else if(660 <= tjmPortup < 680){
    caPourcentPortup = 49.91;
}
else if(680 <= tjmPortup < 700){
    caPourcentPortup = 49.87;
}
else if(700 >= tjmPortup){
    caPourcentPortup = 49.83;
}
var remunerationPortup = cainto100Portup * caPourcentPortup;
document.getElementById("mySocietePortup").innerHTML = caPourcentPortup + "%";
document.getElementById("myRemTotalePortup").innerHTML = formatter1.format(remunerationPortup);
document.getElementbyId("myTjmPortup").innerHTML = formatter2.format(tjmPortup);
document.getElementById("caTotalPortup").innerHTML = formatter2.format(caPortup);
document.getElementById("myFraisPortup").innerHTML = formatter2.format(fraisPortup);


// Société Cegelem

var tjmCegelem = url.searchParams.get("tjm");
var fraisCegelem = url.searchParams.get("frais");
var salaireCegelem = url.searchParams.get("salaire");
var nbJoursCegelem = document.getElementById("nbJoursCegelem").innerHTML = "20";
var caCegelem = tjmCegelem * nbJoursCegelem ;
var caPourcentCegelem;
var cainto100Cegelem = caCegelem / 100 ;

if(300 <= tjmCegelem < 320){
    caPourcentCegelem = 54.87;
}
else if(320 <= tjmCegelem < 340){
    caPourcentCegelem = 54.70;
}
else if(340 <= tjmCegelem < 360){
    caPourcentCegelem = 54.54;
}
else if(360 <= tjmCegelem < 380){
    caPourcentCegelem = 54.41;
}
else if(380 <= tjmCegelem < 400){
    caPourcentCegelem = 54.29;
}
else if(400 <= tjmCegelem < 420){
    caPourcentCegelem = 54.18;
}
else if(420 <= tjmCegelem < 440){
    caPourcentCegelem = 54.09;
}
else if(440 <= tjmCegelem < 460){
    caPourcentCegelem = 54.01;
}
else if(460 <= tjmCegelem < 480){
    caPourcentCegelem = 53.93;
}
else if(480 <= tjmCegelem < 500){
    caPourcentCegelem = 53.86;
}
else if(500 <= tjmCegelem < 520){
    caPourcentCegelem = 53.77;
}
else if(520 <= tjmCegelem < 540){
    caPourcentCegelem = 53.71;
}
else if(540 <= tjmCegelem < 560){
    caPourcentCegelem = 53.65;
}
else if(560 <= tjmCegelem < 580){
    caPourcentCegelem = 53.59;
}
else if(580 <= tjmCegelem < 600){
    caPourcentCegelem = 53.54;
}
else if(600 <= tjmCegelem < 620){
    caPourcentCegelem = 53.49;
}
else if(620 <= tjmCegelem < 640){
    caPourcentCegelem = 53.44;
}
else if(640 <= tjmCegelem < 660){
    caPourcentCegelem = 53.40;
}
else if(660 <= tjmCegelem < 680){
    caPourcentCegelem = 53.35;
}
else if(680 <= tjmCegelem < 700){
    caPourcentCegelem = 53.31;
}
else if(700 >= tjmCegelem){
    caPourcentCegelem = 53.30;
}
var remunerationCegelem = cainto100Cegelem * caPourcentCegelem;
document.getElementById("mySocieteCegelem").innerHTML = caPourcentCegelem + "%";
document.getElementById("myRemTotalePortup").innerHTML = formatter1.format(remunerationPortup);
document.getElementbyId("myTjmCegelem").innerHTML = formatter2.format(tjmCegelem);
document.getElementById("caTotalCegelem").innerHTML = formatter2.format(caCegelem);
document.getElementById("myFraisCegelem").innerHTML = formatter2.format(fraisCegelem);

// Société LabelVie

var tjmLabelVie = url.searchParams.get("tjm");
var fraisLabelVie = url.searchParams.get("frais");
var salaireLabelVie = url.searchParams.get("salaire");
var nbJoursLabelVie = document.getElementById("nbJoursLabelVie").innerHTML = "20";
var caLabelVie = tjmLabelVie * nbJoursLabelVie ;
var caPourcentLabelVie;
var cainto100LabelVie = caLabelVie / 100 ;

if(300 <= tjmLabelVie < 320){
    caPourcentLabelVie = 49.24;
}
else if(320 <= tjmLabelVie < 340){
    caPourcentLabelVie = 49.04;
}
else if(340 <= tjmLabelVie < 360){
    caPourcentLabelVie = 48.85;
}
else if(360 <= tjmLabelVie < 380){
    caPourcentLabelVie = 48.70;
}
else if(380 <= tjmLabelVie < 400){
    caPourcentLabelVie = 48.56;
}
else if(400 <= tjmLabelVie < 420){
    caPourcentLabelVie = 48.43;
}
else if(420 <= tjmLabelVie < 440){
    caPourcentLabelVie = 48.31;
}
else if(440 <= tjmLabelVie < 460){
    caPourcentLabelVie = 48.20;
}
else if(460 <= tjmLabelVie < 480){
    caPourcentLabelVie = 48.10;
}
else if(480 <= tjmLabelVie < 500){
    caPourcentLabelVie = 48.03;
}
else if(500 <= tjmLabelVie < 520){
    caPourcentLabelVie = 47.95;
}
else if(520 <= tjmLabelVie < 540){
    caPourcentLabelVie = 47.88;
}
else if(540 <= tjmLabelVie < 560){
    caPourcentLabelVie = 47.82;
}
else if(560 <= tjmLabelVie < 580){
    caPourcentLabelVie = 47.76;
}
else if(580 <= tjmLabelVie < 600){
    caPourcentLabelVie = 47.68;
}
else if(600 <= tjmLabelVie < 620){
    caPourcentLabelVie = 47.62;
}
else if(620 <= tjmLabelVie < 640){
    caPourcentLabelVie = 47.57;
}
else if(640 <= tjmLabelVie < 660){
    caPourcentLabelVie = 47.52;
}
else if(660 <= tjmLabelVie < 680){
    caPourcentLabelVie = 47.47;
}
else if(680 <= tjmLabelVie < 700){
    caPourcentLabelVie = 47.43;
}
else if(700 >= tjmLabelVie){
    caPourcentLabelVie = 47.39;
}
var remunerationLabelVie = cainto100LabelVie * caPourcentLabelVie;
document.getElementById("mySocieteLabelVie").innerHTML = caPourcentLabelVie + "%";
document.getElementById("myRemTotaleLabelVie").innerHTML = formatter1.format(remunerationLabelVie);
document.getElementbyId("myTjmLabelVie").innerHTML = formatter2.format(tjmLabelVie);
document.getElementById("caTotalLabelVie").innerHTML = formatter2.format(caLabelVie);
document.getElementById("myFraisLabelVie").innerHTML = formatter2.format(fraisLabelVie);


// Société BePortage

var tjmBePortage = url.searchParams.get("tjm");
var fraisBePortage = url.searchParams.get("frais");
var salaireBePortage = url.searchParams.get("salaire");
var nbJoursBePortage = document.getElementById("nbJoursBePortage").innerHTML = "20";
var caBePortage = tjmBePortage * nbJoursBePortage ;
var caPourcentBePortage;
var fraisGestionBePortage; //get
var cainto100BePortage = caBePortage / 100 ;

// Frais de gestion
document.getElementById("myFraisGestionBePortage").innerHTML = formatter2.format(fraisGestionBePortage);


// Frais de Gestion = 5
if (fraisGestionBePortage == 5){
    if(300 <= tjmBePortage < 320){
        caPourcentBePortage = 55.88;
    }
    else if(320 <= tjmBePortage < 340){
        caPourcentBePortage = 53.94;
    }
    else if(340 <= tjmBePortage < 360){
        caPourcentBePortage = 53.70;
    }
    else if(360 <= tjmBePortage < 380){
        caPourcentBePortage = 53.49;
    }
    else if(380 <= tjmBePortage < 400){
        caPourcentBePortage = 53.29;
    }
    else if(400 <= tjmBePortage < 420){
        caPourcentBePortage = 53.13;
    }
    else if(420 <= tjmBePortage < 440){
        caPourcentBePortage = 52.98;
    }
    else if(440 <= tjmBePortage < 460){
        caPourcentBePortage = 52.83;
    }
    else if(460 <= tjmBePortage < 480){
        caPourcentBePortage = 52.70;
    }
    else if(480 <= tjmBePortage < 500){
        caPourcentBePortage = 52.58;
    }
    else if(500 <= tjmBePortage < 520){
        caPourcentBePortage = 52.47;
    }
    else if(520 <= tjmBePortage < 540){
        caPourcentBePortage = 52.36;
    }
    else if(540 <= tjmBePortage < 560){
        caPourcentBePortage = 52.29;
    }
    else if(560 <= tjmBePortage < 580){
        caPourcentBePortage = 52.20;
    }
    else if(580 <= tjmBePortage < 600){
        caPourcentBePortage = 52.12;
    }
    else if(600 <= tjmBePortage < 620){
        caPourcentBePortage = 52.04;
    }
    else if(620 <= tjmBePortage < 640){
        caPourcentBePortage = 51.97;
    }
    else if(640 <= tjmBePortage < 660){
        caPourcentBePortage = 51.90;
    }
    else if(660 <= tjmBePortage < 680){
        caPourcentBePortage = 51.84;
    }
    else if(680 <= tjmBePortage < 700){
        caPourcentBePortage = 51.78;
    }
    else if(700 >= tjmBePortage){
        caPourcentBePortage = 51.73;
    }
}
// Frais de Gestion = 10
else if (fraisGestionBePortage == 6){
    if (300 <= tjmBePortage < 320){
        caPourcentBePortage = 53.69;
    }
    else if(320 <= tjmBePortage < 340){
        caPourcentBePortage = 53.42;
    }
    else if(340 <= tjmBePortage < 360){
        caPourcentBePortage = 53.17;
    }
    else if(360 <= tjmBePortage < 380){
        caPourcentBePortage = 52.97;
    }
    else if(380 <= tjmBePortage < 400){
        caPourcentBePortage = 52.78;
    }
    else if(400 <= tjmBePortage < 420){
        caPourcentBePortage = 52.60;
    }
    else if(420 <= tjmBePortage < 440){
        caPourcentBePortage = 52.45;
    }
    else if(440 <= tjmBePortage < 460){
        caPourcentBePortage = 52.31;
    }
    else if(460 <= tjmBePortage < 480){
        caPourcentBePortage = 52.18;
    }
    else if(480 <= tjmBePortage < 500){
        caPourcentBePortage = 52.07;
    }
    else if(500 <= tjmBePortage < 520){
        caPourcentBePortage = 51.97;
    }
    else if(520 <= tjmBePortage < 540){
        caPourcentBePortage = 51.87;
    }
    else if(540 <= tjmBePortage < 560){
        caPourcentBePortage = 51.76;
    }
    else if(560 <= tjmBePortage < 580){
        caPourcentBePortage = 51.67;
    }
    else if(580 <= tjmBePortage < 600){
        caPourcentBePortage = 51.59;
    }
    else if(600 <= tjmBePortage < 620){
        caPourcentBePortage = 51.51;
    }
    else if(620 <= tjmBePortage < 640){
        caPourcentBePortage = 51.45;
    }
    else if(640 <= tjmBePortage < 660){
        caPourcentBePortage = 51.38;
    }
    else if(660 <= tjmBePortage < 680){
        caPourcentBePortage = 51.32;
    }
    else if(680 <= tjmBePortage < 700){
        caPourcentBePortage = 51.26;
    }
    else if(700 >= tjmBePortage){
        caPourcentBePortage = 51.21;
    }
}
// Frais de Gestion = 8
else if (fraisGestionBePortage == 8){
    if(300 <= tjmBePortage < 320){
        caPourcentBePortage = 52.64;
    }
    else if(320 <= tjmBePortage < 340){
        caPourcentBePortage = 52.37;
    }
    else if(340 <= tjmBePortage < 360){
        caPourcentBePortage = 52.13;
    }
    else if(360 <= tjmBePortage < 380){
        caPourcentBePortage = 51.92;
    }
    else if(380 <= tjmBePortage < 400){
        caPourcentBePortage = 51.73;
    }
    else if(400 <= tjmBePortage < 420){
        caPourcentBePortage = 51.55;
    }
    else if(420 <= tjmBePortage < 440){
        caPourcentBePortage = 51.40;
    }
    else if(440 <= tjmBePortage < 460){
        caPourcentBePortage = 51.26;
    }
    else if(460 <= tjmBePortage < 480){
        caPourcentBePortage = 51.13;
    }
    else if(480 <= tjmBePortage < 500){
        caPourcentBePortage = 51.02;
    }
    else if(500 <= tjmBePortage < 520){
        caPourcentBePortage = 50.90;
    }
    else if(520 <= tjmBePortage < 540){
        caPourcentBePortage = 50.80;
    }
    else if(540 <= tjmBePortage < 560){
        caPourcentBePortage = 50.71;
    }
    else if(560 <= tjmBePortage < 580){
        caPourcentBePortage = 50.62;
    }
    else if(580 <= tjmBePortage < 600){
        caPourcentBePortage = 50.54;
    }
    else if(600 <= tjmBePortage < 620){
        caPourcentBePortage = 50.46;
    }
    else if(620 <= tjmBePortage < 640){
        caPourcentBePortage = 50.40;
    }
    else if(640 <= tjmBePortage < 660){
        caPourcentBePortage = 50.33;
    }
    else if(660 <= tjmBePortage < 680){
        caPourcentBePortage = 50.27;
    }
    else if(680 <= tjmBePortage < 700){
        caPourcentBePortage = 50.21;
    }
    else if(700 >= tjmBePortage){
        caPourcentBePortage = 50.16;
    }
}
var remunerationBePortage = cainto100BePortage * caPourcentBePortage;
document.getElementById("mySocieteBePortage").innerHTML = caPourcentBePortage + "%";
document.getElementById("myRemTotaleBePortage").innerHTML = formatter1.format(remunerationBePortage);
document.getElementbyId("myTjmBePortage").innerHTML = formatter2.format(tjmBePortage);
document.getElementById("caTotalBePortage").innerHTML = formatter2.format(caBePortage);
document.getElementById("myFraisBePortage").innerHTML = formatter2.format(fraisBePortage);



// Société Didaxis

var tjmDidaxis = url.searchParams.get("tjm");
var fraisDidaxis = url.searchParams.get("frais");
var salaireDidaxis = url.searchParams.get("salaire");
var nbJoursDidaxis = document.getElementById("nbJoursDidaxis").innerHTML = "20";
var caDidaxis = tjmDidaxis * nbJoursDidaxis;
var caPourcentDidaxis;
var fraisGestionDidaxis = 5; //get
var cainto100Didaxis = caDidaxis / 100 ;

// Frais de gestion
document.getElementById("myFraisGestionDidaxis").innerHTML = formatter2.format(fraisGestionDidaxis);

if(fraisGestionDidaxis = 5){
    if(300 <= tjmDidaxis < 320){
        caPourcentDidaxis = 53,33;
    }
    else if(320 <= tjmDidaxis < 340){
        caPourcentDidaxis = 53,16;
    }
    else if(340 <= tjmDidaxis < 360){
        caPourcentDidaxis = 53,01;
    }
    else if(360 <= tjmDidaxis < 380){
        caPourcentDidaxis = 52,88;
    }
    else if(380 <= tjmDidaxis < 400){
        caPourcentDidaxis = 52,75;
    }
    else if(400 <= tjmDidaxis < 420){
        caPourcentDidaxis = 52,64;
    }
    else if(420 <= tjmDidaxis < 440){
        caPourcentDidaxis = 52,54;
    }
    else if(440 <= tjmDidaxis < 460){
        caPourcentDidaxis = 52,44;
    }
    else if(460 <= tjmDidaxis < 480){
        caPourcentDidaxis = 52,36;
    }
    else if(480 <= tjmDidaxis < 500){
        caPourcentDidaxis = 52,28;
    }
    else if(500 <= tjmDidaxis < 520){
        caPourcentDidaxis = 52,22;
    }
    else if(520 <= tjmDidaxis < 540){
        caPourcentDidaxis = 52,15;
    }
    else if(540 <= tjmDidaxis < 560){
        caPourcentDidaxis = 52,09;
    }
    else if(560 <= tjmDidaxis < 580){
        caPourcentDidaxis = 52,04;
    }
    else if(580 <= tjmDidaxis < 600){
        caPourcentDidaxis = 51,98;
    }
    else if(600 <= tjmDidaxis < 620){
        caPourcentDidaxis = 51,93;
    }
    else if(620 <= tjmDidaxis < 640){
        caPourcentDidaxis = 51,89;
    }
    else if(640 <= tjmDidaxis < 660){
        caPourcentDidaxis = 51,84;
    }
    else if(660 <= tjmDidaxis < 680){
        caPourcentDidaxis = 51,81;
    }
    else if(680 <= tjmDidaxis < 700){
        caPourcentDidaxis = 51,77;
    }
    else if(tjmDidaxis >= 700){
        caPourcentDidaxis = 51,74;
    }

}
else if(fraisGestionDidaxis = 6){
    if(300 <= tjmDidaxis < 320){
        caPourcentDidaxis = 52,80;
    }
    else if(320 <= tjmDidaxis < 340){
        caPourcentDidaxis = 52,63;
    }
    else if(340 <= tjmDidaxis < 360){
        caPourcentDidaxis = 52,47;
    }
    else if(360 <= tjmDidaxis < 380){
        caPourcentDidaxis = 51,81;
    }
    else if(380 <= tjmDidaxis < 400){
        caPourcentDidaxis = 52,21;
    }
    else if(400 <= tjmDidaxis < 420){
        caPourcentDidaxis = 52,10;
    }
    else if(420 <= tjmDidaxis < 440){
        caPourcentDidaxis = 52,00;
    }
    else if(440 <= tjmDidaxis < 460){
        caPourcentDidaxis = 51,91;
    }
    else if(460 <= tjmDidaxis < 480){
        caPourcentDidaxis = 51,83;
    }
    else if(480 <= tjmDidaxis < 500){
        caPourcentDidaxis = 51,75;
    }
    else if(500 <= tjmDidaxis < 520){
        caPourcentDidaxis = 51,68;
    }
    else if(520 <= tjmDidaxis < 540){
        caPourcentDidaxis = 51,62;
    }
    else if(540 <= tjmDidaxis < 560){
        caPourcentDidaxis = 51,56;
    }
    else if(560 <= tjmDidaxis < 580){
        caPourcentDidaxis = 51,50;
    }
    else if(580 <= tjmDidaxis < 600){
        caPourcentDidaxis = 51,45;
    }
    else if(600 <= tjmDidaxis < 620){
        caPourcentDidaxis = 51,40;
    }
    else if(620 <= tjmDidaxis < 640){
        caPourcentDidaxis = 51,35;
    }
    else if(640 <= tjmDidaxis < 660){
        caPourcentDidaxis = 51,31;
    }
    else if(660 <= tjmDidaxis < 680){
        caPourcentDidaxis = 51,27;
    }
    else if(680 <= tjmDidaxis < 700){
        caPourcentDidaxis = 51,24;
    }
    else if(tjmDidaxis >= 700){
        caPourcentDidaxis = 51,20;
    }
}
else if (fraisGestionDidaxis = 7){
    if(300 <= tjmDidaxis < 320){
        caPourcentDidaxis = 52,28;
    }
    else if(320 <= tjmDidaxis < 340){
        caPourcentDidaxis = 52,09;
    }
    else if(340 <= tjmDidaxis < 360){
        caPourcentDidaxis = 51,41;
    }
    else if(360 <= tjmDidaxis < 380){
        caPourcentDidaxis = 51,28;
    }
    else if(380 <= tjmDidaxis < 400){
        caPourcentDidaxis = 51,68;
    }
    else if(400 <= tjmDidaxis < 420){
        caPourcentDidaxis = 51,58;
    }
    else if(420 <= tjmDidaxis < 440){
        caPourcentDidaxis = 51,48;
    }
    else if(440 <= tjmDidaxis < 460){
        caPourcentDidaxis = 51,39;
    }
    else if(460 <= tjmDidaxis < 480){
        caPourcentDidaxis = 51,29;
    }
    else if(480 <= tjmDidaxis < 500){
        caPourcentDidaxis = 51,22;
    }
    else if(500 <= tjmDidaxis < 520){
        caPourcentDidaxis = 51,15;
    }
    else if(520 <= tjmDidaxis < 540){
        caPourcentDidaxis = 51,09;
    }
    else if(540 <= tjmDidaxis < 560){
        caPourcentDidaxis = 51,03;
    }
    else if(560 <= tjmDidaxis < 580){
        caPourcentDidaxis = 50,97;
    }
    else if(580 <= tjmDidaxis < 600){
        caPourcentDidaxis = 50,92;
    }
    else if(600 <= tjmDidaxis < 620){
        caPourcentDidaxis = 50,88;
    }
    else if(620 <= tjmDidaxis < 640){
        caPourcentDidaxis = 50,82;
    }
    else if(640 <= tjmDidaxis < 660){
        caPourcentDidaxis = 50,78;
    }
    else if(660 <= tjmDidaxis < 680){
        caPourcentDidaxis = 50,74;
    }
    else if(680 <= tjmDidaxis < 700){
        caPourcentDidaxis = 50,71;
    }
    else if(tjmDidaxis >= 700){
        caPourcentDidaxis = 50,67;
    }

}
var remunerationDidaxis = cainto100Didaxis * caPourcentDidaxis;
document.getElementById("mySocieteDidaxis").innerHTML = caPourcentDidaxis + "%";
document.getElementById("myRemTotaleDidaxis").innerHTML = formatter1.format(remunerationDidaxis);
document.getElementbyId("myTjmDidaxis").innerHTML = formatter2.format(tjmDidaxis);
document.getElementById("caTotalDidaxis").innerHTML = formatter2.format(caDidaxis);
document.getElementById("myFraisDidaxis").innerHTML = formatter2.format(fraisDidaxis);


// Société Kingurley

var tjmKingurley = url.searchParams.get("tjm");
var fraisKingurley = url.searchParams.get("frais");
var salaireKingurley = url.searchParams.get("salaire");
var nbJoursKingurley = document.getElementById("nbJoursKingurley").innerHTML = "20";
var caKingurley = tjmKingurley * nbJoursKingurley ;
var caPourcentKingurley;
var cainto100Kingurley = caKingurley / 100;

if(300 <= tjmKingurley < 320){
    caPourcentKingurley = 52,82;
}
else if(320 <= tjmKingurley < 340){
    caPourcentKingurley = 52,64;
}
else if(340 <= tjmKingurley < 360){
    caPourcentKingurley = 52,47;
}
else if(360 <= tjmKingurley < 380){
    caPourcentKingurley = 52,33;
}
else if(380 <= tjmKingurley < 400){
    caPourcentKingurley = 52,21;
}
else if(400 <= tjmKingurley < 420){
    caPourcentKingurley = 52,10;
}
else if(420 <= tjmKingurley < 440){
    caPourcentKingurley = 52,00;
}
else if(440 <= tjmKingurley < 460){
    caPourcentKingurley = 51,91;
}
else if(460 <= tjmKingurley < 480){
    caPourcentKingurley = 51,83;
}
else if(480 <= tjmKingurley < 500){
    caPourcentKingurley = 51,75;
}
else if(500 <= tjmKingurley < 520){
    caPourcentKingurley = 51,68;
}
else if(520 <= tjmKingurley < 540){
    caPourcentKingurley = 51,62;
}
else if(540 <= tjmKingurley < 560){
    caPourcentKingurley = 51,56;
}
else if(560 <= tjmKingurley < 580){
    caPourcentKingurley = 51,50;
}
else if(580 <= tjmKingurley < 600){
    caPourcentKingurley = 51,45;
}
else if(600 <= tjmKingurley < 620){
    caPourcentKingurley = 51,40;
}
else if(620 <= tjmKingurley < 640){
    caPourcentKingurley = 51,35;
}
else if(640 <= tjmKingurley < 660){
    caPourcentKingurley = 51,31;
}
else if(660 <= tjmKingurley < 680){
    caPourcentKingurley = 51,27;
}
else if(680 <= tjmKingurley < 700){
    caPourcentKingurley = 51,24;
}
else if(tjmKingurley >= 700){
    caPourcentKingurley = 51,20;
}
var remunerationKingurley = cainto100Kingurley * caPourcentKingurley;
document.getElementById("mySocieteKingurley").innerHTML = caPourcentKingurley + "%";
document.getElementById("myRemTotaleKingurley").innerHTML = formatter1.format(remunerationKingurley);
document.getElementbyId("myTjmKingurley").innerHTML = formatter2.format(tjmKingurley);
document.getElementById("caTotalKingurley").innerHTML = formatter2.format(caKingurley);
document.getElementById("myFraisKingurley").innerHTML = formatter2.format(fraisKingurley);



// Société Admission

var tjmAdmission = url.searchParams.get("tjm");
var fraisAdmission = url.searchParams.get("frais");
var salaireAdmission = url.searchParams.get("salaire");
var nbJoursAdmission = document.getElementById("nbJoursAdmission").innerHTML = "20";
var caAdmission = tjmAdmission * nbJoursAdmission ;
var caPourcentAdmission;
var cainto100Admission = caAdmission / 100;

if(300 <= tjmAdmission < 320){
    caPourcentAdmission = 52,65;
}
else if(320 <= tjmAdmission < 340){
    caPourcentAdmission = 52,47;
}
else if(340 <= tjmAdmission < 360){
    caPourcentAdmission = 52,31;
}
else if(360 <= tjmAdmission < 380){
    caPourcentAdmission = 52,17;
}
else if(380 <= tjmAdmission < 400){
    caPourcentAdmission = 52,05;
}
else if(400 <= tjmAdmission < 420){
    caPourcentAdmission = 51,93;
}
else if(420 <= tjmAdmission < 440){
    caPourcentAdmission = 51,83;
}
else if(440 <= tjmAdmission < 460){
    caPourcentAdmission = 51,74;
}
else if(460 <= tjmAdmission < 480){
    caPourcentAdmission = 51,65;
}
else if(480 <= tjmAdmission < 500){
    caPourcentAdmission = 51,58;
}
else if(500 <= tjmAdmission < 520){
    caPourcentAdmission = 51,50;
}
else if(520 <= tjmAdmission < 540){
    caPourcentAdmission = 51,44;
}
else if(540 <= tjmAdmission < 560){
    caPourcentAdmission = 51,38;
}
else if(560 <= tjmAdmission < 580){
    caPourcentAdmission = 51,32;
}
else if(580 <= tjmAdmission < 600){
    caPourcentAdmission = 51,27;
}
else if(600 <= tjmAdmission < 620){
    caPourcentAdmission = 51,22;
}
else if(620 <= tjmAdmission < 640){
    caPourcentAdmission = 51,17;
}
else if(640 <= tjmAdmission < 660){
    caPourcentAdmission = 51,13;
}
else if(660 <= tjmAdmission < 680){
    caPourcentAdmission = 51,09;
}
else if(680 <= tjmAdmission < 700){
    caPourcentAdmission = 51,05;
}
else if(tjmAdmission >= 700){
    caPourcentAdmission = 51,01;
}
var remunerationAdmission = cainto100Admission * caPourcentAdmission;
document.getElementById("mySocieteAdmission").innerHTML = caPourcentAdmission + "%";
document.getElementById("myRemTotaleAdmission").innerHTML = formatter1.format(remunerationAdmission);
document.getElementbyId("myTjmAdmission").innerHTML = formatter2.format(tjmAdmission);
document.getElementById("caTotalAdmission").innerHTML = formatter2.format(caAdmission);
document.getElementById("myFraisAdmission").innerHTML = formatter2.format(fraisAdmission);




// Société EPPortage

var tjmEPPortage = url.searchParams.get("tjm");
var fraisEPPortage = url.searchParams.get("frais");
var salaireEPPortage = url.searchParams.get("salaire");
var nbJoursEPPortage = document.getElementById("nbJoursEPPortage").innerHTML = "20";
var caEPPortage = tjmEPPortage*nbJoursEPPortage;
var caPourcentEPPortage;
var fraisGestionBePortageEPPortage; //get
var cainto100EPPortage = caEPPortage / 100;

if(fraisGestionBePortageEPPortage=3){
    if(300 <= tjmEPPortage < 320){
        caPourcentEPPortage = 52,52;
    }
    else if(320 <= tjmEPPortage < 340){
        caPourcentEPPortage = 52,51;
    }
    else if(340 <= tjmEPPortage < 360){
        caPourcentEPPortage = 52,50;
    }
    else if(360 <= tjmEPPortage < 380){
        caPourcentEPPortage = 52,50;
    }
    else if(380 <= tjmEPPortage < 400){
        caPourcentEPPortage = 52,49;
    }
    else if(400 <= tjmEPPortage < 420){
        caPourcentEPPortage = 52,48;
    }
    else if(420 <= tjmEPPortage < 440){
        caPourcentEPPortage = 52,48;
    }
    else if(440 <= tjmEPPortage < 460){
        caPourcentEPPortage = 52,47;
    }
    else if(460 <= tjmEPPortage < 480){
        caPourcentEPPortage = 52,47;
    }
    else if(480 <= tjmEPPortage < 500){
        caPourcentEPPortage = 52,47;
    }
    else if(500 <= tjmEPPortage < 520){
        caPourcentEPPortage = 52,46;
    }
    else if(520 <= tjmEPPortage < 540){
        caPourcentEPPortage = 52,46;
    }
    else if(540 <= tjmEPPortage < 560){
        caPourcentEPPortage = 52,46;
    }
    else if(560 <= tjmEPPortage < 580){
        caPourcentEPPortage = 52,45;
    }
    else if(580 <= tjmEPPortage < 600){
        caPourcentEPPortage = 52,45;
    }
    else if(600 <= tjmEPPortage < 620){
        caPourcentEPPortage = 52,37;
    }
    else if(620 <= tjmEPPortage < 640){
        caPourcentEPPortage = 52,45;
    }
    else if(640 <= tjmEPPortage < 660){
        caPourcentEPPortage = 52,44;
    }
    else if(660 <= tjmEPPortage < 680){
        caPourcentEPPortage = 52,44;
    }
    else if(680 <= tjmEPPortage < 700){
        caPourcentEPPortage = 52,44;
    }
    else if(tjmEPPortage >= 700){
        caPourcentEPPortage = 52,44;
    }

}
else if (fraisGestionEPPortage=5){

    if(300 <= tjmEPPortage < 320){
        caPourcentEPPortage = 51,44;
    }
    else if(320 <= tjmEPPortage < 340){
        caPourcentEPPortage = 51,43;
    }
    else if(340 <= tjmEPPortage < 360){
        caPourcentEPPortage = 51,42;
    }
    else if(360 <= tjmEPPortage < 380){
        caPourcentEPPortage = 51,42;
    }
    else if(380 <= tjmEPPortage < 400){
        caPourcentEPPortage = 51,41;
    }
    else if(400 <= tjmEPPortage < 420){
        caPourcentEPPortage = 51,40;
    }
    else if(420 <= tjmEPPortage < 440){
        caPourcentEPPortage = 51,40;
    }
    else if(440 <= tjmEPPortage < 460){
        caPourcentEPPortage = 51,39;
    }
    else if(460 <= tjmEPPortage < 480){
        caPourcentEPPortage = 51,39;
    }
    else if(480 <= tjmEPPortage < 500){
        caPourcentEPPortage = 51,39;
    }
    else if(500 <= tjmEPPortage < 520){
        caPourcentEPPortage = 51,38;
    }
    else if(520 <= tjmEPPortage < 540){
        caPourcentEPPortage = 51,38;
    }
    else if(540 <= tjmEPPortage < 560){
        caPourcentEPPortage = 51,38;
    }
    else if(560 <= tjmEPPortage < 580){
        caPourcentEPPortage = 51,37;
    }
    else if(580 <= tjmEPPortage < 600){
        caPourcentEPPortage = 51,37;
    }
    else if(600 <= tjmEPPortage < 620){
        caPourcentEPPortage = 51,37;
    }
    else if(620 <= tjmEPPortage < 640){
        caPourcentEPPortage = 51,37;
    }
    else if(640 <= tjmEPPortage < 660){
        caPourcentEPPortage = 51,36;
    }
    else if(660 <= tjmEPPortage < 680){
        caPourcentEPPortage = 51,36;
    }
    else if(680 <= tjmEPPortage < 700){
        caPourcentEPPortage = 51,36;
    }
    else if(tjmEPPortage >= 700){
        caPourcentEPPortage = 51,36;
    }
}

else if(fraisGestionEPPortage=7){

    if(300 <= tjmEPPortage < 320){
        caPourcentEPPortage = 51,36;
    }
    else if(320 <= tjmEPPortage < 340){
        caPourcentEPPortage = 50,35;
    }
    else if(340 <= tjmEPPortage < 360){
        caPourcentEPPortage = 50,34;
    }
    else if(360 <= tjmEPPortage < 380){
        caPourcentEPPortage = 50,34;
    }
    else if(380 <= tjmEPPortage < 400){
        caPourcentEPPortage = 50,33;
    }
    else if(400 <= tjmEPPortage < 420){
        caPourcentEPPortage = 50,32;
    }
    else if(420 <= tjmEPPortage < 440){
        caPourcentEPPortage = 50,32;
    }
    else if(440 <= tjmEPPortage < 460){
        caPourcentEPPortage = 50,31;
    }
    else if(460 <= tjmEPPortage < 480){
        caPourcentEPPortage = 50,31;
    }
    else if(480 <= tjmEPPortage < 500){
        caPourcentEPPortage = 50,31;
    }
    else if(500 <= tjmEPPortage < 520){
        caPourcentEPPortage = 50,30;
    }
    else if(520 <= tjmEPPortage < 540){
        caPourcentEPPortage = 50,30;
    }
    else if(540 <= tjmEPPortage < 560){
        caPourcentEPPortage = 50,30;
    }
    else if(560 <= tjmEPPortage < 580){
        caPourcentEPPortage = 50,29;
    }
    else if(580 <= tjmEPPortage < 600){
        caPourcentEPPortage = 50,29;
    }
    else if(600 <= tjmEPPortage < 620){
        caPourcentEPPortage = 50,29;
    }
    else if(620 <= tjmEPPortage < 640){
        caPourcentEPPortage = 50,29;
    }
    else if(640 <= tjmEPPortage < 660){
        caPourcentEPPortage = 50,28;
    }
    else if(660 <= tjmEPPortage < 680){
        caPourcentEPPortage = 50,28;
    }
    else if(680 <= tjmEPPortage < 700){
        caPourcentEPPortage = 50,28;
    }
    else if(tjmEPPortage >= 700){
        caPourcentEPPortage = 50,28;
    }
}
var remunerationEPPortage = cainto100EPPortage * caPourcentEPPortage;
document.getElementById("mySocieteEPPortage").innerHTML = caPourcentEPPortage + "%";
document.getElementById("myRemTotaleEPPortage").innerHTML = formatter1.format(remunerationEPPortage);
document.getElementbyId("myTjmEPPortage").innerHTML = formatter2.format(tjmEPPortage);
document.getElementById("caTotalEPPortage").innerHTML = formatter2.format(caEPPortage);
document.getElementById("myFraisEPPortage").innerHTML = formatter2.format(fraisEPPortage);
document.getElementById("myFraisGestionEPPortage").innerHTML = formatter2.format(fraisGestionEPPortage);



// Société RHSolutions

var tjmRHSolutions = url.searchParams.get("tjm");
var fraisRHSolutions = url.searchParams.get("frais");
var salaireRHSolutions = url.searchParams.get("salaire");
var nbJoursRHSolutions = document.getElementById("nbJoursRHSolutions").innerHTML = "20";
var caRHSolutions = tjmRHSolutions * nbJoursRHSolutions;
var caPourcentRHSolutions;
var cainto100RHSolutions = caRHSolutions / 100;

if(300 <= tjmRHSolutions < 320){
    caPourcentRHSolutions = 51,76;
}
else if(320 <= tjmRHSolutions < 340){
    caPourcentRHSolutions = 51,59;
}
else if(340 <= tjmRHSolutions < 360){
    caPourcentRHSolutions = 51,44;
}
else if(360 <= tjmRHSolutions < 380){
    caPourcentRHSolutions = 51,30;
}
else if(380 <= tjmRHSolutions < 400){
    caPourcentRHSolutions = 51,18;
}
else if(400 <= tjmRHSolutions < 420){
    caPourcentRHSolutions = 51,06;
}
else if(420 <= tjmRHSolutions < 440){
    caPourcentRHSolutions = 51,51;
}
else if(440 <= tjmRHSolutions < 460){
    caPourcentRHSolutions = 51,42;
}
else if(460 <= tjmRHSolutions < 480){
    caPourcentRHSolutions = 51,34;
}
else if(480 <= tjmRHSolutions < 500){
    caPourcentRHSolutions = 51,26;
}
else if(500 <= tjmRHSolutions < 520){
    caPourcentRHSolutions = 51,19;
}
else if(520 <= tjmRHSolutions < 540){
    caPourcentRHSolutions = 51,13;
}
else if(540 <= tjmRHSolutions < 560){
    caPourcentRHSolutions = 51,07;
}
else if(560 <= tjmRHSolutions < 580){
    caPourcentRHSolutions = 51,01;
}
else if(580 <= tjmRHSolutions < 600){
    caPourcentRHSolutions = 50,96;
}
else if(600 <= tjmRHSolutions < 620){
    caPourcentRHSolutions = 50,91;
}
else if(620 <= tjmRHSolutions < 640){
    caPourcentRHSolutions = 50,87;
}
else if(640 <= tjmRHSolutions < 660){
    caPourcentRHSolutions = 50,83;
}
else if(660 <= tjmRHSolutions < 680){
    caPourcentRHSolutions = 50,79;
}
else if(680 <= tjmRHSolutions < 700){
    caPourcentRHSolutions = 50,75;
}
else if(tjmRHSolutions >= 700){
    caPourcentRHSolutions = 50,72;
}
var remunerationRHSolutions = cainto100RHSolutions * caPourcentRHSolutions;
document.getElementById("mySocieteRHSolutions").innerHTML = caPourcentRHSolutions + "%";
document.getElementById("myRemTotaleRHSolutions").innerHTML = formatter1.format(remunerationRHSolutions);
document.getElementbyId("myTjmRHSolutions").innerHTML = formatter2.format(tjmRHSolutions);
document.getElementById("caTotalRHSolutions").innerHTML = formatter2.format(caRHSolutions);
document.getElementById("myFraisRHSolutions").innerHTML = formatter2.format(fraisRHSolutions);



// Société ITG

var tjmITG = url.searchParams.get("tjm");
var fraisITG = url.searchParams.get("frais");
var salaireITG = url.searchParams.get("salaire");
var nbJoursITG = document.getElementById("nbJoursITG").innerHTML = "20";
var caPourcentITGG = tjmITG * nbJoursITG 
var caPourcentITG;

if(300 <= tjmITG < 320){
   caPourcentITGG = 51,30;
}
else if(320 <= tjmITG < 340){
   caPourcentITGG = 51,11;
}
else if(340 <= tjmITG < 360){
   caPourcentITGG = 50,96;
}
else if(360 <= tjmITG < 380){
   caPourcentITGG = 50,78;
}
else if(380 <= tjmITG < 400){
   caPourcentITGG = 50,61;
}
else if(400 <= tjmITG < 420){
   caPourcentITGG = 50,46;
}
else if(420 <= tjmITG < 440){
   caPourcentITGG = 50,33;
}
else if(440 <= tjmITG < 460){
   caPourcentITGG = 50,22;
}
else if(460 <= tjmITG < 480){
   caPourcentITGG = 50,11;
}
else if(480 <= tjmITG < 500){
   caPourcentITGG = 50,00;
}
else if(500 <= tjmITG < 520){
   caPourcentITGG = 50,15;
}
else if(520 <= tjmITG < 540){
   caPourcentITGG = 50,08;
}
else if(540 <= tjmITG < 560){
   caPourcentITGG = 50,03;
}
else if(560 <= tjmITG < 580){
   caPourcentITGG = 49,98;
}
else if(580 <= tjmITG < 600){
   caPourcentITGG = 49,94;
}
else if(600 <= tjmITG < 620){
   caPourcentITGG = 49,88;
}
else if(620 <= tjmITG < 640){
   caPourcentITGG = 49,83;
}
else if(640 <= tjmITG < 660){
   caPourcentITGG = 49,80;
}
else if(660 <= tjmITG < 680){
   caPourcentITGG = 49,74;
}
else if(680 <= tjmITG < 700){
   caPourcentITGG = 49,71;
}
else if(tjmITG >= 700){
   caPourcentITGG = 49,67;
}

var cainto100ITG = caITG / 100;
var remunerationITG = cainto100ITG * caPourcentITG;
document.getElementById("mySocieteITG").innerHTML = caPourcentITG + "%";
document.getElementById("myRemTotaleITG").innerHTML = formatter1.format(remunerationITG);
document.getElementbyId("myTjmITG").innerHTML = formatter2.format(tjmITG);
document.getElementById("caTotalITG").innerHTML = formatter2.format(caITG);
document.getElementById("myFraisITG").innerHTML = formatter2.format(fraisITG);

// Société Freecadre

var tjmFreecadre = url.searchParams.get("tjm");
var fraisFreecadre = url.searchParams.get("frais");
var salaireFreecadre = url.searchParams.get("salaire");
var nbJoursFreecadre = document.getElementById("nbJoursFreecadre").innerHTML = "20";
var caFreecadree = tjmFreecadre * nbJoursFreecadre 
var caPourcentFreecadre;


if(300 <= tjmFreecadre < 320){
   caPourcentFreecadree = 52,20;
}
else if(320 <= tjmFreecadre < 340){
   caPourcentFreecadree = 52,03;
}
else if(340 <= tjmFreecadre < 360){
   caPourcentFreecadree = 51,88;
}
else if(360 <= tjmFreecadre < 380){
   caPourcentFreecadree = 51,75;
}
else if(380 <= tjmFreecadre < 400){
   caPourcentFreecadree = 51,63;
}
else if(400 <= tjmFreecadre < 420){
   caPourcentFreecadree = 51,53;
}
else if(420 <= tjmFreecadre < 440){
   caPourcentFreecadree = 51,43;
}
else if(440 <= tjmFreecadre < 460){
   caPourcentFreecadree = 51,34;
}
else if(460 <= tjmFreecadre < 480){
   caPourcentFreecadree = 51,26;
}
else if(480 <= tjmFreecadre < 500){
   caPourcentFreecadree = 51,19;
}
else if(500 <= tjmFreecadre < 520){
   caPourcentFreecadree = 51,12;
}
else if(520 <= tjmFreecadre < 540){
   caPourcentFreecadree = 51,06;
}
else if(540 <= tjmFreecadre < 560){
   caPourcentFreecadree = 51,00;
}
else if(560 <= tjmFreecadre < 580){
   caPourcentFreecadree = 50,95;
}
else if(580 <= tjmFreecadre < 600){
   caPourcentFreecadree = 50,90;
}
else if(600 <= tjmFreecadre < 620){
   caPourcentFreecadree = 50,85;
}
else if(620 <= tjmFreecadre < 640){
   caPourcentFreecadree = 50,81;
}
else if(640 <= tjmFreecadre < 660){
   caPourcentFreecadree = 50,77;
}
else if(660 <= tjmFreecadre < 680){
   caPourcentFreecadree = 50,73;
}
else if(680 <= tjmFreecadre < 700){
   caPourcentFreecadree = 50,69;
}
else if(tjmFreecadre >= 700){
   caPourcentFreecadree = 50,66;
}

var cainto100Freecadre = caFreecadre / 100;
var remunerationFreecadre = cainto100Freecadre * caPourcentFreecadre;
document.getElementById("mySocieteFreecadre").innerHTML = caPourcentFreecadre + "%";
document.getElementById("myRemTotaleFreecadre").innerHTML = formatter1.format(remunerationFreecadre);
document.getElementbyId("myTjmFreecadre").innerHTML = formatter2.format(tjmFreecadre);
document.getElementById("caTotalFreecadre").innerHTML = formatter2.format(caFreecadre);
document.getElementById("myFraisFreecadre").innerHTML = formatter2.format(fraisFreecadre);

// Société TalentFactory

var tjmTalentFactory = url.searchParams.get("tjm");
var fraisTalentFactory = url.searchParams.get("frais");
var salaireTalentFactory = url.searchParams.get("salaire");
var nbJoursTalentFactory = document.getElementById("nbJoursTalentFactory").innerHTML = "20";
var caTalentFactory = tjmTalentFactory * nbJoursTalentFactory ;
var caPourcentTalentFactory;

if(300 <= tjmTalentFactory < 320){
    caPourcentTalentFactory = 52,48;
}
else if(320 <= tjmTalentFactory < 340){
    caPourcentTalentFactory = 53,98;
}
else if(340 <= tjmTalentFactory < 360){
    caPourcentTalentFactory = 55,31;
}
else if(360 <= tjmTalentFactory < 380){
    caPourcentTalentFactory = 56,48;
}
else if(380 <= tjmTalentFactory < 400){
    caPourcentTalentFactory = 57,54;
}
else if(400 <= tjmTalentFactory < 420){
    caPourcentTalentFactory = 58,49;
}
else if(420 <= tjmTalentFactory < 440){
    caPourcentTalentFactory = 59,34;
}
else if(440 <= tjmTalentFactory < 460){
    caPourcentTalentFactory = 60,12;
}
else if(460 <= tjmTalentFactory < 480){
    caPourcentTalentFactory = 60,846;
}
else if(480 <= tjmTalentFactory < 500){
    caPourcentTalentFactory = 61,49;
}
else if(500 <= tjmTalentFactory < 520){
    caPourcentTalentFactory = 62,09;
}
else if(520 <= tjmTalentFactory < 540){
    caPourcentTalentFactory = 62,64;
}
else if(540 <= tjmTalentFactory < 560){
    caPourcentTalentFactory = 63,16;
}
else if(560 <= tjmTalentFactory < 580){
    caPourcentTalentFactory = 63,63;
}
else if(580 <= tjmTalentFactory < 600){
    caPourcentTalentFactory = 64,08;
}
else if(600 <= tjmTalentFactory < 620){
    caPourcentTalentFactory = 64,49;
}
else if(620 <= tjmTalentFactory < 640){
    caPourcentTalentFactory = 64,88;
}
else if(640 <= tjmTalentFactory < 660){
    caPourcentTalentFactory = 65,24;
}
else if(660 <= tjmTalentFactory < 680){
    caPourcentTalentFactory = 65,58;
}
else if(680 <= tjmTalentFactory < 700){
    caPourcentTalentFactory = 65,90;
}
else if(tjmTalentFactory >= 700){
    caPourcentTalentFactory = 66,21;
}

var cainto100TalentFactory = caTalentFactory / 100;
var remunerationTalentFactory = cainto100TalentFactory * caPourcentTalentFactory;
document.getElementById("mySocieteTalentFactory").innerHTML = caPourcentTalentFactory + "";
document.getElementById("myRemTotaleTalentFactory").innerHTML = formatter1.format(remunerationTalentFactory);
document.getElementbyId("myTjmTalentFactory").innerHTML = formatter2.format(tjmTalentFactory);
document.getElementById("caTotalTalentFactory").innerHTML = formatter2.format(caTalentFactory);
document.getElementById("myFraisTalentFactory").innerHTML = formatter2.format(fraisTalentFactory);



// Société Umalis

var tjmUmalis = url.searchParams.get("tjm");
var fraisUmalis = url.searchParams.get("frais");
var salaireUmalis = url.searchParams.get("salaire");
var nbJoursUmalis = document.getElementById("nbJoursUmalis").innerHTML = "20";
var caUmalis = tjmUmalis * nbJoursUmalis 
var caPourcentUmalis;

if(300 <= tjmUmalis < 320){
   caPourcentUmaliss = 56.05;
}
else if(320 <= tjmUmalis < 340){
   caPourcentUmaliss = 55,75;
}
else if(340 <= tjmUmalis < 360){
   caPourcentUmaliss = 55,49;
}
else if(360 <= tjmUmalis < 380){
   caPourcentUmaliss = 55,25;
}
else if(380 <= tjmUmalis < 400){
   caPourcentUmaliss = 55,04;
}
else if(400 <= tjmUmalis < 420){
   caPourcentUmaliss = 54,86;
}
else if(420 <= tjmUmalis < 440){
   caPourcentUmaliss = 55,70;
}
else if(440 <= tjmUmalis < 460){
   caPourcentUmaliss = 55,50;
}
else if(460 <= tjmUmalis < 480){
   caPourcentUmaliss = 55,31;
}
else if(480 <= tjmUmalis < 500){
   caPourcentUmaliss = 55,15;
}
else if(500 <= tjmUmalis < 520){
   caPourcentUmaliss = 54,99;
}
else if(520 <= tjmUmalis < 540){
   caPourcentUmaliss = 54,48;
}
else if(540 <= tjmUmalis < 560){
   caPourcentUmaliss = 54,36;
}
else if(560 <= tjmUmalis < 580){
   caPourcentUmaliss = 54,25;
}
else if(580 <= tjmUmalis < 600){
   caPourcentUmaliss = 54,15;
}
else if(600 <= tjmUmalis < 620){
   caPourcentUmaliss = 54,06;
}
else if(620 <= tjmUmalis < 640){
   caPourcentUmaliss = 53,98;
}
else if(640 <= tjmUmalis < 660){
   caPourcentUmaliss = 53,90;
}
else if(660 <= tjmUmalis < 680){
   caPourcentUmaliss = 53,82;
}
else if(680 <= tjmUmalis < 700){
   caPourcentUmaliss = 53,74;
}
else if(tjmUmalis >= 700){
   caPourcentUmaliss = 53,67;
}

var cainto100Umalis = caUmalis / 100;
var remunerationUmalis = cainto100Umalis * caPourcentUmalis;
document.getElementById("mySocieteUmalis").innerHTML = caPourcentUmalis + "";
document.getElementById("myRemTotaleUmalis").innerHTML = formatter1.format(remunerationUmalis);
document.getElementbyId("myTjmUmalis").innerHTML = formatter2.format(tjmUmalis);
document.getElementById("caTotalUmalis").innerHTML = formatter2.format(caUmalis);
document.getElementById("myFraisUmalis").innerHTML = formatter2.format(fraisUmalis);;




// Société Highteckers 

var tjmHighteckers = url.searchParams.get("tjm");
var fraisHighteckers = url.searchParams.get("frais");
var salaireHighteckers = url.searchParams.get("salaire");
var nbJoursHighteckers = document.getElementById("nbJoursHighteckers").innerHTML = "20";
var caHighteckers = tjmHihhteckers * nbJoursHighteckers ;
var caPourcentHighteckers;

if(300 <= tjmHighteckers < 320){
    caPourcentHighteckers =51,360;
}
else if(320 <= tjmHighteckers < 340){
    caPourcentHighteckers =52,932;
}
else if(340 <= tjmHighteckers < 360){
    caPourcentHighteckers =54,326;
}
else if(360 <= tjmHighteckers < 380){
    caPourcentHighteckers =55,552;
}
else if(380 <= tjmHighteckers < 400){
    caPourcentHighteckers =56,659;
}
else if(400 <= tjmHighteckers < 420){
    caPourcentHighteckers =57,658;
}
else if(420 <= tjmHighteckers < 440){
    caPourcentHighteckers =58,547;
}
else if(440 <= tjmHighteckers < 460){
    caPourcentHighteckers =59,368;
}
else if(460 <= tjmHighteckers < 480){
    caPourcentHighteckers =60,119;
}
else if(480 <= tjmHighteckers < 500){
    caPourcentHighteckers =60,791;
}
else if(500 <= tjmHighteckers < 520){
    caPourcentHighteckers =61,426;
}
else if(520 <= tjmHighteckers < 540){
    caPourcentHighteckers =62,009;
}
else if(540 <= tjmHighteckers < 560){
    caPourcentHighteckers =62,533;
}
else if(560 <= tjmHighteckers < 580){
    caPourcentHighteckers =63,037;
}
else if(580 <= tjmHighteckers < 600){
    caPourcentHighteckers =63,502;
}
else if(600 <= tjmHighteckers < 620){
    caPourcentHighteckers =63,937;
}
else if(620 <= tjmHighteckers < 640){
    caPourcentHighteckers =64,343;
}
else if(640 <= tjmHighteckers < 660){
    caPourcentHighteckers =64,728;
}
else if(660 <= tjmHighteckers < 680){
    caPourcentHighteckers =65,074;
}
else if(680 <= tjmHighteckers < 700){
    caPourcentHighteckers =65,410;
}
else if (tjmHighteckers >= 700){
    caPourcentHighteckers =65,736;
}

var cainto100Highteckers = caHighteckers / 100;
var remunerationHighteckers = cainto100Highteckers * caPourcentHighteckers;
document.getElementById("mySocieteHighteckers").innerHTML = caPourcentHighteckers + "";
document.getElementById("myRemTotaleHighteckers").innerHTML = formatter1.format(remunerationHighteckers);
document.getElementbyId("myTjmHighteckers").innerHTML = formatter2.format(tjmHighteckers);
document.getElementById("caTotalHighteckers").innerHTML = formatter2.format(caHighteckers);
document.getElementById("myFraisHighteckers").innerHTML = formatter2.format(fraisHighteckers);



// Société ABCPortage

var tjmABCPortage = url.searchParams.get("tjm");
var fraisABCPortage = url.searchParams.get("frais");
var salaireABCPortage = url.searchParams.get("salaire");
var nbJoursABCPortage = document.getElementById("nbJoursABCPortage").innerHTML = "20";
var caABCPortage = tjmABCPortage * nbJoursABCPortage ;
var caPourcentABCPortage;
var fraisGestionABCPortage;


// Affichage des frais de gestion en fonction du TJM
if(tjmABCPortage < 500){
    fraisGestionABCPortage = 8;
}
if(tjmABCPortage >= 500){
    fraisGestionABCPortage = 7;
}
document.getElementById("myFraisGestionABCPortage").innerHTML = formatter2.format(fraisGestionABCPortage);

//
if(300 <= tjmABCPortage < 320){
    caPourcentABCPortage = 50,40;
}
else if(320 <= tjmABCPortage < 340){
    caPourcentABCPortage = 50,22;
}
else if(340 <= tjmABCPortage < 360){
    caPourcentABCPortage = 50,06;
}
else if(360 <= tjmABCPortage < 380){
    caPourcentABCPortage = 49,92;
}
else if(380 <= tjmABCPortage < 400){
    caPourcentABCPortage = 49,79;
}
else if(400 <= tjmABCPortage < 420){
    caPourcentABCPortage = 49,68;
}
else if(420 <= tjmABCPortage < 440){
    caPourcentABCPortage = 49,57;
}
else if(440 <= tjmABCPortage < 460){
    caPourcentABCPortage = 49,48;
}
else if(460 <= tjmABCPortage < 480){
    caPourcentABCPortage = 49,39;
}
else if(480 <= tjmABCPortage < 500){
    caPourcentABCPortage = 49,31;
}
else if(500 <= tjmABCPortage < 520){
    caPourcentABCPortage = 49,76;
}
else if(520 <= tjmABCPortage < 540){
    caPourcentABCPortage = 49,69;
}
else if(540 <= tjmABCPortage < 560){
    caPourcentABCPortage = 49,63;
}
else if(560 <= tjmABCPortage < 580){
    caPourcentABCPortage = 49,57;
}
else if(580 <= tjmABCPortage < 600){
    caPourcentABCPortage = 49,52;
}
else if(600 <= tjmABCPortage < 620){
    caPourcentABCPortage = 49,47;
}
else if(620 <= tjmABCPortage < 640){
    caPourcentABCPortage = 49,43;
}
else if(640 <= tjmABCPortage < 660){
    caPourcentABCPortage = 49,38;
}
else if(660 <= tjmABCPortage < 680){
    caPourcentABCPortage = 49,34;
}
else if(680 <= tjmABCPortage < 700){
    caPourcentABCPortage = 49,30;
}
else if(tjmABCPortage >= 700){
    caPourcentABCPortage = 49,26;
}

var cainto100ABCPortage = caABCPortage / 100;
var remunerationABCPortage = cainto100ABCPortage * caPourcentABCPortage;
document.getElementById("mySocieteABCPortage").innerHTML = caPourcentABCPortage + "";
document.getElementById("myRemTotaleABCPortage").innerHTML = formatter1.format(remunerationABCPortage);
document.getElementbyId("myTjmABCPortage").innerHTML = formatter2.format(tjmABCPortage);
document.getElementById("caTotalABCPortage").innerHTML = formatter2.format(caABCPortage);
document.getElementById("myFraisABCPortage").innerHTML = formatter2.format(fraisABCPortage);

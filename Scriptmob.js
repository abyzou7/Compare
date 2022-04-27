var Webflow = Webflow || [];
Webflow.push(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = 'defer';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.min.js';
    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.defer = 'defer';
    script2.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    document.head.appendChild(script);
    document.head.appendChild(script2);
    function demoFromHTML() {
        var doc = new jsPDF({
            format: "a4",
            orientation: 'landscape'
            });
        var width = doc.internal.pageSize.width;
        var height = doc.internal.pageSize.height;
        html2canvas(document.getElementById("content"),{scrollY: -window.scrollY,scrollX: -window.scrollX}, {
            scale: "3",
            quality: "3"
            }).then(canvas => {
                this.imgFile = canvas;
                doc.addImage(this.imgFile, "PNG", 0, 0,width,height);
                doc.save("filename" + ".pdf");
            });
            
    }

    //call the function
    $('#generate').click(function () {
        demoFromHTML();
    });
});

var Webflow = Webflow || [];
Webflow.push(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.defer = 'defer';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.min.js';
    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.defer = 'defer';
    script2.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    document.head.appendChild(script);
    document.head.appendChild(script2);
    function demoFromHTML() {
        var doc = new jsPDF({
            format: "a4",
            orientation: 'landscape'
            });
        var width = doc.internal.pageSize.width;
        var height = doc.internal.pageSize.height;
        html2canvas(document.getElementById("contentmob"),{scrollY: -window.scrollY,scrollX: -window.scrollX}, {
            scale: "3",
            quality: "3"
            }).then(canvas => {
                this.imgFile = canvas;
                doc.addImage(this.imgFile, "PNG", 0, 0,width,height);
                doc.save("filename" + ".pdf");
            });
            
    }

    //call the function
    $('#generatemob').click(function () {
        demoFromHTML();
    });
});

  var url_string = window.location.href;
  var url = new URL(url_string);
  const formatter1 = new Intl.NumberFormat('fr-FR', {
  style: 'currency',currency: 'EUR',minimumFractionDigits: 2
})
const formatter2 = new Intl.NumberFormat('fr-FR', {
  style: 'currency', currency: 'EUR',minimumFractionDigits: 0
})
  var tjm = url.searchParams.get("tjm");
  var frais = url.searchParams.get("frais");
  var salaire = url.searchParams.get("salaire");
  var nbJours = document.getElementById("nbJours").innerHTML = "20";
  var ca = tjm * nbJours ;
  var societe = 80.32;
  var caCalcule = ca ;
  var cainto100 = ca / 100 ;
  var remuneration = cainto100 * societe ;
  var remunerationCalcule = remuneration ;
  var remunerationAnnuelle = remunerationCalcule * 12;
  document.getElementById("mySociete").innerHTML = societe + "%";
  document.getElementById("myRemTotale").innerHTML = formatter1.format(remuneration);
  document.getElementById("myRemTotaleAnnuelle").innerHTML = formatter1.format(remunerationAnnuelle);
  document.getElementById("myTjm").innerHTML = formatter2.format(tjm); 
  document.getElementById("caTotal").innerHTML = formatter2.format(ca);
  document.getElementById("myFrais").innerHTML = formatter2.format(frais);
  var tjmMob = url.searchParams.get("tjm");
  var fraisMob = url.searchParams.get("frais");
  var salaireMob = url.searchParams.get("salaire");
  var nbJoursMob = document.getElementById("nbJoursMob").innerHTML = "20";
  var caMob = tjmMob * nbJoursMob ;
  var societeMob = 48.10;
  var caCalculeMob = caMob ;
  var cainto100Mob = caMob / 100 ;
  var remunerationMob = cainto100Mob * societeMob ;
  var remunerationCalculeMob = remunerationMob ;
  var remunerationAnnuelleMob = remunerationCalculeMob * 12;
  document.getElementById("mySocieteMob").innerHTML = societeMob + "%";
  document.getElementById("myRemTotaleMob").innerHTML = formatter1.format(remunerationMob);
  document.getElementById("myRemTotaleAnnuelleMob").innerHTML = formatter1.format(remunerationAnnuelleMob);
  document.getElementById("myTjmMob").innerHTML = formatter2.format(tjmMob); 
  document.getElementById("caTotalMob").innerHTML = formatter2.format(caMob);
  document.getElementById("myFraisMob").innerHTML = formatter2.format(fraisMob);
  var tjm1 = url.searchParams.get("tjm");
  var frais1 = url.searchParams.get("frais");
  var salaire1 = url.searchParams.get("salaire");
  var nbJours1 = document.getElementById("nbJours1").innerHTML = "20";
  var ca1 = tjm1 * nbJours1 ;
  var societe1 = 48.61;
  var caCalcule1 = ca1 ;
  var cainto1001 = ca1 / 100 ;
  var remuneration1 = cainto1001 * societe1 ;
  var remunerationCalcule1 = remuneration1 ;
  var remunerationAnnuelle1 = remunerationCalcule1 * 12;
  document.getElementById("mySociete1").innerHTML = societe1 + "%";
  document.getElementById("myRemTotale1").innerHTML = formatter1.format(remuneration1);
  document.getElementById("myRemTotaleAnnuelle1").innerHTML = formatter1.format(remunerationAnnuelle1);
  document.getElementById("myTjm1").innerHTML = formatter2.format(tjm1); 
  document.getElementById("caTotal1").innerHTML = formatter2.format(ca1);	
  document.getElementById("myFrais1").innerHTML = formatter2.format(frais1);	
  var tjmMob1 = url.searchParams.get("tjm");
  var fraisMob1 = url.searchParams.get("frais");
  var salaireMob1 = url.searchParams.get("salaire");
  var nbJoursMob1 = "20";
  var caMob1 = tjmMob1 * nbJoursMob1 ;
  var societeMob1 = 48.61;
  var caCalculeMob1 = caMob1 ;
  var cainto100Mob1 = caMob1 / 100 ;
  var remunerationMob1 = cainto100Mob1 * societeMob1 ;
  var remunerationCalculeMob1 = remunerationMob1 ;
  var remunerationAnnuelleMob1 = remunerationCalculeMob1 * 12;
  document.getElementById("mySocieteMob1").innerHTML = societeMob1 + "%";
  document.getElementById("myRemTotaleMob1").innerHTML = formatter1.format(remunerationMob1);
  document.getElementById("myRemTotaleAnnuelleMob1").innerHTML = formatter1.format(remunerationAnnuelleMob1);
  var tjm2 = url.searchParams.get("tjm");
  var frais2 = url.searchParams.get("frais");
  var salaire2 = url.searchParams.get("salaire");
  var nbJours2 = document.getElementById("nbJours2").innerHTML = "20";
  var ca2 = tjm2 * nbJours2 ;
  var societe2 = 49.34;
  var caCalcule2 = ca2 ;
  var cainto1002 = ca2 / 100 ;
  var remuneration2 = cainto1002 * societe2 ;
  var remunerationCalcule2 = remuneration2 ;
  var remunerationAnnuelle2 = remunerationCalcule2 * 12;
  document.getElementById("mySociete2").innerHTML = societe2 + "%";
  document.getElementById("myRemTotale2").innerHTML = formatter1.format(remuneration2);
  document.getElementById("myRemTotaleAnnuelle2").innerHTML = formatter1.format(remunerationAnnuelle2);
  document.getElementById("myTjm2").innerHTML = formatter2.format(tjm2); 
  document.getElementById("caTotal2").innerHTML = formatter2.format(ca2);	
  document.getElementById("myFrais2").innerHTML = formatter2.format(frais2);	
  var tjmMob2 = url.searchParams.get("tjm");
  var fraisMob2 = url.searchParams.get("frais");
  var salaireMob2 = url.searchParams.get("salaire");
  var nbJoursMob2 = "20";
  var caMob2 = tjmMob2 * nbJoursMob2 ;
  var societeMob2 = 49.34;
  var caCalculeMob2 = caMob2 ;
  var cainto100Mob2 = caMob2 / 100 ;
  var remunerationMob2 = cainto100Mob2 * societeMob2 ;
  var remunerationCalculeMob2 = remunerationMob2 ;
  var remunerationAnnuelleMob2 = remunerationCalculeMob2 * 12;
  document.getElementById("mySocieteMob2").innerHTML = societeMob2 + "%";
  document.getElementById("myRemTotaleMob2").innerHTML = formatter1.format(remunerationMob2);
  document.getElementById("myRemTotaleAnnuelleMob2").innerHTML = formatter1.format(remunerationAnnuelleMob2);
  var tjm3 = url.searchParams.get("tjm");
  var frais3 = url.searchParams.get("frais");
  var salaire3 = url.searchParams.get("salaire");
  var nbJours3 = document.getElementById("nbJours3").innerHTML = "20";
  var ca3 = tjm3 * nbJours3 ;
  var societe3 = 49.34;
  var caCalcule3 = ca3 ;
  var cainto1003 = ca3 / 100 ;
  var remuneration3 = cainto1003 * societe3 ;
  var remunerationCalcule3 = remuneration3 ;
  var remunerationAnnuelle3 = remunerationCalcule3 * 12;
  document.getElementById("mySociete3").innerHTML = societe3 + "%";
  document.getElementById("myRemTotale3").innerHTML = formatter1.format(remuneration3);
  document.getElementById("myRemTotaleAnnuelle3").innerHTML = formatter1.format(remunerationAnnuelle3);
  document.getElementById("myTjm3").innerHTML = formatter2.format(tjm3); 
  document.getElementById("caTotal3").innerHTML = formatter2.format(ca3);	
  document.getElementById("myFrais3").innerHTML = formatter2.format(frais3);	
  var tjmMob3 = url.searchParams.get("tjm");
  var fraisMob3 = url.searchParams.get("frais");
  var salaireMob3 = url.searchParams.get("salaire");
  var nbJoursMob3 = "20";
  var caMob3 = tjmMob3 * nbJoursMob3 ;
  var societeMob3 = 49.34;
  var caCalculeMob3 = caMob3 ;
  var cainto100Mob3 = caMob3 / 100 ;
  var remunerationMob3 = cainto100Mob3 * societeMob3 ;
  var remunerationCalculeMob3 = remunerationMob3 ;
  var remunerationAnnuelleMob3 = remunerationCalculeMob3 * 12;
  document.getElementById("mySocieteMob3").innerHTML = societeMob3 + "%";
  document.getElementById("myRemTotaleMob3").innerHTML = formatter1.format(remunerationMob3);
  document.getElementById("myRemTotaleAnnuelleMob3").innerHTML = formatter1.format(remunerationAnnuelleMob3);
  var tjm4 = url.searchParams.get("tjm");
  var frais4 = url.searchParams.get("frais");
  var salaire4 = url.searchParams.get("salaire");
  var nbJours4 = document.getElementById("nbJours4").innerHTML = "20";
  var ca4 = tjm4 * nbJours4 ;
  var societe4 = 49.57;
  var caCalcule4 = ca4 ;
  var cainto1004 = ca4 / 100 ;
  var remuneration4 = cainto1004 * societe4 ;
  var remunerationCalcule4 = remuneration4 ;
  var remunerationAnnuelle4 = remunerationCalcule4 * 12;
  document.getElementById("mySociete4").innerHTML = societe4 + "%";
  document.getElementById("myRemTotale4").innerHTML = formatter1.format(remuneration4);
  document.getElementById("myRemTotaleAnnuelle4").innerHTML = formatter1.format(remunerationAnnuelle4);
  document.getElementById("myTjm4").innerHTML = formatter2.format(tjm4); 
  document.getElementById("caTotal4").innerHTML = formatter2.format(ca4);	
  document.getElementById("myFrais4").innerHTML = formatter2.format(frais4);	
  var tjmMob4 = url.searchParams.get("tjm");
  var fraisMob4 = url.searchParams.get("frais");
  var salaireMob4 = url.searchParams.get("salaire");
  var nbJoursMob4 = "20";
  var caMob4 = tjmMob4 * nbJoursMob4 ;
	var societeMob4 = 49.57;
  var caCalculeMob4 = caMob4 ;
  var cainto100Mob4 = caMob4 / 100 ;
  var remunerationMob4 = cainto100Mob4 * societeMob4 ;
  var remunerationCalculeMob4 = remunerationMob4 ;
  var remunerationAnnuelleMob4 = remunerationCalculeMob4 * 12;
  document.getElementById("mySocieteMob4").innerHTML = societeMob4 + "%";
  document.getElementById("myRemTotaleMob4").innerHTML = formatter1.format(remunerationMob4);
  document.getElementById("myRemTotaleAnnuelleMob4").innerHTML = formatter1.format(remunerationAnnuelleMob4);
  var tjm5 = url.searchParams.get("tjm");
  var frais5 = url.searchParams.get("frais");
  var salaire5 = url.searchParams.get("salaire");
  var nbJours5 = document.getElementById("nbJours5").innerHTML = "20";
  var ca5 = tjm5 * nbJours5 ;
  var societe5 = 49.62;
  var caCalcule5 = ca5 ;
  var cainto1005 = ca5 / 100 ;
  var remuneration5 = cainto1005 * societe5 ;
  var remunerationCalcule5 = remuneration5 ;
  var remunerationAnnuelle5 = remunerationCalcule5 * 12;
  document.getElementById("mySociete5").innerHTML = societe5 + "%";
  document.getElementById("myRemTotale5").innerHTML = formatter1.format(remuneration5);
  document.getElementById("myRemTotaleAnnuelle5").innerHTML = formatter1.format(remunerationAnnuelle5);
  document.getElementById("myTjm5").innerHTML = formatter2.format(tjm5); 
  document.getElementById("caTotal5").innerHTML = formatter2.format(ca5);	
  document.getElementById("myFrais5").innerHTML = formatter2.format(frais5);
  var tjmMob5 = url.searchParams.get("tjm");
  var fraisMob5 = url.searchParams.get("frais");
  var salaireMob5 = url.searchParams.get("salaire");
  var nbJoursMob5 = "20";
  var caMob5 = tjmMob5 * nbJoursMob5 ;
  var societeMob5 = 49.62;
  var caCalculeMob5 = caMob5 ;
  var cainto100Mob5 = caMob5 / 100 ;
  var remunerationMob5 = cainto100Mob5 * societeMob5 ;
  var remunerationCalculeMob5 = remunerationMob5 ;
  var remunerationAnnuelleMob5 = remunerationCalculeMob5 * 12;
  document.getElementById("mySocieteMob5").innerHTML = societeMob5 + "%";
  document.getElementById("myRemTotaleMob5").innerHTML = formatter1.format(remunerationMob5);
  document.getElementById("myRemTotaleAnnuelleMob5").innerHTML = formatter1.format(remunerationAnnuelleMob5);
  var tjm6 = url.searchParams.get("tjm");
  var frais6 = url.searchParams.get("frais");
  var salaire6 = url.searchParams.get("salaire");
  var nbJours6 = document.getElementById("nbJours6").innerHTML = "20";
  var ca6 = tjm6 * nbJours6 ;
  var societe6 = 49.90;
  var caCalcule6 = ca6 ;
  var cainto1006 = ca6 / 100 ;
  var remuneration6 = cainto1006 * societe6 ;
  var remunerationCalcule6 = remuneration6 ;
  var remunerationAnnuelle6 = remunerationCalcule6 * 12;
  document.getElementById("mySociete6").innerHTML = societe6 + "%";
  document.getElementById("myRemTotale6").innerHTML = formatter1.format(remuneration6);
  document.getElementById("myRemTotaleAnnuelle6").innerHTML = formatter1.format(remunerationAnnuelle6);
  document.getElementById("myTjm6").innerHTML = formatter2.format(tjm6); 
  document.getElementById("caTotal6").innerHTML = formatter2.format(ca6);	
  document.getElementById("myFrais6").innerHTML = formatter2.format(frais6);	
  var tjmMob6 = url.searchParams.get("tjm");
  var fraisMob6 = url.searchParams.get("frais");
  var salaireMob6 = url.searchParams.get("salaire");
  var nbJoursMob6 = "20";
  var caMob6 = tjmMob6 * nbJoursMob6 ;
  var societeMob6 = 49.90;
  var caCalculeMob6 = caMob6 ;
  var cainto100Mob6 = caMob6 / 100 ;
  var remunerationMob6 = cainto100Mob6 * societeMob6 ;
  var remunerationCalculeMob6 = remunerationMob6 ;
  var remunerationAnnuelleMob6 = remunerationCalculeMob6 * 12;
  document.getElementById("mySocieteMob6").innerHTML = societeMob6 + "%";
  document.getElementById("myRemTotaleMob6").innerHTML = formatter1.format(remunerationMob6);
  document.getElementById("myRemTotaleAnnuelleMob6").innerHTML = formatter1.format(remunerationAnnuelleMob6);
    var tjm7 = url.searchParams.get("tjm");
  var frais7 = url.searchParams.get("frais");
  var salaire7 = url.searchParams.get("salaire");
  var nbJours7 = document.getElementById("nbJours7").innerHTML = "20";
  var ca7 = tjm7 * nbJours7 ;
	var societe7 = 50.00;
  var caCalcule7 = ca7 ;
  var cainto1007 = ca7 / 100 ;
  var remuneration7 = cainto1007 * societe7 ;
  var remunerationCalcule7 = remuneration7 ;
  var remunerationAnnuelle7 = remunerationCalcule7 * 12;
  document.getElementById("mySociete7").innerHTML = societe7 + "%";
  document.getElementById("myRemTotale7").innerHTML = formatter1.format(remuneration7);
  document.getElementById("myRemTotaleAnnuelle7").innerHTML = formatter1.format(remunerationAnnuelle7);
  document.getElementById("myTjm7").innerHTML = formatter2.format(tjm7); 
  document.getElementById("caTotal7").innerHTML = formatter2.format(ca7);	
  document.getElementById("myFrais7").innerHTML = formatter2.format(frais7);	
  var tjmMob7 = url.searchParams.get("tjm");
  var fraisMob7 = url.searchParams.get("frais");
  var salaireMob7 = url.searchParams.get("salaire");
  var nbJoursMob7 = "20";
  var caMob7 = tjmMob7 * nbJoursMob7 ;
  var societeMob7 = 50.00;
  var caCalculeMob7 = caMob7 ;
  var cainto100Mob7 = caMob7 / 100 ;
  var remunerationMob7 = cainto100Mob7 * societeMob7 ;
  var remunerationCalculeMob7 = remunerationMob7 ;
  var remunerationAnnuelleMob7 = remunerationCalculeMob7 * 12;
  document.getElementById("mySocieteMob7").innerHTML = societeMob7 + "%";
  document.getElementById("myRemTotaleMob7").innerHTML = formatter1.format(remunerationMob7);
  document.getElementById("myRemTotaleAnnuelleMob7").innerHTML = formatter1.format(remunerationAnnuelleMob7);
  var tjm8 = url.searchParams.get("tjm");
  var frais8 = url.searchParams.get("frais");
  var salaire8 = url.searchParams.get("salaire");
  var nbJours8 = document.getElementById("nbJours8").innerHTML = "20";
  var ca8 = tjm8 * nbJours8 ;
  var societe8 = 50.00;
  var caCalcule8 = ca8 ;
  var cainto1008 = ca8 / 100 ;
  var remuneration8 = cainto1008 * societe8 ;
  var remunerationCalcule8 = remuneration8 ;
  var remunerationAnnuelle8 = remunerationCalcule8 * 12;
  document.getElementById("mySociete8").innerHTML = societe8 + "%";
  document.getElementById("myRemTotale8").innerHTML = formatter1.format(remuneration8);
  document.getElementById("myRemTotaleAnnuelle8").innerHTML = formatter1.format(remunerationAnnuelle8);
  document.getElementById("myTjm8").innerHTML = formatter2.format(tjm8); 
  document.getElementById("caTotal8").innerHTML = formatter2.format(ca8);	
  document.getElementById("myFrais8").innerHTML = formatter2.format(frais8);	
  var tjmMob8 = url.searchParams.get("tjm");
  var fraisMob8 = url.searchParams.get("frais");
  var salaireMob8 = url.searchParams.get("salaire");
  var nbJoursMob8 = "20";
  var caMob8 = tjmMob8 * nbJoursMob8 ;
  var societeMob8 = 50.00;
  var caCalculeMob8 = caMob8 ;
  var cainto100Mob8 = caMob8 / 100 ;
  var remunerationMob8 = cainto100Mob8 * societeMob8 ;
  var remunerationCalculeMob8 = remunerationMob8 ;
  var remunerationAnnuelleMob8 = remunerationCalculeMob8 * 12;
  document.getElementById("mySocieteMob8").innerHTML = societeMob8 + "%";
  document.getElementById("myRemTotaleMob8").innerHTML = formatter1.format(remunerationMob8);
  document.getElementById("myRemTotaleAnnuelleMob8").innerHTML = formatter1.format(remunerationAnnuelleMob8);
  var tjm9 = url.searchParams.get("tjm");
  var frais9 = url.searchParams.get("frais");
  var salaire9 = url.searchParams.get("salaire");
  var nbJours9 = document.getElementById("nbJours9").innerHTML = "20";
  var ca9 = tjm9 * nbJours9 ;
  var societe9 = 50.00;
  var caCalcule9 = ca9 ;
  var cainto1009 = ca9 / 100 ;
  var remuneration9 = cainto1009 * societe9 ;
  var remunerationCalcule9 = remuneration9 ;
  var remunerationAnnuelle9 = remunerationCalcule9 * 12;
  document.getElementById("mySociete9").innerHTML = societe9 + "%";
  document.getElementById("myRemTotale9").innerHTML = formatter1.format(remuneration9);
  document.getElementById("myRemTotaleAnnuelle9").innerHTML = formatter1.format(remunerationAnnuelle9);
  document.getElementById("myTjm9").innerHTML = formatter2.format(tjm9); 
  document.getElementById("caTotal9").innerHTML = formatter2.format(ca9);	
  document.getElementById("myFrais9").innerHTML = formatter2.format(frais9);	
  var tjmMob9 = url.searchParams.get("tjm");
  var fraisMob9 = url.searchParams.get("frais");
  var salaireMob9 = url.searchParams.get("salaire");
  var nbJoursMob9 = "20";
  var caMob9 = tjmMob9 * nbJoursMob9 ;
  var societeMob9 = 50.00;
  var caCalculeMob9 = caMob9 ;
  var cainto100Mob9 = caMob9 / 100 ;
  var remunerationMob9 = cainto100Mob9 * societeMob9 ;
  var remunerationCalculeMob9 = remunerationMob9 ;
  var remunerationAnnuelleMob9 = remunerationCalculeMob9 * 12;
  document.getElementById("mySocieteMob9").innerHTML = societeMob9 + "%";
  document.getElementById("myRemTotaleMob9").innerHTML = formatter1.format(remunerationMob9);
  document.getElementById("myRemTotaleAnnuelleMob9").innerHTML = formatter1.format(remunerationAnnuelleMob9);
  var tjm10 = url.searchParams.get("tjm");
  var frais10 = url.searchParams.get("frais");
  var salaire10 = url.searchParams.get("salaire");
  var nbJours10 = document.getElementById("nbJours10").innerHTML = "20";
  var ca10 = tjm10 * nbJours10 ;
  var societe10 = 50.50;
  var caCalcule10 = ca10 ;
  var cainto10010 = ca10 / 100 ;
  var remuneration10 = cainto10010 * societe10 ;
  var remunerationCalcule10 = remuneration10 ;
  var remunerationAnnuelle10 = remunerationCalcule10 * 12;
  document.getElementById("mySociete10").innerHTML = societe10 + "%";
  document.getElementById("myRemTotale10").innerHTML = formatter1.format(remuneration10);
  document.getElementById("myRemTotaleAnnuelle10").innerHTML = formatter1.format(remunerationAnnuelle10);
  document.getElementById("myTjm10").innerHTML = formatter2.format(tjm10); 
  document.getElementById("caTotal10").innerHTML = formatter2.format(ca10);	
  document.getElementById("myFrais10").innerHTML = formatter2.format(frais10);	
  var tjmMob10 = url.searchParams.get("tjm");
  var fraisMob10 = url.searchParams.get("frais");
  var salaireMob10 = url.searchParams.get("salaire");
  var nbJoursMob10 = "20";
  var caMob10 = tjmMob10 * nbJoursMob10 ;
  var societeMob10 = 50.50;
  var caCalculeMob10 = caMob10 ;
  var cainto100Mob10 = caMob10 / 100 ;
  var remunerationMob10 = cainto100Mob10 * societeMob10 ;
  var remunerationCalculeMob10 = remunerationMob10 ;
  var remunerationAnnuelleMob10 = remunerationCalculeMob10 * 12;
  document.getElementById("mySocieteMob10").innerHTML = societeMob10 + "%";
  document.getElementById("myRemTotaleMob10").innerHTML = formatter1.format(remunerationMob10);
  document.getElementById("myRemTotaleAnnuelleMob10").innerHTML = formatter1.format(remunerationAnnuelleMob10);
  
var tjm11 = url.searchParams.get("tjm");
  var frais11 = url.searchParams.get("frais");
  var salaire11 = url.searchParams.get("salaire");
  var nbJours11 = document.getElementById("nbJours11").innerHTML = "20";
  var ca11 = tjm11 * nbJours11 ;
  var societe11 = 50.53;
  var caCalcule11 = ca11 ;
  var cainto11011 = ca11 / 110 ;
  var remuneration11 = cainto11011 * societe11 ;
  var remunerationCalcule11 = remuneration11 ;
  var remunerationAnnuelle11 = remunerationCalcule11 * 12;
  document.getElementById("mySociete11").innerHTML = societe11 + "%";
  document.getElementById("myRemTotale11").innerHTML = formatter1.format(remuneration11);
  document.getElementById("myRemTotaleAnnuelle11").innerHTML = formatter1.format(remunerationAnnuelle11);
  document.getElementById("myTjm11").innerHTML = formatter2.format(tjm11); 
  document.getElementById("caTotal11").innerHTML = formatter2.format(ca11);	
  document.getElementById("myFrais11").innerHTML = formatter2.format(frais11);	
  var tjmMob11 = url.searchParams.get("tjm");
  var fraisMob11 = url.searchParams.get("frais");
  var salaireMob11 = url.searchParams.get("salaire");
  var nbJoursMob11 = "20";
  var caMob11 = tjmMob11 * nbJoursMob11 ;
var societeMob11 = 50.53;
  var caCalculeMob11 = caMob11 ;
  var cainto110Mob11 = caMob11 / 110 ;
  var remunerationMob11 = cainto110Mob11 * societeMob11 ;
  var remunerationCalculeMob11 = remunerationMob11 ;
  var remunerationAnnuelleMob11 = remunerationCalculeMob11 * 12;
  document.getElementById("mySocieteMob11").innerHTML = societeMob11 + "%";
  document.getElementById("myRemTotaleMob11").innerHTML = formatter1.format(remunerationMob11);
  document.getElementById("myRemTotaleAnnuelleMob11").innerHTML = formatter1.format(remunerationAnnuelleMob11);

  var tjm12 = url.searchParams.get("tjm");
  var frais12 = url.searchParams.get("frais");
  var salaire12 = url.searchParams.get("salaire");
  var nbJours12 = document.getElementById("nbJours12").innerHTML = "20";
  var ca12 = tjm12 * nbJours12 ;
	var societe12 = 50.60;
  var caCalcule12 = ca12 ;
  var cainto12012 = ca12 / 120 ;
  var remuneration12 = cainto12012 * societe12 ;
  var remunerationCalcule12 = remuneration12 ;
  var remunerationAnnuelle12 = remunerationCalcule12 * 12;
  document.getElementById("mySociete12").innerHTML = societe12 + "%";
  document.getElementById("myRemTotale12").innerHTML = formatter1.format(remuneration12);
  document.getElementById("myRemTotaleAnnuelle12").innerHTML = formatter1.format(remunerationAnnuelle12);
  document.getElementById("myTjm12").innerHTML = formatter2.format(tjm12); 
  document.getElementById("caTotal12").innerHTML = formatter2.format(ca12);	
  document.getElementById("myFrais12").innerHTML = formatter2.format(frais12);	
  var tjmMob12 = url.searchParams.get("tjm");
  var fraisMob12 = url.searchParams.get("frais");
  var salaireMob12 = url.searchParams.get("salaire");
  var nbJoursMob12 = "20";
  var caMob12 = tjmMob12 * nbJoursMob12 ;
	var societeMob12 = 50.60;
  var caCalculeMob12 = caMob12 ;
  var cainto120Mob12 = caMob12 / 120 ;
  var remunerationMob12 = cainto120Mob12 * societeMob12 ;
  var remunerationCalculeMob12 = remunerationMob12 ;
  var remunerationAnnuelleMob12 = remunerationCalculeMob12 * 12;
  document.getElementById("mySocieteMob12").innerHTML = societeMob12 + "%";
  document.getElementById("myRemTotaleMob12").innerHTML = formatter1.format(remunerationMob12);
  document.getElementById("myRemTotaleAnnuelleMob12").innerHTML = formatter1.format(remunerationAnnuelleMob12);

  var tjm13 = url.searchParams.get("tjm");
  var frais13 = url.searchParams.get("frais");
  var salaire13 = url.searchParams.get("salaire");
  var nbJours13 = document.getElementById("nbJours13").innerHTML = "20";
  var ca13 = tjm13 * nbJours13 ;
	var societe13 = 50.60;
  var caCalcule13 = ca13 ;
  var cainto13013 = ca13 / 130 ;
  var remuneration13 = cainto13013 * societe13 ;
  var remunerationCalcule13 = remuneration13 ;
  var remunerationAnnuelle13 = remunerationCalcule13 * 12;
  document.getElementById("mySociete13").innerHTML = societe13 + "%";
  document.getElementById("myRemTotale13").innerHTML = formatter1.format(remuneration13);
  document.getElementById("myRemTotaleAnnuelle13").innerHTML = formatter1.format(remunerationAnnuelle13);
  document.getElementById("myTjm13").innerHTML = formatter2.format(tjm13); 
  document.getElementById("caTotal13").innerHTML = formatter2.format(ca13);	
  document.getElementById("myFrais13").innerHTML = formatter2.format(frais13);	
  var tjmMob13 = url.searchParams.get("tjm");
  var fraisMob13 = url.searchParams.get("frais");
  var salaireMob13 = url.searchParams.get("salaire");
  var nbJoursMob13 = "20";
  var caMob13 = tjmMob13 * nbJoursMob13 ;
	var societeMob13 = 50.60;
  var caCalculeMob13 = caMob13 ;
  var cainto130Mob13 = caMob13 / 130 ;
  var remunerationMob13 = cainto130Mob13 * societeMob13 ;
  var remunerationCalculeMob13 = remunerationMob13 ;
  var remunerationAnnuelleMob13 = remunerationCalculeMob13 * 12;
  document.getElementById("mySocieteMob13").innerHTML = societeMob13 + "%";
  document.getElementById("myRemTotaleMob13").innerHTML = formatter1.format(remunerationMob13);
  document.getElementById("myRemTotaleAnnuelleMob13").innerHTML = formatter1.format(remunerationAnnuelleMob13);

  var tjm14 = url.searchParams.get("tjm");
  var frais14 = url.searchParams.get("frais");
  var salaire14 = url.searchParams.get("salaire");
  var nbJours14 = document.getElementById("nbJours14").innerHTML = "20";
  var ca14 = tjm14 * nbJours14 ;
	var societe14 = 50.76;
  var caCalcule14 = ca14 ;
  var cainto14014 = ca14 / 140 ;
  var remuneration14 = cainto14014 * societe14 ;
  var remunerationCalcule14 = remuneration14 ;
  var remunerationAnnuelle14 = remunerationCalcule14 * 12;
  document.getElementById("mySociete14").innerHTML = societe14 + "%";
  document.getElementById("myRemTotale14").innerHTML = formatter1.format(remuneration14);
  document.getElementById("myRemTotaleAnnuelle14").innerHTML = formatter1.format(remunerationAnnuelle14);
  document.getElementById("myTjm14").innerHTML = formatter2.format(tjm14); 
  document.getElementById("caTotal14").innerHTML = formatter2.format(ca14);	
  document.getElementById("myFrais14").innerHTML = formatter2.format(frais14);	
  var tjmMob14 = url.searchParams.get("tjm");
  var fraisMob14 = url.searchParams.get("frais");
  var salaireMob14 = url.searchParams.get("salaire");
  var nbJoursMob14 = "20";
  var caMob14 = tjmMob14 * nbJoursMob14 ;
	var societeMob14 = 50.76;
  var caCalculeMob14 = caMob14 ;
  var cainto140Mob14 = caMob14 / 140 ;
  var remunerationMob14 = cainto140Mob14 * societeMob14 ;
  var remunerationCalculeMob14 = remunerationMob14 ;
  var remunerationAnnuelleMob14 = remunerationCalculeMob14 * 12;
  document.getElementById("mySocieteMob14").innerHTML = societeMob14 + "%";
  document.getElementById("myRemTotaleMob14").innerHTML = formatter1.format(remunerationMob14);
  document.getElementById("myRemTotaleAnnuelleMob14").innerHTML = formatter1.format(remunerationAnnuelleMob14);
  var tjm15 = url.searchParams.get("tjm");
  var frais15 = url.searchParams.get("frais");
  var salaire15 = url.searchParams.get("salaire");
  var nbJours15 = document.getElementById("nbJours15").innerHTML = "20";
  var ca15 = tjm15 * nbJours15 ;
	var societe15 = 51.00;
  var caCalcule15 = ca15 ;
  var cainto15015 = ca15 / 150 ;
  var remuneration15 = cainto15015 * societe15 ;
  var remunerationCalcule15 = remuneration15 ;
  var remunerationAnnuelle15 = remunerationCalcule15 * 12;
  document.getElementById("mySociete15").innerHTML = societe15 + "%";
  document.getElementById("myRemTotale15").innerHTML = formatter1.format(remuneration15);
  document.getElementById("myRemTotaleAnnuelle15").innerHTML = formatter1.format(remunerationAnnuelle15);
  document.getElementById("myTjm15").innerHTML = formatter2.format(tjm15); 
  document.getElementById("caTotal15").innerHTML = formatter2.format(ca15);	
  document.getElementById("myFrais15").innerHTML = formatter2.format(frais15);	
  var tjmMob15 = url.searchParams.get("tjm");
  var fraisMob15 = url.searchParams.get("frais");
  var salaireMob15 = url.searchParams.get("salaire");
  var nbJoursMob15 = "20";
  var caMob15 = tjmMob15 * nbJoursMob15 ;
	var societeMob15 = 51.00;
  var caCalculeMob15 = caMob15 ;
  var cainto150Mob15 = caMob15 / 150 ;
  var remunerationMob15 = cainto150Mob15 * societeMob15 ;
  var remunerationCalculeMob15 = remunerationMob15 ;
  var remunerationAnnuelleMob15 = remunerationCalculeMob15 * 12;
  document.getElementById("mySocieteMob15").innerHTML = societeMob15 + "%";
  document.getElementById("myRemTotaleMob15").innerHTML = formatter1.format(remunerationMob15);
  document.getElementById("myRemTotaleAnnuelleMob15").innerHTML = formatter1.format(remunerationAnnuelleMob15);
  var tjm16 = url.searchParams.get("tjm");
  var frais16 = url.searchParams.get("frais");
  var salaire16 = url.searchParams.get("salaire");
  var nbJours16 = document.getElementById("nbJours16").innerHTML = "20";
  var ca16 = tjm16 * nbJours16 ;
	var societe16 = 51.10;
  var caCalcule16 = ca16 ;
  var cainto16016 = ca16 / 160 ;
  var remuneration16 = cainto16016 * societe16 ;
  var remunerationCalcule16 = remuneration16 ;
  var remunerationAnnuelle16 = remunerationCalcule16 * 12;
  document.getElementById("mySociete16").innerHTML = societe16 + "%";
  document.getElementById("myRemTotale16").innerHTML = formatter1.format(remuneration16);
  document.getElementById("myRemTotaleAnnuelle16").innerHTML = formatter1.format(remunerationAnnuelle16);
  document.getElementById("myTjm16").innerHTML = formatter2.format(tjm16); 
  document.getElementById("caTotal16").innerHTML = formatter2.format(ca16);	
  document.getElementById("myFrais16").innerHTML = formatter2.format(frais16);	
  var tjmMob16 = url.searchParams.get("tjm");
  var fraisMob16 = url.searchParams.get("frais");
  var salaireMob16 = url.searchParams.get("salaire");
  var nbJoursMob16 = "20";
  var caMob16 = tjmMob16 * nbJoursMob16 ;
	var societeMob16 = 51.10;
  var caCalculeMob16 = caMob16 ;
  var cainto160Mob16 = caMob16 / 160 ;
  var remunerationMob16 = cainto160Mob16 * societeMob16 ;
  var remunerationCalculeMob16 = remunerationMob16 ;
  var remunerationAnnuelleMob16 = remunerationCalculeMob16 * 12;
  document.getElementById("mySocieteMob16").innerHTML = societeMob16 + "%";
  document.getElementById("myRemTotaleMob16").innerHTML = formatter1.format(remunerationMob16);
  document.getElementById("myRemTotaleAnnuelleMob16").innerHTML = formatter1.format(remunerationAnnuelleMob16);
  var tjm17 = url.searchParams.get("tjm");
  var frais17 = url.searchParams.get("frais");
  var salaire17 = url.searchParams.get("salaire");
  var nbJours17 = document.getElementById("nbJours17").innerHTML = "20";
  var ca17 = tjm17 * nbJours17 ;
	var societe17 = 51.70;
  var caCalcule17 = ca17 ;
  var cainto17017 = ca17 / 170 ;
  var remuneration17 = cainto17017 * societe17 ;
  var remunerationCalcule17 = remuneration17 ;
  var remunerationAnnuelle17 = remunerationCalcule17 * 12;
  document.getElementById("mySociete17").innerHTML = societe17 + "%";
  document.getElementById("myRemTotale17").innerHTML = formatter1.format(remuneration17);
  document.getElementById("myRemTotaleAnnuelle17").innerHTML = formatter1.format(remunerationAnnuelle17);
  document.getElementById("myTjm17").innerHTML = formatter2.format(tjm17); 
  document.getElementById("caTotal17").innerHTML = formatter2.format(ca17);	
  document.getElementById("myFrais17").innerHTML = formatter2.format(frais17);	
  var tjmMob17 = url.searchParams.get("tjm");
  var fraisMob17 = url.searchParams.get("frais");
  var salaireMob17 = url.searchParams.get("salaire");
  var nbJoursMob17 = "20";
  var caMob17 = tjmMob17 * nbJoursMob17 ;
	var societeMob17 = 51.70;
  var caCalculeMob17 = caMob17 ;
  var cainto170Mob17 = caMob17 / 170 ;
  var remunerationMob17 = cainto170Mob17 * societeMob17 ;
  var remunerationCalculeMob17 = remunerationMob17 ;
  var remunerationAnnuelleMob17 = remunerationCalculeMob17 * 12;
  document.getElementById("mySocieteMob17").innerHTML = societeMob17 + "%";
  document.getElementById("myRemTotaleMob17").innerHTML = formatter1.format(remunerationMob17);
  document.getElementById("myRemTotaleAnnuelleMob17").innerHTML = formatter1.format(remunerationAnnuelleMob17);
  var tjm18 = url.searchParams.get("tjm");
  var frais18 = url.searchParams.get("frais");
  var salaire18 = url.searchParams.get("salaire");
  var nbJours18 = document.getElementById("nbJours18").innerHTML = "20";
  var ca18 = tjm18 * nbJours18 ;
	var societe18 = 55.16;
  var caCalcule18 = ca18 ;
  var cainto18018 = ca18 / 180 ;
  var remuneration18 = cainto18018 * societe18 ;
  var remunerationCalcule18 = remuneration18 ;
  var remunerationAnnuelle18 = remunerationCalcule18 * 12;
  document.getElementById("mySociete18").innerHTML = societe18 + "%";
  document.getElementById("myRemTotale18").innerHTML = formatter1.format(remuneration18);
  document.getElementById("myRemTotaleAnnuelle18").innerHTML = formatter1.format(remunerationAnnuelle18);
  document.getElementById("myTjm18").innerHTML = formatter2.format(tjm18); 
  document.getElementById("caTotal18").innerHTML = formatter2.format(ca18);	
  document.getElementById("myFrais18").innerHTML = formatter2.format(frais18);	
  var tjmMob18 = url.searchParams.get("tjm");
  var fraisMob18 = url.searchParams.get("frais");
  var salaireMob18 = url.searchParams.get("salaire");
  var nbJoursMob18 = "20";
  var caMob18 = tjmMob18 * nbJoursMob18 ;
var societeMob18 = 55.16;
  var caCalculeMob18 = caMob18 ;
  var cainto180Mob18 = caMob18 / 180 ;
  var remunerationMob18 = cainto180Mob18 * societeMob18 ;
  var remunerationCalculeMob18 = remunerationMob18 ;
  var remunerationAnnuelleMob18 = remunerationCalculeMob18 * 12;
  document.getElementById("mySocieteMob18").innerHTML = societeMob18 + "%";
  document.getElementById("myRemTotaleMob18").innerHTML = formatter1.format(remunerationMob18);
  document.getElementById("myRemTotaleAnnuelleMob18").innerHTML = formatter1.format(remunerationAnnuelleMob18);
  var tjm19 = url.searchParams.get("tjm");
  var frais19 = url.searchParams.get("frais");
  var salaire19 = url.searchParams.get("salaire");
  var nbJours19 = document.getElementById("nbJours19").innerHTML = "20";
  var ca19 = tjm19 * nbJours19 ;
	var societe19 = 70.00;
  var caCalcule19 = ca19 ;
  var cainto19019 = ca19 / 190 ;
  var remuneration19 = cainto19019 * societe19 ;
  var remunerationCalcule19 = remuneration19 ;
  var remunerationAnnuelle19 = remunerationCalcule19 * 12;
  document.getElementById("mySociete19").innerHTML = societe19 + "%";
  document.getElementById("myRemTotale19").innerHTML = formatter1.format(remuneration19);
  document.getElementById("myRemTotaleAnnuelle19").innerHTML = formatter1.format(remunerationAnnuelle19);
  document.getElementById("myTjm19").innerHTML = formatter2.format(tjm19); 
  document.getElementById("caTotal19").innerHTML = formatter2.format(ca19);	
  document.getElementById("myFrais19").innerHTML = formatter2.format(frais19);	
  var tjmMob19 = url.searchParams.get("tjm");
  var fraisMob19 = url.searchParams.get("frais");
  var salaireMob19 = url.searchParams.get("salaire");
  var nbJoursMob19 = "20";
  var caMob19 = tjmMob19 * nbJoursMob19 ;
var societeMob19 = 70.00;
  var caCalculeMob19 = caMob19 ;
  var cainto190Mob19 = caMob19 / 190 ;
  var remunerationMob19 = cainto190Mob19 * societeMob19 ;
  var remunerationCalculeMob19 = remunerationMob19 ;
  var remunerationAnnuelleMob19 = remunerationCalculeMob19 * 12;
  document.getElementById("mySocieteMob19").innerHTML = societeMob19 + "%";
  document.getElementById("myRemTotaleMob19").innerHTML = formatter1.format(remunerationMob19);
  document.getElementById("myRemTotaleAnnuelleMob19").innerHTML = formatter1.format(remunerationAnnuelleMob19); 

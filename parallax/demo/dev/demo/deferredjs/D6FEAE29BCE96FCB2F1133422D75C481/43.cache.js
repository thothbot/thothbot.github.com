function eY(){}
function Ztc(a){this.b=a}
function aY(a){Bh(this,(Q1(),a))}
function bY(){var a;!_X&&(_X=new eY);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new aY(a)}
function Utc(){Gbc.call(this);this.u=new VOb('./static/textures/planets/titan.jpg');this.o=new VOb(tUc);this.q=new VOb(bWc);this.r=new VOb(cWc);this.s=new VOb(dWc);this.t=0;this.b=bY()}
function Ttc(a){var b,c,d;b=new p$b(16777215);B8b(b.ab,800,-96.42880000000001,0);b.T=true;b.J=2048;b.H=2048;b.B=1;b.A=1500;b.v=-0.005;b.F=0.85;qQb(a.I,b);c=new l5b(16777215);g5b(c,0.985,0.5,1.35);d=new CHc(a.q,flb(700),(U_b(),N_b),c);AHc(d,a.r,flb(512),new zkb(0),N_b,null,null);AHc(d,a.r,flb(512),new zkb(0),N_b,null,null);AHc(d,a.r,flb(512),new zkb(0),N_b,null,null);AHc(d,a.s,flb(60),new zkb(0.6),N_b,null,null);AHc(d,a.s,flb(70),new zkb(0.7),N_b,null,null);AHc(d,a.s,flb(120),new zkb(0.9),N_b,null,null);AHc(d,a.s,flb(70),new zkb(1),N_b,null,null);BHc(d,new Ztc(d));d.ab.ef(b.ab);qQb(a.I,d)}
var rWc='com.google.gwt.media.client.';PV(311,86,LMc);PV(310,311,LMc,aY);var _X;PV(313,1,{});PV(312,313,{},eY);PV(1249,1,pOc);_.Qb=function Rtc(){gbc(this.c,new Utc(this.b))};PV(1250,984,{341:1},Utc);_.ob=function Vtc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.d=new uRb(50,zGb(this.H.n),50,10000000);W7b(this.d.ab,500);this.e=nRb(this.d);V7b(this.e.ab,50);i=new p1b;m1b(i,new VOb('./static/textures/stars_skybox.jpg'));g=new wZb(new UXb(900,60,40),i);V7b(g.fb,-1);qQb(this.I,g);this.f=new YQb;IOb(this.f.i,(dFb(),$Eb));qQb(this.I,this.f);j=new u9b;e=new m3b;o=new VOb('./static/textures/planets/saturn.jpg');e.w=o;e.I=15;_2b(e,new l5b(0));j3b(e,new l5b(3355443));k=new UXb(120.536,100,50);this.k=new wZb(k,e);vQb(this.k,true);this.k.V=true;qQb(j,this.k);a=new i2b;a.Z=true;e2b(a,new VOb('./static/textures/planets/saturnClouds.png'));this.g=new wZb(k,a);A8b(this.g.fb,1.005);B5b(this.g.db,3.141592653589793);qQb(j,this.g);d=new i2b;d.Z=true;e2b(d,new VOb('./static/textures/planets/saturnRings.png'));t_b(d,(f1b(),d1b));n=new wZb(new RXb(120.536,265.882,20,5),d);z5b(n.db,1.5707963267948966);n.T=true;n.V=true;qQb(j,n);B5b(j.db,-0.4808382089244377);qQb(this.I,j);f=new m3b;f3b(f,this.u);this.n=new wZb(k,f);B8b(this.n.ab,1205.3600000000001,0,0);A8b(this.n.fb,0.23);qQb(this.I,this.n);b=new m3b;f3b(b,this.o);this.i=new wZb(k,b);B8b(this.i.ab,301.34000000000003,0,0);A8b(this.i.fb,0.13);vQb(this.i,true);qQb(this.I,this.i);c=new m3b;f3b(c,this.o);this.j=new wZb(k,c);B8b(this.j.ab,602.6800000000001,0,0);A8b(this.j.fb,0.15);vQb(this.j,true);qQb(this.I,this.j);new JHc(this.H.n,this.I);Ttc(this);new aHb(this.H.n,this.I);this.H.n.Y=true;this.H.n.Z=true;fIb(this.H.n,new l5b(16777215),1);this.p=Ii()};_.Fd=function Wtc(){ZX(this.b).pause()};_.pb=function Xtc(a){var b;!!ZX(this.b).paused&&(ZX(this.b).play(),undefined);b=(Ii()-this.p)*0.001;if(a<24800||a>70000&&a<82000){this.t+=0.07;W7b(this.e.ab,275.882*zlb(this.t*3.141592653589793/180));D8b(this.e.ab,-265.882+275.882*Ilb(this.t*3.141592653589793/180));QQb(this.e,this.k.ab);this.c=this.e}else{this.t=0;V7b(this.d.ab,964.288*Math.cos(5.0E-5*a));D8b(this.d.ab,1084.824*Math.sin(5.0E-5*a));QQb(this.d,this.k.ab);this.c=this.d}s5b(this.k.db,0.02*b);s5b(this.g.db,-0.064*b);V7b(this.i.ab,301.34000000000003*Math.cos(3.0E-4*a));D8b(this.i.ab,301.34000000000003*Math.sin(3.0E-4*a));V7b(this.j.ab,602.6800000000001*Math.cos(1.0E-4*a));D8b(this.j.ab,602.6800000000001*Math.sin(1.0E-4*a));V7b(this.n.ab,843.752*Math.cos(7.0E-5*a));D8b(this.n.ab,843.752*Math.sin(7.0E-5*a));XQb(this.f,this.H.n,this.I);XHb(this.H.n,this.I,this.c,null,false);this.p=Ii()};_.p=0;_.t=0;PV(1251,1,{},Ztc);_.tf=function $tc(){var a,b,c,d;c=-this.b.c.d*2;d=-this.b.c.e*2;for(a=0;a<this.b.b.c;a++){b=Lv(grb(this.b.b,a),354);b.n=this.b.c.d+c*b.d;b.o=this.b.c.e+d*b.d;b.f=0}Lv(grb(this.b.b,2),354).o+=0.025;Lv(grb(this.b.b,3),354).f=this.b.c.d*0.5+0.7853981633974483};var RP=nkb(qTc,'Saturn$DemoScene',1250),QP=nkb(qTc,'Saturn$DemoScene$1',1251),qA=nkb(rWc,'MediaBase',311),pA=nkb(rWc,'Audio',310),oA=nkb(rWc,'Audio$AudioElementSupportDetector',313),nA=nkb(rWc,'Audio$AudioElementSupportDetectedMaybe',312);DOc(Oj)(43);
function WX(){}
function msc(a){this.b=a}
function SX(a){eX(this,(H1(),a))}
function TX(){var a;!RX&&(RX=new WX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new SX(a)}
function hsc(){hac.call(this);this.u=new pOb('./static/textures/planets/titan.jpg');this.o=new pOb(ySc);this.q=new pOb(gUc);this.r=new pOb(hUc);this.s=new pOb(iUc);this.t=0;this.b=TX()}
function gsc(a){var b,c,d;b=new WYb(16777215);x6b(b.ab,800,-96.42880000000001,0);b.T=true;b.J=2048;b.H=2048;b.B=1;b.A=1500;b.v=-0.005;b.F=0.85;MPb(a.I,b);c=new I3b(16777215);E3b(c,0.985,0.5,1.35);d=new FFc(a.q,Ukb(700),(w$b(),p$b),c);DFc(d,a.r,Ukb(512),new mkb(0),p$b,null,null);DFc(d,a.r,Ukb(512),new mkb(0),p$b,null,null);DFc(d,a.r,Ukb(512),new mkb(0),p$b,null,null);DFc(d,a.s,Ukb(60),new mkb(0.6),p$b,null,null);DFc(d,a.s,Ukb(70),new mkb(0.7),p$b,null,null);DFc(d,a.s,Ukb(120),new mkb(0.9),p$b,null,null);DFc(d,a.s,Ukb(70),new mkb(1),p$b,null,null);EFc(d,new msc(d));d.ab.sf(b.ab);MPb(a.I,d)}
var wUc='com.google.gwt.media.client.';JU(307,308,fLc);JU(306,307,fLc,SX);var RX;JU(312,1,{});JU(311,312,{},WX);JU(1234,1,rMc);_.Db=function esc(){J9b(this.c,new hsc(this.b))};JU(1235,973,{337:1},hsc);_.ob=function isc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.d=new PQb(50,dHb(this.H.n),50,10000000);N5b(this.d.ab,500);this.e=IQb(this.d);M5b(this.e.ab,50);i=new T_b;Q_b(i,new pOb('./static/textures/stars_skybox.jpg'));g=new _7b(new mXb(900,60,40),i);M5b(g.fb,-1);MPb(this.I,g);this.f=new rQb;cOb(this.f.i,(QEb(),LEb));MPb(this.I,this.f);j=new K7b;e=new Q1b;o=new pOb('./static/textures/planets/saturn.jpg');e.u=o;e.G=15;D1b(e,new I3b(0));N1b(e,new I3b(3355443));k=new mXb(120.536,100,50);this.k=new _7b(k,e);RPb(this.k,true);this.k.V=true;MPb(j,this.k);a=new M0b;a.X=true;I0b(a,new pOb('./static/textures/planets/saturnClouds.png'));this.g=new _7b(k,a);w6b(this.g.fb,1.005);X3b(this.g.db,3.141592653589793);MPb(j,this.g);d=new M0b;d.X=true;I0b(d,new pOb('./static/textures/planets/saturnRings.png'));XZb(d,(J_b(),H_b));n=new _7b(new jXb(120.536,265.882,20,5),d);V3b(n.db,1.5707963267948966);n.T=true;n.V=true;MPb(j,n);X3b(j.db,-0.4808382089244377);MPb(this.I,j);f=new Q1b;J1b(f,this.u);this.n=new _7b(k,f);x6b(this.n.ab,1205.3600000000001,0,0);w6b(this.n.fb,0.23);MPb(this.I,this.n);b=new Q1b;J1b(b,this.o);this.i=new _7b(k,b);x6b(this.i.ab,301.34000000000003,0,0);w6b(this.i.fb,0.13);RPb(this.i,true);MPb(this.I,this.i);c=new Q1b;J1b(c,this.o);this.j=new _7b(k,c);x6b(this.j.ab,602.6800000000001,0,0);w6b(this.j.fb,0.15);RPb(this.j,true);MPb(this.I,this.j);new MFc(this.H.n,this.I);gsc(this);new uGb(this.H.n,this.I);this.H.n.bb=true;this.H.n.cb=true;BHb(this.H.n,new I3b(16777215),1);this.p=Ch()};_.Jd=function jsc(){PX(this.b).pause()};_.pb=function ksc(a){var b;!!PX(this.b).paused&&(PX(this.b).play(),undefined);b=(Ch()-this.p)*0.001;if(a<24800||a>70000&&a<82000){this.t+=0.07;N5b(this.e.ab,275.882*mlb(this.t*3.141592653589793/180));z6b(this.e.ab,-265.882+275.882*vlb(this.t*3.141592653589793/180));jQb(this.e,this.k.ab);this.c=this.e}else{this.t=0;M5b(this.d.ab,964.288*Math.cos(5.0E-5*a));z6b(this.d.ab,1084.824*Math.sin(5.0E-5*a));jQb(this.d,this.k.ab);this.c=this.d}O3b(this.k.db,0.02*b);O3b(this.g.db,-0.064*b);M5b(this.i.ab,301.34000000000003*Math.cos(3.0E-4*a));z6b(this.i.ab,301.34000000000003*Math.sin(3.0E-4*a));M5b(this.j.ab,602.6800000000001*Math.cos(1.0E-4*a));z6b(this.j.ab,602.6800000000001*Math.sin(1.0E-4*a));M5b(this.n.ab,843.752*Math.cos(7.0E-5*a));z6b(this.n.ab,843.752*Math.sin(7.0E-5*a));qQb(this.f,this.H.n,this.I);pHb(this.H.n,this.I,this.c,null,false);this.p=Ch()};_.p=0;_.t=0;JU(1236,1,{},msc);_.If=function nsc(){var a,b,c,d;c=-this.b.c.d*2;d=-this.b.c.e*2;for(a=0;a<this.b.b.c;a++){b=Wu(Wqb(this.b.b,a),349);b.n=this.b.c.d+c*b.d;b.o=this.b.c.e+d*b.d;b.f=0}Wu(Wqb(this.b.b,2),349).o+=0.025;Wu(Wqb(this.b.b,3),349).f=this.b.c.d*0.5+0.7853981633974483};var PO=akb(wRc,'Saturn$DemoScene',1235),OO=akb(wRc,'Saturn$DemoScene$1',1236),Cz=akb(wUc,'MediaBase',307),Bz=akb(wUc,'Audio',306),Az=akb(wUc,'Audio$AudioElementSupportDetector',312),zz=akb(wUc,'Audio$AudioElementSupportDetectedMaybe',311);FMc(Ii)(43);
function zX(){}
function Rrc(a){this.b=a}
function vX(a){JW(this,(j1(),a))}
function wX(){var a;!uX&&(uX=new zX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new vX(a)}
function Mrc(){N9b.call(this);this.u=new VNb('./static/textures/planets/titan.jpg');this.o=new VNb(XRc);this.q=new VNb(FTc);this.r=new VNb(GTc);this.s=new VNb(HTc);this.t=0;this.b=wX()}
function Lrc(a){var b,c,d;b=new AYb(16777215);b6b(b.ab,800,-96.42880000000001,0);b.T=true;b.J=2048;b.H=2048;b.B=1;b.A=1500;b.v=-0.005;b.F=0.85;qPb(a.I,b);c=new m3b(16777215);i3b(c,0.985,0.5,1.35);d=new iFc(a.q,zkb(700),(a$b(),VZb),c);gFc(d,a.r,zkb(512),new Tjb(0),VZb,null,null);gFc(d,a.r,zkb(512),new Tjb(0),VZb,null,null);gFc(d,a.r,zkb(512),new Tjb(0),VZb,null,null);gFc(d,a.s,zkb(60),new Tjb(0.6),VZb,null,null);gFc(d,a.s,zkb(70),new Tjb(0.7),VZb,null,null);gFc(d,a.s,zkb(120),new Tjb(0.9),VZb,null,null);gFc(d,a.s,zkb(70),new Tjb(1),VZb,null,null);hFc(d,new Rrc(d));d.ab.of(b.ab);qPb(a.I,d)}
var VTc='com.google.gwt.media.client.';mU(303,304,KKc);mU(302,303,KKc,vX);var uX;mU(308,1,{});mU(307,308,{},zX);mU(1227,1,WLc);_.Db=function Jrc(){n9b(this.c,new Mrc(this.b))};mU(1228,967,{337:1},Mrc);_.ob=function Nrc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.d=new tQb(50,JGb(this.H.n),50,10000000);r5b(this.d.ab,500);this.e=mQb(this.d);q5b(this.e.ab,50);i=new x_b;u_b(i,new VNb('./static/textures/stars_skybox.jpg'));g=new F7b(new SWb(900,60,40),i);q5b(g.fb,-1);qPb(this.I,g);this.f=new XPb;INb(this.f.i,(uEb(),pEb));qPb(this.I,this.f);j=new o7b;e=new u1b;o=new VNb('./static/textures/planets/saturn.jpg');e.u=o;e.G=15;h1b(e,new m3b(0));r1b(e,new m3b(3355443));k=new SWb(120.536,100,50);this.k=new F7b(k,e);vPb(this.k,true);this.k.V=true;qPb(j,this.k);a=new q0b;a.X=true;m0b(a,new VNb('./static/textures/planets/saturnClouds.png'));this.g=new F7b(k,a);a6b(this.g.fb,1.005);B3b(this.g.db,3.141592653589793);qPb(j,this.g);d=new q0b;d.X=true;m0b(d,new VNb('./static/textures/planets/saturnRings.png'));BZb(d,(n_b(),l_b));n=new F7b(new PWb(120.536,265.882,20,5),d);z3b(n.db,1.5707963267948966);n.T=true;n.V=true;qPb(j,n);B3b(j.db,-0.4808382089244377);qPb(this.I,j);f=new u1b;n1b(f,this.u);this.n=new F7b(k,f);b6b(this.n.ab,1205.3600000000001,0,0);a6b(this.n.fb,0.23);qPb(this.I,this.n);b=new u1b;n1b(b,this.o);this.i=new F7b(k,b);b6b(this.i.ab,301.34000000000003,0,0);a6b(this.i.fb,0.13);vPb(this.i,true);qPb(this.I,this.i);c=new u1b;n1b(c,this.o);this.j=new F7b(k,c);b6b(this.j.ab,602.6800000000001,0,0);a6b(this.j.fb,0.15);vPb(this.j,true);qPb(this.I,this.j);new pFc(this.H.n,this.I);Lrc(this);new $Fb(this.H.n,this.I);this.H.n.bb=true;this.H.n.cb=true;fHb(this.H.n,new m3b(16777215),1);this.p=Bh()};_.Fd=function Orc(){sX(this.b).pause()};_.pb=function Prc(a){var b;!!sX(this.b).paused&&(sX(this.b).play(),undefined);b=(Bh()-this.p)*0.001;if(a<24800||a>70000&&a<82000){this.t+=0.07;r5b(this.e.ab,275.882*Tkb(this.t*3.141592653589793/180));d6b(this.e.ab,-265.882+275.882*alb(this.t*3.141592653589793/180));PPb(this.e,this.k.ab);this.c=this.e}else{this.t=0;q5b(this.d.ab,964.288*Math.cos(5.0E-5*a));d6b(this.d.ab,1084.824*Math.sin(5.0E-5*a));PPb(this.d,this.k.ab);this.c=this.d}s3b(this.k.db,0.02*b);s3b(this.g.db,-0.064*b);q5b(this.i.ab,301.34000000000003*Math.cos(3.0E-4*a));d6b(this.i.ab,301.34000000000003*Math.sin(3.0E-4*a));q5b(this.j.ab,602.6800000000001*Math.cos(1.0E-4*a));d6b(this.j.ab,602.6800000000001*Math.sin(1.0E-4*a));q5b(this.n.ab,843.752*Math.cos(7.0E-5*a));d6b(this.n.ab,843.752*Math.sin(7.0E-5*a));WPb(this.f,this.H.n,this.I);VGb(this.H.n,this.I,this.c,null,false);this.p=Bh()};_.p=0;_.t=0;mU(1229,1,{},Rrc);_.Ef=function Src(){var a,b,c,d;c=-this.b.c.d*2;d=-this.b.c.e*2;for(a=0;a<this.b.b.c;a++){b=Eu(Aqb(this.b.b,a),349);b.n=this.b.c.d+c*b.d;b.o=this.b.c.e+d*b.d;b.f=0}Eu(Aqb(this.b.b,2),349).o+=0.025;Eu(Aqb(this.b.b,3),349).f=this.b.c.d*0.5+0.7853981633974483};var sO=Hjb(VQc,'Saturn$DemoScene',1228),rO=Hjb(VQc,'Saturn$DemoScene$1',1229),gz=Hjb(VTc,'MediaBase',303),fz=Hjb(VTc,'Audio',302),ez=Hjb(VTc,'Audio$AudioElementSupportDetector',308),dz=Hjb(VTc,'Audio$AudioElementSupportDetectedMaybe',307);iMc(Hi)(43);
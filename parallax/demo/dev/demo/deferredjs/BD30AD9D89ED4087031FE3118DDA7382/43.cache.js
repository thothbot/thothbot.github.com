function oX(){}
function dsc(a){this.a=a}
function kX(a){yW(this,($0(),a))}
function lX(){var a;!jX&&(jX=new oX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new kX(a)}
function $rc(){j9b.call(this);this.r=new CNb('./static/textures/planets/titan.jpg');this.j=new CNb(STc);this.o=new CNb(BVc);this.p=new CNb(CVc);this.q=new CNb(DVc);this.a=lX()}
function Zrc(a){var b,c,d;b=new $Xb(16777215);B5b(b._,800,400,0);b.S=true;b.I=2048;b.G=2048;b.A=1;b.w=1500;b.u=-0.005;b.D=0.35;ZOb(a.H,b);c=new M2b(16777215);I2b(c,0.985,0.5,1.35);d=new lHc(a.o,hkb(700),(AZb(),tZb),c);jHc(d,a.p,hkb(512),new Bjb(0),tZb,null,null);jHc(d,a.p,hkb(512),new Bjb(0),tZb,null,null);jHc(d,a.p,hkb(512),new Bjb(0),tZb,null,null);jHc(d,a.q,hkb(60),new Bjb(0.6),tZb,null,null);jHc(d,a.q,hkb(70),new Bjb(0.7),tZb,null,null);jHc(d,a.q,hkb(120),new Bjb(0.9),tZb,null,null);jHc(d,a.q,hkb(70),new Bjb(1),tZb,null,null);kHc(d,new dsc(d));d._.hf(b._);ZOb(a.H,d)}
var RVc='com.google.gwt.media.client.';YT(305,306,MMc);YT(304,305,MMc,kX);var jX;YT(310,1,{});YT(309,310,{},oX);YT(1230,1,WNc);_.zb=function Xrc(){L8b(this.b,new $rc(this.a))};YT(1231,971,{336:1},$rc);_.nb=function _rc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.b=new ZPb(50,qGb(this.G.k),50,10000000);R4b(this.b._,300);this.c=new ZPb(60,~~(this.G.k.Z/this.G.k.Y),1,100000);this.n=new R7b;o=new LNb('./static/textures/cube/milkyway/*.jpg');kNb(o,(mCb(),kCb));n=new PIb;BMb(qu(vRb(n.i,UTc),225),o);i=new Y1b(n);_Yb(i,(N$b(),K$b));g=new d7b(new BVb(100000,100000,100000),i);ZOb(this.n,g);e=new U0b;N0b(e,new CNb('./static/textures/planets/saturn.jpg'));e.F=15;H0b(e,new M2b(0));R0b(e,new M2b(3355443));j=new qWb(120.536,100,50);this.g=new d7b(j,e);_2b(this.g.cb,-0.4808382089244377);cPb(this.g,true);this.g.U=true;ZOb(this.H,this.g);a=new Q_b;a.W=true;M_b(a,new CNb('./static/textures/planets/saturnClouds.png'));this.d=new d7b(j,a);A5b(this.d.eb,1.005);_2b(this.d.cb,-0.4808382089244377);ZOb(this.H,this.d);d=new Q_b;d.W=true;M_b(d,new CNb('./static/textures/planets/saturnRings.png'));_Yb(d,L$b);k=new d7b(new nWb(120.536,265.882,20,5),d);Z2b(k.cb,1.5707963267948966);$2b(k.cb,-0.4808382089244377);k.S=true;k.U=true;ZOb(this.H,k);f=new U0b;N0b(f,this.r);this.i=new d7b(j,f);B5b(this.i._,1205.3600000000001,0,0);A5b(this.i.eb,0.23);ZOb(this.H,this.i);b=new U0b;N0b(b,this.j);this.e=new d7b(j,b);B5b(this.e._,301.34000000000003,0,0);A5b(this.e.eb,0.13);cPb(this.e,true);ZOb(this.H,this.e);c=new U0b;N0b(c,this.j);this.f=new d7b(j,c);B5b(this.f._,602.6800000000001,0,0);A5b(this.f.eb,0.15);ZOb(this.H,this.f);new sHc(this.G.k,this.H);Zrc(this);new HFb(this.G.k,this.H);KGb(this.G.k,false);this.G.k.ab=true;this.G.k.bb=true;this.k=rh()};_.Bd=function asc(){hX(this.a).pause()};_.ob=function bsc(a){var b;!!hX(this.a).paused&&(hX(this.a).play(),undefined);b=(rh()-this.k)*0.001;Q4b(this.b._,1205.3600000000001*Math.cos(5.0E-5*a));D5b(this.b._,1205.3600000000001*Math.sin(5.0E-5*a));vPb(this.b,this.g._);S2b(this.g.cb,0.02*b);S2b(this.d.cb,0.025*b);Q4b(this.e._,301.34000000000003*Math.cos(5.0E-4*a));D5b(this.e._,301.34000000000003*Math.sin(5.0E-4*a));Q4b(this.f._,602.6800000000001*Math.cos(1.0E-4*a));D5b(this.f._,602.6800000000001*Math.sin(1.0E-4*a));Q4b(this.i._,1205.3600000000001*Math.cos(1.0E-4*a));D5b(this.i._,1205.3600000000001*Math.sin(1.0E-4*a));T2b(this.c.cb,this.b.cb);jGb(this.G.k,true);CGb(this.G.k,this.n,this.c,null,false);CGb(this.G.k,this.H,this.b,null,false);this.k=rh()};_.k=0;YT(1232,1,{},dsc);_.zf=function esc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=qu(hqb(this.a.a,a),348);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}qu(hqb(this.a.a,2),348).n+=0.025;qu(hqb(this.a.a,3),348).e=this.a.b.c*0.5+0.7853981633974483};var cO=pjb(PSc,'Saturn$DemoScene',1231),bO=pjb(PSc,'Saturn$DemoScene$1',1232),Ty=pjb(RVc,'MediaBase',305),Sy=pjb(RVc,'Audio',304),Ry=pjb(RVc,'Audio$AudioElementSupportDetector',310),Qy=pjb(RVc,'Audio$AudioElementSupportDetectedMaybe',309);iOc(xi)(43);
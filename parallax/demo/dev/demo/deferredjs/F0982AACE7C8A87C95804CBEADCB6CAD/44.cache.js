function aY(){}
function $tc(a){this.a=a}
function YX(a){kX(this,(M1(),a))}
function ZX(){var a;!XX&&(XX=new aY);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new YX(a)}
function Vtc(){Oac.call(this);this.q=new _Ob('./static/textures/planets/titan.jpg');this.j=new _Ob(lYc);this.n=new _Ob(YZc);this.o=new _Ob(ZZc);this.p=new _Ob($Zc);this.a=ZX()}
function Utc(a){var b,c,d;b=new CZb(16777215);d7b(b._,800,-96.42880000000001,0);b.S=true;b.I=2048;b.G=2048;b.A=1;b.w=1500;b.u=-0.005;b.D=0.85;wQb(a.H,b);c=new o4b(16777215);k4b(c,0.985,0.5,1.35);d=new iJc(a.n,_kb(700),(c_b(),X$b),c);gJc(d,a.o,_kb(512),new tkb(0),X$b,null,null);gJc(d,a.o,_kb(512),new tkb(0),X$b,null,null);gJc(d,a.o,_kb(512),new tkb(0),X$b,null,null);gJc(d,a.p,_kb(60),new tkb(0.6),X$b,null,null);gJc(d,a.p,_kb(70),new tkb(0.7),X$b,null,null);gJc(d,a.p,_kb(120),new tkb(0.9),X$b,null,null);gJc(d,a.p,_kb(70),new tkb(1),X$b,null,null);hJc(d,new $tc(d));d._.hf(b._);wQb(a.H,d)}
var m$c='com.google.gwt.media.client.';KU(306,307,cRc);KU(305,306,cRc,YX);var XX;KU(311,1,{});KU(310,311,{},aY);KU(1238,1,mSc);_.zb=function Stc(){oac(this.b,new Vtc(this.a))};KU(1239,975,{338:1},Vtc);_.nb=function Wtc(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new xRb(50,PHb(this.G.k),50,10000000);t6b(this.b._,500);i=new z0b;w0b(i,new _Ob('./static/textures/starmap_4K.jpg'));g=new H8b(new UXb(900,60,40),i);s6b(g.eb,-1);wQb(this.H,g);this.c=new bRb;OOb(this.c.g,(zFb(),uFb));wQb(this.H,this.c);j=new q8b;e=new w2b;p2b(e,new _Ob('./static/textures/planets/saturn.jpg'));e.F=15;j2b(e,new o4b(0));t2b(e,new o4b(3355443));k=new UXb(120.536,100,50);this.g=new H8b(k,e);BQb(this.g,true);this.g.U=true;wQb(j,this.g);a=new s1b;a.W=true;o1b(a,new _Ob('./static/textures/planets/saturnClouds.png'));this.d=new H8b(k,a);c7b(this.d.eb,1.005);wQb(j,this.d);d=new s1b;d.W=true;o1b(d,new _Ob('./static/textures/planets/saturnRings.png'));D$b(d,(p0b(),n0b));n=new H8b(new RXb(120.536,265.882,20,5),d);B4b(n.cb,1.5707963267948966);n.S=true;n.U=true;wQb(j,n);D4b(j.cb,-0.4808382089244377);wQb(this.H,j);f=new w2b;p2b(f,this.q);this.i=new H8b(k,f);d7b(this.i._,1205.3600000000001,0,0);c7b(this.i.eb,0.23);wQb(this.H,this.i);b=new w2b;p2b(b,this.j);this.e=new H8b(k,b);d7b(this.e._,301.34000000000003,0,0);c7b(this.e.eb,0.13);BQb(this.e,true);wQb(this.H,this.e);c=new w2b;p2b(c,this.j);this.f=new H8b(k,c);d7b(this.f._,602.6800000000001,0,0);c7b(this.f.eb,0.15);BQb(this.f,true);wQb(this.H,this.f);new pJc(this.G.k,this.H);Utc(this);new eHb(this.G.k,this.H);this.G.k.ab=true;this.G.k.bb=true;lIb(this.G.k,new o4b(16777215),1);this.k=rh()};_.Bd=function Xtc(){VX(this.a).pause()};_.ob=function Ytc(a){var b;!!VX(this.a).paused&&(VX(this.a).play(),undefined);b=(rh()-this.k)*0.001;s6b(this.b._,964.288*Math.cos(5.0E-5*a));f7b(this.b._,1084.824*Math.sin(5.0E-5*a));VQb(this.b,this.g._);u4b(this.g.cb,0.02*b);u4b(this.d.cb,0.025*b);s6b(this.e._,301.34000000000003*Math.cos(3.0E-4*a));f7b(this.e._,301.34000000000003*Math.sin(3.0E-4*a));s6b(this.f._,602.6800000000001*Math.cos(1.0E-4*a));f7b(this.f._,602.6800000000001*Math.sin(1.0E-4*a));s6b(this.i._,843.752*Math.cos(7.0E-5*a));f7b(this.i._,843.752*Math.sin(7.0E-5*a));aRb(this.c,this.G.k,this.H);_Hb(this.G.k,this.H,this.b,null,false);this.k=rh()};_.k=0;KU(1240,1,{},$tc);_.zf=function _tc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=su(_qb(this.a.a,a),350);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}su(_qb(this.a.a,2),350).n+=0.025;su(_qb(this.a.a,3),350).e=this.a.b.c*0.5+0.7853981633974483};var mO=hkb(iXc,'Saturn$DemoScene',1239),lO=hkb(iXc,'Saturn$DemoScene$1',1240),Wy=hkb(m$c,'MediaBase',306),Vy=hkb(m$c,'Audio',305),Uy=hkb(m$c,'Audio$AudioElementSupportDetector',311),Ty=hkb(m$c,'Audio$AudioElementSupportDetectedMaybe',310);ASc(xi)(44);
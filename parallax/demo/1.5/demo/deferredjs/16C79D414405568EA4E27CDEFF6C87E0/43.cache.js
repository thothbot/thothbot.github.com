function oX(){}
function Arc(a){this.a=a}
function kX(a){yW(this,(_0(),a))}
function lX(){var a;!jX&&(jX=new oX);a=$doc.createElement('audio');if(!a.canPlayType){return null}return new kX(a)}
function vrc(){w9b.call(this);this.t=new ENb('./static/textures/planets/titan.jpg');this.n=new ENb(zRc);this.p=new ENb(hTc);this.q=new ENb(iTc);this.r=new ENb(jTc);this.s=0;this.a=lX()}
function urc(a){var b,c,d;b=new jYb(16777215);M5b(b._,800,-96.42880000000001,0);b.S=true;b.I=2048;b.G=2048;b.A=1;b.w=1500;b.u=-0.005;b.D=0.85;_Ob(a.H,b);c=new X2b(16777215);T2b(c,0.985,0.5,1.35);d=new TEc(a.p,ikb(700),(LZb(),EZb),c);REc(d,a.q,ikb(512),new Cjb(0),EZb,null,null);REc(d,a.q,ikb(512),new Cjb(0),EZb,null,null);REc(d,a.q,ikb(512),new Cjb(0),EZb,null,null);REc(d,a.r,ikb(60),new Cjb(0.6),EZb,null,null);REc(d,a.r,ikb(70),new Cjb(0.7),EZb,null,null);REc(d,a.r,ikb(120),new Cjb(0.9),EZb,null,null);REc(d,a.r,ikb(70),new Cjb(1),EZb,null,null);SEc(d,new Arc(d));d._.lf(b._);_Ob(a.H,d)}
var xTc='com.google.gwt.media.client.';YT(305,306,sKc);YT(304,305,sKc,kX);var jX;YT(310,1,{});YT(309,310,{},oX);YT(1231,1,DLc);_.zb=function rrc(){Y8b(this.b,new vrc(this.a))};YT(1232,971,{337:1},vrc);_.nb=function wrc(){var a,b,c,d,e,f,g,i,j,k,n,o;this.c=new cQb(50,sGb(this.G.k),50,10000000);a5b(this.c._,500);this.d=XPb(this.c);_4b(this.d._,50);i=new g_b;d_b(i,new ENb('./static/textures/stars_skybox.jpg'));g=new o7b(new BWb(900,60,40),i);_4b(g.eb,-1);_Ob(this.H,g);this.e=new GPb;rNb(this.e.g,(dEb(),$Db));_Ob(this.H,this.e);j=new Z6b;e=new d1b;o=new ENb('./static/textures/planets/saturn.jpg');e.t=o;e.F=15;S0b(e,new X2b(0));a1b(e,new X2b(3355443));k=new BWb(120.536,100,50);this.j=new o7b(k,e);ePb(this.j,true);this.j.U=true;_Ob(j,this.j);a=new __b;a.W=true;X_b(a,new ENb('./static/textures/planets/saturnClouds.png'));this.f=new o7b(k,a);L5b(this.f.eb,1.005);k3b(this.f.cb,3.141592653589793);_Ob(j,this.f);d=new __b;d.W=true;X_b(d,new ENb('./static/textures/planets/saturnRings.png'));kZb(d,(Y$b(),W$b));n=new o7b(new yWb(120.536,265.882,20,5),d);i3b(n.cb,1.5707963267948966);n.S=true;n.U=true;_Ob(j,n);k3b(j.cb,-0.4808382089244377);_Ob(this.H,j);f=new d1b;Y0b(f,this.t);this.k=new o7b(k,f);M5b(this.k._,1205.3600000000001,0,0);L5b(this.k.eb,0.23);_Ob(this.H,this.k);b=new d1b;Y0b(b,this.n);this.g=new o7b(k,b);M5b(this.g._,301.34000000000003,0,0);L5b(this.g.eb,0.13);ePb(this.g,true);_Ob(this.H,this.g);c=new d1b;Y0b(c,this.n);this.i=new o7b(k,c);M5b(this.i._,602.6800000000001,0,0);L5b(this.i.eb,0.15);ePb(this.i,true);_Ob(this.H,this.i);new $Ec(this.G.k,this.H);urc(this);new JFb(this.G.k,this.H);this.G.k.ab=true;this.G.k.bb=true;QGb(this.G.k,new X2b(16777215),1);this.o=rh()};_.Cd=function xrc(){hX(this.a).pause()};_.ob=function yrc(a){var b;!!hX(this.a).paused&&(hX(this.a).play(),undefined);b=(rh()-this.o)*0.001;if(a<24800||a>70000&&a<82000){this.s+=0.07;a5b(this.d._,275.882*Ckb(this.s*3.141592653589793/180));O5b(this.d._,-265.882+275.882*Lkb(this.s*3.141592653589793/180));yPb(this.d,this.j._);this.b=this.d}else{this.s=0;_4b(this.c._,964.288*Math.cos(5.0E-5*a));O5b(this.c._,1084.824*Math.sin(5.0E-5*a));yPb(this.c,this.j._);this.b=this.c}b3b(this.j.cb,0.02*b);b3b(this.f.cb,-0.064*b);_4b(this.g._,301.34000000000003*Math.cos(3.0E-4*a));O5b(this.g._,301.34000000000003*Math.sin(3.0E-4*a));_4b(this.i._,602.6800000000001*Math.cos(1.0E-4*a));O5b(this.i._,602.6800000000001*Math.sin(1.0E-4*a));_4b(this.k._,843.752*Math.cos(7.0E-5*a));O5b(this.k._,843.752*Math.sin(7.0E-5*a));FPb(this.e,this.G.k,this.H);EGb(this.G.k,this.H,this.b,null,false);this.o=rh()};_.o=0;_.s=0;YT(1233,1,{},Arc);_.Bf=function Brc(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;a++){b=pu(jqb(this.a.a,a),349);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}pu(jqb(this.a.a,2),349).n+=0.025;pu(jqb(this.a.a,3),349).e=this.a.b.c*0.5+0.7853981633974483};var cO=qjb(xQc,'Saturn$DemoScene',1232),bO=qjb(xQc,'Saturn$DemoScene$1',1233),Sy=qjb(xTc,'MediaBase',305),Ry=qjb(xTc,'Audio',304),Qy=qjb(xTc,'Audio$AudioElementSupportDetector',310),Py=qjb(xTc,'Audio$AudioElementSupportDetectedMaybe',309);RLc(xi)(43);
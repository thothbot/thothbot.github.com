function iXb(a,b){a.c=b}
function twb(a,b,c,d,e){swb(a,36160,b.a,c.a+d,e,0)}
function dKb(a,b,c,d,e){Lvb(b,36160,c);twb(b,(Kzb(),Gzb),d,e,a.C)}
function Mwb(a,b,c,d,e,f,g){Kwb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function eKb(){gJb();$Jb.call(this,256,256);this.a=0}
function Vfc(){y4b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function GLb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;eDb(b,c,a.d,e,false);e.a=1;eDb(b,c,a.a,e,false);e.a=2;eDb(b,c,a.e,e,false);e.a=3;eDb(b,c,a.b,e,false);e.a=4;eDb(b,c,a.f,e,false);e.r=d;e.a=5;eDb(b,c,a.c,e,false)}
function HLb(){WKb();lLb.call(this);this.d=new _Lb(90,1,1,1000);f1b(this.d.gb,0,-1,0);BLb(this.d,new m1b(1,0,0));XKb(this,this.d);this.a=new _Lb(90,1,1,1000);f1b(this.a.gb,0,-1,0);BLb(this.a,new m1b(-1,0,0));XKb(this,this.a);this.e=new _Lb(90,1,1,1000);f1b(this.e.gb,0,0,1);BLb(this.e,new m1b(0,1,0));XKb(this,this.e);this.b=new _Lb(90,1,1,1000);f1b(this.b.gb,0,0,-1);BLb(this.b,new m1b(0,-1,0));XKb(this,this.b);this.f=new _Lb(90,1,1,1000);f1b(this.f.gb,0,-1,0);BLb(this.f,new m1b(0,0,1));XKb(this,this.f);this.c=new _Lb(90,1,1,1000);f1b(this.c.gb,0,-1,0);BLb(this.c,new m1b(0,0,-1));XKb(this,this.c);this.g=new eKb;lJb(this.g,(aAb(),$zb));nJb(this.g,(YAb(),WAb));pJb(this.g,(hBb(),bBb))}
DS(780,781,{173:1,174:1},eKb);_.Qd=function fKb(){return ru(mob(this.b,this.a))};_.Rd=function gKb(a){var b,c;if(this.b)return;uJb(this,a.createTexture());c=L$b(this.j)&&L$b(this.d);this.b=new tob;this.c=new tob;Ovb(a,(HBb(),ABb),this.C);sJb(this,a,0,ABb,c);for(b=0;b<6;b++){job(this.b,a.createFramebuffer());job(this.c,a.createRenderbuffer());Mwb(a,EBb,b,this.j,this.d,this.o,this.B);dKb(this,a,ru(mob(this.b,b)),EBb,b);ZJb(this,a,ru(mob(this.c,b)))}c&&wwb(a,ABb.a);Ovb(a,ABb,null);Mvb(a,36161,null);Lvb(a,36160,null)};_.Sd=function hKb(a){Ovb(a,(HBb(),ABb),this.C);wwb(a,ABb.a);Ovb(a,ABb,null)};_.a=0;DS(793,792,hEc,HLb);DS(1101,1,rEc);_.Cb=function Tfc(){v4b(this.b,new Vfc(this.a))};DS(1102,940,{266:1},Vfc);_.qb=function Wfc(){var a,b,c,d;this.a=new _Lb(this.d,_Cb(this.G.n),1,1000);j1b(this.a.ab,400);d=new BJb('./static/textures/ruins.jpg');b=new lXb;b.j=d;c=new H2b(new sSb(500,60,40),b);B0b(c.fb,-1);XKb(this.H,c);this.c=new HLb;pJb(this.c.g,(hBb(),cBb));XKb(this.H,this.c);a=new lXb;iXb(a,this.c.g);this.n=new H2b(new sSb(20,60,40),a);XKb(this.H,this.n);this.b=new H2b(new MRb(20,20,20),a);XKb(this.H,this.b);this.p=new H2b(new FSb(20,5,100,100),a);XKb(this.H,this.p);eDb(this.G.n,this.H,this.a,null,false)};_.rb=function Xfc(a){this.f+=0.15;this.e=Jib(-85,Lib(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;B0b(this.n.ab,Math.sin(a*0.001)*30);C0b(this.n.ab,Math.sin(a*0.0011)*30);j1b(this.n.ab,Math.sin(a*0.0012)*30);w0b(this.n.db,0.02);x0b(this.n.db,0.03);B0b(this.b.ab,Math.sin(a*0.001+2)*30);C0b(this.b.ab,Math.sin(a*0.0011+2)*30);j1b(this.b.ab,Math.sin(a*0.0012+2)*30);w0b(this.b.db,0.02);x0b(this.b.db,0.03);B0b(this.p.ab,Math.sin(a*0.001+4)*30);C0b(this.p.ab,Math.sin(a*0.0011+4)*30);j1b(this.p.ab,Math.sin(a*0.0012+4)*30);w0b(this.p.db,0.02);x0b(this.p.db,0.03);B0b(this.a.ab,100*Qib(this.k)*Hib(this.o));C0b(this.a.ab,100*Hib(this.k));j1b(this.a.ab,100*Qib(this.k)*Qib(this.o));BLb(this.a,this.H.ab);eLb(this.n,false);GLb(this.c,this.G.n,this.H);eLb(this.n,true);eDb(this.G.n,this.H,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var SL=vhb(cJc,'MaterialsCubemapDynamicReflection$DemoScene',1102),xG=vhb(pKc,'CubeCamera',793);EEc(ti)(28);
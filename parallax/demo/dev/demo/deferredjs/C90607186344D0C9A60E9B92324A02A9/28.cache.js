function pXb(a,b){a.d=b}
function Awb(a,b,c,d,e){zwb(a,36160,b.b,c.b+d,e,0)}
function kKb(a,b,c,d,e){Svb(b,36160,c);Awb(b,(Rzb(),Nzb),d,e,a.D)}
function Twb(a,b,c,d,e,f,g){Rwb(a,b.b+c,0,f.b,d,e,0,f.b,g.b,null)}
function lKb(){nJb();fKb.call(this,256,256);this.b=0}
function agc(){F4b.call(this);this.j=0;this.k=0;this.i=false;this.e=70;this.f=0;this.g=0;this.n=0;this.p=0}
function NLb(a,b,c){var d,e;e=a.i;d=e.s;e.s=false;e.b=0;lDb(b,c,a.e,e,false);e.b=1;lDb(b,c,a.b,e,false);e.b=2;lDb(b,c,a.f,e,false);e.b=3;lDb(b,c,a.c,e,false);e.b=4;lDb(b,c,a.g,e,false);e.s=d;e.b=5;lDb(b,c,a.d,e,false)}
function OLb(){bLb();sLb.call(this);this.e=new gMb(90,1,1,1000);m1b(this.e.hb,0,-1,0);ILb(this.e,new t1b(1,0,0));cLb(this,this.e);this.b=new gMb(90,1,1,1000);m1b(this.b.hb,0,-1,0);ILb(this.b,new t1b(-1,0,0));cLb(this,this.b);this.f=new gMb(90,1,1,1000);m1b(this.f.hb,0,0,1);ILb(this.f,new t1b(0,1,0));cLb(this,this.f);this.c=new gMb(90,1,1,1000);m1b(this.c.hb,0,0,-1);ILb(this.c,new t1b(0,-1,0));cLb(this,this.c);this.g=new gMb(90,1,1,1000);m1b(this.g.hb,0,-1,0);ILb(this.g,new t1b(0,0,1));cLb(this,this.g);this.d=new gMb(90,1,1,1000);m1b(this.d.hb,0,-1,0);ILb(this.d,new t1b(0,0,-1));cLb(this,this.d);this.i=new lKb;sJb(this.i,(hAb(),fAb));uJb(this.i,(dBb(),bBb));wJb(this.i,(oBb(),iBb))}
PS(774,775,{173:1,174:1},lKb);_.Td=function mKb(){return Eu(tob(this.c,this.b))};_.Ud=function nKb(a){var b,c;if(this.c)return;BJb(this,a.createTexture());c=S$b(this.k)&&S$b(this.e);this.c=new Aob;this.d=new Aob;Vvb(a,(OBb(),HBb),this.D);zJb(this,a,0,HBb,c);for(b=0;b<6;b++){qob(this.c,a.createFramebuffer());qob(this.d,a.createRenderbuffer());Twb(a,LBb,b,this.k,this.e,this.p,this.C);kKb(this,a,Eu(tob(this.c,b)),LBb,b);eKb(this,a,Eu(tob(this.d,b)))}c&&Dwb(a,HBb.b);Vvb(a,HBb,null);Tvb(a,36161,null);Svb(a,36160,null)};_.Vd=function oKb(a){Vvb(a,(OBb(),HBb),this.D);Dwb(a,HBb.b);Vvb(a,HBb,null)};_.b=0;PS(787,786,pEc,OLb);PS(1095,1,zEc);_.Gb=function $fc(){C4b(this.c,new agc(this.b))};PS(1096,934,{266:1},agc);_.rb=function bgc(){var a,b,c,d;this.b=new gMb(this.e,gDb(this.H.o),1,1000);q1b(this.b.bb,400);d=new IJb('./static/textures/ruins.jpg');b=new sXb;b.k=d;c=new O2b(new zSb(500,60,40),b);I0b(c.gb,-1);cLb(this.I,c);this.d=new OLb;wJb(this.d.i,(oBb(),jBb));cLb(this.I,this.d);a=new sXb;pXb(a,this.d.i);this.o=new O2b(new zSb(20,60,40),a);cLb(this.I,this.o);this.c=new O2b(new TRb(20,20,20),a);cLb(this.I,this.c);this.q=new O2b(new MSb(20,5,100,100),a);cLb(this.I,this.q);lDb(this.H.o,this.I,this.b,null,false)};_.sb=function cgc(a){this.g+=0.15;this.f=Qib(-85,Sib(85,this.f));this.n=(90-this.f)*3.141592653589793/180;this.p=this.g*3.141592653589793/180;I0b(this.o.bb,Math.sin(a*0.001)*30);J0b(this.o.bb,Math.sin(a*0.0011)*30);q1b(this.o.bb,Math.sin(a*0.0012)*30);D0b(this.o.eb,0.02);E0b(this.o.eb,0.03);I0b(this.c.bb,Math.sin(a*0.001+2)*30);J0b(this.c.bb,Math.sin(a*0.0011+2)*30);q1b(this.c.bb,Math.sin(a*0.0012+2)*30);D0b(this.c.eb,0.02);E0b(this.c.eb,0.03);I0b(this.q.bb,Math.sin(a*0.001+4)*30);J0b(this.q.bb,Math.sin(a*0.0011+4)*30);q1b(this.q.bb,Math.sin(a*0.0012+4)*30);D0b(this.q.eb,0.02);E0b(this.q.eb,0.03);I0b(this.b.bb,100*Xib(this.n)*Oib(this.p));J0b(this.b.bb,100*Oib(this.n));q1b(this.b.bb,100*Xib(this.n)*Xib(this.p));ILb(this.b,this.I.bb);lLb(this.o,false);NLb(this.d,this.H.o,this.I);lLb(this.o,true);lDb(this.H.o,this.I,this.b,null,false)};_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;_.n=0;_.p=0;var cM=Chb(nJc,'MaterialsCubemapDynamicReflection$DemoScene',1096),JG=Chb(AKc,'CubeCamera',787);MEc(Di)(28);
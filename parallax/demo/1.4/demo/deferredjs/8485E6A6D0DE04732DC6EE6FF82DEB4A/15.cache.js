function L_b(a,b){return M_b(a,b,b.length)}
function U_b(a,b){return V_b(a,b,b.length)}
function A3b(a){v3b();B3b.call(this,a,u3b)}
function Tdc(){i5b.call(this);this.e=new Dnb}
function h0b(a){var b,c;b=Rhb(-1.5707963267948966);c=$hb(-1.5707963267948966);n0b(a,1,0,0,0,0,b,-c,0,0,c,b,0,0,0,0,1);return a}
function PMb(a,b){var c,d,e;e=qu($Nb(a.a,XCc),185);if(e){U_b(b,e.a);e.d=true}c=qu($Nb(a.a,cGc),185);if(c){d=O_b(new R_b,b);L_b(d,c.a);c.d=true}}
function M_b(a,b,c){var d,e,f;f=new d2b;for(d=0,e=0;d<c;d+=3,e+=3){f.c=b[e];f.d=b[e+1];f.b=b[e+2];N1b(f,a);wwb(b,e,f.c);wwb(b,e+1,f.d);wwb(b,e+2,f.b)}return b}
function V_b(a,b,c){var d,e,f;f=new d2b;for(d=0,e=0;d<c;d+=3,e+=3){f.c=b[e];f.d=b[e+1];f.b=b[e+2];O1b(f,a);wwb(b,e,f.c);wwb(b,e+1,f.d);wwb(b,e+2,f.b)}return b}
TR(926,818,{195:1,196:1,252:1},A3b);TR(1068,1,OAc);_.yb=function Rdc(){f5b(this.b,new Tdc(this.a))};TR(1069,944,{267:1},Tdc);_.mb=function Udc(){var a,b,c,d,e,f,g,i;this.a=new BMb(45,zDb(this.D.n),1,10000);$1b(this.a._,500,800,1300);_Lb(this.a,new d2b);g=new eSb(50,50,50);i=new zXb;tXb(i,new j_b(16711680));i.Z=0.5;i.W=true;this.i=new B3b(g,i);CLb(this.F,this.i);this.b=new eSb(50,50,50);this.c=new rYb;kYb(this.c,new j_b(16693068));jYb(this.c,new j_b(65408));oYb(this.c,(hXb(),eXb));nYb(this.c,new hKb('./static/textures/square-outline-textured.png'));jYb(this.c,this.c.c);b=new kNb;for(d=-500;d<=500;d+=50){b.s.Fc(new e2b(-500,0,d));b.s.Fc(new e2b(500,0,d));b.s.Fc(new e2b(d,0,-500));b.s.Fc(new e2b(d,0,500))}f=new MVb;JVb(f,new j_b(0));f.Z=0.2;f.W=true;e=new OTb(b,f,(q3b(),o3b));CLb(this.F,e);this.j=new d2b;this.g=new xPb;c=new KSb(1000,1000);PMb(c,h0b(new p0b));this.f=new A3b(c);MLb(this.f,false);CLb(this.F,this.f);tnb(this.e,this.f);CLb(this.F,new _Tb(6316128));a=new BUb(16777215);$1b(a._,1,0.75,0.5).mf();CLb(this.F,a);WDb(this.D.n,new j_b(15790320),1);LDb(this.D.n,this.F,this.a,null,false)};_.nb=function Vdc(a){};_.d=false;var oL=Fgb(vFc,'InteractiveVoxelPainter$DemoScene',1069);$Ac(wi)(15);
function Ggc(){}
function Kgc(){}
function Ngc(){}
function i3b(a,b){a.c=b}
function zgc(a,b){this.a=a;this.b=b}
function vgc(){y4b.call(this)}
function Cgc(){Cgc=TCc;Bgc=new Ggc}
function Pgc(){Pgc=TCc;Egc=new Kgc}
function Qgc(){Qgc=TCc;Fgc=new Ngc}
var bKc='bottomColor',aKc='topColor';DS(1108,1,rEc);_.Cb=function tgc(){v4b(this.b,new vgc(this.a))};DS(1109,940,{},vgc);_.qb=function wgc(){var b,c,d,e,f,g;this.a=new _Lb(40,_Cb(this.G.n),1,10000);f1b(this.a.ab,700,180,-500);y3b(this.H,new l3b(16448250,1000,10000));x$b(this.H.b.c,0.6,0.125,1);this.b=new xub(this.a,this.G.b);j1b(this.b.v,150);b=new pUb(16777215,1.475);f1b(b.ab,100,100,-100);XKb(this.H,b);c=new wUb(16777215,16777215,1.25);x$b(c.K,0.6,0.45,1);x$b(c.a,0.1,0.45,0.95);C0b(c.ab,500);XKb(this.H,c);g=new QZb((Cgc(),Bgc));pVb(g,(cXb(),_Wb));jEb(eVb(g),aKc,new EIb((XIb(),IIb),new B$b(30719)));jEb(eVb(g),bKc,new EIb(IIb,new B$b(16777215)));jEb(eVb(g),aKc,new EIb(IIb,o$b(c.K)));jEb(eVb(g),cKc,new EIb(JIb,new Hhb(400)));jEb(eVb(g),'exponent',new EIb(JIb,new Hhb(0.6)));i3b(this.H.b,o$b(pu(pu(MNb(eVb(g).i,bKc),168).d,230)));f=new sSb(4000,32,15);e=new H2b(f,g);XKb(this.H,e);lDb(this.G.n,this.H.b.c);this.G.n.T=true;this.G.n.U=true;this.G.n.W=true;d=new Orc;try{Crc(d,'./static/models/obj/lightmap/lightmap.js',new zgc(this,d))}catch(a){a=IR(a);if(su(a,46)){MKb();LU(LKb,(Yrb(),Wrb),FJc)}else throw HR(a)}};_.rb=function xgc(a){vub(this.b);eDb(this.G.n,this.H,this.a,null,false)};DS(1110,1,{},zgc);_.Ef=function Agc(){var a;a=new H2b(this.b.a,new TXb);e1b(a.ab,0);e1b(a.fb,100);XKb(this.a.H,a)};var Bgc;DS(1111,1,{},Ggc);_.Od=function Hgc(){return Pgc(),Egc};_.Pd=function Igc(){return Qgc(),Fgc};var Egc,Fgc;DS(1112,1,{},Kgc);_.fc=function Lgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};DS(1113,1,{},Ngc);_.fc=function Ogc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var $L=vhb(cJc,'MaterialsLightmap$DemoScene',1109),ZL=vhb(cJc,'MaterialsLightmap$DemoScene$1',1110),bM=vhb(cJc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1111),_L=vhb(cJc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1112),aM=vhb(cJc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1113);EEc(ti)(20);
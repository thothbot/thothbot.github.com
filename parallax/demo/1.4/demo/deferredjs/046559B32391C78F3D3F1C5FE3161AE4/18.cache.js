function Cgc(){}
function Ggc(){}
function Jgc(){}
function f4b(a,b){a.c=b}
function vgc(a,b){this.a=a;this.b=b}
function rgc(){s5b.call(this)}
function oYb(a){PVb.call(this);this.a=a}
function ygc(){ygc=szc;xgc=new Cgc}
function Lgc(){Lgc=szc;Agc=new Ggc}
function Mgc(){Mgc=szc;Bgc=new Jgc}
var QGc='bottomColor',PGc='topColor';XR(902,895,{229:1,236:1},oYb);_.Me=function qYb(){return null};XR(1102,1,YAc);_.yb=function pgc(){p5b(this.b,new rgc(this.a))};XR(1103,946,{},rgc);_.mb=function sgc(){var b,c,d,e,f,g;this.a=new LMb(40,JDb(this.D.n),1,10000);i2b(this.a._,700,180,-500);u4b(this.F,new k4b(16448250,1000,10000));this.b=new Stb(this.a,this.D.b);k2b(this.b.v,150);b=new MUb(16777215,1.475);i2b(b._,100,100,-100);MLb(this.F,b);c=new VUb(16777215,16777215,1.25);p_b(c.L,0.6,1,0.75);p_b(c.a,0.1,0.8,0.7);z1b(c._,500);MLb(this.F,c);g=new D$b((ygc(),xgc));MVb(g,(zXb(),wXb));lFb(BVb(g),PGc,new sJb((LJb(),wJb),new t_b(30719)));lFb(BVb(g),QGc,new sJb(wJb,new t_b(16777215)));lFb(BVb(g),PGc,new sJb(wJb,i_b(c.L)));lFb(BVb(g),'offset',new sJb(xJb,new _gb(400)));lFb(BVb(g),'exponent',new sJb(xJb,new _gb(0.6)));f4b(this.F.b,i_b(su(su(iOb(BVb(g).i,QGc),174).d,241)));f=new bTb(4000,32,15);e=new L3b(f,g);MLb(this.F,e);eEb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;d=new Zpc;try{Opc(d,'./static/models/obj/lightmap/lightmap.js',new vgc(this,d))}catch(a){a=aR(a);if(vu(a,46)){ALb();dU(zLb,(trb(),rrb),sGc)}else throw _Q(a)}};_.nb=function tgc(a){Qtb(this.b);VDb(this.D.n,this.F,this.a,null,false)};XR(1104,1,{},vgc);_.vf=function wgc(){var a;a=new L3b(this.b.a,new oYb(this.b.b));h2b(a._,0);h2b(a.eb,100);MLb(this.a.F,a)};var xgc;XR(1105,1,{},Cgc);_.Md=function Dgc(){return Lgc(),Agc};_.Nd=function Egc(){return Mgc(),Bgc};var Agc,Bgc;XR(1106,1,{},Ggc);_.bc=function Hgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};XR(1107,1,{},Jgc);_.bc=function Kgc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var ZL=Pgb(IFc,'MaterialsLightmap$DemoScene',1103),YL=Pgb(IFc,'MaterialsLightmap$DemoScene$1',1104),AI=Pgb(RGc,'MeshFaceMaterial',902),aM=Pgb(IFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1105),$L=Pgb(IFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1106),_L=Pgb(IFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1107);iBc(wi)(18);
function sgc(){}
function wgc(){}
function zgc(){}
function X3b(a,b){a.c=b}
function lgc(a,b){this.a=a;this.b=b}
function hgc(){i5b.call(this)}
function eYb(a){FVb.call(this);this.a=a}
function ogc(){ogc=izc;ngc=new sgc}
function Bgc(){Bgc=izc;qgc=new wgc}
function Cgc(){Cgc=izc;rgc=new zgc}
var EGc='bottomColor',DGc='topColor';TR(900,893,{229:1,236:1},eYb);_.Me=function gYb(){return null};TR(1100,1,OAc);_.yb=function fgc(){f5b(this.b,new hgc(this.a))};TR(1101,944,{},hgc);_.mb=function igc(){var b,c,d,e,f,g;this.a=new BMb(40,zDb(this.D.n),1,10000);$1b(this.a._,700,180,-500);k4b(this.F,new a4b(16448250,1000,10000));this.b=new Itb(this.a,this.D.b);a2b(this.b.v,150);b=new CUb(16777215,1.475);$1b(b._,100,100,-100);CLb(this.F,b);c=new LUb(16777215,16777215,1.25);f_b(c.L,0.6,1,0.75);f_b(c.a,0.1,0.8,0.7);p1b(c._,500);CLb(this.F,c);g=new t$b((ogc(),ngc));CVb(g,(pXb(),mXb));bFb(rVb(g),DGc,new iJb((BJb(),mJb),new j_b(30719)));bFb(rVb(g),EGc,new iJb(mJb,new j_b(16777215)));bFb(rVb(g),DGc,new iJb(mJb,$$b(c.L)));bFb(rVb(g),'offset',new iJb(nJb,new Rgb(400)));bFb(rVb(g),'exponent',new iJb(nJb,new Rgb(0.6)));X3b(this.F.b,$$b(qu(qu($Nb(rVb(g).i,EGc),174).d,241)));f=new TSb(4000,32,15);e=new B3b(f,g);CLb(this.F,e);WDb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;d=new Ppc;try{Epc(d,'./static/models/obj/lightmap/lightmap.js',new lgc(this,d))}catch(a){a=YQ(a);if(tu(a,46)){qLb();_T(pLb,(jrb(),hrb),gGc)}else throw XQ(a)}};_.nb=function jgc(a){Gtb(this.b);LDb(this.D.n,this.F,this.a,null,false)};TR(1102,1,{},lgc);_.vf=function mgc(){var a;a=new B3b(this.b.a,new eYb(this.b.b));Z1b(a._,0);Z1b(a.eb,100);CLb(this.a.F,a)};var ngc;TR(1103,1,{},sgc);_.Md=function tgc(){return Bgc(),qgc};_.Nd=function ugc(){return Cgc(),rgc};var qgc,rgc;TR(1104,1,{},wgc);_.bc=function xgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};TR(1105,1,{},zgc);_.bc=function Agc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var VL=Fgb(wFc,'MaterialsLightmap$DemoScene',1101),UL=Fgb(wFc,'MaterialsLightmap$DemoScene$1',1102),wI=Fgb(FGc,'MeshFaceMaterial',900),YL=Fgb(wFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1103),WL=Fgb(wFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1104),XL=Fgb(wFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1105);$Ac(wi)(18);
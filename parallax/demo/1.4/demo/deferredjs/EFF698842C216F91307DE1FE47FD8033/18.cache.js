function zgc(){}
function Dgc(){}
function Ggc(){}
function _3b(a,b){a.c=b}
function sgc(a,b){this.a=a;this.b=b}
function ogc(){m5b.call(this)}
function jYb(a){KVb.call(this);this.a=a}
function vgc(){vgc=pzc;ugc=new zgc}
function Igc(){Igc=pzc;xgc=new Dgc}
function Jgc(){Jgc=pzc;ygc=new Ggc}
var LGc='bottomColor',KGc='topColor';UR(901,894,{229:1,236:1},jYb);_.Me=function lYb(){return null};UR(1101,1,VAc);_.yb=function mgc(){j5b(this.b,new ogc(this.a))};UR(1102,945,{},ogc);_.mb=function pgc(){var b,c,d,e,f,g;this.a=new EMb(40,CDb(this.D.n),1,10000);c2b(this.a._,700,180,-500);o4b(this.F,new e4b(16448250,1000,10000));this.b=new Ltb(this.a,this.D.b);e2b(this.b.v,150);b=new HUb(16777215,1.475);c2b(b._,100,100,-100);FLb(this.F,b);c=new QUb(16777215,16777215,1.25);k_b(c.L,0.6,1,0.75);k_b(c.a,0.1,0.8,0.7);t1b(c._,500);FLb(this.F,c);g=new y$b((vgc(),ugc));HVb(g,(uXb(),rXb));eFb(wVb(g),KGc,new lJb((EJb(),pJb),new o_b(30719)));eFb(wVb(g),LGc,new lJb(pJb,new o_b(16777215)));eFb(wVb(g),KGc,new lJb(pJb,d_b(c.L)));eFb(wVb(g),'offset',new lJb(qJb,new Ugb(400)));eFb(wVb(g),'exponent',new lJb(qJb,new Ugb(0.6)));_3b(this.F.b,d_b(qu(qu(bOb(wVb(g).i,LGc),174).d,241)));f=new YSb(4000,32,15);e=new F3b(f,g);FLb(this.F,e);ZDb(this.D.n,this.F.b.c,1);this.D.n.$=true;this.D.n._=true;d=new Wpc;try{Lpc(d,'./static/models/obj/lightmap/lightmap.js',new sgc(this,d))}catch(a){a=ZQ(a);if(tu(a,46)){tLb();aU(sLb,(mrb(),krb),nGc)}else throw YQ(a)}};_.nb=function qgc(a){Jtb(this.b);ODb(this.D.n,this.F,this.a,null,false)};UR(1103,1,{},sgc);_.vf=function tgc(){var a;a=new F3b(this.b.a,new jYb(this.b.b));b2b(a._,0);b2b(a.eb,100);FLb(this.a.F,a)};var ugc;UR(1104,1,{},zgc);_.Md=function Agc(){return Igc(),xgc};_.Nd=function Bgc(){return Jgc(),ygc};var xgc,ygc;UR(1105,1,{},Dgc);_.bc=function Egc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};UR(1106,1,{},Ggc);_.bc=function Hgc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var WL=Igb(EFc,'MaterialsLightmap$DemoScene',1102),VL=Igb(EFc,'MaterialsLightmap$DemoScene$1',1103),xI=Igb(MGc,'MeshFaceMaterial',901),ZL=Igb(EFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1104),XL=Igb(EFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1105),YL=Igb(EFc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1106);fBc(wi)(18);
function wgc(){}
function Agc(){}
function Dgc(){}
function $2b(a,b){a.c=b}
function pgc(a,b){this.a=a;this.b=b}
function lgc(){o4b.call(this)}
function sgc(){sgc=JCc;rgc=new wgc}
function Fgc(){Fgc=JCc;ugc=new Agc}
function Ggc(){Ggc=JCc;vgc=new Dgc}
var RJc='bottomColor',QJc='topColor';zS(1106,1,hEc);_.Cb=function jgc(){l4b(this.b,new lgc(this.a))};zS(1107,938,{},lgc);_.qb=function mgc(){var b,c,d,e,f,g;this.a=new RLb(40,RCb(this.G.n),1,10000);X0b(this.a.ab,700,180,-500);o3b(this.H,new b3b(16448250,1000,10000));n$b(this.H.b.c,0.6,0.125,1);this.b=new mub(this.a,this.G.b);_0b(this.b.v,150);b=new fUb(16777215,1.475);X0b(b.ab,100,100,-100);NKb(this.H,b);c=new mUb(16777215,16777215,1.25);n$b(c.K,0.6,0.45,1);n$b(c.a,0.1,0.45,0.95);s0b(c.ab,500);NKb(this.H,c);g=new GZb((sgc(),rgc));fVb(g,(UWb(),RWb));_Db(WUb(g),QJc,new uIb((NIb(),yIb),new r$b(30719)));_Db(WUb(g),RJc,new uIb(yIb,new r$b(16777215)));_Db(WUb(g),QJc,new uIb(yIb,e$b(c.K)));_Db(WUb(g),SJc,new uIb(zIb,new xhb(400)));_Db(WUb(g),'exponent',new uIb(zIb,new xhb(0.6)));$2b(this.H.b,e$b(nu(nu(CNb(WUb(g).i,RJc),168).d,230)));f=new iSb(4000,32,15);e=new x2b(f,g);NKb(this.H,e);bDb(this.G.n,this.H.b.c);this.G.n.T=true;this.G.n.U=true;this.G.n.W=true;d=new Erc;try{rrc(d,'./static/models/obj/lightmap/lightmap.js',new pgc(this,d))}catch(a){a=ER(a);if(qu(a,46)){CKb();HU(BKb,(Orb(),Mrb),tJc)}else throw DR(a)}};_.rb=function ngc(a){kub(this.b);WCb(this.G.n,this.H,this.a,null,false)};zS(1108,1,{},pgc);_.Ef=function qgc(){var a;a=new x2b(this.b.a,new JXb);W0b(a.ab,0);W0b(a.fb,100);NKb(this.a.H,a)};var rgc;zS(1109,1,{},wgc);_.Od=function xgc(){return Fgc(),ugc};_.Pd=function ygc(){return Ggc(),vgc};var ugc,vgc;zS(1110,1,{},Agc);_.fc=function Bgc(){return 'uniform vec3 topColor;\nuniform vec3 bottomColor;\nuniform float offset;\nuniform float exponent;\n\nvarying vec3 worldPosition;\n\nvoid main() {\n\n\tfloat h = normalize( worldPosition + offset ).y;\n\tgl_FragColor = vec4( mix( bottomColor, topColor, max( pow( h, exponent ), 0.0 ) ), 1.0 );\n\n}'};zS(1111,1,{},Dgc);_.fc=function Egc(){return 'varying vec3 worldPosition;\n\nvoid main() {\n\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\tworldPosition = mPosition.xyz;\n\n}'};var WL=lhb(SIc,'MaterialsLightmap$DemoScene',1107),VL=lhb(SIc,'MaterialsLightmap$DemoScene$1',1108),ZL=lhb(SIc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator',1109),XL=lhb(SIc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$1',1110),YL=lhb(SIc,'MaterialsLightmap_Resources_default_InlineClientBundleGenerator$2',1111);uEc(ti)(20);
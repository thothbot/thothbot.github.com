function TEc(){}
function XEc(){}
function $Ec(){}
function qEc(a,b){a.b=b}
function zEc(a,b){a.b=b}
function AEc(a,b){a.d=b}
function BEc(a,b){a.e=b}
function fpc(a){this.b=a}
function rEc(a,b){aRb.call(this,a,b)}
function sEc(a){oEc();rEc.call(this,nEc,a)}
function MEc(){eHb.call(this,(PEc(),OEc))}
function PEc(){PEc=cFc;OEc=new TEc}
function aFc(){aFc=cFc;REc=new XEc}
function bFc(){bFc=cFc;SEc=new $Ec}
function Vxb(c,a,b){c.uniform2fv(a,b)}
function myb(a){return new $wnd.Float32Array(a)}
function pyb(a){return new $wnd.Uint16Array(a)}
function pEc(a,b){return a.b!=b.b?Nu(b.b-a.b):b.S-a.S}
function yEc(a){var b;b=new CEc;hXb(a,b);L0b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function CEc(){zXb.call(this);this.e=0;this.c=false;zEc(this,new V0b(16777215))}
function apc(){q7b.call(this);this.e=new $Lb('./static/textures/sprite1.png');this.f=new $Lb('./static/textures/sprite2.png')}
function _oc(a){var b,c,d,e,f;f=~~(a.F.n.$/2);b=~~(a.F.n.Z/2);e=Fu(a.n.v,349);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);J3b(a.n.ab,-f+d,b-c,1);J3b(a.o.ab,f-d,b-c,1);J3b(a.i.ab,-f+d,-b+c,1);J3b(a.j.ab,f-d,-b+c,1);J3b(a.k.ab,0,0,1)}
function oEc(){oEc=cFc;var a,b,c;uNb();new CEc;nEc=new MOb;a=pyb(vu(tQ,lFc,-1,[0,1,2,0,2,3]));c=myb(vu(sQ,iGc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=myb(vu(sQ,iGc,-1,[0,0,1,0,1,1,0,1]));IOb(nEc,mMc,new FOb(a,1));IOb(nEc,$Ic,new FOb(c,3));IOb(nEc,INc,new FOb(b,2))}
function IEc(a,b){var c;pEb.call(this,a,b);this.f=new O3b;this.g=new t2b;this.i=new O3b;c=this.v.db;this.k=myb(vu(sQ,iGc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=pyb(vu(tQ,lFc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();Ewb(c,(pzb(),nzb),this.j);Rwb(c,nzb,this.k,(xzb(),vzb));Ewb(c,ozb,this.b);Rwb(c,ozb,this.c,vzb);this.e=new MEc;WGb(this.e,c,false,0,0)}
var WNc='alphaTest',VNc='fogType',ZNc='thothbot.parallax.plugins.sprite.',$Nc='thothbot.parallax.plugins.sprite.shaders.',YNc='uvOffset';bT(1201,1,OGc);_.Db=function Zoc(){S6b(this.c,new apc(this.b))};bT(1202,955,LGc,apc);_.Hd=function bpc(a){_oc(this)};_.ob=function cpc(){var a,b,c,d,e,f,g,i;ut((mwb(),lwb),(wwb(),vwb),this);this.b=new vOb(60,hFb(this.F.n),1,2100);L3b(this.b.ab,1500);this.c=new iOb(this.F.n.$,this.F.n.Z,1,10);L3b(this.c.ab,10);X5b(this.G,new N5b(0,1500,2100));this.g=new Y5b;new IEc(this.F.n,this.G);new IEc(this.F.n,this.g);new _Lb('./static/textures/sprite0.png',new fpc(this));d=new CEc;AEc(d,this.f);zEc(d,new V0b(16777215));d.c=true;c=new CEc;AEc(c,this.e);zEc(c,new V0b(16777215));c.c=true;this.d=new MNb;for(a=0;a<200;a++){f=Djb()-0.5;g=Djb()-0.5;i=Djb()-0.5;if(i<0){b=yEc(c)}else{b=yEc(d);R0b(b.b,0.5*Djb(),0.75,0.5);Y2b(b.d.B,-0.5,-0.5);Y2b(b.d.C,2,2)}e=new sEc(b);J3b(e.ab,f,g,i);e.ab.nf();e.ab.lf(500);vNb(this.d,e)}vNb(this.G,this.d);BFb(this.F.n,false)};_.pb=function dpc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Fu(cpb(this.d.R,b),348);f=Fu(i.v,349);g=Fjb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}BEc(f,f.e+0.1*(b/e));J3b(i.fb,g*d,g*c,1);f.d==this.f||uXb(f,Fjb(j+i.ab.d*0.01)*0.4+0.6)}g1b(this.d.db,j*0.5);h1b(this.d.db,j*0.75);i1b(this.d.db,j);bFb(this.F.n);tFb(this.F.n,this.G,this.b,null,false);Swb(this.F.n.db,(Fzb(),Dzb).b);tFb(this.F.n,this.g,this.c,null,false)};bT(1203,1,{},fpc);_.Vd=function gpc(a){var b,c,d;c=new CEc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new sEc(c);J3b(this.b.n.fb,d,b,1);vNb(this.b.g,this.b.n);this.b.o=new sEc(c);J3b(this.b.o.fb,d,b,1);vNb(this.b.g,this.b.o);this.b.i=new sEc(c);J3b(this.b.i.fb,d,b,1);vNb(this.b.g,this.b.i);this.b.j=new sEc(c);J3b(this.b.j.fb,d,b,1);vNb(this.b.g,this.b.j);this.b.k=new sEc(c);J3b(this.b.k.fb,d,b,1);vNb(this.b.g,this.b.k);_oc(this.b)};bT(1397,821,{149:1,247:1,248:1,348:1},sEc);_.Wd=function tEc(){var a;return a=new sEc(Fu(this.v,349)),wNb(this,a,true),a};_.cT=function uEc(a){return pEc(this,Fu(a,348))};_._d=function vEc(a,b){var c,d,e;e=new O3b;K3b(e,this.Y);c=A2b(a.d,e);if(c>this.fb.d){return}d=new tRb;d.b=c;d.e=this.ab;d.d=this;b.Hc(d)};_.ae=function wEc(a,b,c){};_.b=0;var nEc;bT(1398,897,{267:1,281:1,349:1},CEc);_.Me=function DEc(){return yEc(this)};_.Ne=function EEc(){return null};_.me=function FEc(){return this.b};_.ne=function GEc(a){zEc(this,a)};_.c=false;_.e=0;bT(1399,700,wGc,IEc);_.Jd=function JEc(){return 2};_.Kd=function KEc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=xNb(this.w,jQ)),this.d);o=s.c;if(o==0)return;i=this.v.db;t=this.e.j;e=this.e.c;byb(i,this.e.i);lxb(i,Fu(e.b[$Ic],157).b);lxb(i,Fu(e.b[INc],157).b);exb(i,(FAb(),xAb).b);kxb(i,wAb.b);Ewb(i,(pzb(),nzb),this.j);fyb(i,Fu(e.b[$Ic],157).b,2,(Zzb(),Tzb),16,0);fyb(i,Fu(e.b[INc],157).b,2,Tzb,16,8);Ewb(i,ozb,this.b);ayb(i,Fu(t.b[SNc],225).c,false,a.q.b);Awb(i,(dEb(),zDb).b);Txb(i,Fu(t.b[KNc],225).c,0);p=0;q=0;f=this.w.c;if(f){Xxb(i,Fu(t.b[eNc],225).c,f.d.d,f.d.c,f.d.b);if(Iu(f,306)){Rxb(i,Fu(t.b[TNc],225).c,Fu(f,306).c);Rxb(i,Fu(t.b[UNc],225).c,Fu(f,306).b);Txb(i,Fu(t.b[VNc],225).c,1);p=1;q=1}else if(Iu(f,307)){Rxb(i,Fu(t.b[dNc],225).c,Fu(f,307).b);Txb(i,Fu(t.b[VNc],225).c,2);p=2;q=2}}else{Txb(i,Fu(t.b[VNc],225).c,0);p=0;q=0}for(k=0;k<o;k++){r=(Web(k,s.c),Fu(s.b[k],348));if(!r.hb)continue;X1b(r.P,a.p,r.Y);qEc(r,-r.P.b[14])}Spb(s);for(j=0;j<o;j++){r=(Web(j,s.c),Fu(s.b[j],348));n=Fu(r.v,349);if(!r.hb)continue;Rxb(i,Fu(t.b[WNc],225).c,n.M);ayb(i,Fu(t.b[XNc],225).c,false,r.P.b);J1b(r.Y,this.f,this.g,this.i);g=0;!!this.w.c&&n.c&&(g=q);if(p!=g){Txb(i,Fu(t.b[VNc],225).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){Uxb(i,Fu(t.b[YNc],225).c,n.d.B.d,n.d.B.e);Uxb(i,Fu(t.b[fNc],225).c,n.d.C.d,n.d.C.e)}else{Uxb(i,Fu(t.b[YNc],225).c,0,0);Uxb(i,Fu(t.b[fNc],225).c,1,1)}Rxb(i,Fu(t.b[EMc],225).c,n.$);Xxb(i,Fu(t.b[WKc],225).c,n.b.d,n.b.c,n.b.b);Rxb(i,Fu(t.b[ONc],225).c,n.e);Vxb(i,Fu(t.b[MNc],225).c,vu(sQ,iGc,-1,[this.i.d,this.i.e]));CFb(this.v,n.Q);IFb(this.v,n.S);JFb(this.v,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&SFb(this.v,n.d,0);jxb(i,(Byb(),yyb),6,(rAb(),qAb),0)}kxb(i,xAb.b);AFb(this.v)};bT(1400,720,BGc,MEc);_.Md=function NEc(){UGb(this,YNc,new _Kb((sLb(),mLb),new a3b(0,0)));UGb(this,fNc,new _Kb(mLb,new a3b(1,1)));UGb(this,ONc,new _Kb(eLb,new wib(1)));UGb(this,MNc,new _Kb(mLb,new a3b(1,1)));UGb(this,WKc,new _Kb(dLb,new V0b(16777215)));UGb(this,KNc,new $Kb(kLb));UGb(this,EMc,new _Kb(eLb,new wib(1)));UGb(this,VNc,new _Kb(hLb,cjb(0)));UGb(this,dNc,new _Kb(eLb,new wib(2.5E-4)));UGb(this,TNc,new _Kb(eLb,new wib(1)));UGb(this,UNc,new _Kb(eLb,new wib(2000)));UGb(this,eNc,new _Kb(dLb,new V0b(16777215)));UGb(this,WNc,new _Kb(eLb,cjb(0)))};var OEc;bT(1401,1,{},TEc);_.Pd=function UEc(){return aFc(),REc};_.Qd=function VEc(){return bFc(),SEc};var REc,SEc;bT(1402,1,{},XEc);_.dc=function YEc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};bT(1403,1,{},$Ec);_.dc=function _Ec(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var YN=kib(KLc,'EffectsSprites$DemoScene',1202),XN=kib(KLc,'EffectsSprites$DemoScene$1',1203),jQ=kib(ZNc,'Sprite',1397),hQ=kib(ZNc,'SpriteMaterial',1398),iQ=kib(ZNc,'SpritePlugin',1399),nQ=kib($Nc,'SpriteShader',1400),mQ=kib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1401),kQ=kib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1402),lQ=kib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1403);_Gc(Hi)(40);
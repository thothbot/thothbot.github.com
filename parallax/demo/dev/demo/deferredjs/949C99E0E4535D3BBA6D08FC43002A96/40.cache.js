function IEc(){}
function REc(){}
function VEc(){}
function YEc(){}
function fEc(a,b){a.b=b}
function gEc(a,b){a.d=b}
function hEc(a,b){a.e=b}
function iEc(a,b){a.g=b}
function jEc(a,b){a.j=b}
function kEc(a,b){a.q=b}
function CEc(){zEc();return pEc}
function NEc(){NEc=aFc;MEc=new REc}
function $Ec(){$Ec=aFc;PEc=new VEc}
function _Ec(){_Ec=aFc;QEc=new YEc}
function KEc(){YGb.call(this,(NEc(),MEc))}
function AEc(a){return new a3b(a.a,a.b)}
function Pxb(c,a,b){c.uniform2fv(a,b)}
function BEc(a,b,c,d){xd.call(this,a,b);this.a=c;this.b=d}
function Yoc(){q7b.call(this);this.c=new SLb('./static/textures/sprite0.png');this.d=new SLb('./static/textures/sprite1.png');this.e=new SLb('./static/textures/sprite2.png')}
function lEc(){mNb();ENb.call(this);this.c=(SXb(),QXb);azb();Oyb();Byb();this.n=true;this.b=(zEc(),tEc);this.g=1;this.d=new T0b(16777215);this.e=new OLb;this.f=!this.n;this.a=!this.n;this.k=!this.a;this.i=this.cb;this.j=0;this.o=new a3b(0,0);this.p=new a3b(1,1)}
function zEc(){zEc=aFc;xEc=new BEc('TOP_LEFT',0,1,-1);wEc=new BEc('TOP_CENTER',1,0,-1);yEc=new BEc('TOP_RIGHT',2,-1,-1);uEc=new BEc('CENTER_LEFT',3,1,0);tEc=new BEc(KIc,4,0,0);vEc=new BEc('CENTER_RIGHT',5,-1,0);rEc=new BEc('BOTTOM_LEFT',6,1,1);qEc=new BEc('BOTTOM_CENTER',7,0,1);sEc=new BEc('BOTTOM_RIGHT',8,-1,1);pEc=qu(VR,fFc,344,[xEc,wEc,yEc,uEc,tEc,vEc,rEc,qEc,sEc])}
function EEc(a,b){var c,d;hEb.call(this,a,b);this.b=new IEc;c=this.u.cb;this.b.f=fyb(16);this.b.c=hyb(6);d=0;dyb(this.b.f,d++,-1);dyb(this.b.f,d++,-1);dyb(this.b.f,d++,0);dyb(this.b.f,d++,1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,-1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,0);dyb(this.b.f,d++,-1);dyb(this.b.f,d++,1);dyb(this.b.f,d++,0);dyb(this.b.f,d++,0);d=0;gyb(this.b.c,d++,0);gyb(this.b.c,d++,1);gyb(this.b.c,d++,2);gyb(this.b.c,d++,0);gyb(this.b.c,d++,2);gyb(this.b.c,d++,3);this.b.e=c.createBuffer();this.b.b=c.createBuffer();ywb(c,(hzb(),fzb),this.b.e);Lwb(c,fzb,this.b.f,(pzb(),nzb));ywb(c,gzb,this.b.b);Lwb(c,gzb,this.b.c,nzb);this.b.d=new KEc;OGb(this.b.d,c,false,0,0)}
var WNc='affectedByDistance',ZNc='alignment',$Nc='thothbot.parallax.plugins.sprite.',_Nc='thothbot.parallax.plugins.sprite.shaders.',VNc='useScreenCoordinates',YNc='uvOffset';YS(1202,1,JGc);_.zb=function Woc(){S6b(this.b,new Yoc(this.a))};YS(1203,957,{},Yoc);_.nb=function Zoc(){var a,b,c,d,e;this.a=new oOb(60,_Eb(this.D.k),1,2100);L3b(this.a._,1500);new EEc(this.D.k,this.F);this.b=new ENb;for(a=0;a<200;a++){b=new lEc;hEc(b,this.e);b.n=false;gEc(b,new T0b(16777215));J3b(b._,xjb()-0.5,xjb()-0.5,xjb()-0.5);if(b._.b<0){hEc(b,this.d)}else{P0b(b.d,0.5*xjb(),0.75,0.5);Y2b(b.p,2,2);Y2b(b.o,-0.5,-0.5)}b._.nf();b._.lf(500);nNb(this.b,b)}nNb(this.F,this.b);c=new lEc;hEc(c,this.c);fEc(c,(zEc(),xEc));J3b(c._,100,100,0);c.g=0.25;nNb(this.F,c);d=new lEc;hEc(d,this.c);fEc(d,xEc);J3b(d._,150,150,2);d.g=0.5;nNb(this.F,d);e=new lEc;hEc(e,this.c);fEc(e,xEc);J3b(e._,200,200,3);e.g=1;nNb(this.F,e)};_.ob=function $oc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.Q.b;b++){d=Au(Yob(this.b.Q,b),343);c=zjb(e+d._.c*0.01)*0.3+0.5;jEc(d,d.j+0.1*(b/this.b.Q.b));J3b(d.eb,c,c,1);d.e==this.e||iEc(d,zjb(e+d._.c*0.01)*0.4+0.6)}e1b(this.b.cb,e*0.5);f1b(this.b.cb,e*0.75);g1b(this.b.cb,e);lFb(this.D.k,this.F,this.a,null,false)};YS(1397,799,{149:1,248:1,343:1},lEc);_.cT=function mEc(a){var b;return b=Au(a,343).q-this.q,b==0?0:b>0?1:-1};_.Vd=function nEc(){Y1b(this.V,this._);_0b(this.i,0,0,this.j);Q1b(this.V,this.i);(this.eb.c!=1||this.eb.d!=1)&&W1b(this.V,this.eb);this.Y=true};_.a=false;_.f=false;_.g=0;_.j=0;_.k=false;_.n=false;_.q=0;YS(1398,31,{143:1,149:1,152:1,344:1},BEc);_.a=0;_.b=0;var pEc,qEc,rEc,sEc,tEc,uEc,vEc,wEc,xEc,yEc;YS(1399,702,rGc,EEc);_.Gd=function FEc(){return 2};_.Hd=function GEc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u;t=(!this.a&&(this.a=pNb(this.v,cQ)),this.a);p=t.b;if(p==0)return;f=this.u.cb;u=this.b.d.i;e=this.b.d.b;n=d/c;i=c*0.5;g=d*0.5;o=true;Xxb(f,this.b.d.g);if(!this.b.a){fxb(f,Au(e.a[VIc],157).a);fxb(f,Au(e.a[KNc],157).a);this.b.a=true}$wb(f,(xAb(),pAb).a);exb(f,oAb.a);Zwb(f,true);ywb(f,(hzb(),fzb),this.b.e);_xb(f,Au(e.a[VIc],157).a,2,(Rzb(),Lzb),16,0);_xb(f,Au(e.a[KNc],157).a,2,Lzb,16,8);ywb(f,gzb,this.b.b);Wxb(f,Au(u.a[UNc],225).b,false,a.p.a);uwb(f,(XDb(),rDb).a);Nxb(f,Au(u.a[MNc],225).b,0);for(j=0;j<p;j++){s=(Qeb(j,t.b),Au(t.a[j],343));if(!s.gb||s.g==0)continue;if(s.n){kEc(s,-s._.b)}else{V1b(s.O,a.o,s.X);kEc(s,-s.O.a[14])}}Mpb(t);for(k=0;k<p;k++){s=(Qeb(k,t.b),Au(t.a[k],343));if(!s.gb||s.g==0)continue;if(!!s.e&&!!s.e.p&&((s.e.p.offsetWidth||0)|0)>0){if(s.n){Nxb(f,Au(u.a[VNc],225).b,1);Rxb(f,Au(u.a[PNc],225).b,(s._.c-i)/i,(g-s._.d)/g,sjb(0,ujb(1,s._.b)))}else{Nxb(f,Au(u.a[VNc],225).b,0);Nxb(f,Au(u.a[WNc],225).b,s.a?1:0);Wxb(f,Au(u.a[XNc],225).b,false,s.O.a)}r=((s.e.p.offsetWidth||0)|0)/(s.k?d:1);q=qu(lQ,dGc,-1,[r*n*s.eb.c,r*s.eb.d]);Oxb(f,Au(u.a[iNc],225).b,s.p.c,s.p.d);Oxb(f,Au(u.a[YNc],225).b,s.o.c,s.o.d);Oxb(f,Au(u.a[ZNc],225).b,AEc(s.b).c,AEc(s.b).d);Lxb(f,Au(u.a[GMc],225).b,s.g);Rxb(f,Au(u.a[XKc],225).b,s.d.c,s.d.b,s.d.a);Lxb(f,Au(u.a[QNc],225).b,s.j);Pxb(f,Au(u.a[ONc],225).b,q);if(s.f&&!o){exb(f,qAb.a);o=true}else if(!s.f&&o){$wb(f,qAb.a);o=false}uFb(this.u,s.c);KFb(this.u,s.e,0);dxb(f,(tyb(),qyb),6,(jAb(),iAb),0)}}exb(f,pAb.a);exb(f,qAb.a);Zwb(f,true);sFb(this.u)};YS(1400,1,{},IEc);_.a=false;YS(1401,722,wGc,KEc);_.Jd=function LEc(){MGb(this,YNc,new TKb((kLb(),eLb),new a3b(0,0)));MGb(this,iNc,new TKb(eLb,new a3b(1,1)));MGb(this,QNc,new TKb(YKb,new qib(1)));MGb(this,ONc,new TKb(eLb,new a3b(1,1)));MGb(this,ZNc,new TKb(eLb,new a3b(0,0)));MGb(this,XKc,new TKb(XKb,new T0b(16777215)));MGb(this,MNc,new SKb(cLb));MGb(this,GMc,new TKb(YKb,new qib(1)));MGb(this,VNc,new TKb(_Kb,Yib(1)));MGb(this,WNc,new TKb(_Kb,Yib(1)));MGb(this,PNc,new TKb(gLb,new P3b(0,0,0)))};var MEc;YS(1402,1,{},REc);_.Md=function SEc(){return $Ec(),PEc};_.Nd=function TEc(){return _Ec(),QEc};var PEc,QEc;YS(1403,1,{},VEc);_.ac=function WEc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};YS(1404,1,{},YEc);_.ac=function ZEc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var QN=eib(LLc,'EffectsSprites$DemoScene',1203),cQ=eib($Nc,'Sprite',1397),_P=fib($Nc,'Sprite$ALIGNMENT',1398,SC,CEc),VR=dib('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1466,_P),bQ=eib($Nc,'SpritePlugin',1399),aQ=eib($Nc,'SpritePlugin$SpriteGeometry',1400),gQ=eib(_Nc,'SpriteShader',1401),fQ=eib(_Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1402),dQ=eib(_Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1403),eQ=eib(_Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1404);WGc(xi)(40);
function LEc(){}
function UEc(){}
function YEc(){}
function _Ec(){}
function iEc(a,b){a.c=b}
function jEc(a,b){a.e=b}
function kEc(a,b){a.f=b}
function lEc(a,b){a.i=b}
function mEc(a,b){a.k=b}
function nEc(a,b){a.r=b}
function FEc(){CEc();return sEc}
function QEc(){QEc=dFc;PEc=new UEc}
function bFc(){bFc=dFc;SEc=new YEc}
function cFc(){cFc=dFc;TEc=new _Ec}
function DEc(a){return new d3b(a.b,a.c)}
function Sxb(c,a,b){c.uniform2fv(a,b)}
function NEc(){_Gb.call(this,(QEc(),PEc))}
function EEc(a,b,c,d){Hd.call(this,a,b);this.b=c;this.c=d}
function _oc(){t7b.call(this);this.d=new VLb('./static/textures/sprite0.png');this.e=new VLb('./static/textures/sprite1.png');this.f=new VLb('./static/textures/sprite2.png')}
function oEc(){pNb();HNb.call(this);this.d=(VXb(),TXb);dzb();Ryb();Eyb();this.o=true;this.c=(CEc(),wEc);this.i=1;this.e=new W0b(16777215);this.f=new RLb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.db;this.k=0;this.p=new d3b(0,0);this.q=new d3b(1,1)}
function CEc(){CEc=dFc;AEc=new EEc('TOP_LEFT',0,1,-1);zEc=new EEc('TOP_CENTER',1,0,-1);BEc=new EEc('TOP_RIGHT',2,-1,-1);xEc=new EEc('CENTER_LEFT',3,1,0);wEc=new EEc(OIc,4,0,0);yEc=new EEc('CENTER_RIGHT',5,-1,0);uEc=new EEc('BOTTOM_LEFT',6,1,1);tEc=new EEc('BOTTOM_CENTER',7,0,1);vEc=new EEc('BOTTOM_RIGHT',8,-1,1);sEc=vu($R,jFc,344,[AEc,zEc,BEc,xEc,wEc,yEc,uEc,tEc,vEc])}
function HEc(a,b){var c,d;kEb.call(this,a,b);this.c=new LEc;c=this.v.db;this.c.g=iyb(16);this.c.d=kyb(6);d=0;gyb(this.c.g,d++,-1);gyb(this.c.g,d++,-1);gyb(this.c.g,d++,0);gyb(this.c.g,d++,1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,-1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,0);gyb(this.c.g,d++,-1);gyb(this.c.g,d++,1);gyb(this.c.g,d++,0);gyb(this.c.g,d++,0);d=0;jyb(this.c.d,d++,0);jyb(this.c.d,d++,1);jyb(this.c.d,d++,2);jyb(this.c.d,d++,0);jyb(this.c.d,d++,2);jyb(this.c.d,d++,3);this.c.f=c.createBuffer();this.c.c=c.createBuffer();Bwb(c,(kzb(),izb),this.c.f);Owb(c,izb,this.c.g,(szb(),qzb));Bwb(c,jzb,this.c.c);Owb(c,jzb,this.c.d,qzb);this.c.e=new NEc;RGb(this.c.e,c,false,0,0)}
var VNc='affectedByDistance',YNc='alignment',ZNc='thothbot.parallax.plugins.sprite.',$Nc='thothbot.parallax.plugins.sprite.shaders.',UNc='useScreenCoordinates',XNc='uvOffset';bT(1199,1,OGc);_.Db=function Zoc(){V6b(this.c,new _oc(this.b))};bT(1200,954,{},_oc);_.ob=function apc(){var a,b,c,d,e;this.b=new rOb(60,cFb(this.F.n),1,2100);O3b(this.b.ab,1500);new HEc(this.F.n,this.G);this.c=new HNb;for(a=0;a<200;a++){b=new oEc;kEc(b,this.f);b.o=false;jEc(b,new W0b(16777215));M3b(b.ab,Ajb()-0.5,Ajb()-0.5,Ajb()-0.5);if(b.ab.c<0){kEc(b,this.e)}else{S0b(b.e,0.5*Ajb(),0.75,0.5);_2b(b.q,2,2);_2b(b.p,-0.5,-0.5)}b.ab.qf();b.ab.of(500);qNb(this.c,b)}qNb(this.G,this.c);c=new oEc;kEc(c,this.d);iEc(c,(CEc(),AEc));M3b(c.ab,100,100,0);c.i=0.25;qNb(this.G,c);d=new oEc;kEc(d,this.d);iEc(d,AEc);M3b(d.ab,150,150,2);d.i=0.5;qNb(this.G,d);e=new oEc;kEc(e,this.d);iEc(e,AEc);M3b(e.ab,200,200,3);e.i=1;qNb(this.G,e)};_.pb=function bpc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.c.R.c;b++){d=Fu(_ob(this.c.R,b),343);c=Cjb(e+d.ab.d*0.01)*0.3+0.5;mEc(d,d.k+0.1*(b/this.c.R.c));M3b(d.fb,c,c,1);d.f==this.f||lEc(d,Cjb(e+d.ab.d*0.01)*0.4+0.6)}h1b(this.c.db,e*0.5);i1b(this.c.db,e*0.75);j1b(this.c.db,e);oFb(this.F.n,this.G,this.b,null,false)};bT(1394,796,{149:1,248:1,343:1},oEc);_.cT=function pEc(a){var b;return b=Fu(a,343).r-this.r,b==0?0:b>0?1:-1};_.Yd=function qEc(){_1b(this.W,this.ab);c1b(this.j,0,0,this.k);T1b(this.W,this.j);(this.fb.d!=1||this.fb.e!=1)&&Z1b(this.W,this.fb);this.Z=true};_.b=false;_.g=false;_.i=0;_.k=0;_.n=false;_.o=false;_.r=0;bT(1395,33,{143:1,149:1,152:1,344:1},EEc);_.b=0;_.c=0;var sEc,tEc,uEc,vEc,wEc,xEc,yEc,zEc,AEc,BEc;bT(1396,699,wGc,HEc);_.Jd=function IEc(){return 2};_.Kd=function JEc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t,u;t=(!this.b&&(this.b=sNb(this.w,hQ)),this.b);p=t.c;if(p==0)return;f=this.v.db;u=this.c.e.j;e=this.c.e.c;n=d/c;i=c*0.5;g=d*0.5;o=true;$xb(f,this.c.e.i);if(!this.c.b){ixb(f,Fu(e.b[$Ic],157).b);ixb(f,Fu(e.b[JNc],157).b);this.c.b=true}bxb(f,(AAb(),sAb).b);hxb(f,rAb.b);axb(f,true);Bwb(f,(kzb(),izb),this.c.f);cyb(f,Fu(e.b[$Ic],157).b,2,(Uzb(),Ozb),16,0);cyb(f,Fu(e.b[JNc],157).b,2,Ozb,16,8);Bwb(f,jzb,this.c.c);Zxb(f,Fu(u.b[TNc],225).c,false,a.q.b);xwb(f,($Db(),uDb).b);Qxb(f,Fu(u.b[LNc],225).c,0);for(j=0;j<p;j++){s=(Teb(j,t.c),Fu(t.b[j],343));if(!s.hb||s.i==0)continue;if(s.o){nEc(s,-s.ab.c)}else{Y1b(s.P,a.p,s.Y);nEc(s,-s.P.b[14])}}Ppb(t);for(k=0;k<p;k++){s=(Teb(k,t.c),Fu(t.b[k],343));if(!s.hb||s.i==0)continue;if(!!s.f&&!!s.f.q&&((s.f.q.offsetWidth||0)|0)>0){if(s.o){Qxb(f,Fu(u.b[UNc],225).c,1);Uxb(f,Fu(u.b[ONc],225).c,(s.ab.d-i)/i,(g-s.ab.e)/g,vjb(0,xjb(1,s.ab.c)))}else{Qxb(f,Fu(u.b[UNc],225).c,0);Qxb(f,Fu(u.b[VNc],225).c,s.b?1:0);Zxb(f,Fu(u.b[WNc],225).c,false,s.P.b)}r=((s.f.q.offsetWidth||0)|0)/(s.n?d:1);q=vu(qQ,iGc,-1,[r*n*s.fb.d,r*s.fb.e]);Rxb(f,Fu(u.b[hNc],225).c,s.q.d,s.q.e);Rxb(f,Fu(u.b[XNc],225).c,s.p.d,s.p.e);Rxb(f,Fu(u.b[YNc],225).c,DEc(s.c).d,DEc(s.c).e);Oxb(f,Fu(u.b[FMc],225).c,s.i);Uxb(f,Fu(u.b[WKc],225).c,s.e.d,s.e.c,s.e.b);Oxb(f,Fu(u.b[PNc],225).c,s.k);Sxb(f,Fu(u.b[NNc],225).c,q);if(s.g&&!o){hxb(f,tAb.b);o=true}else if(!s.g&&o){bxb(f,tAb.b);o=false}xFb(this.v,s.d);NFb(this.v,s.f,0);gxb(f,(wyb(),tyb),6,(mAb(),lAb),0)}}hxb(f,sAb.b);hxb(f,tAb.b);axb(f,true);vFb(this.v)};bT(1397,1,{},LEc);_.b=false;bT(1398,719,BGc,NEc);_.Md=function OEc(){PGb(this,XNc,new WKb((nLb(),hLb),new d3b(0,0)));PGb(this,hNc,new WKb(hLb,new d3b(1,1)));PGb(this,PNc,new WKb(_Kb,new tib(1)));PGb(this,NNc,new WKb(hLb,new d3b(1,1)));PGb(this,YNc,new WKb(hLb,new d3b(0,0)));PGb(this,WKc,new WKb($Kb,new W0b(16777215)));PGb(this,LNc,new VKb(fLb));PGb(this,FMc,new WKb(_Kb,new tib(1)));PGb(this,UNc,new WKb(cLb,_ib(1)));PGb(this,VNc,new WKb(cLb,_ib(1)));PGb(this,ONc,new WKb(jLb,new S3b(0,0,0)))};var PEc;bT(1399,1,{},UEc);_.Pd=function VEc(){return bFc(),SEc};_.Qd=function WEc(){return cFc(),TEc};var SEc,TEc;bT(1400,1,{},YEc);_.dc=function ZEc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};bT(1401,1,{},_Ec);_.dc=function aFc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var VN=hib(KLc,'EffectsSprites$DemoScene',1200),hQ=hib(ZNc,'Sprite',1394),eQ=iib(ZNc,'Sprite$ALIGNMENT',1395,XC,FEc),$R=gib('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1463,eQ),gQ=hib(ZNc,'SpritePlugin',1396),fQ=hib(ZNc,'SpritePlugin$SpriteGeometry',1397),lQ=hib($Nc,'SpriteShader',1398),kQ=hib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1399),iQ=hib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1400),jQ=hib($Nc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1401);_Gc(Hi)(40);
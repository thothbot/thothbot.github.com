function buc(){}
function MMc(){}
function XMc(){}
function lNc(){}
function rNc(){}
function qNc(){}
function tNc(){}
function CNc(){}
function zNc(){}
function HNc(){}
function GNc(){}
function LNc(){}
function KNc(){}
function NMc(a,b){a.b=b}
function OMc(a,b){a.d=b}
function PMc(a,b){a.e=b}
function QMc(a,b){a.g=b}
function RMc(a,b){a.j=b}
function SMc(a,b){a.q=b}
function kNc(){gNc();return YMc}
function yNc(){yNc=QNc;xNc=new CNc}
function ONc(){ONc=QNc;ANc=new HNc}
function PNc(){PNc=QNc;BNc=new LNc}
function uNc(){PGb.call(this,(yNc(),xNc))}
function hNc(a){return new KUb(a.a,a.b)}
function Ryb(c,a,b){c.uniform2fv(a,b)}
function iNc(a,b,c,d){ih.call(this,a,b);this.a=c;this.b=d}
function cuc(){s9b.call(this);this.c=new JMb(Udd);this.d=new JMb(Vdd);this.e=new JMb(Wdd)}
function TMc(){sOb();GOb.call(this);this.c=(m2b(),k2b);Wzb();Hzb();tzb();this.b=(gNc(),aNc);this.d=new OPb(16777215);this.e=new IMb;this.f=!this.n;this.a=!this.n;this.k=!this.a;this.i=this.Z;this.j=0;this.o=new KUb(0,0);this.p=new KUb(1,1)}
function gNc(){gNc=QNc;eNc=new iNc(Xdd,0,1,-1);dNc=new iNc(Ydd,1,0,-1);fNc=new iNc(Zdd,2,-1,-1);bNc=new iNc($dd,3,1,0);aNc=new iNc(PUc,4,0,0);cNc=new iNc(_dd,5,-1,0);$Mc=new iNc(aed,6,1,1);ZMc=new iNc(bed,7,0,1);_Mc=new iNc(ced,8,-1,1);YMc=br(HM,{89:1,107:1},286,[eNc,dNc,fNc,bNc,aNc,cNc,$Mc,ZMc,_Mc])}
function mNc(a,b){var c,d;PEb.call(this,a,b);this.b=new rNc;c=this.n.L;this.b.f=new $wnd.Float32Array(16);this.b.c=new $wnd.Uint16Array(6);d=0;this.b.f[d++]=-1;this.b.f[d++]=-1;this.b.f[d++]=0;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=-1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=1;this.b.f[d++]=0;this.b.f[d++]=-1;this.b.f[d++]=1;this.b.f[d++]=0;this.b.f[d++]=0;d=0;this.b.c[d++]=0;this.b.c[d++]=1;this.b.c[d++]=2;this.b.c[d++]=0;this.b.c[d++]=2;this.b.c[d++]=3;this.b.e=c.createBuffer();this.b.b=c.createBuffer();Bxb(c,(cAb(),aAb),this.b.e);Nxb(c,aAb,this.b.f,(lAb(),jAb));Bxb(c,bAb,this.b.b);Nxb(c,bAb,this.b.c,jAb);this.b.d=new uNc;GGb(this.b.d,c,false,0,0)}
var Udd='./static/textures/sprite0.png',Vdd='./static/textures/sprite1.png',Wdd='./static/textures/sprite2.png',bed='BOTTOM_CENTER',aed='BOTTOM_LEFT',ced='BOTTOM_RIGHT',$dd='CENTER_LEFT',_dd='CENTER_RIGHT',led='EffectsSprites$DemoScene',ned='Sprite',oed='Sprite$ALIGNMENT',qed='Sprite$ALIGNMENT;',red='SpritePlugin',sed='SpritePlugin$SpriteGeometry',ued='SpriteShader',ved='SpriteShader_Resources_default_StaticClientBundleGenerator',wed='SpriteShader_Resources_default_StaticClientBundleGenerator$1',xed='SpriteShader_Resources_default_StaticClientBundleGenerator$2',Ydd='TOP_CENTER',Xdd='TOP_LEFT',Zdd='TOP_RIGHT',ped='[Lthothbot.parallax.plugins.sprite.',fed='affectedByDistance',ied='alignment',jed='precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n',med='thothbot.parallax.plugins.sprite.',ted='thothbot.parallax.plugins.sprite.shaders.',ked='uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n',eed='useScreenCoordinates',hed='uvOffset';_=Ytc.prototype;_.vb=function auc(){o9b(this.b,new cuc(this.a))};_=cuc.prototype=buc.prototype=new r9b;_.gC=function duc(){return AI};_.mb=function euc(){var a,b,c,d,e;this.a=new sPb(60,nFb(this.C.n),1,5000);this.a.W.b=1500;new mNc(this.C.n,this.D);this.b=new GOb;for(a=0;a<200;++a){b=new TMc;PMc(b,this.e);b.n=false;OMc(b,new OPb(16777215));iVb(b.W,Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);if(b.W.b<0){PMc(b,this.d)}else{IPb(b.d,0.5*Math.random(),0.8,0.9);GUb(b.p,2,2);GUb(b.o,-0.5,-0.5)}b.W.Ie();b.W.He(500);tOb(this.b,b)}tOb(this.D,this.b);c=new TMc;PMc(c,this.c);NMc(c,(gNc(),eNc));iVb(c.W,100,100,0);c.g=0.25;tOb(this.D,c);d=new TMc;PMc(d,this.c);NMc(d,eNc);iVb(d.W,150,150,2);d.g=0.5;tOb(this.D,d);e=new TMc;PMc(e,this.c);NMc(e,eNc);iVb(e.W,200,200,3);e.g=1;tOb(this.D,e)};_.nb=function fuc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.K.b;++b){d=kr(tob(this.b.K,b),285);c=uib(e+d.W.c*0.01)*0.3+0.5;RMc(d,d.j+0.1*(b/this.b.K.b));iVb(d._,c,c,1);d.e==this.e||QMc(d,uib(e+d.W.c*0.01)*0.4+0.6)}HUb(this.b.Z,e*0.5);IUb(this.b.Z,e*0.75);lVb(this.b.Z,e);sFb(this.C.n,this.D,this.a,null,false)};_.a=null;_.b=null;_=TMc.prototype=MMc.prototype=new qOb;_.cT=function UMc(a){var b;return b=kr(a,285).q-this.q,b==0?0:b>0?1:-1};_.gC=function VMc(){return WK};_.ge=function WMc(){QTb(this.Q,this.W);iVb(this.i,0,0,this.j);RTb(this.Q,this.i);(this._.c!=1||this._.d!=1)&&OTb(this.Q,this._);this.U=true};_.cM={95:1,237:1,243:1,285:1};_.a=false;_.d=null;_.e=null;_.f=false;_.g=1;_.i=null;_.j=0;_.k=false;_.n=true;_.o=null;_.p=null;_.q=0;_=iNc.prototype=XMc.prototype=new gh;_.gC=function jNc(){return TK};_.cM={89:1,95:1,97:1,286:1};_.a=0;_.b=0;var YMc,ZMc,$Mc,_Mc,aNc,bNc,cNc,dNc,eNc,fNc;_=mNc.prototype=lNc.prototype=new OEb;_.gC=function nNc(){return VK};_.Od=function oNc(){return VEb(),TEb};_.Pd=function pNc(a,b,c){var d,e,f,g,i,j,k,n,o,p,q,r,s;r=(!this.a&&(this.a=uOb(this.o,WK,true)),this.a);n=r.b;if(n==0)return;e=this.n.L;s=this.b.d.i;d=this.b.d.b;j=c/b;g=b*0.5;f=c*0.5;k=true;Yyb(e,this.b.d.g);if(!this.b.a){fyb(e,kr(d.a[vQc],101).a);fyb(e,kr(d.a[qdd],101).a);this.b.a=true}$xb(e,(zBb(),rBb).a);eyb(e,qBb.a);e.depthMask(true);Bxb(e,(cAb(),aAb),this.b.e);Zyb(e,kr(d.a[vQc],101).a,2,(QAb(),KAb),16,0);Zyb(e,kr(d.a[qdd],101).a,2,KAb,16,8);Bxb(e,bAb,this.b.b);Xyb(e,kr(s.a[ded],167).b,false,a.n);zxb(e,(BEb(),XDb).a);Oyb(e,kr(s.a[sdd],167).b,0);for(i=0;i<n;++i){q=kr((qdb(i,r.b),r.a[i]),285);if(!q.db||q.g==0)continue;if(q.n){SMc(q,-q.W.b)}else{ITb(q.I,a.p,q.T);SMc(q,-q.I.a[14])}}opb(r);for(i=0;i<n;++i){q=kr((qdb(i,r.b),r.a[i]),285);if(!q.db||q.g==0)continue;if(!!q.e&&!!q.e.p&&(q.e.p.offsetWidth||0)>0){if(q.n){Oyb(e,kr(s.a[eed],167).b,1);Syb(e,kr(s.a[vdd],167).b,(q.W.c-g)/g,(f-q.W.d)/f,oib(0,qib(1,q.W.b)))}else{Oyb(e,kr(s.a[eed],167).b,0);Oyb(e,kr(s.a[fed],167).b,q.a?1:0);Xyb(e,kr(s.a[ged],167).b,false,q.I.a)}p=(q.e.p.offsetWidth||0)/(q.k?c:1);o=br(dL,{87:1,89:1},-1,[p*j*q._.c,p*q._.d]);Pyb(e,kr(s.a[Xbd],167).b,q.p.c,q.p.d);Pyb(e,kr(s.a[hed],167).b,q.o.c,q.o.d);Pyb(e,kr(s.a[ied],167).b,hNc(q.b).c,hNc(q.b).d);Lyb(e,kr(s.a[Uad],167).b,q.g);Syb(e,kr(s.a[JXc],167).b,q.d.d,q.d.b,q.d.a);Lyb(e,kr(s.a[wdd],167).b,q.j);Ryb(e,kr(s.a[udd],167).b,o);if(q.f&&!k){eyb(e,sBb.a);k=true}else if(!q.f&&k){$xb(e,sBb.a);k=false}xFb(this.n,q.c);MFb(this.n,q.e,0);cyb(e,(kzb(),hzb),6,(kBb(),jBb),0)}}eyb(e,rBb.a);eyb(e,sBb.a);e.depthMask(true)};_.cM={159:1};_.a=null;_.b=null;_=rNc.prototype=qNc.prototype=new Jb;_.gC=function sNc(){return UK};_.a=false;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_=uNc.prototype=tNc.prototype=new BGb;_.gC=function vNc(){return $K};_.Qd=function wNc(){EGb(this,hed,new NLb((fMb(),_Lb),new KUb(0,0)));EGb(this,Xbd,new NLb(_Lb,new KUb(1,1)));EGb(this,wdd,new NLb(TLb,new ihb(1)));EGb(this,udd,new NLb(_Lb,new KUb(1,1)));EGb(this,ied,new NLb(_Lb,new KUb(0,0)));EGb(this,JXc,new NLb(SLb,new OPb(16777215)));EGb(this,sdd,new MLb(ZLb));EGb(this,Uad,new NLb(TLb,new ihb(1)));EGb(this,eed,new NLb(WLb,Vhb(1)));EGb(this,fed,new NLb(WLb,Vhb(1)));EGb(this,vdd,new NLb(bMb,new oVb(0,0,0)))};_.cM={165:1};var xNc;_=CNc.prototype=zNc.prototype=new Jb;_.gC=function DNc(){return ZK};_.Td=function ENc(){return ONc(),ANc};_.Ud=function FNc(){return PNc(),BNc};var ANc=null,BNc=null;_=HNc.prototype=GNc.prototype=new Jb;_.gC=function INc(){return XK};_.ac=function JNc(){return jed};_=LNc.prototype=KNc.prototype=new Jb;_.gC=function MNc(){return YK};_.ac=function NNc(){return ked};var AI=Zgb(K7c,led,xE),WK=Zgb(med,ned,lE),TK=$gb(med,oed,cy,kNc),HM=Ygb(ped,qed,TK),VK=Zgb(med,red,GA),UK=Zgb(med,sed,ny),$K=Zgb(ted,ued,GB),ZK=Zgb(ted,ved,ny),XK=Zgb(ted,wed,ny),YK=Zgb(ted,xed,ny);fOc(Wd)(45);
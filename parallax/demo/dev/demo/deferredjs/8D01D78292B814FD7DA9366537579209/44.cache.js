function DCc(){}
function MCc(){}
function QCc(){}
function TCc(){}
function aCc(a,b){a.b=b}
function bCc(a,b){a.d=b}
function cCc(a,b){a.e=b}
function dCc(a,b){a.g=b}
function eCc(a,b){a.j=b}
function fCc(a,b){a.q=b}
function xCc(){uCc();return kCc}
function ICc(){ICc=XCc;HCc=new MCc}
function VCc(){VCc=XCc;KCc=new QCc}
function WCc(){WCc=XCc;LCc=new TCc}
function FCc(){zEb.call(this,(ICc(),HCc))}
function vCc(a){return new I0b(a.a,a.b)}
function cxb(c,a,b){c.uniform2fv(a,b)}
function wCc(a,b,c,d){sd.call(this,a,b);this.a=c;this.b=d}
function _lc(){C4b.call(this);this.c=new FJb('./static/textures/sprite0.png');this.d=new FJb('./static/textures/sprite1.png');this.e=new FJb('./static/textures/sprite2.png')}
function gCc(){$Kb();pLb.call(this);this.c=(VVb(),TVb);iyb();Wxb();Jxb();this.n=true;this.b=(uCc(),oCc);this.g=1;this.d=new F$b(16777215);this.e=new BJb;this.f=!this.n;this.a=!this.n;this.k=!this.a;this.i=this.db;this.j=0;this.o=new I0b(0,0);this.p=new I0b(1,1)}
function uCc(){uCc=XCc;sCc=new wCc('TOP_LEFT',0,1,-1);rCc=new wCc('TOP_CENTER',1,0,-1);tCc=new wCc('TOP_RIGHT',2,-1,-1);pCc=new wCc('CENTER_LEFT',3,1,0);oCc=new wCc(wGc,4,0,0);qCc=new wCc('CENTER_RIGHT',5,-1,0);mCc=new wCc('BOTTOM_LEFT',6,1,1);lCc=new wCc('BOTTOM_CENTER',7,0,1);nCc=new wCc('BOTTOM_RIGHT',8,-1,1);kCc=nu(HR,aDc,287,[sCc,rCc,tCc,pCc,oCc,qCc,mCc,lCc,nCc])}
function zCc(a,b){var c,d;HCb.call(this,a,b);this.b=new DCc;c=this.n.P;this.b.f=pxb(16);this.b.c=rxb(6);d=0;oxb(this.b.f,d++,-1);oxb(this.b.f,d++,-1);oxb(this.b.f,d++,0);oxb(this.b.f,d++,1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,-1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,0);oxb(this.b.f,d++,-1);oxb(this.b.f,d++,1);oxb(this.b.f,d++,0);oxb(this.b.f,d++,0);d=0;qxb(this.b.c,d++,0);qxb(this.b.c,d++,1);qxb(this.b.c,d++,2);qxb(this.b.c,d++,0);qxb(this.b.c,d++,2);qxb(this.b.c,d++,3);this.b.e=c.createBuffer();this.b.b=c.createBuffer();Ovb(c,(pyb(),nyb),this.b.e);_vb(c,nyb,this.b.f,(xyb(),vyb));Ovb(c,oyb,this.b.b);_vb(c,oyb,this.b.c,vyb);this.b.d=new FCc;pEb(this.b.d,c,false,0,0)}
var WLc='affectedByDistance',ZLc='alignment',$Lc='thothbot.parallax.plugins.sprite.',_Lc='thothbot.parallax.plugins.sprite.shaders.',VLc='useScreenCoordinates',YLc='uvOffset';KS(1181,1,vEc);_.Cb=function Zlc(){z4b(this.b,new _lc(this.a))};KS(1182,937,{},_lc);_.qb=function amc(){var a,b,c,d,e;this.a=new dMb(60,dDb(this.G.n),1,5000);n1b(this.a.ab,1500);new zCc(this.G.n,this.H);this.b=new pLb;for(a=0;a<200;a++){b=new gCc;cCc(b,this.e);b.n=false;bCc(b,new F$b(16777215));j1b(b.ab,Sib()-0.5,Sib()-0.5,Sib()-0.5);if(b.ab.b<0){cCc(b,this.d)}else{B$b(b.d,0.5*Sib(),0.8,0.9);E0b(b.p,2,2);E0b(b.o,-0.5,-0.5)}b.ab.wf();b.ab.uf(500);_Kb(this.b,b)}_Kb(this.H,this.b);c=new gCc;cCc(c,this.c);aCc(c,(uCc(),sCc));j1b(c.ab,100,100,0);c.g=0.25;_Kb(this.H,c);d=new gCc;cCc(d,this.c);aCc(d,sCc);j1b(d.ab,150,150,2);d.g=0.5;_Kb(this.H,d);e=new gCc;cCc(e,this.c);aCc(e,sCc);j1b(e.ab,200,200,3);e.g=1;_Kb(this.H,e)};_.rb=function bmc(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.N.b;b++){d=xu(qob(this.b.N,b),286);c=Uib(e+d.ab.c*0.01)*0.3+0.5;eCc(d,d.j+0.1*(b/this.b.N.b));j1b(d.fb,c,c,1);d.e==this.e||dCc(d,Uib(e+d.ab.c*0.01)*0.4+0.6)}F0b(this.b.db,e*0.5);G0b(this.b.db,e*0.75);n1b(this.b.db,e);iDb(this.G.n,this.H,this.a,null,false)};KS(1392,789,{97:1,238:1,244:1,286:1},gCc);_.cT=function hCc(a){var b;return b=xu(a,286).q-this.q,b==0?0:b>0?1:-1};_.de=function iCc(){A_b(this.V,this.ab);j1b(this.i,0,0,this.j);B_b(this.V,this.i,5);(this.fb.c!=1||this.fb.d!=1)&&y_b(this.V,this.fb);this.Z=true};_.a=false;_.f=false;_.g=0;_.j=0;_.k=false;_.n=false;_.q=0;KS(1393,31,{91:1,97:1,99:1,287:1},wCc);_.a=0;_.b=0;var kCc,lCc,mCc,nCc,oCc,pCc,qCc,rCc,sCc,tCc;KS(1394,694,iEc,zCc);_.Jd=function ACc(){return MCb(),KCb};_.Kd=function BCc(a,b,c){var d,e,f,g,i,j,k,n,o,p,q,r,s,t;s=(!this.a&&(this.a=bLb(this.o,WP,true)),this.a);o=s.b;if(o==0)return;e=this.n.P;t=this.b.d.i;d=this.b.d.b;k=c/b;g=b*0.5;f=c*0.5;n=true;kxb(e,this.b.d.g);if(!this.b.a){twb(e,xu(d.a[HGc],104).a);twb(e,xu(d.a[LLc],104).a);this.b.a=true}mwb(e,(Fzb(),xzb).a);swb(e,wzb.a);lwb(e,true);Ovb(e,(pyb(),nyb),this.b.e);mxb(e,xu(d.a[HGc],104).a,2,(Zyb(),Tyb),16,0);mxb(e,xu(d.a[LLc],104).a,2,Tyb,16,8);Ovb(e,oyb,this.b.b);jxb(e,xu(t.a[ULc],168).b,false,a.n);Kvb(e,(vCb(),RBb).a);axb(e,xu(t.a[NLc],168).b,0);for(j=0;j<o;j++){r=(meb(j,s.b),xu(s.a[j],286));if(!r.jb||r.g==0)continue;if(r.n){fCc(r,-r.ab.b)}else{u_b(r.L,a.p,r.Y);fCc(r,-r.L.a[14])}}gpb(s);for(i=0;i<o;i++){r=(meb(i,s.b),xu(s.a[i],286));if(!r.jb||r.g==0)continue;if(!!r.e&&!!r.e.p&&((r.e.p.offsetWidth||0)|0)>0){if(r.n){axb(e,xu(t.a[VLc],168).b,1);exb(e,xu(t.a[PLc],168).b,(r.ab.c-g)/g,(f-r.ab.d)/f,Nib(0,Pib(1,r.ab.b)))}else{axb(e,xu(t.a[VLc],168).b,0);axb(e,xu(t.a[WLc],168).b,r.a?1:0);jxb(e,xu(t.a[XLc],168).b,false,r.L.a)}q=((r.e.p.offsetWidth||0)|0)/(r.k?c:1);p=nu(dQ,WDc,-1,[q*k*r.fb.c,q*r.fb.d]);bxb(e,xu(t.a[PKc],168).b,r.p.c,r.p.d);bxb(e,xu(t.a[YLc],168).b,r.o.c,r.o.d);bxb(e,xu(t.a[ZLc],168).b,vCc(r.b).c,vCc(r.b).d);Zwb(e,xu(t.a[tKc],168).b,r.g);exb(e,xu(t.a[DIc],168).b,r.d.c,r.d.b,r.d.a);Zwb(e,xu(t.a[QLc],168).b,r.j);cxb(e,xu(t.a[wLc],168).b,p);if(r.f&&!n){swb(e,yzb.a);n=true}else if(!r.f&&n){mwb(e,yzb.a);n=false}nDb(this.n,r.c);DDb(this.n,r.e,0);rwb(e,(Bxb(),yxb),6,(rzb(),qzb),0)}}swb(e,xzb.a);swb(e,yzb.a);lwb(e,true)};KS(1395,1,{},DCc);_.a=false;KS(1396,706,jEc,FCc);_.Ld=function GCc(){nEb(this,YLc,new IIb((_Ib(),VIb),new I0b(0,0)));nEb(this,PKc,new IIb(VIb,new I0b(1,1)));nEb(this,QLc,new IIb(NIb,new Lhb(1)));nEb(this,wLc,new IIb(VIb,new I0b(1,1)));nEb(this,ZLc,new IIb(VIb,new I0b(0,0)));nEb(this,DIc,new IIb(MIb,new F$b(16777215)));nEb(this,NLc,new HIb(TIb));nEb(this,tKc,new IIb(NIb,new Lhb(1)));nEb(this,VLc,new IIb(QIb,rib(1)));nEb(this,WLc,new IIb(QIb,rib(1)));nEb(this,PLc,new IIb(XIb,new q1b(0,0,0)))};var HCc;KS(1397,1,{},MCc);_.Od=function NCc(){return VCc(),KCc};_.Pd=function OCc(){return WCc(),LCc};var KCc,LCc;KS(1398,1,{},QCc);_.fc=function RCc(){return 'precision mediump float;\r\n\r\nuniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n}\r\n'};KS(1399,1,{},TCc);_.fc=function UCc(){return 'uniform int useScreenCoordinates;\r\nuniform int affectedByDistance;\r\nuniform vec3 screenPosition;\r\nuniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 alignment;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position + alignment;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\r\n\trotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tif( useScreenCoordinates != 0 ) {\r\n\r\n\t\tfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\r\n\r\n\t} else {\r\n\r\n\t\tfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\t\tfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\r\n\r\n\t}\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var vN=zhb(sJc,'EffectsSprites$DemoScene',1182),WP=zhb($Lc,'Sprite',1392),TP=Ahb($Lc,'Sprite$ALIGNMENT',1393,NC,xCc),HR=yhb('[Lthothbot.parallax.plugins.sprite.','Sprite$ALIGNMENT;',1457,TP),VP=zhb($Lc,'SpritePlugin',1394),UP=zhb($Lc,'SpritePlugin$SpriteGeometry',1395),$P=zhb(_Lc,'SpriteShader',1396),ZP=zhb(_Lc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1397),XP=zhb(_Lc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1398),YP=zhb(_Lc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1399);IEc(ti)(44);
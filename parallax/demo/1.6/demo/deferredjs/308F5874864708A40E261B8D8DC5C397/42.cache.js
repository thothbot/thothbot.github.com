function bMc(){}
function fMc(){}
function iMc(){}
function ALc(a,b){a.a=b}
function JLc(a,b){a.a=b}
function KLc(a,b){a.c=b}
function LLc(a,b){a.d=b}
function Gsc(a){this.a=a}
function BLc(a,b){RTb.call(this,a,b)}
function CLc(a){yLc();BLc.call(this,xLc,a)}
function WLc(){oJb.call(this,(ZLc(),YLc))}
function ZLc(){ZLc=mMc;YLc=new bMc}
function kMc(){kMc=mMc;_Lc=new fMc}
function lMc(){lMc=mMc;aMc=new iMc}
function Kzb(c,a,b){c.uniform2fv(a,b)}
function bAb(a){return new $wnd.Float32Array(a)}
function eAb(a){return new $wnd.Uint16Array(a)}
function zLc(a,b){return a.a!=b.a?Gv(b.a-a.a):b.R-a.R}
function ILc(a){var b;b=new MLc;O$b(a,b);G4b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function MLc(){e_b.call(this);this.d=0;this.b=false;JLc(this,new V4b(16777215))}
function Bsc(){obc.call(this);this.d=new DOb('./static/textures/sprite1.png');this.e=new DOb('./static/textures/sprite2.png')}
function Asc(a){var b,c,d,e,f;f=~~(a.G.k.hb/2);b=~~(a.G.k.gb/2);e=yv(a.k.u,358);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);j8b(a.k._,-f+d,b-c,1);j8b(a.n._,f-d,b-c,1);j8b(a.g._,-f+d,-b+c,1);j8b(a.i._,f-d,-b+c,1);j8b(a.j._,0,0,1)}
function yLc(){yLc=mMc;var a,b,c;ZPb();new MLc;xLc=new yRb;a=eAb(ov(QS,wMc,-1,[0,1,2,0,2,3]));c=bAb(ov(PS,rNc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=bAb(ov(PS,rNc,-1,[0,0,1,0,1,1,0,1]));sRb(xLc,ITc,new pRb(a,1));sRb(xLc,oQc,new pRb(c,3));sRb(xLc,UVc,new pRb(b,2))}
function SLc(a,b){var c;lGb.call(this,a,b);this.e=new p8b;this.f=new L6b;this.g=new p8b;c=this.u.Z;this.j=bAb(ov(PS,rNc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=eAb(ov(QS,wMc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();tyb(c,(gBb(),eBb),this.i);Gyb(c,eBb,this.j,(oBb(),mBb));tyb(c,fBb,this.a);Gyb(c,fBb,this.b,mBb);this.d=new WLc;eJb(this.d,c,false,0,0)}
var $Vc='alphaTest',ZVc='fogType',cWc='thothbot.parallax.plugins.sprite.',dWc='thothbot.parallax.plugins.sprite.shaders.',aWc='uvOffset';zV(1237,1,YNc);_.Mb=function ysc(){Qac(this.b,new Bsc(this.a))};zV(1238,985,VNc,Bsc);_.Gd=function Csc(a){Asc(this)};_.nb=function Dsc(){var a,b,c,d,e,f,g,i;mu((byb(),ayb),(lyb(),kyb),this);this.a=new cRb(60,gGb(this.G.k),1,2100);l8b(this.a._,1500);this.b=new PQb(this.G.k.hb,this.G.k.gb,1,10);l8b(this.b._,10);S9b(this.H,new I9b(0,1500,2100));this.f=new U9b;new SLc(this.G.k,this.H);new SLc(this.G.k,this.f);new EOb('./static/textures/sprite0.png',new Gsc(this));d=new MLc;KLc(d,this.e);JLc(d,new V4b(16777215));d.b=true;c=new MLc;KLc(c,this.d);JLc(c,new V4b(16777215));c.b=true;this.c=new rQb;for(a=0;a<200;a++){f=nlb()-0.5;g=nlb()-0.5;i=nlb()-0.5;if(i<0){b=ILc(c)}else{b=ILc(d);Q4b(b.a,0.5*nlb(),0.75,0.5);C7b(b.c.A,-0.5,-0.5);C7b(b.c.B,2,2)}e=new CLc(b);j8b(e._,f,g,i);e._.hf();e._.ff(500);$Pb(this.c,e)}$Pb(this.H,this.c);hGb(this.G.k,false)};_.ob=function Esc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=yv(Pqb(this.c.Q,b),357);f=yv(i.u,358);g=plb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}LLc(f,f.d+0.1*(b/e));j8b(i.eb,g*d,g*c,1);f.c==this.e||_$b(f,plb(j+i._.c*0.01)*0.4+0.6)}h5b(this.c.cb,j*0.5);i5b(this.c.cb,j*0.75);j5b(this.c.cb,j);nHb(this.G.k,true);FHb(this.G.k,this.H,this.a,null,false);Hyb(this.G.k.Z,(wBb(),uBb).a);FHb(this.G.k,this.f,this.b,null,false)};zV(1239,1,{},Gsc);_.Vd=function Hsc(a){var b,c,d;c=new MLc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new CLc(c);j8b(this.a.k.eb,d,b,1);$Pb(this.a.f,this.a.k);this.a.n=new CLc(c);j8b(this.a.n.eb,d,b,1);$Pb(this.a.f,this.a.n);this.a.g=new CLc(c);j8b(this.a.g.eb,d,b,1);$Pb(this.a.f,this.a.g);this.a.i=new CLc(c);j8b(this.a.i.eb,d,b,1);$Pb(this.a.f,this.a.i);this.a.j=new CLc(c);j8b(this.a.j.eb,d,b,1);$Pb(this.a.f,this.a.j);Asc(this.a)};zV(1467,844,{149:1,249:1,250:1,357:1},CLc);_.Wd=function DLc(){var a;return a=new CLc(yv(this.u,358)),_Pb(this,a,true),a};_.cT=function ELc(a){return zLc(this,yv(a,357))};_.ce=function FLc(a,b){var c,d,e;e=new p8b;k8b(e,this.X);c=Z6b(a.c,e);if(c>this.eb.c){return}d=new hUb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.de=function GLc(a,b,c){};_.a=0;var xLc;zV(1468,927,{271:1,287:1,358:1},MLc);_.Te=function NLc(){return ILc(this)};_.Ue=function OLc(){return null};_.te=function PLc(){return this.a};_.ue=function QLc(a){JLc(this,a)};_.b=false;_.d=0;zV(1469,713,FNc,SLc);_.Id=function TLc(){return 2};_.Kd=function ULc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=aQb(this.v,GS)),this.c);o=s.b;if(o==0)return;i=this.u.Z;t=this.d.i;e=this.d.b;Szb(i,this.d.g);azb(i,yv(e.a[oQc],157).a);azb(i,yv(e.a[UVc],157).a);Vyb(i,(wCb(),oCb).a);_yb(i,nCb.a);tyb(i,(gBb(),eBb),this.i);Wzb(i,yv(e.a[oQc],157).a,2,(QBb(),KBb),16,0);Wzb(i,yv(e.a[UVc],157).a,2,KBb,16,8);tyb(i,fBb,this.a);Rzb(i,yv(t.a[VVc],226).b,false,a.p.a);pyb(i,(WFb(),qFb).a);Izb(i,yv(t.a[WVc],226).b,0);p=0;q=0;f=this.v.a;if(f){Mzb(i,yv(t.a[yUc],226).b,f.c.c,f.c.b,f.c.a);if(Bv(f,311)){Gzb(i,yv(t.a[XVc],226).b,yv(f,311).b);Gzb(i,yv(t.a[YVc],226).b,yv(f,311).a);Izb(i,yv(t.a[ZVc],226).b,1);p=1;q=1}else if(Bv(f,312)){Gzb(i,yv(t.a[xUc],226).b,yv(f,312).a);Izb(i,yv(t.a[ZVc],226).b,2);p=2;q=2}}else{Izb(i,yv(t.a[ZVc],226).b,0);p=0;q=0}for(j=0;j<o;j++){r=(Ggb(j,s.b),yv(s.a[j],357));if(!r.gb)continue;h6b(r.O,a.o,r.X);ALc(r,-r.O.a[14])}Erb(s);for(k=0;k<o;k++){r=(Ggb(k,s.b),yv(s.a[k],357));n=yv(r.u,358);if(!r.gb)continue;Gzb(i,yv(t.a[$Vc],226).b,n.N);Rzb(i,yv(t.a[_Vc],226).b,false,r.O.a);V5b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){Izb(i,yv(t.a[ZVc],226).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){Jzb(i,yv(t.a[aWc],226).b,n.c.A.c,n.c.A.d);Jzb(i,yv(t.a[zUc],226).b,n.c.B.c,n.c.B.d)}else{Jzb(i,yv(t.a[aWc],226).b,0,0);Jzb(i,yv(t.a[zUc],226).b,1,1)}Gzb(i,yv(t.a[ZTc],226).b,n._);Mzb(i,yv(t.a[nSc],226).b,n.a.c,n.a.b,n.a.a);Gzb(i,yv(t.a[bWc],226).b,n.d);Kzb(i,yv(t.a[hVc],226).b,ov(PS,rNc,-1,[this.g.c,this.g.d]));NHb(this.u,n.R);SHb(this.u,n.T);THb(this.u,n.U);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&aIb(this.u,n.c,0);$yb(i,(sAb(),pAb),6,(iCb(),hCb),0)}_yb(i,oCb.a);MHb(this.u)};zV(1470,737,KNc,WLc);_.Md=function XLc(){cJb(this,aWc,new ENb((XNb(),RNb),new I7b(0,0)));cJb(this,zUc,new ENb(RNb,new I7b(1,1)));cJb(this,bWc,new ENb(JNb,new gkb(1)));cJb(this,hVc,new ENb(RNb,new I7b(1,1)));cJb(this,nSc,new ENb(INb,new V4b(16777215)));cJb(this,WVc,new DNb(PNb));cJb(this,ZTc,new ENb(JNb,new gkb(1)));cJb(this,ZVc,new ENb(MNb,Okb(0)));cJb(this,xUc,new ENb(JNb,new gkb(2.5E-4)));cJb(this,XVc,new ENb(JNb,new gkb(1)));cJb(this,YVc,new ENb(JNb,new gkb(2000)));cJb(this,yUc,new ENb(INb,new V4b(16777215)));cJb(this,$Vc,new ENb(JNb,Okb(0)))};var YLc;zV(1471,1,{},bMc);_.Pd=function cMc(){return kMc(),_Lc};_.Qd=function dMc(){return lMc(),aMc};var _Lc,aMc;zV(1472,1,{},fMc);_.nc=function gMc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};zV(1473,1,{},iMc);_.nc=function jMc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var oP=Wjb(dTc,'EffectsSprites$DemoScene',1238),nP=Wjb(dTc,'EffectsSprites$DemoScene$1',1239),GS=Wjb(cWc,'Sprite',1467),ES=Wjb(cWc,'SpriteMaterial',1468),FS=Wjb(cWc,'SpritePlugin',1469),KS=Wjb(dWc,'SpriteShader',1470),JS=Wjb(dWc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1471),HS=Wjb(dWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1472),IS=Wjb(dWc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1473);kOc(wj)(42);
function JJc(){}
function NJc(){}
function QJc(){}
function gJc(a,b){a.a=b}
function pJc(a,b){a.a=b}
function qJc(a,b){a.c=b}
function rJc(a,b){a.d=b}
function yqc(a){this.a=a}
function hJc(a,b){PSb.call(this,a,b)}
function iJc(a){eJc();hJc.call(this,dJc,a)}
function CJc(){pIb.call(this,(FJc(),EJc))}
function FJc(){FJc=UJc;EJc=new JJc}
function SJc(){SJc=UJc;HJc=new NJc}
function TJc(){TJc=UJc;IJc=new QJc}
function dzb(c,a,b){c.uniform2fv(a,b)}
function wzb(a){return new $wnd.Float32Array(a)}
function zzb(a){return new $wnd.Uint16Array(a)}
function fJc(a,b){return a.a!=b.a?xu(b.a-a.a):b.R-a.R}
function oJc(a){var b;b=new sJc;XYb(a,b);N2b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function sJc(){nZb.call(this);this.d=0;this.b=false;pJc(this,new X2b(16777215))}
function tqc(){w9b.call(this);this.d=new ENb('./static/textures/sprite1.png');this.e=new ENb('./static/textures/sprite2.png')}
function sqc(a){var b,c,d,e,f;f=~~(a.G.k.Z/2);b=~~(a.G.k.Y/2);e=pu(a.k.u,354);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);M5b(a.k._,-f+d,b-c,1);M5b(a.n._,f-d,b-c,1);M5b(a.g._,-f+d,-b+c,1);M5b(a.i._,f-d,-b+c,1);M5b(a.j._,0,0,1)}
function eJc(){eJc=UJc;var a,b,c;$Ob();new sJc;dJc=new xQb;a=zzb(fu(oR,aKc,-1,[0,1,2,0,2,3]));c=wzb(fu(nR,ZKc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=wzb(fu(nR,ZKc,-1,[0,0,1,0,1,1,0,1]));sQb(dJc,_Qc,new pQb(a,1));sQb(dJc,ONc,new pQb(c,3));sQb(dJc,lTc,new pQb(b,2))}
function yJc(a,b){var c;zFb.call(this,a,b);this.e=new R5b;this.f=new v4b;this.g=new R5b;c=this.u.cb;this.j=wzb(fu(nR,ZKc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=zzb(fu(oR,aKc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();Oxb(c,(zAb(),xAb),this.i);_xb(c,xAb,this.j,(HAb(),FAb));Oxb(c,yAb,this.a);_xb(c,yAb,this.b,FAb);this.d=new CJc;fIb(this.d,c,false,0,0)}
var rTc='alphaTest',qTc='fogType',vTc='thothbot.parallax.plugins.sprite.',wTc='thothbot.parallax.plugins.sprite.shaders.',tTc='uvOffset';YT(1218,1,DLc);_.zb=function qqc(){Y8b(this.b,new tqc(this.a))};YT(1219,971,ALc,tqc);_.Gd=function uqc(a){sqc(this)};_.nb=function vqc(){var a,b,c,d,e,f,g,i;et((wxb(),vxb),(Gxb(),Fxb),this);this.a=new cQb(60,sGb(this.G.k),1,2100);O5b(this.a._,1500);this.b=new PPb(this.G.k.Z,this.G.k.Y,1,10);O5b(this.b._,10);_7b(this.H,new R7b(0,1500,2100));this.f=new b8b;new yJc(this.G.k,this.H);new yJc(this.G.k,this.f);new FNb('./static/textures/sprite0.png',new yqc(this));d=new sJc;qJc(d,this.e);pJc(d,new X2b(16777215));d.b=true;c=new sJc;qJc(c,this.d);pJc(c,new X2b(16777215));c.b=true;this.c=new rPb;for(a=0;a<200;a++){f=Jkb()-0.5;g=Jkb()-0.5;i=Jkb()-0.5;if(i<0){b=oJc(c)}else{b=oJc(d);T2b(b.a,0.5*Jkb(),0.75,0.5);$4b(b.c.A,-0.5,-0.5);$4b(b.c.B,2,2)}e=new iJc(b);M5b(e._,f,g,i);e._.qf();e._.of(500);_Ob(this.c,e)}_Ob(this.H,this.c);MGb(this.G.k,false)};_.ob=function wqc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=pu(jqb(this.c.Q,b),353);f=pu(i.u,354);g=Lkb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}rJc(f,f.d+0.1*(b/e));M5b(i.eb,g*d,g*c,1);f.c==this.e||iZb(f,Lkb(j+i._.c*0.01)*0.4+0.6)}i3b(this.c.cb,j*0.5);j3b(this.c.cb,j*0.75);k3b(this.c.cb,j);lGb(this.G.k,true);EGb(this.G.k,this.H,this.a,null,false);ayb(this.G.k.cb,(PAb(),NAb).a);EGb(this.G.k,this.f,this.b,null,false)};YT(1220,1,{},yqc);_.Ud=function zqc(a){var b,c,d;c=new sJc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new iJc(c);M5b(this.a.k.eb,d,b,1);_Ob(this.a.f,this.a.k);this.a.n=new iJc(c);M5b(this.a.n.eb,d,b,1);_Ob(this.a.f,this.a.n);this.a.g=new iJc(c);M5b(this.a.g.eb,d,b,1);_Ob(this.a.f,this.a.g);this.a.i=new iJc(c);M5b(this.a.i.eb,d,b,1);_Ob(this.a.f,this.a.i);this.a.j=new iJc(c);M5b(this.a.j.eb,d,b,1);_Ob(this.a.f,this.a.j);sqc(this.a)};YT(1445,836,{149:1,248:1,249:1,353:1},iJc);_.Vd=function jJc(){var a;return a=new iJc(pu(this.u,354)),aPb(this,a,true),a};_.cT=function kJc(a){return fJc(this,pu(a,353))};_.ae=function lJc(a,b){var c,d,e;e=new R5b;N5b(e,this.X);c=C4b(a.c,e);if(c>this.eb.c){return}d=new gTb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.be=function mJc(a,b,c){};_.a=0;var dJc;YT(1446,912,{268:1,282:1,354:1},sJc);_.Pe=function tJc(){return oJc(this)};_.Qe=function uJc(){return null};_.pe=function vJc(){return this.a};_.qe=function wJc(a){pJc(this,a)};_.b=false;_.d=0;YT(1447,709,lLc,yJc);_.Id=function zJc(){return 2};_.Jd=function AJc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=bPb(this.v,eR)),this.c);o=s.b;if(o==0)return;i=this.u.cb;t=this.d.i;e=this.d.b;lzb(i,this.d.g);vyb(i,pu(e.a[ONc],157).a);vyb(i,pu(e.a[lTc],157).a);oyb(i,(PBb(),HBb).a);uyb(i,GBb.a);Oxb(i,(zAb(),xAb),this.i);pzb(i,pu(e.a[ONc],157).a,2,(hBb(),bBb),16,0);pzb(i,pu(e.a[lTc],157).a,2,bBb,16,8);Oxb(i,yAb,this.a);kzb(i,pu(t.a[mTc],225).b,false,a.p.a);Kxb(i,(nFb(),JEb).a);bzb(i,pu(t.a[nTc],225).b,0);p=0;q=0;f=this.v.a;if(f){fzb(i,pu(t.a[RRc],225).b,f.c.c,f.c.b,f.c.a);if(su(f,307)){_yb(i,pu(t.a[oTc],225).b,pu(f,307).b);_yb(i,pu(t.a[pTc],225).b,pu(f,307).a);bzb(i,pu(t.a[qTc],225).b,1);p=1;q=1}else if(su(f,308)){_yb(i,pu(t.a[QRc],225).b,pu(f,308).a);bzb(i,pu(t.a[qTc],225).b,2);p=2;q=2}}else{bzb(i,pu(t.a[qTc],225).b,0);p=0;q=0}for(j=0;j<o;j++){r=(agb(j,s.b),pu(s.a[j],353));if(!r.gb)continue;Z3b(r.O,a.o,r.X);gJc(r,-r.O.a[14])}Zqb(s);for(k=0;k<o;k++){r=(agb(k,s.b),pu(s.a[k],353));n=pu(r.u,354);if(!r.gb)continue;_yb(i,pu(t.a[rTc],225).b,n.L);kzb(i,pu(t.a[sTc],225).b,false,r.O.a);L3b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){bzb(i,pu(t.a[qTc],225).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){czb(i,pu(t.a[tTc],225).b,n.c.A.c,n.c.A.d);czb(i,pu(t.a[SRc],225).b,n.c.B.c,n.c.B.d)}else{czb(i,pu(t.a[tTc],225).b,0,0);czb(i,pu(t.a[SRc],225).b,1,1)}_yb(i,pu(t.a[qRc],225).b,n.Z);fzb(i,pu(t.a[IPc],225).b,n.a.c,n.a.b,n.a.a);_yb(i,pu(t.a[uTc],225).b,n.d);dzb(i,pu(t.a[ASc],225).b,fu(nR,ZKc,-1,[this.g.c,this.g.d]));NGb(this.u,n.P);TGb(this.u,n.R);UGb(this.u,n.S);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&bHb(this.u,n.c,0);tyb(i,(Lzb(),Izb),6,(BBb(),ABb),0)}uyb(i,HBb.a);LGb(this.u)};YT(1448,729,qLc,CJc);_.Ld=function DJc(){dIb(this,tTc,new FMb((YMb(),SMb),new c5b(0,0)));dIb(this,SRc,new FMb(SMb,new c5b(1,1)));dIb(this,uTc,new FMb(KMb,new Cjb(1)));dIb(this,ASc,new FMb(SMb,new c5b(1,1)));dIb(this,IPc,new FMb(JMb,new X2b(16777215)));dIb(this,nTc,new EMb(QMb));dIb(this,qRc,new FMb(KMb,new Cjb(1)));dIb(this,qTc,new FMb(NMb,ikb(0)));dIb(this,QRc,new FMb(KMb,new Cjb(2.5E-4)));dIb(this,oTc,new FMb(KMb,new Cjb(1)));dIb(this,pTc,new FMb(KMb,new Cjb(2000)));dIb(this,RRc,new FMb(JMb,new X2b(16777215)));dIb(this,rTc,new FMb(KMb,ikb(0)))};var EJc;YT(1449,1,{},JJc);_.Od=function KJc(){return SJc(),HJc};_.Pd=function LJc(){return TJc(),IJc};var HJc,IJc;YT(1450,1,{},NJc);_.nc=function OJc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};YT(1451,1,{},QJc);_.nc=function RJc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var RN=qjb(xQc,'EffectsSprites$DemoScene',1219),QN=qjb(xQc,'EffectsSprites$DemoScene$1',1220),eR=qjb(vTc,'Sprite',1445),cR=qjb(vTc,'SpriteMaterial',1446),dR=qjb(vTc,'SpritePlugin',1447),iR=qjb(wTc,'SpriteShader',1448),hR=qjb(wTc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1449),fR=qjb(wTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1450),gR=qjb(wTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1451);RLc(xi)(42);
function LJc(){}
function PJc(){}
function SJc(){}
function iJc(a,b){a.a=b}
function rJc(a,b){a.a=b}
function sJc(a,b){a.c=b}
function tJc(a,b){a.d=b}
function Aqc(a){this.a=a}
function jJc(a,b){QSb.call(this,a,b)}
function kJc(a){gJc();jJc.call(this,fJc,a)}
function EJc(){qIb.call(this,(HJc(),GJc))}
function HJc(){HJc=WJc;GJc=new LJc}
function UJc(){UJc=WJc;JJc=new PJc}
function VJc(){VJc=WJc;KJc=new SJc}
function ezb(c,a,b){c.uniform2fv(a,b)}
function xzb(a){return new $wnd.Float32Array(a)}
function Azb(a){return new $wnd.Uint16Array(a)}
function hJc(a,b){return a.a!=b.a?xu(b.a-a.a):b.R-a.R}
function qJc(a){var b;b=new uJc;YYb(a,b);O2b(b.a,a.a);b.c=a.c;b.d=a.d;b.b=a.b;return b}
function uJc(){oZb.call(this);this.d=0;this.b=false;rJc(this,new Y2b(16777215))}
function vqc(){x9b.call(this);this.d=new FNb('./static/textures/sprite1.png');this.e=new FNb('./static/textures/sprite2.png')}
function uqc(a){var b,c,d,e,f;f=~~(a.G.k.Z/2);b=~~(a.G.k.Y/2);e=pu(a.k.u,354);d=~~(((e.c.p.offsetWidth||0)|0)/2);c=~~(((e.c.p.offsetHeight||0)|0)/2);N5b(a.k._,-f+d,b-c,1);N5b(a.n._,f-d,b-c,1);N5b(a.g._,-f+d,-b+c,1);N5b(a.i._,f-d,-b+c,1);N5b(a.j._,0,0,1)}
function gJc(){gJc=WJc;var a,b,c;_Ob();new uJc;fJc=new yQb;a=Azb(fu(oR,cKc,-1,[0,1,2,0,2,3]));c=xzb(fu(nR,_Kc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=xzb(fu(nR,_Kc,-1,[0,0,1,0,1,1,0,1]));tQb(fJc,cRc,new qQb(a,1));tQb(fJc,QNc,new qQb(c,3));tQb(fJc,oTc,new qQb(b,2))}
function AJc(a,b){var c;AFb.call(this,a,b);this.e=new S5b;this.f=new w4b;this.g=new S5b;c=this.u.cb;this.j=xzb(fu(nR,_Kc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.b=Azb(fu(oR,cKc,-1,[0,1,2,0,2,3]));this.i=c.createBuffer();this.a=c.createBuffer();Pxb(c,(AAb(),yAb),this.i);ayb(c,yAb,this.j,(IAb(),GAb));Pxb(c,zAb,this.a);ayb(c,zAb,this.b,GAb);this.d=new EJc;gIb(this.d,c,false,0,0)}
var uTc='alphaTest',tTc='fogType',yTc='thothbot.parallax.plugins.sprite.',zTc='thothbot.parallax.plugins.sprite.shaders.',wTc='uvOffset';YT(1219,1,FLc);_.zb=function sqc(){Z8b(this.b,new vqc(this.a))};YT(1220,971,CLc,vqc);_.Gd=function wqc(a){uqc(this)};_.nb=function xqc(){var a,b,c,d,e,f,g,i;et((xxb(),wxb),(Hxb(),Gxb),this);this.a=new dQb(60,tGb(this.G.k),1,2100);P5b(this.a._,1500);this.b=new QPb(this.G.k.Z,this.G.k.Y,1,10);P5b(this.b._,10);a8b(this.H,new S7b(0,1500,2100));this.f=new c8b;new AJc(this.G.k,this.H);new AJc(this.G.k,this.f);new GNb('./static/textures/sprite0.png',new Aqc(this));d=new uJc;sJc(d,this.e);rJc(d,new Y2b(16777215));d.b=true;c=new uJc;sJc(c,this.d);rJc(c,new Y2b(16777215));c.b=true;this.c=new sPb;for(a=0;a<200;a++){f=Kkb()-0.5;g=Kkb()-0.5;i=Kkb()-0.5;if(i<0){b=qJc(c)}else{b=qJc(d);U2b(b.a,0.5*Kkb(),0.75,0.5);_4b(b.c.A,-0.5,-0.5);_4b(b.c.B,2,2)}e=new kJc(b);N5b(e._,f,g,i);e._.qf();e._.of(500);aPb(this.c,e)}aPb(this.H,this.c);NGb(this.G.k,false)};_.ob=function yqc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.c.Q.b;b<e;b++){i=pu(kqb(this.c.Q,b),353);f=pu(i.u,354);g=Mkb(j+i._.c*0.01)*0.3+1;d=1;c=1;if(!!f.c&&!!f.c.p&&((f.c.p.offsetWidth||0)|0)>0){d=(f.c.p.offsetWidth||0)|0;c=(f.c.p.offsetHeight||0)|0}tJc(f,f.d+0.1*(b/e));N5b(i.eb,g*d,g*c,1);f.c==this.e||jZb(f,Mkb(j+i._.c*0.01)*0.4+0.6)}j3b(this.c.cb,j*0.5);k3b(this.c.cb,j*0.75);l3b(this.c.cb,j);mGb(this.G.k,true);FGb(this.G.k,this.H,this.a,null,false);byb(this.G.k.cb,(QAb(),OAb).a);FGb(this.G.k,this.f,this.b,null,false)};YT(1221,1,{},Aqc);_.Ud=function Bqc(a){var b,c,d;c=new uJc;c.c=a;d=(c.c.p.offsetWidth||0)|0;b=(c.c.p.offsetHeight||0)|0;this.a.k=new kJc(c);N5b(this.a.k.eb,d,b,1);aPb(this.a.f,this.a.k);this.a.n=new kJc(c);N5b(this.a.n.eb,d,b,1);aPb(this.a.f,this.a.n);this.a.g=new kJc(c);N5b(this.a.g.eb,d,b,1);aPb(this.a.f,this.a.g);this.a.i=new kJc(c);N5b(this.a.i.eb,d,b,1);aPb(this.a.f,this.a.i);this.a.j=new kJc(c);N5b(this.a.j.eb,d,b,1);aPb(this.a.f,this.a.j);uqc(this.a)};YT(1446,836,{149:1,248:1,249:1,353:1},kJc);_.Vd=function lJc(){var a;return a=new kJc(pu(this.u,354)),bPb(this,a,true),a};_.cT=function mJc(a){return hJc(this,pu(a,353))};_.ae=function nJc(a,b){var c,d,e;e=new S5b;O5b(e,this.X);c=D4b(a.c,e);if(c>this.eb.c){return}d=new hTb;d.a=c;d.d=this._;d.c=this;b.Fc(d)};_.be=function oJc(a,b,c){};_.a=0;var fJc;YT(1447,912,{268:1,282:1,354:1},uJc);_.Pe=function vJc(){return qJc(this)};_.Qe=function wJc(){return null};_.pe=function xJc(){return this.a};_.qe=function yJc(a){rJc(this,a)};_.b=false;_.d=0;YT(1448,709,nLc,AJc);_.Id=function BJc(){return 2};_.Jd=function CJc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.c||this.c.b==0)&&(this.c=cPb(this.v,eR)),this.c);o=s.b;if(o==0)return;i=this.u.cb;t=this.d.i;e=this.d.b;mzb(i,this.d.g);wyb(i,pu(e.a[QNc],157).a);wyb(i,pu(e.a[oTc],157).a);pyb(i,(QBb(),IBb).a);vyb(i,HBb.a);Pxb(i,(AAb(),yAb),this.i);qzb(i,pu(e.a[QNc],157).a,2,(iBb(),cBb),16,0);qzb(i,pu(e.a[oTc],157).a,2,cBb,16,8);Pxb(i,zAb,this.a);lzb(i,pu(t.a[pTc],225).b,false,a.p.a);Lxb(i,(oFb(),KEb).a);czb(i,pu(t.a[qTc],225).b,0);p=0;q=0;f=this.v.a;if(f){gzb(i,pu(t.a[URc],225).b,f.c.c,f.c.b,f.c.a);if(su(f,307)){azb(i,pu(t.a[rTc],225).b,pu(f,307).b);azb(i,pu(t.a[sTc],225).b,pu(f,307).a);czb(i,pu(t.a[tTc],225).b,1);p=1;q=1}else if(su(f,308)){azb(i,pu(t.a[TRc],225).b,pu(f,308).a);czb(i,pu(t.a[tTc],225).b,2);p=2;q=2}}else{czb(i,pu(t.a[tTc],225).b,0);p=0;q=0}for(j=0;j<o;j++){r=(bgb(j,s.b),pu(s.a[j],353));if(!r.gb)continue;$3b(r.O,a.o,r.X);iJc(r,-r.O.a[14])}$qb(s);for(k=0;k<o;k++){r=(bgb(k,s.b),pu(s.a[k],353));n=pu(r.u,354);if(!r.gb)continue;azb(i,pu(t.a[uTc],225).b,n.L);lzb(i,pu(t.a[vTc],225).b,false,r.O.a);M3b(r.X,this.e,this.f,this.g);g=0;!!this.v.a&&n.b&&(g=q);if(p!=g){czb(i,pu(t.a[tTc],225).b,g);p=g}if(!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0){dzb(i,pu(t.a[wTc],225).b,n.c.A.c,n.c.A.d);dzb(i,pu(t.a[VRc],225).b,n.c.B.c,n.c.B.d)}else{dzb(i,pu(t.a[wTc],225).b,0,0);dzb(i,pu(t.a[VRc],225).b,1,1)}azb(i,pu(t.a[tRc],225).b,n.Z);gzb(i,pu(t.a[LPc],225).b,n.a.c,n.a.b,n.a.a);azb(i,pu(t.a[xTc],225).b,n.d);ezb(i,pu(t.a[DSc],225).b,fu(nR,_Kc,-1,[this.g.c,this.g.d]));OGb(this.u,n.P);UGb(this.u,n.R);VGb(this.u,n.S);!!n.c&&!!n.c.p&&((n.c.p.offsetWidth||0)|0)>0&&cHb(this.u,n.c,0);uyb(i,(Mzb(),Jzb),6,(CBb(),BBb),0)}vyb(i,IBb.a);MGb(this.u)};YT(1449,729,sLc,EJc);_.Ld=function FJc(){eIb(this,wTc,new GMb((ZMb(),TMb),new d5b(0,0)));eIb(this,VRc,new GMb(TMb,new d5b(1,1)));eIb(this,xTc,new GMb(LMb,new Djb(1)));eIb(this,DSc,new GMb(TMb,new d5b(1,1)));eIb(this,LPc,new GMb(KMb,new Y2b(16777215)));eIb(this,qTc,new FMb(RMb));eIb(this,tRc,new GMb(LMb,new Djb(1)));eIb(this,tTc,new GMb(OMb,jkb(0)));eIb(this,TRc,new GMb(LMb,new Djb(2.5E-4)));eIb(this,rTc,new GMb(LMb,new Djb(1)));eIb(this,sTc,new GMb(LMb,new Djb(2000)));eIb(this,URc,new GMb(KMb,new Y2b(16777215)));eIb(this,uTc,new GMb(LMb,jkb(0)))};var GJc;YT(1450,1,{},LJc);_.Od=function MJc(){return UJc(),JJc};_.Pd=function NJc(){return VJc(),KJc};var JJc,KJc;YT(1451,1,{},PJc);_.nc=function QJc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};YT(1452,1,{},SJc);_.nc=function TJc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var RN=rjb(AQc,'EffectsSprites$DemoScene',1220),QN=rjb(AQc,'EffectsSprites$DemoScene$1',1221),eR=rjb(yTc,'Sprite',1446),cR=rjb(yTc,'SpriteMaterial',1447),dR=rjb(yTc,'SpritePlugin',1448),iR=rjb(zTc,'SpriteShader',1449),hR=rjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1450),fR=rjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1451),gR=rjb(zTc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1452);TLc(xi)(42);
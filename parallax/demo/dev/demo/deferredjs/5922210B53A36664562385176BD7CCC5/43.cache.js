function AQc(){}
function EQc(){}
function HQc(){}
function gQc(a,b){a.b=b}
function ZPc(a,b){a.b=b}
function hQc(a,b){a.d=b}
function iQc(a,b){a.e=b}
function Lsc(a){this.b=a}
function $Pc(a,b){nUb.call(this,a,b)}
function _Pc(a){XPc();$Pc.call(this,WPc,a)}
function tQc(){TJb.call(this,(wQc(),vQc))}
function JQc(){JQc=LQc;yQc=new EQc}
function wQc(){wQc=LQc;vQc=new AQc}
function KQc(){KQc=LQc;zQc=new HQc}
function gAb(c,a,b){c.uniform2fv(a,b)}
function zAb(a){return new $wnd.Float32Array(a)}
function CAb(a){return new $wnd.Uint16Array(a)}
function YPc(a,b){return a.b!=b.b?Nu(b.b-a.b):b.S-a.S}
function fQc(a){var b;b=new jQc;v$b(a,b);l4b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function jQc(){N$b.call(this);this.e=0;this.c=false;gQc(this,new v4b(16777215))}
function Gsc(){Vac.call(this);this.e=new gPb('./static/textures/sprite1.png');this.f=new gPb('./static/textures/sprite2.png')}
function Fsc(a){var b,c,d,e,f;f=~~(a.H.n.$/2);b=~~(a.H.n.Z/2);e=Fu(a.n.v,355);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);k7b(a.n.ab,-f+d,b-c,1);k7b(a.o.ab,f-d,b-c,1);k7b(a.i.ab,-f+d,-b+c,1);k7b(a.j.ab,f-d,-b+c,1);k7b(a.k.ab,0,0,1)}
function XPc(){XPc=LQc;var a,b,c;CQb();new jQc;WPc=new XRb;a=CAb(vu(kS,UQc,-1,[0,1,2,0,2,3]));c=zAb(vu(jS,RRc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=zAb(vu(jS,RRc,-1,[0,0,1,0,1,1,0,1]));SRb(WPc,YXc,new PRb(a,1));SRb(WPc,IUc,new PRb(c,3));SRb(WPc,m$c,new PRb(b,2))}
function pQc(a,b){var c;bHb.call(this,a,b);this.f=new p7b;this.g=new V5b;this.i=new p7b;c=this.w.db;this.k=zAb(vu(jS,RRc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=CAb(vu(kS,UQc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();Lyb(c,(CBb(),ABb),this.j);Yyb(c,ABb,this.k,(KBb(),IBb));Lyb(c,BBb,this.b);Yyb(c,BBb,this.c,IBb);this.e=new tQc;JJb(this.e,c,false,0,0)}
var s$c='alphaTest',r$c='fogType',w$c='thothbot.parallax.plugins.sprite.',x$c='thothbot.parallax.plugins.sprite.shaders.',u$c='uvOffset';WU(1215,1,vSc);_.Db=function Dsc(){vac(this.c,new Gsc(this.b))};WU(1216,969,sSc,Gsc);_.Id=function Hsc(a){Fsc(this)};_.ob=function Isc(){var a,b,c,d,e,f,g,i;ut((tyb(),syb),(Dyb(),Cyb),this);this.b=new ERb(60,WHb(this.H.n),1,2100);m7b(this.b.ab,1500);this.c=new rRb(this.H.n.$,this.H.n.Z,1,10);m7b(this.c.ab,10);z9b(this.I,new p9b(0,1500,2100));this.g=new B9b;new pQc(this.H.n,this.I);new pQc(this.H.n,this.g);new hPb('./static/textures/sprite0.png',new Lsc(this));d=new jQc;hQc(d,this.f);gQc(d,new v4b(16777215));d.c=true;c=new jQc;hQc(c,this.e);gQc(c,new v4b(16777215));c.c=true;this.d=new VQb;for(a=0;a<200;a++){f=Hlb()-0.5;g=Hlb()-0.5;i=Hlb()-0.5;if(i<0){b=fQc(c)}else{b=fQc(d);r4b(b.b,0.5*Hlb(),0.75,0.5);y6b(b.d.B,-0.5,-0.5);y6b(b.d.C,2,2)}e=new _Pc(b);k7b(e.ab,f,g,i);e.ab.qf();e.ab.of(500);DQb(this.d,e)}DQb(this.I,this.d);oIb(this.H.n,false)};_.pb=function Jsc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Fu(grb(this.d.R,b),354);f=Fu(i.v,355);g=Jlb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}iQc(f,f.e+0.1*(b/e));k7b(i.fb,g*d,g*c,1);f.d==this.f||I$b(f,Jlb(j+i.ab.d*0.01)*0.4+0.6)}I4b(this.d.db,j*0.5);J4b(this.d.db,j*0.75);K4b(this.d.db,j);PHb(this.H.n,true);gIb(this.H.n,this.I,this.b,null,false);Zyb(this.H.n.db,(SBb(),QBb).b);gIb(this.H.n,this.g,this.c,null,false)};WU(1217,1,{},Lsc);_.Wd=function Msc(a){var b,c,d;c=new jQc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new _Pc(c);k7b(this.b.n.fb,d,b,1);DQb(this.b.g,this.b.n);this.b.o=new _Pc(c);k7b(this.b.o.fb,d,b,1);DQb(this.b.g,this.b.o);this.b.i=new _Pc(c);k7b(this.b.i.fb,d,b,1);DQb(this.b.g,this.b.i);this.b.j=new _Pc(c);k7b(this.b.j.fb,d,b,1);DQb(this.b.g,this.b.j);this.b.k=new _Pc(c);k7b(this.b.k.fb,d,b,1);DQb(this.b.g,this.b.k);Fsc(this.b)};WU(1535,834,{149:1,249:1,250:1,354:1},_Pc);_.Xd=function aQc(){var a;return a=new _Pc(Fu(this.v,355)),EQb(this,a,true),a};_.cT=function bQc(a){return YPc(this,Fu(a,354))};_.ae=function cQc(a,b){var c,d,e;e=new p7b;l7b(e,this.Y);c=a6b(a.d,e);if(c>this.fb.d){return}d=new GUb;d.b=c;d.e=this.ab;d.d=this;b.Hc(d)};_.be=function dQc(a,b,c){};_.b=0;var WPc;WU(1536,910,{269:1,283:1,355:1},jQc);_.Pe=function kQc(){return fQc(this)};_.Qe=function lQc(){return null};_.pe=function mQc(){return this.b};_.qe=function nQc(a){gQc(this,a)};_.c=false;_.e=0;WU(1537,707,dSc,pQc);_.Kd=function qQc(){return 2};_.Ld=function rQc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=FQb(this.A,aS)),this.d);o=s.c;if(o==0)return;i=this.w.db;t=this.e.j;e=this.e.c;oAb(i,this.e.i);uzb(i,Fu(e.b[IUc],157).b);uzb(i,Fu(e.b[m$c],157).b);nzb(i,(SCb(),KCb).b);tzb(i,JCb.b);Lyb(i,(CBb(),ABb),this.j);sAb(i,Fu(e.b[IUc],157).b,2,(kCb(),eCb),16,0);sAb(i,Fu(e.b[m$c],157).b,2,eCb,16,8);Lyb(i,BBb,this.b);nAb(i,Fu(t.b[n$c],227).c,false,a.q.b);Hyb(i,(QGb(),kGb).b);eAb(i,Fu(t.b[o$c],227).c,0);p=0;q=0;f=this.A.b;if(f){iAb(i,Fu(t.b[PYc],227).c,f.d.d,f.d.c,f.d.b);if(Iu(f,308)){cAb(i,Fu(t.b[p$c],227).c,Fu(f,308).c);cAb(i,Fu(t.b[q$c],227).c,Fu(f,308).b);eAb(i,Fu(t.b[r$c],227).c,1);p=1;q=1}else if(Iu(f,309)){cAb(i,Fu(t.b[OYc],227).c,Fu(f,309).b);eAb(i,Fu(t.b[r$c],227).c,2);p=2;q=2}}else{eAb(i,Fu(t.b[r$c],227).c,0);p=0;q=0}for(j=0;j<o;j++){r=($gb(j,s.c),Fu(s.b[j],354));if(!r.hb)continue;x5b(r.P,a.p,r.Y);ZPc(r,-r.P.b[14])}Wrb(s);for(k=0;k<o;k++){r=($gb(k,s.c),Fu(s.b[k],354));n=Fu(r.v,355);if(!r.hb)continue;cAb(i,Fu(t.b[s$c],227).c,n.M);nAb(i,Fu(t.b[t$c],227).c,false,r.P.b);j5b(r.Y,this.f,this.g,this.i);g=0;!!this.A.b&&n.c&&(g=q);if(p!=g){eAb(i,Fu(t.b[r$c],227).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){fAb(i,Fu(t.b[u$c],227).c,n.d.B.d,n.d.B.e);fAb(i,Fu(t.b[QYc],227).c,n.d.C.d,n.d.C.e)}else{fAb(i,Fu(t.b[u$c],227).c,0,0);fAb(i,Fu(t.b[QYc],227).c,1,1)}cAb(i,Fu(t.b[oYc],227).c,n.$);iAb(i,Fu(t.b[EWc],227).c,n.b.d,n.b.c,n.b.b);cAb(i,Fu(t.b[v$c],227).c,n.e);gAb(i,Fu(t.b[sZc],227).c,vu(jS,RRc,-1,[this.i.d,this.i.e]));pIb(this.w,n.Q);vIb(this.w,n.S);wIb(this.w,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&FIb(this.w,n.d,0);szb(i,(OAb(),LAb),6,(ECb(),DCb),0)}tzb(i,KCb.b);nIb(this.w)};WU(1538,727,iSc,tQc);_.Nd=function uQc(){HJb(this,u$c,new hOb((AOb(),uOb),new C6b(0,0)));HJb(this,QYc,new hOb(uOb,new C6b(1,1)));HJb(this,v$c,new hOb(mOb,new Akb(1)));HJb(this,sZc,new hOb(uOb,new C6b(1,1)));HJb(this,EWc,new hOb(lOb,new v4b(16777215)));HJb(this,o$c,new gOb(sOb));HJb(this,oYc,new hOb(mOb,new Akb(1)));HJb(this,r$c,new hOb(pOb,glb(0)));HJb(this,OYc,new hOb(mOb,new Akb(2.5E-4)));HJb(this,p$c,new hOb(mOb,new Akb(1)));HJb(this,q$c,new hOb(mOb,new Akb(2000)));HJb(this,PYc,new hOb(lOb,new v4b(16777215)));HJb(this,s$c,new hOb(mOb,glb(0)))};var vQc;WU(1539,1,{},AQc);_.Qd=function BQc(){return JQc(),yQc};_.Rd=function CQc(){return KQc(),zQc};var yQc,zQc;WU(1540,1,{},EQc);_.pc=function FQc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};WU(1541,1,{},HQc);_.pc=function IQc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var hO=okb(uXc,'EffectsSprites$DemoScene',1216),gO=okb(uXc,'EffectsSprites$DemoScene$1',1217),aS=okb(w$c,'Sprite',1535),$R=okb(w$c,'SpriteMaterial',1536),_R=okb(w$c,'SpritePlugin',1537),eS=okb(x$c,'SpriteShader',1538),dS=okb(x$c,'SpriteShader_Resources_default_InlineClientBundleGenerator',1539),bS=okb(x$c,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1540),cS=okb(x$c,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1541);JSc(Hi)(43);
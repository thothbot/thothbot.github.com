function VGc(){}
function ZGc(){}
function aHc(){}
function sGc(a,b){a.b=b}
function BGc(a,b){a.b=b}
function CGc(a,b){a.d=b}
function DGc(a,b){a.e=b}
function wqc(a){this.b=a}
function tGc(a,b){BRb.call(this,a,b)}
function uGc(a){qGc();tGc.call(this,pGc,a)}
function OGc(){FHb.call(this,(RGc(),QGc))}
function RGc(){RGc=eHc;QGc=new VGc}
function cHc(){cHc=eHc;TGc=new ZGc}
function dHc(){dHc=eHc;UGc=new aHc}
function tyb(c,a,b){c.uniform2fv(a,b)}
function Myb(a){return new $wnd.Float32Array(a)}
function Pyb(a){return new $wnd.Uint16Array(a)}
function rGc(a,b){return a.b!=b.b?Nu(b.b-a.b):b.S-a.S}
function AGc(a){var b;b=new EGc;IXb(a,b);w1b(b.b,a.b);b.d=a.d;b.e=a.e;b.c=a.c;return b}
function EGc(){$Xb.call(this);this.e=0;this.c=false;BGc(this,new G1b(16777215))}
function rqc(){c8b.call(this);this.e=new zMb('./static/textures/sprite1.png');this.f=new zMb('./static/textures/sprite2.png')}
function qqc(a){var b,c,d,e,f;f=~~(a.F.n.$/2);b=~~(a.F.n.Z/2);e=Fu(a.n.v,350);d=~~(((e.d.q.offsetWidth||0)|0)/2);c=~~(((e.d.q.offsetHeight||0)|0)/2);u4b(a.n.ab,-f+d,b-c,1);u4b(a.o.ab,f-d,b-c,1);u4b(a.i.ab,-f+d,-b+c,1);u4b(a.j.ab,f-d,-b+c,1);u4b(a.k.ab,0,0,1)}
function qGc(){qGc=eHc;var a,b,c;VNb();new EGc;pGc=new lPb;a=Pyb(vu(JQ,nHc,-1,[0,1,2,0,2,3]));c=Myb(vu(IQ,kIc,-1,[-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]));b=Myb(vu(IQ,kIc,-1,[0,0,1,0,1,1,0,1]));hPb(pGc,pOc,new ePb(a,1));hPb(pGc,aLc,new ePb(c,3));hPb(pGc,RPc,new ePb(b,2))}
function KGc(a,b){var c;PEb.call(this,a,b);this.f=new z4b;this.g=new e3b;this.i=new z4b;c=this.v.db;this.k=Myb(vu(IQ,kIc,-1,[-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]));this.c=Pyb(vu(JQ,nHc,-1,[0,1,2,0,2,3]));this.j=c.createBuffer();this.b=c.createBuffer();cxb(c,(Pzb(),Nzb),this.j);pxb(c,Nzb,this.k,(Xzb(),Vzb));cxb(c,Ozb,this.b);pxb(c,Ozb,this.c,Vzb);this.e=new OGc;vHb(this.e,c,false,0,0)}
var XPc='alphaTest',WPc='fogType',aQc='thothbot.parallax.plugins.sprite.',bQc='thothbot.parallax.plugins.sprite.shaders.',ZPc='uvOffset';rT(1216,1,QIc);_.Db=function oqc(){E7b(this.c,new rqc(this.b))};rT(1217,961,NIc,rqc);_.Hd=function sqc(a){qqc(this)};_.ob=function tqc(){var a,b,c,d,e,f,g,i;ut((Mwb(),Lwb),(Wwb(),Vwb),this);this.b=new WOb(60,IFb(this.F.n),1,2100);w4b(this.b.ab,1500);this.c=new JOb(this.F.n.$,this.F.n.Z,1,10);w4b(this.c.ab,10);J6b(this.G,new z6b(0,1500,2100));this.g=new K6b;new KGc(this.F.n,this.G);new KGc(this.F.n,this.g);new AMb('./static/textures/sprite0.png',new wqc(this));d=new EGc;CGc(d,this.f);BGc(d,new G1b(16777215));d.c=true;c=new EGc;CGc(c,this.e);BGc(c,new G1b(16777215));c.c=true;this.d=new lOb;for(a=0;a<200;a++){f=bkb()-0.5;g=bkb()-0.5;i=bkb()-0.5;if(i<0){b=AGc(c)}else{b=AGc(d);C1b(b.b,0.5*bkb(),0.75,0.5);J3b(b.d.B,-0.5,-0.5);J3b(b.d.C,2,2)}e=new uGc(b);u4b(e.ab,f,g,i);e.ab.pf();e.ab.nf(500);WNb(this.d,e)}WNb(this.G,this.d);aGb(this.F.n,false)};_.pb=function uqc(a){var b,c,d,e,f,g,i,j;j=a*0.001;for(b=0,e=this.d.R.c;b<e;b++){i=Fu(Cpb(this.d.R,b),349);f=Fu(i.v,350);g=dkb(j+i.ab.d*0.01)*0.3+1;d=1;c=1;if(!!f.d&&!!f.d.q&&((f.d.q.offsetWidth||0)|0)>0){d=(f.d.q.offsetWidth||0)|0;c=(f.d.q.offsetHeight||0)|0}DGc(f,f.e+0.1*(b/e));u4b(i.fb,g*d,g*c,1);f.d==this.f||VXb(f,dkb(j+i.ab.d*0.01)*0.4+0.6)}T1b(this.d.db,j*0.5);U1b(this.d.db,j*0.75);V1b(this.d.db,j);CFb(this.F.n);UFb(this.F.n,this.G,this.b,null,false);qxb(this.F.n.db,(dAb(),bAb).b);UFb(this.F.n,this.g,this.c,null,false)};rT(1218,1,{},wqc);_.Vd=function xqc(a){var b,c,d;c=new EGc;c.d=a;d=(c.d.q.offsetWidth||0)|0;b=(c.d.q.offsetHeight||0)|0;this.b.n=new uGc(c);u4b(this.b.n.fb,d,b,1);WNb(this.b.g,this.b.n);this.b.o=new uGc(c);u4b(this.b.o.fb,d,b,1);WNb(this.b.g,this.b.o);this.b.i=new uGc(c);u4b(this.b.i.fb,d,b,1);WNb(this.b.g,this.b.i);this.b.j=new uGc(c);u4b(this.b.j.fb,d,b,1);WNb(this.b.g,this.b.j);this.b.k=new uGc(c);u4b(this.b.k.fb,d,b,1);WNb(this.b.g,this.b.k);qqc(this.b)};rT(1418,826,{149:1,247:1,248:1,349:1},uGc);_.Wd=function vGc(){var a;return a=new uGc(Fu(this.v,350)),XNb(this,a,true),a};_.cT=function wGc(a){return rGc(this,Fu(a,349))};_._d=function xGc(a,b){var c,d,e;e=new z4b;v4b(e,this.Y);c=l3b(a.d,e);if(c>this.fb.d){return}d=new URb;d.b=c;d.e=this.ab;d.d=this;b.Hc(d)};_.ae=function yGc(a,b,c){};_.b=0;var pGc;rT(1419,902,{267:1,281:1,350:1},EGc);_.Oe=function FGc(){return AGc(this)};_.Pe=function GGc(){return null};_.oe=function HGc(){return this.b};_.pe=function IGc(a){BGc(this,a)};_.c=false;_.e=0;rT(1420,705,yIc,KGc);_.Jd=function LGc(){return 2};_.Kd=function MGc(a,b,c,d){var e,f,g,i,j,k,n,o,p,q,r,s,t;s=((!this.d||this.d.c==0)&&(this.d=YNb(this.w,zQ)),this.d);o=s.c;if(o==0)return;i=this.v.db;t=this.e.j;e=this.e.c;Byb(i,this.e.i);Lxb(i,Fu(e.b[aLc],157).b);Lxb(i,Fu(e.b[RPc],157).b);Exb(i,(dBb(),XAb).b);Kxb(i,WAb.b);cxb(i,(Pzb(),Nzb),this.j);Fyb(i,Fu(e.b[aLc],157).b,2,(xAb(),rAb),16,0);Fyb(i,Fu(e.b[RPc],157).b,2,rAb,16,8);cxb(i,Ozb,this.b);Ayb(i,Fu(t.b[SPc],225).c,false,a.q.b);$wb(i,(DEb(),ZDb).b);ryb(i,Fu(t.b[TPc],225).c,0);p=0;q=0;f=this.w.c;if(f){vyb(i,Fu(t.b[kPc],225).c,f.d.d,f.d.c,f.d.b);if(Iu(f,307)){pyb(i,Fu(t.b[UPc],225).c,Fu(f,307).c);pyb(i,Fu(t.b[VPc],225).c,Fu(f,307).b);ryb(i,Fu(t.b[WPc],225).c,1);p=1;q=1}else if(Iu(f,308)){pyb(i,Fu(t.b[jPc],225).c,Fu(f,308).b);ryb(i,Fu(t.b[WPc],225).c,2);p=2;q=2}}else{ryb(i,Fu(t.b[WPc],225).c,0);p=0;q=0}for(k=0;k<o;k++){r=(ufb(k,s.c),Fu(s.b[k],349));if(!r.hb)continue;I2b(r.P,a.p,r.Y);sGc(r,-r.P.b[14])}qqb(s);for(j=0;j<o;j++){r=(ufb(j,s.c),Fu(s.b[j],349));n=Fu(r.v,350);if(!r.hb)continue;pyb(i,Fu(t.b[XPc],225).c,n.M);Ayb(i,Fu(t.b[YPc],225).c,false,r.P.b);u2b(r.Y,this.f,this.g,this.i);g=0;!!this.w.c&&n.c&&(g=q);if(p!=g){ryb(i,Fu(t.b[WPc],225).c,g);p=g}if(!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0){syb(i,Fu(t.b[ZPc],225).c,n.d.B.d,n.d.B.e);syb(i,Fu(t.b[lPc],225).c,n.d.C.d,n.d.C.e)}else{syb(i,Fu(t.b[ZPc],225).c,0,0);syb(i,Fu(t.b[lPc],225).c,1,1)}pyb(i,Fu(t.b[HOc],225).c,n.$);vyb(i,Fu(t.b[YMc],225).c,n.b.d,n.b.c,n.b.b);pyb(i,Fu(t.b[$Pc],225).c,n.e);tyb(i,Fu(t.b[_Pc],225).c,vu(IQ,kIc,-1,[this.i.d,this.i.e]));bGb(this.v,n.Q);hGb(this.v,n.S);iGb(this.v,n.T);!!n.d&&!!n.d.q&&((n.d.q.offsetWidth||0)|0)>0&&rGb(this.v,n.d,0);Jxb(i,(_yb(),Yyb),6,(RAb(),QAb),0)}Kxb(i,XAb.b);_Fb(this.v)};rT(1421,725,DIc,OGc);_.Md=function PGc(){tHb(this,ZPc,new ALb((TLb(),NLb),new N3b(0,0)));tHb(this,lPc,new ALb(NLb,new N3b(1,1)));tHb(this,$Pc,new ALb(FLb,new Wib(1)));tHb(this,_Pc,new ALb(NLb,new N3b(1,1)));tHb(this,YMc,new ALb(ELb,new G1b(16777215)));tHb(this,TPc,new zLb(LLb));tHb(this,HOc,new ALb(FLb,new Wib(1)));tHb(this,WPc,new ALb(ILb,Cjb(0)));tHb(this,jPc,new ALb(FLb,new Wib(2.5E-4)));tHb(this,UPc,new ALb(FLb,new Wib(1)));tHb(this,VPc,new ALb(FLb,new Wib(2000)));tHb(this,kPc,new ALb(ELb,new G1b(16777215)));tHb(this,XPc,new ALb(FLb,Cjb(0)))};var QGc;rT(1422,1,{},VGc);_.Pd=function WGc(){return cHc(),TGc};_.Qd=function XGc(){return dHc(),UGc};var TGc,UGc;rT(1423,1,{},ZGc);_.pc=function $Gc(){return 'uniform vec3 color;\r\nuniform sampler2D map;\r\nuniform float opacity;\r\n\r\nuniform int fogType;\r\nuniform vec3 fogColor;\r\nuniform float fogDensity;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\nuniform float alphaTest;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvec4 texture = texture2D( map, vUV );\r\n\r\n\tif ( texture.a < alphaTest ) discard;\r\n\r\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\r\n\r\n\tif ( fogType > 0 ) {\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\t\tfloat fogFactor = 0.0;\r\n\r\n\t\tif ( fogType == 1 ) {\r\n\r\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tconst float LOG2 = 1.442695;\r\n\t\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\r\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\r\n\r\n\t\t}\r\n\r\n\t\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n\r\n\t}\r\n\r\n}\r\n'};rT(1424,1,{},aHc);_.pc=function bHc(){return 'uniform mat4 modelViewMatrix;\r\nuniform mat4 projectionMatrix;\r\nuniform float rotation;\r\nuniform vec2 scale;\r\nuniform vec2 uvOffset;\r\nuniform vec2 uvScale;\r\n\r\nattribute vec2 position;\r\nattribute vec2 uv;\r\n\r\nvarying vec2 vUV;\r\n\r\nvoid main() {\r\n\r\n\tvUV = uvOffset + uv * uvScale;\r\n\r\n\tvec2 alignedPosition = position * scale;\r\n\r\n\tvec2 rotatedPosition;\r\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\r\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\r\n\r\n\tvec4 finalPosition;\r\n\r\n\tfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\r\n\tfinalPosition.xy += rotatedPosition;\r\n\tfinalPosition = projectionMatrix * finalPosition;\r\n\r\n\tgl_Position = finalPosition;\r\n\r\n}\r\n'};var iO=Kib(NNc,'EffectsSprites$DemoScene',1217),hO=Kib(NNc,'EffectsSprites$DemoScene$1',1218),zQ=Kib(aQc,'Sprite',1418),xQ=Kib(aQc,'SpriteMaterial',1419),yQ=Kib(aQc,'SpritePlugin',1420),DQ=Kib(bQc,'SpriteShader',1421),CQ=Kib(bQc,'SpriteShader_Resources_default_InlineClientBundleGenerator',1422),AQ=Kib(bQc,'SpriteShader_Resources_default_InlineClientBundleGenerator$1',1423),BQ=Kib(bQc,'SpriteShader_Resources_default_InlineClientBundleGenerator$2',1424);bJc(Hi)(41);
function TJb(){}
function XJb(){}
function $Jb(){}
function $wc(){}
function hwc(){}
function lwc(){}
function owc(){}
function Awc(){}
function Ewc(){}
function Hwc(){}
function Twc(){}
function Xwc(){}
function f8b(a,b){a.c=b}
function aKb(){aKb=GMc;RJb=new XJb}
function bKb(){bKb=GMc;SJb=new $Jb}
function PJb(){PJb=GMc;OJb=new TJb}
function Pwc(){Pwc=GMc;Owc=new Twc}
function dwc(){dwc=GMc;cwc=new hwc}
function qwc(){qwc=GMc;fwc=new lwc}
function rwc(){rwc=GMc;gwc=new owc}
function wwc(){wwc=GMc;vwc=new Awc}
function Jwc(){Jwc=GMc;ywc=new Ewc}
function Kwc(){Kwc=GMc;zwc=new Hwc}
function axc(){axc=GMc;Rwc=new Xwc}
function bxc(){bxc=GMc;Swc=new $wc}
function fsc(a,b){this.a=a;this.b=b}
function Q_b(){sZb.call(this);this.a=false;this.b=1}
function KJb(){uIb.call(this,(PJb(),OJb))}
function Mwc(){uIb.call(this,(Pwc(),Owc))}
function awc(){uIb.call(this,(dwc(),cwc))}
function twc(){uIb.call(this,(wwc(),vwc))}
function rGb(a,b){cHb(a,b);qGb(a,false)}
function O5b(a,b){var c;c=new e4b;c4b(c,b.p,T3b(c,b.X));return G5b(a,c)}
function bsc(){A9b.call(this);this.t=new X5b(0,1000,-1000);this.r=new W5b}
var SVc='bgColor',UVc='fAspect',RVc='fGodRayIntensity',VVc='fStepSize',IVc='mFar',HVc='mNear',XVc='tColors',YVc='tGodRays',WVc='tInput',TVc='vSunPositionScreenSpace',ZVc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';fU(746,728,cOc,KJb);_.Ld=function LJb(){iIb(this,HVc,new KMb((bNb(),PMb),new Ijb(1)));iIb(this,IVc,new KMb(PMb,new Ijb(2000)));iIb(this,mUc,new KMb(PMb,new Ijb(1)))};_.Md=function MJb(a){var b,c;c=new Tqb(pu(cS,LMc,1,[JVc]));b=new Tqb(pu(cS,LMc,1,[KVc]));rIb(this,zIb(a,pu(fS,LMc,173,[c,b])))};_.Nd=function NJb(a){var b,c;c=new Tqb(pu(cS,LMc,1,[LVc,MVc]));b=new Tqb(pu(cS,LMc,1,[NVc,OVc,PVc]));sIb(this,zIb(a,pu(fS,LMc,173,[c,b])))};var OJb;fU(747,1,{},TJb);_.Od=function UJb(){return aKb(),RJb};_.Pd=function VJb(){return bKb(),SJb};var RJb,SJb;fU(748,1,{},XJb);_.nc=function YJb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};fU(749,1,{},$Jb);_.nc=function _Jb(){return QVc};fU(813,810,{78:1,186:1,235:1,236:1,249:1});_.Zd=function XPb(){return this.b};_.$d=function YPb(){return this.d};fU(814,810,{78:1,186:1,235:1,237:1,249:1});_.Zd=function jQb(){return this.b};_.$d=function kQb(){return this.g};fU(918,911,{279:1,282:1},Q_b);_.Pe=function R_b(){var a;return a=new Q_b,aZb(this,a),a.a=this.a,a.b=this.b,a};_.Qe=function S_b(){return new KJb};_.Me=function T_b(){return this.b};_.Ne=function U_b(){return this.a};_.Re=function V_b(a,b){var c;fZb(this,b);c=eZb(this).i;if(Cu(a,235)){IMb(zu(c.a[HVc],225),new Ijb(zu(a,235).$d()));IMb(zu(c.a[IVc],225),new Ijb(zu(a,235).Zd()))}IMb(zu(c.a[mUc],225),new Ijb(this.Z))};_.a=false;_.b=0;fU(1226,1,pOc);_.zb=function _rc(){a9b(this.b,new bsc(this.a))};fU(1227,970,{336:1},bsc);_.nb=function csc(){var a,b,c,d;this.a=new hQb(70,xGb(this.G.k),1,3000);T5b(this.a._,200);this.b=new Q_b;c=new l_b;f_b(c,new a3b(0));j_b(c,(V$b(),S$b));new szc('./static/models/obj/tree/tree.js',new fsc(this,c));a=new GWb(1,20,10);this.s=new t7b(a,c);Q5b(this.s.eb,20);ePb(this.H,this.s);fHb(this.G.k,false);RGb(this.G.k,false);UGb(this.G.k,1297,1);this.j=new g8b;this.i=new UPb(this.G.k.Z,this.G.k.Y,-10000,10000);T5b(this.i._,100);ePb(this.j,this.i);this.n=new eOb(this.G.k.Z,this.G.k.Y);wNb(this.n,(iEb(),cEb));uNb(this.n,(ZDb(),XDb));rNb(this.n,(tCb(),sCb));this.o=new eOb(this.G.k.Z,this.G.k.Y);wNb(this.o,cEb);uNb(this.o,XDb);rNb(this.o,sCb);d=~~(this.G.k.Z/4);b=~~(this.G.k.Y/4);this.p=new eOb(d,b);wNb(this.p,cEb);uNb(this.p,XDb);rNb(this.p,sCb);this.q=new eOb(d,b);wNb(this.q,cEb);uNb(this.q,XDb);rNb(this.q,sCb);this.e=new m2b(new twc);this.c=new m2b(new awc);IMb(zu(JRb(eZb(this.c).i,RVc),225),new Ijb(0.75));this.d=new m2b(new Mwc);Z2b(zu(zu(JRb(eZb(this.d).i,SVc),225).d,293),1297);Z2b(zu(zu(JRb(eZb(this.d).i,_Uc),225).d,293),16772608);this.k=new t7b(new vWb(this.G.k.Z,this.G.k.Y),this.e);T5b(this.k._,-9900);ePb(this.j,this.k)};_.ob=function dsc(a){var b,c,d,e,f,g;f=a/4000;e5b(this.s._,200*Ikb(f));T5b(this.s._,200*Rkb(f)-100);_4b(this.a._,(this.f-this.a._.c)*0.036);a5b(this.a._,(-this.g-this.a._.d)*0.036);DPb(this.a,this.H._);O5b(this.r.lf(this.t),this.a);e5b(this.r,(this.r.c+1)/2);f5b(this.r,(this.r.d+1)/2);d5b(zu(zu(JRb(eZb(this.e).i,TVc),225).d,297),this.r.c,this.r.d);d5b(zu(zu(JRb(eZb(this.d).i,TVc),225).d,297),this.r.c,this.r.d);rGb(this.G.k,this.n);g=this.G.k.Z;b=this.G.k.Y;d=0.74*b;e=0.74*b;e5b(this.r,this.r.c*g);f5b(this.r,this.r.d*b);dHb(this.G.k,Hu(this.r.c-e/2),Hu(this.r.d-d/2),Hu(e),Hu(d));wGb(this.G.k,true);IMb(zu(JRb(eZb(this.d).i,UVc),225),new Ijb(g/b));f8b(this.j,this.d);JGb(this.G.k,this.j,this.i,this.n,false);wGb(this.G.k,false);f8b(this.H,null);JGb(this.G.k,this.H,this.a,this.n,false);f8b(this.H,this.b);JGb(this.G.k,this.H,this.a,this.o,true);c=Okb(6,-1);IMb(zu(JRb(eZb(this.e).i,VVc),225),new Ijb(c));IMb(zu(JRb(eZb(this.e).i,WVc),225),this.o);f8b(this.j,this.e);JGb(this.G.k,this.j,this.i,this.q,false);c=Okb(6,-2);IMb(zu(JRb(eZb(this.e).i,VVc),225),new Ijb(c));IMb(zu(JRb(eZb(this.e).i,WVc),225),this.q);JGb(this.G.k,this.j,this.i,this.p,false);c=Okb(6,-3);IMb(zu(JRb(eZb(this.e).i,VVc),225),new Ijb(c));IMb(zu(JRb(eZb(this.e).i,WVc),225),this.p);JGb(this.G.k,this.j,this.i,this.q,false);IMb(zu(JRb(eZb(this.c).i,XVc),225),this.n);IMb(zu(JRb(eZb(this.c).i,YVc),225),this.q);f8b(this.j,this.c);JGb(this.G.k,this.j,this.i,null,false);f8b(this.j,null)};_.f=0;_.g=0;fU(1228,1,{},fsc);_.Bf=function gsc(a,b){var c;c=new t7b(b,this.b);R5b(c._,0,-150,-150);Q5b(c.eb,400);c.W=false;O3b(c.V,c._,c.ab,c.eb);c.Y=true;ePb(this.a.H,c)};fU(1312,728,cOc,awc);_.Ld=function bwc(){iIb(this,XVc,new JMb((bNb(),VMb)));iIb(this,YVc,new JMb(VMb));iIb(this,RVc,new KMb(PMb,new Ijb(0.69)));iIb(this,TVc,new KMb(XMb,new h5b(0.5,0.5)))};var cwc;fU(1313,1,{},hwc);_.Od=function iwc(){return qwc(),fwc};_.Pd=function jwc(){return rwc(),gwc};var fwc,gwc;fU(1314,1,{},lwc);_.nc=function mwc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};fU(1315,1,{},owc);_.nc=function pwc(){return ZVc};fU(1318,728,cOc,twc);_.Ld=function uwc(){iIb(this,WVc,new JMb((bNb(),VMb)));iIb(this,VVc,new KMb(PMb,new Ijb(1)));iIb(this,TVc,new KMb(XMb,new h5b(0.5,0.5)))};var vwc;fU(1319,1,{},Awc);_.Od=function Bwc(){return Jwc(),ywc};_.Pd=function Cwc(){return Kwc(),zwc};var ywc,zwc;fU(1320,1,{},Ewc);_.nc=function Fwc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};fU(1321,1,{},Hwc);_.nc=function Iwc(){return ZVc};fU(1324,728,cOc,Mwc);_.Ld=function Nwc(){iIb(this,TVc,new KMb((bNb(),XMb),new h5b(0.5,0.5)));iIb(this,UVc,new KMb(PMb,new Ijb(1)));iIb(this,_Uc,new KMb(OMb,new a3b(16772608)));iIb(this,SVc,new KMb(OMb,new a3b(0)))};var Owc;fU(1325,1,{},Twc);_.Od=function Uwc(){return axc(),Rwc};_.Pd=function Vwc(){return bxc(),Swc};var Rwc,Swc;fU(1326,1,{},Xwc);_.nc=function Ywc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};fU(1327,1,{},$wc);_.nc=function _wc(){return ZVc};var hO=wjb(tTc,'PostprocessingGodrays$DemoScene',1227),gO=wjb(tTc,'PostprocessingGodrays$DemoScene$1',1228),SI=wjb($Vc,'MeshDepthMaterial',918),LO=wjb(jTc,'GodRaysGenerateShader',1318),HO=wjb(jTc,'GodRaysCombineShader',1312),PO=wjb(jTc,'GodraysFakeSunShader',1324),cG=wjb(yUc,'DepthShader',746),KO=wjb(jTc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1319),IO=wjb(jTc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1320),JO=wjb(jTc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1321),GO=wjb(jTc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1313),EO=wjb(jTc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1314),FO=wjb(jTc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1315),OO=wjb(jTc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1325),MO=wjb(jTc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1326),NO=wjb(jTc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1327),bG=wjb(yUc,'DepthShader_Resources_default_InlineClientBundleGenerator',747),_F=wjb(yUc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',748),aG=wjb(yUc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',749);DOc(xi)(40);
function zLb(){}
function DLb(){}
function GLb(){}
function Awc(){}
function Ewc(){}
function Hwc(){}
function Twc(){}
function Xwc(){}
function $wc(){}
function kxc(){}
function oxc(){}
function rxc(){}
function Fac(a,b){a.d=b}
function vLb(){vLb=$Mc;uLb=new zLb}
function ILb(){ILb=$Mc;xLb=new DLb}
function JLb(){JLb=$Mc;yLb=new GLb}
function Jwc(){Jwc=$Mc;ywc=new Ewc}
function wwc(){wwc=$Mc;vwc=new Awc}
function Kwc(){Kwc=$Mc;zwc=new Hwc}
function Pwc(){Pwc=$Mc;Owc=new Twc}
function axc(){axc=$Mc;Rwc=new Xwc}
function bxc(){bxc=$Mc;Swc=new $wc}
function gxc(){gxc=$Mc;fxc=new kxc}
function txc(){txc=$Mc;ixc=new oxc}
function uxc(){uxc=$Mc;jxc=new rxc}
function cuc(a,b){this.b=a;this.c=b}
function aIb(a,b){KIb(a,b);_Hb(a,false)}
function qLb(){aKb.call(this,(vLb(),uLb))}
function twc(){aKb.call(this,(wwc(),vwc))}
function Mwc(){aKb.call(this,(Pwc(),Owc))}
function dxc(){aKb.call(this,(gxc(),fxc))}
function o2b(){S_b.call(this);this.b=false;this.c=1}
function $tc(){acc.call(this);this.u=new c9b(0,1000,-1000);this.s=new b9b}
function U8b(a,b){V6b(D8b,b.q,K6b(D8b,b.Y));return M8b(a,D8b)}
var qWc='bgColor',sWc='fAspect',pWc='fGodRayIntensity',tWc='fStepSize',gWc='mFar',fWc='mNear',vWc='tColors',wWc='tGodRays',uWc='tInput',rWc='vSunPositionScreenSpace',xWc='varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}';kW(760,742,yOc,qLb);_.Td=function rLb(){QJb(this,fWc,new qOb((JOb(),vOb),new Tkb(1)));QJb(this,gWc,new qOb(vOb,new Tkb(2000)));QJb(this,MUc,new qOb(vOb,new Tkb(1)))};_.Ud=function sLb(a){var b,c;c=new fsb(Tv(gU,eNc,1,[hWc]));b=new fsb(Tv(gU,eNc,1,[iWc]));ZJb(this,fKb(a,Tv(jU,eNc,173,[c,b])))};_.Vd=function tLb(a){var b,c;c=new fsb(Tv(gU,eNc,1,[jWc,kWc]));b=new fsb(Tv(gU,eNc,1,[lWc,mWc,nWc]));$Jb(this,fKb(a,Tv(jU,eNc,173,[c,b])))};var uLb;kW(761,1,{},zLb);_.Wd=function ALb(){return ILb(),xLb};_.Xd=function BLb(){return JLb(),yLb};var xLb,yLb;kW(762,1,{},DLb);_.uc=function ELb(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n\r\n}'};kW(763,1,{},GLb);_.uc=function HLb(){return oWc};kW(827,824,{78:1,186:1,236:1,237:1,250:1});_.fe=function ERb(){return this.c};_.ge=function FRb(){return this.e};kW(828,824,{78:1,186:1,236:1,238:1,250:1});_.fe=function SRb(){return this.c};_.ge=function TRb(){return this.i};kW(939,932,{284:1,287:1},o2b);_.$e=function p2b(){var a;return a=new o2b,A_b(this,a),a.b=this.b,a.c=this.c,a};_._e=function q2b(){return new qLb};_.Xe=function r2b(){return this.c};_.Ye=function s2b(){return this.b};_.af=function t2b(a,b){var c;F_b(this,b);c=E_b(this).j;if(ew(a,236)){oOb(bw(c.b[fWc],226),new Tkb(bw(a,236).ge()));oOb(bw(c.b[gWc],226),new Tkb(bw(a,236).fe()))}oOb(bw(c.b[MUc],226),new Tkb(this.ab))};_.b=false;_.c=0;kW(1251,1,MOc);_.Qb=function Ytc(){Cbc(this.c,new $tc(this.b))};kW(1252,990,{340:1},$tc);_.ob=function _tc(){var a,b,c,d;this.b=new QRb(70,UGb(this.H.n),1,3000);Z8b(this.b.ab,200);this.c=new o2b;c=new L1b;F1b(c,new H5b(0));J1b(c,(t1b(),q1b));new Lzc('./static/models/obj/tree/tree.js',new cuc(this,c));a=new oYb(1,20,10);this.t=new SZb(a,c);W8b(this.t.fb,20);MQb(this.I,this.t);NIb(this.H.n,false);VGb(this.H.n,false);WGb(this.H.n,1297,1);this.k=new Gac;this.j=new BRb(this.H.n.ib,this.H.n.hb,-10000,10000);Z8b(this.j.ab,100);MQb(this.k,this.j);this.o=new MPb(this.H.n.ib,this.H.n.hb);cPb(this.o,(yFb(),sFb));aPb(this.o,(nFb(),lFb));ZOb(this.o,(JDb(),IDb));this.p=new MPb(this.H.n.ib,this.H.n.hb);cPb(this.p,sFb);aPb(this.p,lFb);ZOb(this.p,IDb);d=~~(this.H.n.ib/4);b=~~(this.H.n.hb/4);this.q=new MPb(d,b);cPb(this.q,sFb);aPb(this.q,lFb);ZOb(this.q,IDb);this.r=new MPb(d,b);cPb(this.r,sFb);aPb(this.r,lFb);ZOb(this.r,IDb);this.f=new M4b(new Mwc);this.d=new M4b(new twc);oOb(bw(sTb(E_b(this.d).j,pWc),226),new Tkb(0.75));this.e=new M4b(new dxc);D5b(bw(bw(sTb(E_b(this.e).j,qWc),226).e,298),1297);D5b(bw(bw(sTb(E_b(this.e).j,zVc),226).e,298),16772608);this.n=new SZb(new dYb(this.H.n.ib,this.H.n.hb),this.f);Z8b(this.n.ab,-9900);MQb(this.k,this.n)};_.pb=function auc(a){var b,c,d,e,f,g;f=a/4000;p8b(this.t.ab,200*Tlb(f));Z8b(this.t.ab,200*amb(f)-100);j8b(this.b.ab,(this.g-this.b.ab.d)*0.036);k8b(this.b.ab,(-this.i-this.b.ab.e)*0.036);kRb(this.b,this.I.ab);U8b(this.s.kf(this.u),this.b);p8b(this.s,(this.s.d+1)/2);q8b(this.s,(this.s.e+1)/2);o8b(bw(bw(sTb(E_b(this.f).j,rWc),226).e,301),this.s.d,this.s.e);o8b(bw(bw(sTb(E_b(this.e).j,rWc),226).e,301),this.s.d,this.s.e);aIb(this.H.n,this.o);g=this.H.n.ib;b=this.H.n.hb;d=0.74*b;e=0.74*b;p8b(this.s,this.s.d*g);q8b(this.s,this.s.e*b);LIb(this.H.n,jw(this.s.d-e/2),jw(this.s.e-d/2),jw(e),jw(d));fIb(this.H.n,true);oOb(bw(sTb(E_b(this.e).j,sWc),226),new Tkb(g/b));Fac(this.k,this.e);rIb(this.H.n,this.k,this.j,this.o,false);fIb(this.H.n,false);Fac(this.I,null);rIb(this.H.n,this.I,this.b,this.o,false);Fac(this.I,this.c);rIb(this.H.n,this.I,this.b,this.p,true);c=Zlb(6,-1);oOb(bw(sTb(E_b(this.f).j,tWc),226),new Tkb(c));oOb(bw(sTb(E_b(this.f).j,uWc),226),this.p);Fac(this.k,this.f);rIb(this.H.n,this.k,this.j,this.r,false);c=Zlb(6,-2);oOb(bw(sTb(E_b(this.f).j,tWc),226),new Tkb(c));oOb(bw(sTb(E_b(this.f).j,uWc),226),this.r);rIb(this.H.n,this.k,this.j,this.q,false);c=Zlb(6,-3);oOb(bw(sTb(E_b(this.f).j,tWc),226),new Tkb(c));oOb(bw(sTb(E_b(this.f).j,uWc),226),this.q);rIb(this.H.n,this.k,this.j,this.r,false);oOb(bw(sTb(E_b(this.d).j,vWc),226),this.o);oOb(bw(sTb(E_b(this.d).j,wWc),226),this.r);Fac(this.k,this.d);rIb(this.H.n,this.k,this.j,null,false);Fac(this.k,null)};_.g=0;_.i=0;kW(1253,1,{},cuc);_.xf=function duc(a,b){var c;c=new SZb(b,this.c);X8b(c.ab,0,-150,-150);W8b(c.fb,400);c.X=false;F6b(c.W,c.ab,c.bb,c.fb);c.Z=true;MQb(this.b.I,c)};kW(1292,742,yOc,twc);_.Td=function uwc(){QJb(this,vWc,new pOb((JOb(),BOb)));QJb(this,wWc,new pOb(BOb));QJb(this,pWc,new qOb(vOb,new Tkb(0.69)));QJb(this,rWc,new qOb(DOb,new u8b(0.5,0.5)))};var vwc;kW(1293,1,{},Awc);_.Wd=function Bwc(){return Jwc(),ywc};_.Xd=function Cwc(){return Kwc(),zwc};var ywc,zwc;kW(1294,1,{},Ewc);_.uc=function Fwc(){return 'varying vec2 vUv;\n\nuniform sampler2D tColors;\nuniform sampler2D tGodRays;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fGodRayIntensity;\n\nvoid main() {\n\n\t// Since THREE.MeshDepthMaterial renders foreground objects white and background\n\t// objects black, the god-rays will be white streaks. Therefore value is inverted\n\t// before being combined with tColors\n\n\tgl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );\n\tgl_FragColor.a = 1.0;\n\n}\n'};kW(1295,1,{},Hwc);_.uc=function Iwc(){return xWc};kW(1298,742,yOc,Mwc);_.Td=function Nwc(){QJb(this,uWc,new pOb((JOb(),BOb)));QJb(this,tWc,new qOb(vOb,new Tkb(1)));QJb(this,rWc,new qOb(DOb,new u8b(0.5,0.5)))};var Owc;kW(1299,1,{},Twc);_.Wd=function Uwc(){return axc(),Rwc};_.Xd=function Vwc(){return bxc(),Swc};var Rwc,Swc;kW(1300,1,{},Xwc);_.uc=function Ywc(){return "#define TAPS_PER_PASS 6.0\n\nvarying vec2 vUv;\n\nuniform sampler2D tInput;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fStepSize; // filter step size\n\nvoid main() {\n\n\t// delta from current pixel to \"sun\" position\n\n\tvec2 delta = vSunPositionScreenSpace - vUv;\n\tfloat dist = length( delta );\n\n\t// Step vector (uv space)\n\n\tvec2 stepv = fStepSize * delta / dist;\n\n\t// Number of iterations between pixel and sun\n\n\tfloat iters = dist/fStepSize;\n\n\tvec2 uv = vUv.xy;\n\tfloat col = 0.0;\n\n\t// This breaks ANGLE in Chrome 22\n\t//\t- see http://code.google.com/p/chromium/issues/detail?id=153105\n\n/*\n\t// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),\n\t// so i've just left the loop\n\n\tfor ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {\n\n\t\t\t\t\t// Accumulate samples, making sure we dont walk past the light source.\n\n\t\t\t\t\t// The check for uv.y < 1 would not be necessary with \"border\" UV wrap\n\t\t\t\t\t// mode, with a black border colour. I don't think this is currently\n\t\t\t\t\t// exposed by three.js. As a result there might be artifacts when the\n\t\t\t\t\t// sun is to the left, right or bottom of screen as these cases are\n\t\t\t\t\t// not specifically handled.\n\n\t\tcol += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );\n\t\tuv += stepv;\n\n\t}\n*/\n\n\t// Unrolling loop manually makes it work in ANGLE\n\n\tif ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\tif ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r;\n\tuv += stepv;\n\n\t// Should technically be dividing by 'iters', but 'TAPS_PER_PASS' smooths out\n\t// objectionable artifacts, in particular near the sun position. The side\n\t// effect is that the result is darker than it should be around the sun, as\n\t// TAPS_PER_PASS is greater than the number of samples actually accumulated.\n\t// When the result is inverted (in the shader 'godrays_combine', this produces\n\t// a slight bright spot at the position of the sun, even when it is occluded.\n\n\tgl_FragColor = vec4( col/TAPS_PER_PASS );\n\tgl_FragColor.a = 1.0;\n\n}\n"};kW(1301,1,{},$wc);_.uc=function _wc(){return xWc};kW(1304,742,yOc,dxc);_.Td=function exc(){QJb(this,rWc,new qOb((JOb(),DOb),new u8b(0.5,0.5)));QJb(this,sWc,new qOb(vOb,new Tkb(1)));QJb(this,zVc,new qOb(uOb,new H5b(16772608)));QJb(this,qWc,new qOb(uOb,new H5b(0)))};var fxc;kW(1305,1,{},kxc);_.Wd=function lxc(){return txc(),ixc};_.Xd=function mxc(){return uxc(),jxc};var ixc,jxc;kW(1306,1,{},oxc);_.uc=function pxc(){return 'varying vec2 vUv;\n\nuniform vec2 vSunPositionScreenSpace;\nuniform float fAspect;\n\nuniform vec3 sunColor;\nuniform vec3 bgColor;\n\nvoid main() {\n\n\tvec2 diff = vUv - vSunPositionScreenSpace;\n\n\t// Correct for aspect ratio\n\n\tdiff.x *= fAspect;\n\n\tfloat prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );\n\tprop = 0.35 * pow( 1.0 - prop, 3.0 );\n\n\tgl_FragColor.xyz = mix( sunColor, bgColor, 1.0 - prop );\n\tgl_FragColor.w = 1.0;\n\n}\n'};kW(1307,1,{},rxc);_.uc=function sxc(){return xWc};var iQ=Hkb(STc,'PostprocessingGodrays$DemoScene',1252),hQ=Hkb(STc,'PostprocessingGodrays$DemoScene$1',1253),PK=Hkb(yWc,'MeshDepthMaterial',939),PQ=Hkb(ITc,'GodRaysGenerateShader',1298),LQ=Hkb(ITc,'GodRaysCombineShader',1292),TQ=Hkb(ITc,'GodraysFakeSunShader',1304),VH=Hkb(YUc,'DepthShader',760),OQ=Hkb(ITc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator',1299),MQ=Hkb(ITc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$1',1300),NQ=Hkb(ITc,'GodRaysGenerateShader_Resources_default_InlineClientBundleGenerator$2',1301),KQ=Hkb(ITc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator',1293),IQ=Hkb(ITc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$1',1294),JQ=Hkb(ITc,'GodRaysCombineShader_Resources_default_InlineClientBundleGenerator$2',1295),SQ=Hkb(ITc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator',1305),QQ=Hkb(ITc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$1',1306),RQ=Hkb(ITc,'GodraysFakeSunShader_Resources_default_InlineClientBundleGenerator$2',1307),UH=Hkb(YUc,'DepthShader_Resources_default_InlineClientBundleGenerator',761),SH=Hkb(YUc,'DepthShader_Resources_default_InlineClientBundleGenerator$1',762),TH=Hkb(YUc,'DepthShader_Resources_default_InlineClientBundleGenerator$2',763);$Oc(Pj)(40);
function Axc(){}
function Exc(){}
function Hxc(){}
function zKc(){}
function DKc(){}
function GKc(){}
function Mmc(){O9b.call(this)}
function txc(){IIb.call(this,(wxc(),vxc))}
function sKc(){IIb.call(this,(vKc(),uKc))}
function IKc(){IKc=WMc;xKc=new DKc}
function vKc(){vKc=WMc;uKc=new zKc}
function JKc(){JKc=WMc;yKc=new GKc}
function Jxc(){Jxc=WMc;yxc=new Exc}
function wxc(){wxc=WMc;vxc=new Axc}
function Kxc(){Kxc=WMc;zxc=new Hxc}
function ZIc(){this.c=new A2b(new sKc);WMb(Fu(XRb(sZb(this.c).j,aVc),225),(Xib(),Xib(),Vib));WMb(Fu(XRb(sZb(this.c).j,bVc),225),new Wjb(0.35));WMb(Fu(XRb(sZb(this.c).j,cVc),225),new Wjb(0.95));WMb(Fu(XRb(sZb(this.c).j,dVc),225),Ckb(2048));this.f=true;this.g=true}
var aVc='grayscale',bVc='nIntensity',dVc='sCount',cVc='sIntensity',WUc='texture1',XUc='texture2';nU(1152,1,HOc);_.Db=function Kmc(){o9b(this.c,new Mmc(this.b))};nU(1153,968,EOc,Mmc);_.Jd=function Nmc(a){s5b(Fu(Fu(XRb(this.e,VUc),225).e,297),a.b.$);t5b(Fu(Fu(XRb(this.e,VUc),225).e,297),a.b.Z)};_.ob=function Omc(){var a,b,c,d,e,f,g;ut((Pxb(),Oxb),(Zxb(),Yxb),this);this.b=new vQb(35,LGb(this.H.n),1,3000);f6b(this.b.ab,4);d=new A2b(new txc);this.e=sZb(d).j;f=new XNb('./static/textures/lava/cloud.png');RNb(f,(OFb(),NFb));SNb(f,NFb);WMb(Fu(XRb(this.e,WUc),225),f);g=new XNb(JUc);RNb(g,NFb);SNb(g,NFb);WMb(Fu(XRb(this.e,XUc),225),g);this.c=new H7b(new aXb(0.65,0.3,30,30),d);B3b(this.c.db,0.3);sPb(this.I,this.c);a=new bJc(this.H.n);e=new jJc(this.I,this.b);b=new WIc(1.25);c=new ZIc;c.b=true;zqb(a.c,e);zqb(a.c,b);zqb(a.c,c);dHb(this.H.n,false);this.d=Bh()};_.pb=function Pmc(a){var b;b=(Bh()-this.d)*0.001*5;WMb(Fu(XRb(this.e,YUc),225),new Wjb(Fu(Fu(XRb(this.e,YUc),225).e,150).b+0.2*b));t3b(this.c.db,0.05*b);u3b(this.c.db,0.0125*b);EGb(this.H.n,true);this.d=Bh();XGb(this.H.n,this.I,this.b,null,false)};_.d=0;nU(1329,726,uOc,txc);_.Od=function uxc(){wIb(this,ZUc,new YMb((pNb(),bNb),new Wjb(0.45)));wIb(this,$Uc,new YMb(lNb,new j6b(0,0,0)));wIb(this,YUc,new YMb(bNb,new Wjb(1)));wIb(this,VUc,new YMb(jNb,new u5b));wIb(this,_Uc,new YMb(jNb,new v5b(3,1)));wIb(this,WUc,new XMb(hNb));wIb(this,XUc,new XMb(hNb))};var vxc;nU(1330,1,{},Axc);_.Rd=function Bxc(){return Jxc(),yxc};_.Sd=function Cxc(){return Kxc(),zxc};var yxc,zxc;nU(1331,1,{},Exc);_.qc=function Fxc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};nU(1332,1,{},Hxc);_.qc=function Ixc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};nU(1438,1437,UOc,ZIc);_.Ug=function $Ic(a,b,c){WMb(Fu(XRb(sZb(this.c).j,pUc),225),a.e);WMb(Fu(XRb(sZb(this.c).j,YUc),225),new Wjb(Fu(Fu(XRb(sZb(this.c).j,YUc),225).e,150).b+b));fTb(a.d,this.c);this.b?XGb(a.v,a.w,a.b,null,false):XGb(a.v,a.w,a.b,a.i,false)};_.b=false;nU(1461,726,uOc,sKc);_.Od=function tKc(){wIb(this,pUc,new XMb((pNb(),hNb)));wIb(this,YUc,new YMb(bNb,new Wjb(0)));wIb(this,bVc,new YMb(bNb,new Wjb(0.5)));wIb(this,cVc,new YMb(bNb,new Wjb(0.05)));wIb(this,dVc,new YMb(eNb,Ckb(4096)));wIb(this,aVc,new YMb(eNb,(Xib(),Xib(),Wib)))};var uKc;nU(1462,1,{},zKc);_.Rd=function AKc(){return IKc(),xKc};_.Sd=function BKc(){return JKc(),yKc};var xKc,yKc;nU(1463,1,{},DKc);_.qc=function EKc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};nU(1464,1,{},GKc);_.qc=function HKc(){return eVc};var _M=Kjb(DTc,'MaterialsShaderLava$DemoScene',1153),JQ=Kjb(fVc,'FilmPass',1438),_O=Kjb(wTc,'LavaShader',1329),cR=Kjb(gVc,'FilmShader',1461),$O=Kjb(wTc,'LavaShader_Resources_default_InlineClientBundleGenerator',1330),YO=Kjb(wTc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1331),ZO=Kjb(wTc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1332),bR=Kjb(gVc,'FilmShader_Resources_default_InlineClientBundleGenerator',1462),_Q=Kjb(gVc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1463),aR=Kjb(gVc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1464);VOc(Hi)(30);
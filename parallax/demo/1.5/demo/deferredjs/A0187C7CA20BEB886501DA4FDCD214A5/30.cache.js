function asc(){}
function esc(){}
function hsc(){}
function WDc(){}
function $Dc(){}
function bEc(){}
function ckc(){j7b.call(this)}
function Vrc(){ZGb.call(this,(Yrc(),Xrc))}
function PDc(){ZGb.call(this,(SDc(),RDc))}
function SDc(){SDc=XEc;RDc=new WDc}
function dEc(){dEc=XEc;UDc=new $Dc}
function eEc(){eEc=XEc;VDc=new bEc}
function Yrc(){Yrc=XEc;Xrc=new asc}
function jsc(){jsc=XEc;$rc=new esc}
function ksc(){ksc=XEc;_rc=new hsc}
function OCc(){this.b=new $_b(new PDc);SKb(su(MPb(eXb(this.b).i,WMc),225),(qhb(),qhb(),ohb));SKb(su(MPb(eXb(this.b).i,XMc),225),new pib(0.35));SKb(su(MPb(eXb(this.b).i,YMc),225),new pib(0.95));SKb(su(MPb(eXb(this.b).i,ZMc),225),Xib(2048));this.e=true;this.f=true}
var WMc='grayscale',XMc='nIntensity',ZMc='sCount',YMc='sIntensity',QMc='texture1',RMc='texture2';RS(1143,1,FGc);_.zb=function akc(){L6b(this.b,new ckc(this.a))};RS(1144,961,CGc,ckc);_.Ed=function dkc(a){S2b(su(su(MPb(this.d,PMc),225).d,296),a.a.Z);T2b(su(su(MPb(this.d,PMc),225).d,296),a.a.Y)};_.nb=function ekc(){var a,b,c,d,e,f,g;gt((fwb(),ewb),(pwb(),owb),this);this.a=new oOb(35,aFb(this.D.k),1,3000);E3b(this.a._,4);d=new $_b(new Vrc);this.d=eXb(d).i;f=new TLb('./static/textures/lava/cloud.png');NLb(f,(eEb(),dEb));OLb(f,dEb);SKb(su(MPb(this.d,QMc),225),f);g=new TLb(CMc);NLb(g,dEb);OLb(g,dEb);SKb(su(MPb(this.d,RMc),225),g);this.b=new e5b(new PUb(0.65,0.3,30,30),d);_0b(this.b.cb,0.3);oNb(this.F,this.b);a=new RCc(this.D.k);e=new ZCc(this.F,this.a);b=new LCc(1.25);c=new OCc;c.a=true;Uob(a.b,e);Uob(a.b,b);Uob(a.b,c);uFb(this.D.k,false);this.c=rh()};_.ob=function fkc(a){var b;b=(rh()-this.c)*0.001*5;SKb(su(MPb(this.d,SMc),225),new pib(su(su(MPb(this.d,SMc),225).d,150).a+0.2*b));T0b(this.b.cb,0.05*b);U0b(this.b.cb,0.0125*b);WEb(this.D.k);this.c=rh();mFb(this.D.k,this.F,this.a,null,false)};_.c=0;RS(1277,726,sGc,Vrc);_.Jd=function Wrc(){NGb(this,TMc,new UKb((lLb(),ZKb),new pib(0.45)));NGb(this,UMc,new UKb(hLb,new I3b(0,0,0)));NGb(this,SMc,new UKb(ZKb,new pib(1)));NGb(this,PMc,new UKb(fLb,new U2b));NGb(this,VMc,new UKb(fLb,new V2b(3,1)));NGb(this,QMc,new TKb(dLb));NGb(this,RMc,new TKb(dLb))};var Xrc;RS(1278,1,{},asc);_.Md=function bsc(){return jsc(),$rc};_.Nd=function csc(){return ksc(),_rc};var $rc,_rc;RS(1279,1,{},esc);_.ac=function fsc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};RS(1280,1,{},hsc);_.ac=function isc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};RS(1380,1379,RGc,OCc);_.Fg=function PCc(a,b,c){SKb(su(MPb(eXb(this.b).i,iMc),225),a.d);SKb(su(MPb(eXb(this.b).i,SMc),225),new pib(su(su(MPb(eXb(this.b).i,SMc),225).d,150).a+b));UQb(a.c,this.b);this.a?mFb(a.u,a.v,a.a,null,false):mFb(a.u,a.v,a.a,a.g,false)};_.a=false;RS(1397,726,sGc,PDc);_.Jd=function QDc(){NGb(this,iMc,new TKb((lLb(),dLb)));NGb(this,SMc,new UKb(ZKb,new pib(0)));NGb(this,XMc,new UKb(ZKb,new pib(0.5)));NGb(this,YMc,new UKb(ZKb,new pib(0.05)));NGb(this,ZMc,new UKb(aLb,Xib(4096)));NGb(this,WMc,new UKb(aLb,(qhb(),qhb(),phb)))};var RDc;RS(1398,1,{},WDc);_.Md=function XDc(){return dEc(),UDc};_.Nd=function YDc(){return eEc(),VDc};var UDc,VDc;RS(1399,1,{},$Dc);_.ac=function _Dc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};RS(1400,1,{},bEc);_.ac=function cEc(){return $Mc};var FM=dib(vLc,'MaterialsShaderLava$DemoScene',1144),FP=dib(_Mc,'FilmPass',1380),_N=dib(oLc,'LavaShader',1277),WP=dib(aNc,'FilmShader',1397),$N=dib(oLc,'LavaShader_Resources_default_InlineClientBundleGenerator',1278),YN=dib(oLc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1279),ZN=dib(oLc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1280),VP=dib(aNc,'FilmShader_Resources_default_InlineClientBundleGenerator',1398),TP=dib(aNc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1399),UP=dib(aNc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1400);SGc(xi)(30);
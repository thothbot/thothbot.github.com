function voc(){}
function zoc(){}
function Coc(){}
function qyc(){}
function uyc(){}
function xyc(){}
function _gc(){M5b.call(this)}
function ooc(){XFb.call(this,(roc(),qoc))}
function jyc(){XFb.call(this,(myc(),lyc))}
function myc(){myc=xzc;lyc=new qyc}
function zyc(){zyc=xzc;oyc=new uyc}
function Ayc(){Ayc=xzc;pyc=new xyc}
function roc(){roc=xzc;qoc=new voc}
function Eoc(){Eoc=xzc;toc=new zoc}
function Foc(){Foc=xzc;uoc=new Coc}
function ixc(){this.c=new $$b(new jyc);QJb(Yu(IOb(bWb(this.c).j,yHc),174),(Dgb(),Dgb(),Bgb));QJb(Yu(IOb(bWb(this.c).j,zHc),174),new zhb(0.35));QJb(Yu(IOb(bWb(this.c).j,AHc),174),new zhb(0.95));QJb(Yu(IOb(bWb(this.c).j,BHc),174),fib(2048));this.f=true;this.g=true}
var yHc='grayscale',zHc='nIntensity',BHc='sCount',AHc='sIntensity',sHc='texture1',tHc='texture2';BS(1105,1,cBc);_.Cb=function Zgc(){J5b(this.c,new _gc(this.b))};BS(1106,946,_Ac,_gc);_.Md=function ahc(a){T1b(Yu(Yu(IOb(this.e,rHc),174).e,244),a.b.Y);U1b(Yu(Yu(IOb(this.e,rHc),174).e,244),a.b.X)};_.nb=function bhc(){var a,b,c,d,e,f,g;Mt((nvb(),mvb),(xvb(),wvb),this);this.b=new jNb(35,hEb(this.F.o),1,3000);F2b(this.b.ab,4);d=new $$b(new ooc);this.e=bWb(d).j;f=new RKb('./static/textures/lava/cloud.png');LKb(f,(fDb(),eDb));MKb(f,eDb);QJb(Yu(IOb(this.e,sHc),174),f);g=new RKb(eHc);LKb(g,eDb);MKb(g,eDb);QJb(Yu(IOb(this.e,tHc),174),g);this.c=new e4b(new LTb(0.65,0.3,30,30),d);a0b(this.c.db,0.3);kMb(this.G,this.c);a=new lxc(this.F.o);e=new txc(this.G,this.b);b=new fxc(1.25);c=new ixc;c.b=true;cob(a.c,e);cob(a.c,b);cob(a.c,c);this.F.o.Z=false;this.d=Ch()};_.ob=function chc(a){var b;b=(Ch()-this.d)*0.001*5;QJb(Yu(IOb(this.e,uHc),174),new zhb(Yu(Yu(IOb(this.e,uHc),174).e,98).b+0.2*b));U_b(this.c.db,0.05*b);V_b(this.c.db,0.0125*b);cEb(this.F.o);this.d=Ch();tEb(this.F.o,this.G,this.b,null,false)};_.d=0;BS(1229,719,QAc,ooc);_.Qd=function poc(){LFb(this,vHc,new SJb((jKb(),XJb),new zhb(0.45)));LFb(this,wHc,new SJb(fKb,new J2b(0,0,0)));LFb(this,uHc,new SJb(XJb,new zhb(1)));LFb(this,rHc,new SJb(dKb,new V1b));LFb(this,xHc,new SJb(dKb,new W1b(3,1)));LFb(this,sHc,new RJb(bKb));LFb(this,tHc,new RJb(bKb))};var qoc;BS(1230,1,{},voc);_.Td=function woc(){return Eoc(),toc};_.Ud=function xoc(){return Foc(),uoc};var toc,uoc;BS(1231,1,{},zoc);_.ic=function Aoc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};BS(1232,1,{},Coc);_.ic=function Doc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};BS(1304,1303,nBc,ixc);_.Kg=function jxc(a,b,c){QJb(Yu(IOb(bWb(this.c).j,LGc),174),a.e);QJb(Yu(IOb(bWb(this.c).j,uHc),174),new zhb(Yu(Yu(IOb(bWb(this.c).j,uHc),174).e,98).b+b));QPb(a.d,this.c);this.b?tEb(a.q,a.r,a.b,null,false):tEb(a.q,a.r,a.b,a.i,false)};_.b=false;BS(1321,719,QAc,jyc);_.Qd=function kyc(){LFb(this,LGc,new RJb((jKb(),bKb)));LFb(this,uHc,new SJb(XJb,new zhb(0)));LFb(this,zHc,new SJb(XJb,new zhb(0.5)));LFb(this,AHc,new SJb(XJb,new zhb(0.05)));LFb(this,BHc,new SJb($Jb,fib(4096)));LFb(this,yHc,new SJb($Jb,(Dgb(),Dgb(),Cgb)))};var lyc;BS(1322,1,{},qyc);_.Td=function ryc(){return zyc(),oyc};_.Ud=function syc(){return Ayc(),pyc};var oyc,pyc;BS(1323,1,{},uyc);_.ic=function vyc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};BS(1324,1,{},xyc);_.ic=function yyc(){return CHc};var KM=nhb(XFc,'MaterialsShaderLava$DemoScene',1106),nP=nhb(DHc,'FilmPass',1304),dO=nhb(QFc,'LavaShader',1229),EP=nhb(EHc,'FilmShader',1321),cO=nhb(QFc,'LavaShader_Resources_default_InlineClientBundleGenerator',1230),aO=nhb(QFc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1231),bO=nhb(QFc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1232),DP=nhb(EHc,'FilmShader_Resources_default_InlineClientBundleGenerator',1322),BP=nhb(EHc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1323),CP=nhb(EHc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1324);oBc(Ii)(30);
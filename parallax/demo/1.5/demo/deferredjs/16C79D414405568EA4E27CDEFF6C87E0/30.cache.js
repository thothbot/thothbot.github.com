function yuc(){}
function Cuc(){}
function Fuc(){}
function xHc(){}
function BHc(){}
function EHc(){}
function Rlc(){w9b.call(this)}
function ruc(){pIb.call(this,(uuc(),tuc))}
function qHc(){pIb.call(this,(tHc(),sHc))}
function tHc(){tHc=UJc;sHc=new xHc}
function GHc(){GHc=UJc;vHc=new BHc}
function HHc(){HHc=UJc;wHc=new EHc}
function Huc(){Huc=UJc;wuc=new Cuc}
function uuc(){uuc=UJc;tuc=new yuc}
function Iuc(){Iuc=UJc;xuc=new Fuc}
function XFc(){this.b=new h2b(new qHc);DMb(pu(ERb(_Yb(this.b).i,TRc),225),(Dib(),Dib(),Bib));DMb(pu(ERb(_Yb(this.b).i,URc),225),new Cjb(0.35));DMb(pu(ERb(_Yb(this.b).i,VRc),225),new Cjb(0.95));DMb(pu(ERb(_Yb(this.b).i,WRc),225),ikb(2048));this.e=true;this.f=true}
var TRc='grayscale',URc='nIntensity',WRc='sCount',VRc='sIntensity',NRc='texture1',ORc='texture2';YT(1154,1,DLc);_.zb=function Plc(){Y8b(this.b,new Rlc(this.a))};YT(1155,971,ALc,Rlc);_.Gd=function Slc(a){_4b(pu(pu(ERb(this.d,MRc),225).d,297),a.a.Z);a5b(pu(pu(ERb(this.d,MRc),225).d,297),a.a.Y)};_.nb=function Tlc(){var a,b,c,d,e,f,g;et((wxb(),vxb),(Gxb(),Fxb),this);this.a=new cQb(35,sGb(this.G.k),1,3000);O5b(this.a._,4);d=new h2b(new ruc);this.d=_Yb(d).i;f=new ENb('./static/textures/lava/cloud.png');yNb(f,(vFb(),uFb));zNb(f,uFb);DMb(pu(ERb(this.d,NRc),225),f);g=new ENb(ARc);yNb(g,uFb);zNb(g,uFb);DMb(pu(ERb(this.d,ORc),225),g);this.b=new o7b(new JWb(0.65,0.3,30,30),d);i3b(this.b.cb,0.3);_Ob(this.H,this.b);a=new _Fc(this.G.k);e=new hGc(this.H,this.a);b=new UFc(1.25);c=new XFc;c.a=true;gqb(a.b,e);gqb(a.b,b);gqb(a.b,c);MGb(this.G.k,false);this.c=rh()};_.ob=function Ulc(a){var b;b=(rh()-this.c)*0.001*5;DMb(pu(ERb(this.d,PRc),225),new Cjb(pu(pu(ERb(this.d,PRc),225).d,150).a+0.2*b));a3b(this.b.cb,0.05*b);b3b(this.b.cb,0.0125*b);lGb(this.G.k,true);this.c=rh();EGb(this.G.k,this.H,this.a,null,false)};_.c=0;YT(1283,729,qLc,ruc);_.Ld=function suc(){dIb(this,QRc,new FMb((YMb(),KMb),new Cjb(0.45)));dIb(this,RRc,new FMb(UMb,new S5b(0,0,0)));dIb(this,PRc,new FMb(KMb,new Cjb(1)));dIb(this,MRc,new FMb(SMb,new b5b));dIb(this,SRc,new FMb(SMb,new c5b(3,1)));dIb(this,NRc,new EMb(QMb));dIb(this,ORc,new EMb(QMb))};var tuc;YT(1284,1,{},yuc);_.Od=function zuc(){return Huc(),wuc};_.Pd=function Auc(){return Iuc(),xuc};var wuc,xuc;YT(1285,1,{},Cuc);_.nc=function Duc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};YT(1286,1,{},Fuc);_.nc=function Guc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};YT(1392,1391,QLc,XFc);_.Qg=function YFc(a,b,c){DMb(pu(ERb(_Yb(this.b).i,gRc),225),a.d);DMb(pu(ERb(_Yb(this.b).i,PRc),225),new Cjb(pu(pu(ERb(_Yb(this.b).i,PRc),225).d,150).a+b));OSb(a.c,this.b);this.a?EGb(a.u,a.v,a.a,null,false):EGb(a.u,a.v,a.a,a.g,false)};_.a=false;YT(1415,729,qLc,qHc);_.Ld=function rHc(){dIb(this,gRc,new EMb((YMb(),QMb)));dIb(this,PRc,new FMb(KMb,new Cjb(0)));dIb(this,URc,new FMb(KMb,new Cjb(0.5)));dIb(this,VRc,new FMb(KMb,new Cjb(0.05)));dIb(this,WRc,new FMb(NMb,ikb(4096)));dIb(this,TRc,new FMb(NMb,(Dib(),Dib(),Cib)))};var sHc;YT(1416,1,{},xHc);_.Od=function yHc(){return GHc(),vHc};_.Pd=function zHc(){return HHc(),wHc};var vHc,wHc;YT(1417,1,{},BHc);_.nc=function CHc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};YT(1418,1,{},EHc);_.nc=function FHc(){return XRc};var KM=qjb(uQc,'MaterialsShaderLava$DemoScene',1155),sQ=qjb(YRc,'FilmPass',1392),KO=qjb(nQc,'LavaShader',1283),NQ=qjb(ZRc,'FilmShader',1415),JO=qjb(nQc,'LavaShader_Resources_default_InlineClientBundleGenerator',1284),HO=qjb(nQc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1285),IO=qjb(nQc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1286),MQ=qjb(ZRc,'FilmShader_Resources_default_InlineClientBundleGenerator',1416),KQ=qjb(ZRc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1417),LQ=qjb(ZRc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1418);RLc(xi)(30);
function Swc(){}
function Wwc(){}
function Zwc(){}
function RJc(){}
function VJc(){}
function YJc(){}
function Lnc(){pbc.call(this)}
function Lwc(){pJb.call(this,(Owc(),Nwc))}
function KJc(){pJb.call(this,(NJc(),MJc))}
function NJc(){NJc=mMc;MJc=new RJc}
function $Jc(){$Jc=mMc;PJc=new VJc}
function _Jc(){_Jc=mMc;QJc=new YJc}
function _wc(){_wc=mMc;Qwc=new Wwc}
function Owc(){Owc=mMc;Nwc=new Swc}
function axc(){axc=mMc;Rwc=new Zwc}
function pIc(){this.b=new _3b(new KJc);DNb(wv(HSb(T$b(this.b).i,pUc),226),(jjb(),jjb(),hjb));DNb(wv(HSb(T$b(this.b).i,qUc),226),new ikb(0.35));DNb(wv(HSb(T$b(this.b).i,rUc),226),new ikb(0.95));DNb(wv(HSb(T$b(this.b).i,sUc),226),Qkb(2048));this.e=true;this.f=true}
var pUc='grayscale',qUc='nIntensity',sUc='sCount',rUc='sIntensity',jUc='texture1',kUc='texture2';zV(1172,1,YNc);_.Mb=function Jnc(){Rac(this.b,new Lnc(this.a))};zV(1173,988,VNc,Lnc);_.Gd=function Mnc(a){E7b(wv(wv(HSb(this.d,iUc),226).d,301),a.a.hb);F7b(wv(wv(HSb(this.d,iUc),226).d,301),a.a.gb)};_.nb=function Nnc(){var a,b,c,d,e,f,g;lu((dyb(),cyb),(nyb(),myb),this);this.a=new dRb(35,iGb(this.G.k),1,3000);m8b(this.a._,4);d=new _3b(new Lwc);this.d=T$b(d).i;f=new EOb('./static/textures/lava/cloud.png');yOb(f,(eGb(),dGb));zOb(f,dGb);DNb(wv(HSb(this.d,jUc),226),f);g=new EOb(YTc);yOb(g,dGb);zOb(g,dGb);DNb(wv(HSb(this.d,kUc),226),g);this.b=new fZb(new LXb(0.65,0.3,30,30),d);i5b(this.b.cb,0.3);_Pb(this.H,this.b);a=new tIc(this.G.k);e=new BIc(this.H,this.a);b=new mIc(1.25);c=new pIc;c.a=true;Oqb(a.b,e);Oqb(a.b,b);Oqb(a.b,c);jGb(this.G.k,false);this.c=yi()};_.ob=function Onc(a){var b;b=(yi()-this.c)*0.001*5;DNb(wv(HSb(this.d,lUc),226),new ikb(wv(wv(HSb(this.d,lUc),226).d,150).a+0.2*b));a5b(this.b.cb,0.05*b);b5b(this.b.cb,0.0125*b);oHb(this.G.k,true);this.c=yi();GHb(this.G.k,this.H,this.a,null,false)};_.c=0;zV(1308,740,KNc,Lwc);_.Ld=function Mwc(){dJb(this,mUc,new FNb((YNb(),KNb),new ikb(0.45)));dJb(this,nUc,new FNb(UNb,new r8b(0,0,0)));dJb(this,lUc,new FNb(KNb,new ikb(1)));dJb(this,iUc,new FNb(SNb,new I7b));dJb(this,oUc,new FNb(SNb,new J7b(3,1)));dJb(this,jUc,new ENb(QNb));dJb(this,kUc,new ENb(QNb))};var Nwc;zV(1309,1,{},Swc);_.Od=function Twc(){return _wc(),Qwc};_.Pd=function Uwc(){return axc(),Rwc};var Qwc,Rwc;zV(1310,1,{},Wwc);_.nc=function Xwc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};zV(1311,1,{},Zwc);_.nc=function $wc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};zV(1417,1416,jOc,pIc);_.Fg=function qIc(a,b,c){DNb(wv(HSb(T$b(this.b).i,ETc),226),a.d);DNb(wv(HSb(T$b(this.b).i,lUc),226),new ikb(wv(wv(HSb(T$b(this.b).i,lUc),226).d,150).a+b));RTb(a.c,this.b);this.a?GHb(a.u,a.v,a.a,null,false):GHb(a.u,a.v,a.a,a.g,false)};_.a=false;zV(1440,740,KNc,KJc);_.Ld=function LJc(){dJb(this,ETc,new ENb((YNb(),QNb)));dJb(this,lUc,new FNb(KNb,new ikb(0)));dJb(this,qUc,new FNb(KNb,new ikb(0.5)));dJb(this,rUc,new FNb(KNb,new ikb(0.05)));dJb(this,sUc,new FNb(NNb,Qkb(4096)));dJb(this,pUc,new FNb(NNb,(jjb(),jjb(),ijb)))};var MJc;zV(1441,1,{},RJc);_.Od=function SJc(){return $Jc(),PJc};_.Pd=function TJc(){return _Jc(),QJc};var PJc,QJc;zV(1442,1,{},VJc);_.nc=function WJc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};zV(1443,1,{},YJc);_.nc=function ZJc(){return tUc};var dO=Yjb(RSc,'MaterialsShaderLava$DemoScene',1173),UR=Yjb(uUc,'FilmPass',1417),kQ=Yjb(KSc,'LavaShader',1308),nS=Yjb(vUc,'FilmShader',1440),jQ=Yjb(KSc,'LavaShader_Resources_default_InlineClientBundleGenerator',1309),hQ=Yjb(KSc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1310),iQ=Yjb(KSc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1311),mS=Yjb(vUc,'FilmShader_Resources_default_InlineClientBundleGenerator',1441),kS=Yjb(vUc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1442),lS=Yjb(vUc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1443);kOc(Ej)(30);
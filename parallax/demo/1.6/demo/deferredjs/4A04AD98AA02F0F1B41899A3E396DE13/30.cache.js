function Dxc(){}
function Hxc(){}
function Kxc(){}
function KKc(){}
function DKc(){}
function HKc(){}
function woc(){acc.call(this)}
function wxc(){aKb.call(this,(zxc(),yxc))}
function wKc(){aKb.call(this,(zKc(),yKc))}
function zKc(){zKc=$Mc;yKc=new DKc}
function zxc(){zxc=$Mc;yxc=new Dxc}
function Mxc(){Mxc=$Mc;Bxc=new Hxc}
function Nxc(){Nxc=$Mc;Cxc=new Kxc}
function NKc(){NKc=$Mc;CKc=new KKc}
function MKc(){MKc=$Mc;BKc=new HKc}
function aJc(){this.c=new M4b(new wKc);oOb(bw(sTb(E_b(this.c).j,nVc),226),(Ujb(),Ujb(),Sjb));oOb(bw(sTb(E_b(this.c).j,oVc),226),new Tkb(0.35));oOb(bw(sTb(E_b(this.c).j,pVc),226),new Tkb(0.95));oOb(bw(sTb(E_b(this.c).j,qVc),226),zlb(2048));this.f=true;this.g=true}
var nVc='grayscale',oVc='nIntensity',qVc='sCount',pVc='sIntensity',hVc='texture1',iVc='texture2';kW(1174,1,MOc);_.Qb=function uoc(){Cbc(this.c,new woc(this.b))};kW(1175,990,JOc,woc);_.Nd=function xoc(a){p8b(bw(bw(sTb(this.e,gVc),226).e,301),a.b.ib);q8b(bw(bw(sTb(this.e,gVc),226).e,301),a.b.hb)};_.ob=function yoc(){var a,b,c,d,e,f,g;Su((Pyb(),Oyb),(Zyb(),Yyb),this);this.b=new QRb(35,UGb(this.H.n),1,3000);Z8b(this.b.ab,4);d=new M4b(new wxc);this.e=E_b(d).j;f=new pPb('./static/textures/lava/cloud.png');jPb(f,(QGb(),PGb));kPb(f,PGb);oOb(bw(sTb(this.e,hVc),226),f);g=new pPb(WUc);jPb(g,PGb);kPb(g,PGb);oOb(bw(sTb(this.e,iVc),226),g);this.c=new SZb(new wYb(0.65,0.3,30,30),d);V5b(this.c.db,0.3);MQb(this.I,this.c);a=new eJc(this.H.n);e=new nJc(this.I,this.b);b=new ZIc(1.25);c=new aJc;c.b=true;yrb(a.c,e);yrb(a.c,b);yrb(a.c,c);VGb(this.H.n,false);this.d=Ji()};_.pb=function zoc(a){var b;b=(Ji()-this.d)*0.001*5;oOb(bw(sTb(this.e,jVc),226),new Tkb(bw(bw(sTb(this.e,jVc),226).e,150).b+0.2*b));N5b(this.c.db,0.05*b);O5b(this.c.db,0.0125*b);_Hb(this.H.n,true);this.d=Ji();rIb(this.H.n,this.I,this.b,null,false)};_.d=0;kW(1310,742,yOc,wxc);_.Td=function xxc(){QJb(this,kVc,new qOb((JOb(),vOb),new Tkb(0.45)));QJb(this,lVc,new qOb(FOb,new c9b(0,0,0)));QJb(this,jVc,new qOb(vOb,new Tkb(1)));QJb(this,gVc,new qOb(DOb,new t8b));QJb(this,mVc,new qOb(DOb,new u8b(3,1)));QJb(this,hVc,new pOb(BOb));QJb(this,iVc,new pOb(BOb))};var yxc;kW(1311,1,{},Dxc);_.Wd=function Exc(){return Mxc(),Bxc};_.Xd=function Fxc(){return Nxc(),Cxc};var Bxc,Cxc;kW(1312,1,{},Hxc);_.uc=function Ixc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};kW(1313,1,{},Kxc);_.uc=function Lxc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};kW(1419,1418,ZOc,aJc);_.Ng=function bJc(a,b,c){oOb(bw(sTb(E_b(this.c).j,CUc),226),a.e);oOb(bw(sTb(E_b(this.c).j,jVc),226),new Tkb(bw(bw(sTb(E_b(this.c).j,jVc),226).e,150).b+b));CUb(a.d,this.c);this.b?rIb(a.v,a.w,a.b,null,false):rIb(a.v,a.w,a.b,a.i,false)};_.b=false;kW(1442,742,yOc,wKc);_.Td=function xKc(){QJb(this,CUc,new pOb((JOb(),BOb)));QJb(this,jVc,new qOb(vOb,new Tkb(0)));QJb(this,oVc,new qOb(vOb,new Tkb(0.5)));QJb(this,pVc,new qOb(vOb,new Tkb(0.05)));QJb(this,qVc,new qOb(yOb,zlb(4096)));QJb(this,nVc,new qOb(yOb,(Ujb(),Ujb(),Tjb)))};var yKc;kW(1443,1,{},DKc);_.Wd=function EKc(){return MKc(),BKc};_.Xd=function FKc(){return NKc(),CKc};var BKc,CKc;kW(1444,1,{},HKc);_.uc=function IKc(){return '// control parameter\r\nuniform float time;\r\n\r\nuniform bool grayscale;\r\n\r\n// noise effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float nIntensity;\r\n\r\n// scanlines effect intensity value (0 = no effect, 1 = full effect)\r\nuniform float sIntensity;\r\n\r\n// scanlines effect count value (0 = no effect, 4096 = full effect)\r\nuniform float sCount;\r\n\r\nuniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\t// sample the source\r\n\tvec4 cTextureScreen = texture2D( tDiffuse, vUv );\r\n\r\n\t// make some noise\r\n\tfloat x = vUv.x * vUv.y * time *  1000.0;\r\n\tx = mod( x, 13.0 ) * mod( x, 123.0 );\r\n\tfloat dx = mod( x, 0.01 );\r\n\r\n\t// add noise\r\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\r\n\r\n\t// get us a sine and cosine\r\n\tvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\r\n\r\n\t// add scanlines\r\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\r\n\r\n\t// interpolate between source and result by intensity\r\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\r\n\r\n\t// convert to grayscale if desired\r\n\tif( grayscale ) {\r\n\r\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\r\n\r\n\t}\r\n\r\n\tgl_FragColor =  vec4( cResult, cTextureScreen.a );\r\n\r\n}\r\n'};kW(1445,1,{},KKc);_.uc=function LKc(){return rVc};var QO=Hkb(PTc,'MaterialsShaderLava$DemoScene',1175),FS=Hkb(sVc,'FilmPass',1419),XQ=Hkb(ITc,'LavaShader',1310),$S=Hkb(tVc,'FilmShader',1442),WQ=Hkb(ITc,'LavaShader_Resources_default_InlineClientBundleGenerator',1311),UQ=Hkb(ITc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1312),VQ=Hkb(ITc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1313),ZS=Hkb(tVc,'FilmShader_Resources_default_InlineClientBundleGenerator',1443),XS=Hkb(tVc,'FilmShader_Resources_default_InlineClientBundleGenerator$1',1444),YS=Hkb(tVc,'FilmShader_Resources_default_InlineClientBundleGenerator$2',1445);$Oc(Pj)(30);
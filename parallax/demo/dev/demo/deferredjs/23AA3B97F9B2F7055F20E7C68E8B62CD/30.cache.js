function Jyc(){}
function Nyc(){}
function Qyc(){}
function Bnc(){Fac.call(this)}
function Cyc(){DJb.call(this,(Fyc(),Eyc))}
function Fyc(){Fyc=yQc;Eyc=new Jyc}
function Syc(){Syc=yQc;Hyc=new Nyc}
function Tyc(){Tyc=yQc;Iyc=new Qyc}
var sYc='texture1',tYc='texture2';GU(1156,1,hSc);_.zb=function znc(){fac(this.b,new Bnc(this.a))};GU(1157,973,eSc,Bnc);_.Gd=function Cnc(a){j6b(pu(pu(OSb(this.d,rYc),227).d,298),a.a.Z);k6b(pu(pu(OSb(this.d,rYc),227).d,298),a.a.Y)};_.nb=function Dnc(){var a,b,c,d,e,f,g;et((dyb(),cyb),(nyb(),myb),this);this.a=new oRb(35,GHb(this.G.k),1,3000);Y6b(this.a._,4);d=new r3b(new Cyc);this.d=j$b(d).i;f=new SOb('./static/textures/lava/cloud.png');MOb(f,(IGb(),HGb));NOb(f,HGb);RNb(pu(OSb(this.d,sYc),227),f);g=new SOb(fYc);MOb(g,HGb);NOb(g,HGb);RNb(pu(OSb(this.d,tYc),227),g);this.b=new y8b(new TXb(0.65,0.3,30,30),d);s4b(this.b.cb,0.3);nQb(this.H,this.b);a=new vKc(this.G.k);e=new DKc(this.H,this.a);b=new eKc(1.25);c=new nKc(0.95,2048,false);c.a=true;Pqb(a.c,e);Pqb(a.c,b);Pqb(a.c,c);$Hb(this.G.k,false);this.c=rh()};_.ob=function Enc(a){var b;b=(rh()-this.c)*0.001*5;RNb(pu(OSb(this.d,uYc),227),new kkb(pu(pu(OSb(this.d,uYc),227).d,150).a+0.2*b));k4b(this.b.cb,0.05*b);l4b(this.b.cb,0.0125*b);zHb(this.G.k,true);this.c=rh();SHb(this.G.k,this.H,this.a,null,false)};_.c=0;GU(1338,731,WRc,Cyc);_.Ld=function Dyc(){rJb(this,vYc,new TNb((kOb(),YNb),new kkb(0.45)));rJb(this,wYc,new TNb(gOb,new a7b(0,0,0)));rJb(this,uYc,new TNb(YNb,new kkb(1)));rJb(this,rYc,new TNb(eOb,new l6b));rJb(this,xYc,new TNb(eOb,new m6b(3,1)));rJb(this,sYc,new SNb(cOb));rJb(this,tYc,new SNb(cOb))};var Eyc;GU(1339,1,{},Jyc);_.Od=function Kyc(){return Syc(),Hyc};_.Pd=function Lyc(){return Tyc(),Iyc};var Hyc,Iyc;GU(1340,1,{},Nyc);_.nc=function Oyc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};GU(1341,1,{},Qyc);_.nc=function Ryc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};var MM=$jb($Wc,'MaterialsShaderLava$DemoScene',1157),QO=$jb(TWc,'LavaShader',1338),PO=$jb(TWc,'LavaShader_Resources_default_InlineClientBundleGenerator',1339),NO=$jb(TWc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1340),OO=$jb(TWc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1341);vSc(xi)(30);
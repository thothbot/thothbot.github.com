function pzc(){}
function tzc(){}
function wzc(){}
function hoc(){obc.call(this)}
function izc(){mKb.call(this,(lzc(),kzc))}
function lzc(){lzc=eRc;kzc=new pzc}
function yzc(){yzc=eRc;nzc=new tzc}
function zzc(){zzc=eRc;ozc=new wzc}
var jZc='texture1',kZc='texture2';rV(1157,1,QSc);_.Db=function foc(){Qac(this.c,new hoc(this.b))};rV(1158,975,NSc,hoc);_.Md=function ioc(a){U6b(Xu(Xu(xTb(this.e,iZc),227).e,298),a.b.$);V6b(Xu(Xu(xTb(this.e,iZc),227).e,298),a.b.Z)};_.ob=function joc(){var a,b,c,d,e,f,g;Mt((Oyb(),Nyb),(Yyb(),Xyb),this);this.b=new ZRb(35,pIb(this.H.n),1,3000);H7b(this.b.ab,4);d=new a4b(new izc);this.e=U$b(d).j;f=new BPb('./static/textures/lava/cloud.png');vPb(f,(rHb(),qHb));wPb(f,qHb);AOb(Xu(xTb(this.e,jZc),227),f);g=new BPb(YYc);vPb(g,qHb);wPb(g,qHb);AOb(Xu(xTb(this.e,kZc),227),g);this.c=new h9b(new CYb(0.65,0.3,30,30),d);b5b(this.c.db,0.3);YQb(this.I,this.c);a=new bLc(this.H.n);e=new jLc(this.I,this.b);b=new MKc(1.25);c=new VKc(0.95,2048,false);c.b=true;yrb(a.d,e);yrb(a.d,b);yrb(a.d,c);JIb(this.H.n,false);this.d=Ch()};_.pb=function koc(a){var b;b=(Ch()-this.d)*0.001*5;AOb(Xu(xTb(this.e,lZc),227),new Ukb(Xu(Xu(xTb(this.e,lZc),227).e,150).b+0.2*b));V4b(this.c.db,0.05*b);W4b(this.c.db,0.0125*b);iIb(this.H.n,true);this.d=Ch();BIb(this.H.n,this.I,this.b,null,false)};_.d=0;rV(1339,733,DSc,izc);_.Rd=function jzc(){aKb(this,mZc,new COb((VOb(),HOb),new Ukb(0.45)));aKb(this,nZc,new COb(ROb,new L7b(0,0,0)));aKb(this,lZc,new COb(HOb,new Ukb(1)));aKb(this,iZc,new COb(POb,new W6b));aKb(this,oZc,new COb(POb,new X6b(3,1)));aKb(this,jZc,new BOb(NOb));aKb(this,kZc,new BOb(NOb))};var kzc;rV(1340,1,{},pzc);_.Ud=function qzc(){return yzc(),nzc};_.Vd=function rzc(){return zzc(),ozc};var nzc,ozc;rV(1341,1,{},tzc);_.tc=function uzc(){return 'uniform float time;\nuniform vec2 resolution;\n\nuniform float fogDensity;\nuniform vec3 fogColor;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nvarying vec2 vUv;\n\nvoid main( void ) {\n\n\tvec2 position = -1.0 + 2.0 * vUv;\n\n\tvec4 noise = texture2D( texture1, vUv );\n\tvec2 T1 = vUv + vec2( 1.5, -1.5 ) * time  *0.02;\n\tvec2 T2 = vUv + vec2( -0.5, 2.0 ) * time * 0.01;\n\n\tT1.x += noise.x * 2.0;\n\tT1.y += noise.y * 2.0;\n\tT2.x -= noise.y * 0.2;\n\tT2.y += noise.z * 0.2;\n\n\tfloat p = texture2D( texture1, T1 * 2.0 ).a;\n\n\tvec4 color = texture2D( texture2, T2 * 2.0 );\n\tvec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );\n\n\tif( temp.r > 1.0 ){ temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }\n\tif( temp.g > 1.0 ){ temp.rb += temp.g - 1.0; }\n\tif( temp.b > 1.0 ){ temp.rg += temp.b - 1.0; }\n\n\tgl_FragColor = temp;\n\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tconst float LOG2 = 1.442695;\n\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n}\n'};rV(1342,1,{},wzc);_.tc=function xzc(){return 'uniform vec2 uvScale;\nvarying vec2 vUv;\n\nvoid main()\n{\n\n\tvUv = uvScale * uv;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n}'};var xN=Ikb(RXc,'MaterialsShaderLava$DemoScene',1158),BP=Ikb(KXc,'LavaShader',1339),AP=Ikb(KXc,'LavaShader_Resources_default_InlineClientBundleGenerator',1340),yP=Ikb(KXc,'LavaShader_Resources_default_InlineClientBundleGenerator$1',1341),zP=Ikb(KXc,'LavaShader_Resources_default_InlineClientBundleGenerator$2',1342);cTc(Ii)(30);
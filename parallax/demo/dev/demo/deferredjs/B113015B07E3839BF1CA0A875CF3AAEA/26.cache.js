function _sb(){}
function itb(){}
function ftb(){}
function ntb(){}
function mtb(){}
function rtb(){}
function qtb(){}
function t5b(){}
function u5b(){tTb.call(this)}
function atb(){erb.call(this,(etb(),dtb))}
function etb(){etb=$hc;dtb=new itb}
function utb(){utb=$hc;gtb=new ntb}
function vtb(){vtb=$hc;htb=new rtb}
_=atb.prototype=_sb.prototype=new Sqb;_.gC=function btb(){return MA};_.td=function ctb(){Vqb(this,'mRefractionRatio',new cwb((wwb(),iwb),new j4(1.02)));Vqb(this,'mFresnelBias',new cwb(iwb,new j4(0.1)));Vqb(this,'mFresnelPower',new cwb(iwb,new j4(2)));Vqb(this,'mFresnelScale',new cwb(iwb,new j4(1)));Vqb(this,Imc,new bwb(owb))};_.cM={131:1};var dtb;_=itb.prototype=ftb.prototype=new Kb;_.gC=function jtb(){return LA};_.wd=function ktb(){return utb(),gtb};_.xd=function ltb(){return vtb(),htb};var gtb=null,htb=null;_=ntb.prototype=mtb.prototype=new Kb;_.gC=function otb(){return JA};_.Yb=function ptb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};_=rtb.prototype=qtb.prototype=new Kb;_.gC=function stb(){return KA};_.Yb=function ttb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};_=o5b.prototype;_.tb=function s5b(){pTb(this.c,new u5b(this.b))};_=u5b.prototype=t5b.prototype=new sTb;_.gC=function v5b(){return sG};_.pd=function w5b(){Xdb(this,new mzb(60,Peb(this.B.E),1,100000));this.b=new mzb(60,Peb(this.B.E),1,100000)};_.tc=function x5b(){!!this.A&&yB==yB&&izb(this.A,Peb(this.B.E));izb(this.b,Peb(this.B.E))};_.hb=function y5b(){var a,b,c,d,e,f,g,i;this.A.X.c=3200;syb(this.C,this.A);this.e=new _Rb;syb(this.e,this.b);a=new VJb(100,32,16);i=(sSb(),vSb('./static/textures/cube/park2/*.jpg',(zxb(),yxb)));Iwb(i,(Ynb(),Wnb));f=new atb;awb(Gs(f.j.b[Imc],133),i);c=new JQb(f);this.f=new L9;for(b=0;b<500;++b){d=new sRb(a,c);nEb(d.X,Math.random()*10000-5000);oEb(d.X,Math.random()*10000-5000);TEb(d.X,Math.random()*10000-5000);REb(d.ab,Math.random()*3+1);syb(this.C,d);B9(this.f,d)}this.C.S=false;g=new Mrb;awb(Gs(g.j.b[Imc],133),i);e=new JQb(g);xMb(e,(nOb(),kOb));d=new sRb(new dJb(100000,100000,100000),e);syb(this.e,d);this.B.J=false};_.od=function z5b(){};_.ib=function A5b(a){var b,c,d,e;e=1.0E-4*a;hEb(this.A.X,(this.c-this.A.X.d)*0.05);iEb(this.A.X,(-this.d-this.A.X.e)*0.05);Syb(this.A,this.C.X);this.b.$.ge(this.A.$);for(b=0,c=this.f.c;b<c;++b){d=Gs(F9(this.f,b),202);nEb(d.X,5000*Math.cos(e+b));oEb(d.X,5000*Math.sin(e+b*1.1))}Cpb(this.B);Opb(this.B,this.e,this.b,null,false)};_.cM={227:1};_.b=null;_.c=0;_.d=0;_.e=null;_.f=null;var MA=Z3(Fmc,'FresnelShader'),LA=Z3(Fmc,'FresnelShader_Resources_default_InlineClientBundleGenerator'),JA=Z3(Fmc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1'),KA=Z3(Fmc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2'),sG=Z3(Dlc,'MaterialsCubemapFresnel$DemoScene');aic(fe)(26);
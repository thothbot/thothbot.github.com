function LIb(){}
function PIb(){}
function SIb(){}
function HIb(){HIb=PGc;GIb=new LIb}
function UIb(){UIb=PGc;JIb=new PIb}
function VIb(){VIb=PGc;KIb=new SIb}
function EIb(){oHb.call(this,(HIb(),GIb))}
function yjc(){N7b.call(this);this.c=0;this.d=0}
bT(747,729,kIc,EIb);_.Jd=function FIb(){cHb(this,'mRefractionRatio',new jLb((CLb(),oLb),new Fib(1.02)));cHb(this,'mFresnelBias',new jLb(oLb,new Fib(0.1)));cHb(this,'mFresnelPower',new jLb(oLb,new Fib(2)));cHb(this,'mFresnelScale',new jLb(oLb,new Fib(1)));cHb(this,xOc,new iLb(uLb))};var GIb;bT(748,1,{},LIb);_.Md=function MIb(){return UIb(),JIb};_.Nd=function NIb(){return VIb(),KIb};var JIb,KIb;bT(749,1,{},PIb);_.mc=function QIb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};bT(750,1,{},SIb);_.mc=function TIb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};bT(1130,1,xIc);_.zb=function wjc(){n7b(this.b,new yjc(this.a))};bT(1131,965,{327:1},yjc);_.nb=function zjc(){var a,b,c,d,e,f,g,i,j;this.a=new FOb(60,rFb(this.D.k),1,100000);f4b(this.a._,3200);this.b=new FOb(60,rFb(this.D.k),1,100000);this.e=new t6b;a=new YUb(100,32,16);j=new rMb('./static/textures/cube/park2/*.jpg');SLb(j,(nBb(),lBb));g=new EIb;hLb(qu(bQb(g.i,xOc),225),j);c=new B0b(g);this.f=new spb;for(b=0;b<500;b++){d=new H5b(a,c);t3b(d._,Mjb()*10000-5000);u3b(d._,Mjb()*10000-5000);f4b(d._,Mjb()*10000-5000);c4b(d.eb,Mjb()*3+1);FNb(this.F,d);ipb(this.f,d)}this.F.W=false;i=new QHb;hLb(qu(bQb(i.i,xOc),225),j);f=new B0b(i);GXb(f,(rZb(),oZb));e=new H5b(new hUb(100000,100000,100000),f);FNb(this.e,e);LFb(this.D.k,false)};_.ob=function Ajc(a){var b,c,d,e;e=1.0E-4*a;o3b(this.a._,(this.c-this.a._.c)*0.05);p3b(this.a._,(-this.d-this.a._.d)*0.05);bOb(this.a,this.F._);w1b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=qu(lpb(this.f,b),304);t3b(d._,5000*Math.cos(e+b));u3b(d._,5000*Math.sin(e+b*1.1))}lFb(this.D.k);DFb(this.D.k,this.e,this.b,null,false);DFb(this.D.k,this.F,this.a,null,false)};_.c=0;_.d=0;var sM=tib(mNc,'MaterialsCubemapFresnel$DemoScene',1131),WF=tib(yOc,'FresnelShader',747),VF=tib(yOc,'FresnelShader_Resources_default_InlineClientBundleGenerator',748),TF=tib(yOc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',749),UF=tib(yOc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',750);KIc(xi)(22);
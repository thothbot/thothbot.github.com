function nGb(){}
function rGb(){}
function uGb(){}
function jGb(){jGb=$Cc;iGb=new nGb}
function wGb(){wGb=$Cc;lGb=new rGb}
function xGb(){xGb=$Cc;mGb=new uGb}
function gGb(){CEb.call(this,(jGb(),iGb))}
function qgc(){F4b.call(this);this.d=0;this.e=0}
PS(727,703,nEc,gGb);_.Od=function hGb(){qEb(this,'mRefractionRatio',new LIb((cJb(),QIb),new Ohb(1.02)));qEb(this,'mFresnelBias',new LIb(QIb,new Ohb(0.1)));qEb(this,'mFresnelPower',new LIb(QIb,new Ohb(2)));qEb(this,'mFresnelScale',new LIb(QIb,new Ohb(1)));qEb(this,xKc,new KIb(WIb))};var iGb;PS(728,1,{},nGb);_.Rd=function oGb(){return wGb(),lGb};_.Sd=function pGb(){return xGb(),mGb};var lGb,mGb;PS(729,1,{},rGb);_.ic=function sGb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};PS(730,1,{},uGb);_.ic=function vGb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};PS(1099,1,zEc);_.Gb=function ogc(){C4b(this.c,new qgc(this.b))};PS(1100,934,{267:1},qgc);_.rb=function rgc(){var a,b,c,d,e,f,g,i,j;this.b=new gMb(60,gDb(this.H.o),1,100000);q1b(this.b.bb,3200);this.c=new gMb(60,gDb(this.H.o),1,100000);this.f=new G3b;a=new zSb(100,32,16);j=new RJb('./static/textures/cube/park2/*.jpg');sJb(j,(hAb(),fAb));g=new gGb;JIb(Cu(TNb(g.j,xKc),168),j);c=new YZb(g);this.g=new Aob;for(b=0;b<500;b++){e=new O2b(a,c);I0b(e.bb,Vib()*10000-5000);J0b(e.bb,Vib()*10000-5000);q1b(e.bb,Vib()*10000-5000);l1b(e.gb,Vib()*3+1);cLb(this.I,e);qob(this.g,e)}this.I.X=false;i=new cFb;JIb(Cu(TNb(i.j,xKc),168),j);f=new YZb(i);wVb(f,(jXb(),gXb));d=new O2b(new TRb(100000,100000,100000),f);cLb(this.f,d);this.H.o.S=false};_.sb=function sgc(a){var b,c,d,e;e=1.0E-4*a;D0b(this.b.bb,(this.d-this.b.bb.d)*0.05);E0b(this.b.bb,(-this.e-this.b.bb.e)*0.05);ILb(this.b,this.I.bb);this.c.eb.vf(this.b.eb);for(b=0,c=this.g.c;b<c;b++){d=Cu(tob(this.g,b),242);I0b(d.bb,5000*Math.cos(e+b));J0b(d.bb,5000*Math.sin(e+b*1.1))}dDb(this.H.o);lDb(this.H.o,this.f,this.c,null,false);lDb(this.H.o,this.I,this.b,null,false)};_.d=0;_.e=0;var gM=Chb(nJc,'MaterialsCubemapFresnel$DemoScene',1100),WF=Chb(uKc,'FresnelShader',727),VF=Chb(uKc,'FresnelShader_Resources_default_InlineClientBundleGenerator',728),TF=Chb(uKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',729),UF=Chb(uKc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',730);MEc(Di)(25);
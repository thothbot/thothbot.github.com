function Yhb(){}
function fib(){}
function cib(){}
function kib(){}
function jib(){}
function oib(){}
function nib(){}
function Mjb(){}
function Xjb(){}
function Ujb(){}
function _jb(){}
function akb(){}
function ekb(){}
function dkb(){}
function tsb(){}
function Ktb(){}
function Ptb(){}
function Stb(){}
function hub(){}
function lub(){}
function HCb(){}
function iob(a,b){a.s=b}
function JCb(){Nwb.call(this)}
function Ttb(){Dsb.call(this,new Osb)}
function Zhb(){Zgb.call(this,(bib(),aib))}
function Njb(){Zgb.call(this,(Tjb(),Sjb))}
function Ltb(a){Dsb.call(this,a);Csb(this,a.b)}
function Qtb(){Osb.call(this);this.b=(ytb(),xtb)}
function bib(){bib=IFb;aib=new fib}
function rib(){rib=IFb;dib=new kib}
function sib(){sib=IFb;eib=new oib}
function Tjb(){Tjb=IFb;Sjb=new Xjb}
function hkb(){hkb=IFb;Vjb=new akb}
function ikb(){ikb=IFb;Wjb=new ekb}
function usb(){jsb.call(this,16777215);this.c=1;this.b=0;new Kpb(0,0,0)}
function iub(a){Jsb.call(this,a);this.b=a.b;this.c=a.d;this.e=a.g;this.d=a.f;this.k=null;this.i=a.c;Csb(this,a.e)}
function mub(){Qsb.call(this);this.b=new vnb(328965);this.g=new vnb(1118481);this.d=new vnb(0);this.c=(Rlb(),Qlb);this.e=(ytb(),xtb)}
function ICb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(nKb);a.width=256;a.height=256;b=a.getContext(oKb);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=xp(Math.floor(g^i))}b.putImageData(d,0,0);return a}
_=Zhb.prototype=Yhb.prototype=new Ugb;_.gC=function $hb(){return Cw};_._c=function _hb(){Wgb(this,'mNear',new kkb((Fkb(),rkb),new jX(1)));Wgb(this,'mFar',new kkb(rkb,new jX(2000)));Wgb(this,SJb,new kkb(rkb,new jX(1)))};var aib;_=fib.prototype=cib.prototype=new Jb;_.gC=function gib(){return Bw};_.cd=function hib(){return rib(),dib};_.dd=function iib(){return sib(),eib};var dib=null,eib=null;_=kib.prototype=jib.prototype=new Jb;_.gC=function lib(){return zw};_.Mb=function mib(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_.cM={44:1};_=oib.prototype=nib.prototype=new Jb;_.gC=function pib(){return Aw};_.Mb=function qib(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_.cM={44:1};_=Njb.prototype=Mjb.prototype=new Ugb;_.gC=function Ojb(){return Sw};_._c=function Pjb(){Vgb(this,(Okb(),Jkb));Vgb(this,Kkb);Vgb(this,Lkb);Vgb(this,Nkb);Wgb(this,TJb,new kkb((Fkb(),qkb),new vnb(16777215)));Wgb(this,UJb,new kkb(qkb,new vnb(0)));Wgb(this,'specular',new kkb(qkb,new vnb(1118481)));Wgb(this,'shininess',new kkb(rkb,new jX(30)));Wgb(this,VJb,new kkb(Bkb,new Kpb(1,1,1)))};_.ad=function Qjb(a){var b,c;c=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,[UIb,WJb,XJb,YJb,VIb,'uniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n\tvarying vec3 vWorldPosition;\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\tuniform vec3 wrapRGB;\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\nvarying vec3 vNormal;',WIb]));b=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,[ZJb,XIb,'vec3 normal = normalize( vNormal );\r\nvec3 viewPosition = normalize( vViewPosition );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tvec3 pointDiffuse  = vec3( 0.0 );\r\n\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vPointLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vPointLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tpointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\r\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\tfloat pointSpecularWeight = max( pow( pointDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\r\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r\n\t\t#else\r\n\t\t\tpointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvec3 spotDiffuse  = vec3( 0.0 );\r\n\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vSpotLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vSpotLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\t\t\t#else\r\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t\t#endif\r\n\r\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\r\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\tfloat spotSpecularWeight = max( pow( spotDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\r\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\r\n\t\t\t#else\r\n\t\t\t\tspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\r\n\t\t\t#endif\r\n\t\t}\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tvec3 dirDiffuse  = vec3( 0.0 );\r\n\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, dirVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tdirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\tfloat dirSpecularWeight = max( pow( dirDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t/*\r\n\t\t\t// fresnel term from skin shader\r\n\t\t\tconst float F0 = 0.128;\r\n\t\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\r\n\t\t\tfloat exponential = pow( base, 5.0 );\r\n\t\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\r\n\t\t*/\r\n\r\n\t\t/*\r\n\t\t\t// fresnel term from fresnel shader\r\n\t\t\tconst float mFresnelBias = 0.08;\r\n\t\t\tconst float mFresnelScale = 0.3;\r\n\t\t\tconst float mFresnelPower = 5.0;\r\n\t\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\r\n\t\t*/\r\n\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t//dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\t\t\r\n\t\t#else\r\n\t\t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\nvec3 totalDiffuse = vec3( 0.0 );\r\nvec3 totalSpecular = vec3( 0.0 );\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\ttotalDiffuse += dirDiffuse;\r\n\ttotalSpecular += dirSpecular;\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\ttotalDiffuse += pointDiffuse;\r\n\ttotalSpecular += pointSpecular;\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\ttotalDiffuse += spotDiffuse;\r\n\ttotalSpecular += spotSpecular;\r\n#endif\r\n\r\n#ifdef METAL\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\r\n#else\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\r\n#endif',$Jb,YIb,_Jb,ZIb,aKb,$Ib]));Xgb(this,bhb(a,ip(HA,{78:1,94:1},101,[c,b])))};_.bd=function Rjb(a){var b,c,d,e;e=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,[bKb,cKb,dKb,'#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvarying vec3 vWorldPosition;\r\n#endif',UIb,eKb,fKb,_Ib]));b=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,[gKb,hKb,iKb,aJb]));c=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,[jKb]));d=new d1(ip(FA,{78:1,79:1,83:1,94:1},1,['#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvPointLight[ i ] = vec4( lVector, lDistance );\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvSpotLight[ i ] = vec4( lVector, lDistance );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvWorldPosition = mPosition.xyz;\r\n#endif',kKb,lKb,mKb,bJb]));Ygb(this,bhb(a,ip(HA,{78:1,94:1},101,[e,b,c,d])))};var Sjb;_=Xjb.prototype=Ujb.prototype=new Jb;_.gC=function Yjb(){return Rw};_.cd=function Zjb(){return hkb(),Vjb};_.dd=function $jb(){return ikb(),Wjb};var Vjb=null,Wjb=null;_=akb.prototype=_jb.prototype=new Jb;_.gC=function bkb(){return Pw};_.Mb=function ckb(){return 'uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tgl_FragColor = vec4( vec3 ( 1.0 ), opacity );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\t\r\n}\r\n'};_.cM={44:1};_=ekb.prototype=dkb.prototype=new Jb;_.gC=function fkb(){return Qw};_.Mb=function gkb(){return 'varying vec3 vViewPosition;\r\nvarying vec3 vNormal;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\r\n#ifndef USE_ENVMAP\r\n\tvec4 mPosition = objectMatrix * vec4( position, 1.0 );\r\n#endif\r\n\r\nvViewPosition = -mvPosition.xyz;\r\n\t\t\t\r\n//[*]\r\n\t\t\t\r\nvNormal = transformedNormal;\r\n\r\n//[*]\r\n\r\n}\r\n'};_.cM={44:1};_=usb.prototype=tsb.prototype=new isb;_.gC=function vsb(){return by};_.cM={145:1,146:1,157:1};_.b=0;_.c=0;_=Ltb.prototype=Ktb.prototype=new xsb;_.wd=function Mtb(){return null};_.gC=function Ntb(){return py};_.yd=function Otb(){return new Zhb};_.cM={149:1};_=Qtb.prototype=Ptb.prototype=new Nsb;_.gC=function Rtb(){return oy};_=Ttb.prototype=Stb.prototype=new xsb;_.gC=function Utb(){return qy};_.cM={149:1,153:1};_=iub.prototype=hub.prototype=new wsb;_.gC=function jub(){return wy};_.yd=function kub(){return new Njb};_.cM={147:1,149:1,155:1};_.b=null;_.c=null;_.d=0;_.e=null;_.f=null;_=mub.prototype=lub.prototype=new Msb;_.gC=function nub(){return vy};_.f=30;_=CCb.prototype;_.ob=function GCb(){Jwb(this.c,new JCb(this.b))};_=JCb.prototype=HCb.prototype=new Mwb;_.gC=function KCb(){return Vz};_.$c=function LCb(){y5(this,new hnb(45,G5(this.r.A),1,2000))};_.cb=function MCb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Gpb(this.q.G,0,200,800);xmb(this.t,this.q);c=new job;for(i=0;i<=40;++i){t0(c.C,new Kpb(-500,-75,i*25-500));t0(c.C,new Kpb(500,-75,i*25-500));t0(c.C,new Kpb(i*25-500,-75,-500));t0(c.C,new Kpb(i*25-500,-75,500))}o=new Xsb;o.b=new vnb(16777215);o.u=0.20000000298023224;n=new Tsb(o);k=new Nub(c,n,(Wub(),Uub));xmb(this.t,k);C=new nlb(ICb());C.p=true;this.b=new D0;u=new $tb;u.k=C;u.v=true;t0(this.b,new Wtb(u));v=new $tb;v.i=new vnb(14540253);v.e=(ytb(),vtb);t0(this.b,new Wtb(v));z=new mub;z.b=new vnb(197379);z.i=new vnb(14540253);z.g=new vnb(39168);z.f=30;z.e=vtb;t0(this.b,new iub(z));t0(this.b,new bub(new fub));q=new Itb;q.i=new vnb(16755200);q.v=true;q.r=(gtb(),_sb);t0(this.b,new Dtb(q));w=new $tb;w.i=new vnb(14540253);w.e=xtb;t0(this.b,new Wtb(w));z.k=C;z.v=true;t0(this.b,new iub(z));y=new fub;y.b=xtb;t0(this.b,new bub(y));r=new Itb;r.i=new vnb(65450);r.x=true;t0(this.b,new Dtb(r));t0(this.b,new Ltb(new Qtb));x=new $tb;x.i=new vnb(6710886);x.d=new vnb(16711680);x.b=new vnb(0);x.e=xtb;t0(this.b,new Wtb(x));A=new mub;A.b=new vnb(0);A.d=new vnb(16711680);A.i=new vnb(0);A.g=new vnb(6710886);A.f=10;A.e=xtb;A.u=0.8999999761581421;A.v=true;t0(this.b,new iub(A));s=new Itb;r.k=C;r.v=true;t0(this.b,new Dtb(s));g=new prb(70,32,16);e=new prb(70,32,16);f=new prb(70,32,16);for(i=0,j=f.o.c;i<j;++i){b=rp(x0(f.o,i),132);b.i=0}iob(f,this.b);t0(this.b,new Ttb);this.c=new D0;for(i=0,j=this.b.c;i<j;++i){p=rp(x0(this.b,i),149);d=p.gC()==qy?f:p.O==vtb?e:g;B=new ivb(d,p);upb(B.G,i%4*200-400);Hpb(B.G,Math.floor(i/4)*200-200);upb(B.J,Math.random()*200-100);vpb(B.J,Math.random()*200-100);Hpb(B.J,Math.random()*200-100);t0(this.c,B);xmb(this.t,B)}t=new Itb;t.i=new vnb(16777215);this.d=new ivb(new prb(4,8,8),new Dtb(t));xmb(this.t,this.d);xmb(this.t,new msb(1118481));a=new qsb(0.125);upb(a.G,Math.random()-0.5);vpb(a.G,Math.random()-0.5);Hpb(a.G,Math.random()-0.5);a.G.sd();xmb(this.t,a);this.e=new usb;xmb(this.t,this.e)};_.Yc=function NCb(){};_.db=function OCb(a){var b,c,d,e,f;f=1.0E-4*a;upb(this.q.G,Math.cos(f)*1000);Hpb(this.q.G,Math.sin(f)*1000);Nmb(this.q,this.t.G);for(b=0,c=this.c.c;b<c;++b){e=rp(x0(this.c,b),160);e.J.d+=0.009999999776482582;e.J.e+=0.004999999888241291;d=rp(x0(this.b,b),149);b>9&&tp(d,155)?qnb(rp(d,155).c,0.5400000214576721,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&tp(d,154)&&qnb(rp(d,154).c,0.03999999910593033,1,0.7*(0.5+0.5*Math.cos(35*f)))}upb(this.d.G,Math.sin(f*7)*300);vpb(this.d.G,Math.cos(f*5)*400);Hpb(this.d.G,Math.cos(f*3)*300);upb(this.e.G,this.d.G.d);vpb(this.e.G,this.d.G.e);Hpb(this.e.G,this.d.G.c);x5(this)};_.b=null;_.c=null;_.d=null;_.e=null;var Cw=QW(yJb,'ShaderDepth'),Bw=QW(yJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),zw=QW(yJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),Aw=QW(yJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),Sw=QW(yJb,'ShaderPhong'),Rw=QW(yJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator'),Pw=QW(yJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$1'),Qw=QW(yJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$2'),oy=QW(pKb,'MeshDepthMaterial$MeshDepthMaterialOptions'),qy=QW(pKb,'MeshFaceMaterial'),vy=QW(pKb,'MeshPhongMaterial$MeshPhongMaterialOptions'),Vz=QW(TIb,'MaterialsCanvas2D$DemoScene');KFb(Yd)(10);
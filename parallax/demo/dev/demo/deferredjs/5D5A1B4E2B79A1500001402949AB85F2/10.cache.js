function nib(){}
function wib(){}
function tib(){}
function Bib(){}
function Aib(){}
function Fib(){}
function Eib(){}
function bkb(){}
function mkb(){}
function jkb(){}
function rkb(){}
function qkb(){}
function vkb(){}
function ukb(){}
function Ksb(){}
function _tb(){}
function eub(){}
function hub(){}
function yub(){}
function Cub(){}
function ZCb(){}
function zob(a,b){a.s=b}
function _Cb(){cxb.call(this)}
function iub(){Usb.call(this,new dtb)}
function oib(){ohb.call(this,(sib(),rib))}
function ckb(){ohb.call(this,(ikb(),hkb))}
function aub(a){Usb.call(this,a);Tsb(this,a.b)}
function fub(){dtb.call(this);this.b=(Ptb(),Otb)}
function sib(){sib=aGb;rib=new wib}
function Iib(){Iib=aGb;uib=new Bib}
function Jib(){Jib=aGb;vib=new Fib}
function ikb(){ikb=aGb;hkb=new mkb}
function ykb(){ykb=aGb;kkb=new rkb}
function zkb(){zkb=aGb;lkb=new vkb}
function Lsb(){Asb.call(this,16777215);this.c=1;this.b=0;new _pb(0,0,0)}
function zub(a){$sb.call(this,a);this.b=a.b;this.c=a.d;this.e=a.g;this.d=a.f;this.k=null;this.i=a.c;Tsb(this,a.e)}
function Dub(){ftb.call(this);this.b=new Mnb(328965);this.g=new Mnb(1118481);this.d=new Mnb(0);this.c=(gmb(),fmb);this.e=(Ptb(),Otb)}
function $Cb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(KKb);a.width=256;a.height=256;b=a.getContext(LKb);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Kp(Math.floor(g^i))}b.putImageData(d,0,0);return a}
_=oib.prototype=nib.prototype=new jhb;_.gC=function pib(){return Sw};_.$c=function qib(){lhb(this,'mNear',new Bkb((Wkb(),Ikb),new AX(1)));lhb(this,'mFar',new Bkb(Ikb,new AX(2000)));lhb(this,nKb,new Bkb(Ikb,new AX(1)))};var rib;_=wib.prototype=tib.prototype=new Jb;_.gC=function xib(){return Rw};_.bd=function yib(){return Iib(),uib};_.cd=function zib(){return Jib(),vib};var uib=null,vib=null;_=Bib.prototype=Aib.prototype=new Jb;_.gC=function Cib(){return Pw};_.Mb=function Dib(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_.cM={45:1};_=Fib.prototype=Eib.prototype=new Jb;_.gC=function Gib(){return Qw};_.Mb=function Hib(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_.cM={45:1};_=ckb.prototype=bkb.prototype=new jhb;_.gC=function dkb(){return gx};_.$c=function ekb(){khb(this,(dlb(),$kb));khb(this,_kb);khb(this,alb);khb(this,clb);lhb(this,oKb,new Bkb((Wkb(),Hkb),new Mnb(16777215)));lhb(this,pKb,new Bkb(Hkb,new Mnb(0)));lhb(this,'specular',new Bkb(Hkb,new Mnb(1118481)));lhb(this,'shininess',new Bkb(Ikb,new AX(30)));lhb(this,qKb,new Bkb(Skb,new _pb(1,1,1)))};_._c=function fkb(a){var b,c;c=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,[pJb,rKb,sKb,tKb,qJb,'uniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n\tvarying vec3 vWorldPosition;\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\tuniform vec3 wrapRGB;\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\nvarying vec3 vNormal;',rJb]));b=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,[uKb,sJb,'vec3 normal = normalize( vNormal );\r\nvec3 viewPosition = normalize( vViewPosition );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tvec3 pointDiffuse  = vec3( 0.0 );\r\n\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vPointLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vPointLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tpointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\r\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\tfloat pointSpecularWeight = max( pow( pointDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\r\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r\n\t\t#else\r\n\t\t\tpointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvec3 spotDiffuse  = vec3( 0.0 );\r\n\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vSpotLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vSpotLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\t\t\t#else\r\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t\t#endif\r\n\r\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\r\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\tfloat spotSpecularWeight = max( pow( spotDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\r\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\r\n\t\t\t#else\r\n\t\t\t\tspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\r\n\t\t\t#endif\r\n\t\t}\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tvec3 dirDiffuse  = vec3( 0.0 );\r\n\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, dirVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tdirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\tfloat dirSpecularWeight = max( pow( dirDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t/*\r\n\t\t\t// fresnel term from skin shader\r\n\t\t\tconst float F0 = 0.128;\r\n\t\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\r\n\t\t\tfloat exponential = pow( base, 5.0 );\r\n\t\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\r\n\t\t*/\r\n\r\n\t\t/*\r\n\t\t\t// fresnel term from fresnel shader\r\n\t\t\tconst float mFresnelBias = 0.08;\r\n\t\t\tconst float mFresnelScale = 0.3;\r\n\t\t\tconst float mFresnelPower = 5.0;\r\n\t\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\r\n\t\t*/\r\n\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t//dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\t\t\r\n\t\t#else\r\n\t\t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\nvec3 totalDiffuse = vec3( 0.0 );\r\nvec3 totalSpecular = vec3( 0.0 );\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\ttotalDiffuse += dirDiffuse;\r\n\ttotalSpecular += dirSpecular;\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\ttotalDiffuse += pointDiffuse;\r\n\ttotalSpecular += pointSpecular;\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\ttotalDiffuse += spotDiffuse;\r\n\ttotalSpecular += spotSpecular;\r\n#endif\r\n\r\n#ifdef METAL\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\r\n#else\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\r\n#endif',vKb,tJb,wKb,uJb,xKb,vJb]));mhb(this,shb(a,vp(YA,{79:1,95:1},102,[c,b])))};_.ad=function gkb(a){var b,c,d,e;e=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,[yKb,zKb,AKb,'#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvarying vec3 vWorldPosition;\r\n#endif',pJb,BKb,CKb,wJb]));b=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,[DKb,EKb,FKb,xJb]));c=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,[GKb]));d=new u1(vp(WA,{79:1,80:1,84:1,95:1},1,['#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvPointLight[ i ] = vec4( lVector, lDistance );\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvSpotLight[ i ] = vec4( lVector, lDistance );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvWorldPosition = mPosition.xyz;\r\n#endif',HKb,IKb,JKb,yJb]));nhb(this,shb(a,vp(YA,{79:1,95:1},102,[e,b,c,d])))};var hkb;_=mkb.prototype=jkb.prototype=new Jb;_.gC=function nkb(){return fx};_.bd=function okb(){return ykb(),kkb};_.cd=function pkb(){return zkb(),lkb};var kkb=null,lkb=null;_=rkb.prototype=qkb.prototype=new Jb;_.gC=function skb(){return dx};_.Mb=function tkb(){return 'uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tgl_FragColor = vec4( vec3 ( 1.0 ), opacity );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\t\r\n}\r\n'};_.cM={45:1};_=vkb.prototype=ukb.prototype=new Jb;_.gC=function wkb(){return ex};_.Mb=function xkb(){return 'varying vec3 vViewPosition;\r\nvarying vec3 vNormal;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\r\n#ifndef USE_ENVMAP\r\n\tvec4 mPosition = objectMatrix * vec4( position, 1.0 );\r\n#endif\r\n\r\nvViewPosition = -mvPosition.xyz;\r\n\t\t\t\r\n//[*]\r\n\t\t\t\r\nvNormal = transformedNormal;\r\n\r\n//[*]\r\n\r\n}\r\n'};_.cM={45:1};_=Lsb.prototype=Ksb.prototype=new zsb;_.gC=function Msb(){return ry};_.cM={146:1,147:1,158:1};_.b=0;_.c=0;_=aub.prototype=_tb.prototype=new Osb;_.vd=function bub(){return null};_.gC=function cub(){return Fy};_.xd=function dub(){return new oib};_.cM={150:1};_=fub.prototype=eub.prototype=new ctb;_.gC=function gub(){return Ey};_=iub.prototype=hub.prototype=new Osb;_.gC=function jub(){return Gy};_.cM={150:1,154:1};_=zub.prototype=yub.prototype=new Nsb;_.gC=function Aub(){return My};_.xd=function Bub(){return new ckb};_.cM={148:1,150:1,156:1};_.b=null;_.c=null;_.d=0;_.e=null;_.f=null;_=Dub.prototype=Cub.prototype=new btb;_.gC=function Eub(){return Ly};_.f=30;_=UCb.prototype;_.ob=function YCb(){$wb(this.c,new _Cb(this.b))};_=_Cb.prototype=ZCb.prototype=new bxb;_.gC=function aDb(){return jA};_.Zc=function bDb(){P5(this,new ynb(45,X5(this.r.D),1,2000))};_.cb=function cDb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;Xpb(this.q.G,0,200,800);Omb(this.t,this.q);c=new Aob;for(i=0;i<=40;++i){K0(c.C,new _pb(-500,-75,i*25-500));K0(c.C,new _pb(500,-75,i*25-500));K0(c.C,new _pb(i*25-500,-75,-500));K0(c.C,new _pb(i*25-500,-75,500))}o=new mtb;o.b=new Mnb(16777215);o.u=0.20000000298023224;n=new itb(o);k=new cvb(c,n,(lvb(),jvb));Omb(this.t,k);C=new Elb($Cb());C.p=true;this.b=new U0;u=new pub;u.k=C;u.v=true;K0(this.b,new lub(u));v=new pub;v.i=new Mnb(14540253);v.e=(Ptb(),Mtb);K0(this.b,new lub(v));z=new Dub;z.b=new Mnb(197379);z.i=new Mnb(14540253);z.g=new Mnb(39168);z.f=30;z.e=Mtb;K0(this.b,new zub(z));K0(this.b,new sub(new wub));q=new Ztb;q.i=new Mnb(16755200);q.v=true;q.r=(xtb(),qtb);K0(this.b,new Utb(q));w=new pub;w.i=new Mnb(14540253);w.e=Otb;K0(this.b,new lub(w));z.k=C;z.v=true;K0(this.b,new zub(z));y=new wub;y.b=Otb;K0(this.b,new sub(y));r=new Ztb;r.i=new Mnb(65450);r.x=true;K0(this.b,new Utb(r));K0(this.b,new aub(new fub));x=new pub;x.i=new Mnb(6710886);x.d=new Mnb(16711680);x.b=new Mnb(0);x.e=Otb;K0(this.b,new lub(x));A=new Dub;A.b=new Mnb(0);A.d=new Mnb(16711680);A.i=new Mnb(0);A.g=new Mnb(6710886);A.f=10;A.e=Otb;A.u=0.8999999761581421;A.v=true;K0(this.b,new zub(A));s=new Ztb;r.k=C;r.v=true;K0(this.b,new Utb(s));g=new Grb(70,32,16);e=new Grb(70,32,16);f=new Grb(70,32,16);for(i=0,j=f.o.c;i<j;++i){b=Ep(O0(f.o,i),133);b.i=0}zob(f,this.b);K0(this.b,new iub);this.c=new U0;for(i=0,j=this.b.c;i<j;++i){p=Ep(O0(this.b,i),150);d=p.gC()==Gy?f:p.O==Mtb?e:g;B=new zvb(d,p);Lpb(B.G,i%4*200-400);Ypb(B.G,Math.floor(i/4)*200-200);Lpb(B.J,Math.random()*200-100);Mpb(B.J,Math.random()*200-100);Ypb(B.J,Math.random()*200-100);K0(this.c,B);Omb(this.t,B)}t=new Ztb;t.i=new Mnb(16777215);this.d=new zvb(new Grb(4,8,8),new Utb(t));Omb(this.t,this.d);Omb(this.t,new Dsb(1118481));a=new Hsb(0.125);Lpb(a.G,Math.random()-0.5);Mpb(a.G,Math.random()-0.5);Ypb(a.G,Math.random()-0.5);a.G.rd();Omb(this.t,a);this.e=new Lsb;Omb(this.t,this.e)};_.Xc=function dDb(){};_.db=function eDb(a){var b,c,d,e,f;f=1.0E-4*a;Lpb(this.q.G,Math.cos(f)*1000);Ypb(this.q.G,Math.sin(f)*1000);cnb(this.q,this.t.G);for(b=0,c=this.c.c;b<c;++b){e=Ep(O0(this.c,b),161);e.J.d+=0.009999999776482582;e.J.e+=0.004999999888241291;d=Ep(O0(this.b,b),150);b>9&&Gp(d,156)?Hnb(Ep(d,156).c,0.5400000214576721,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Gp(d,155)&&Hnb(Ep(d,155).c,0.03999999910593033,1,0.7*(0.5+0.5*Math.cos(35*f)))}Lpb(this.d.G,Math.sin(f*7)*300);Mpb(this.d.G,Math.cos(f*5)*400);Ypb(this.d.G,Math.cos(f*3)*300);Lpb(this.e.G,this.d.G.d);Mpb(this.e.G,this.d.G.e);Ypb(this.e.G,this.d.G.c);O5(this)};_.b=null;_.c=null;_.d=null;_.e=null;var Sw=fX(VJb,'ShaderDepth'),Rw=fX(VJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),Pw=fX(VJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),Qw=fX(VJb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),gx=fX(VJb,'ShaderPhong'),fx=fX(VJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator'),dx=fX(VJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$1'),ex=fX(VJb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$2'),Ey=fX(MKb,'MeshDepthMaterial$MeshDepthMaterialOptions'),Gy=fX(MKb,'MeshFaceMaterial'),Ly=fX(MKb,'MeshPhongMaterial$MeshPhongMaterialOptions'),jA=fX(oJb,'MaterialsCanvas2D$DemoScene');cGb(Yd)(10);
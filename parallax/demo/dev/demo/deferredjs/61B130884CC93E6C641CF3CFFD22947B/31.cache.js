function gsc(){}
function ksc(){}
function nsc(){}
function gkc(){c7b.call(this)}
function _rc(){KGb.call(this,(csc(),bsc))}
function csc(){csc=OEc;bsc=new gsc}
function psc(){psc=OEc;esc=new ksc}
function qsc(){qsc=OEc;fsc=new nsc}
NS(1142,1,vGc);_.zb=function ekc(){E6b(this.b,new gkc(this.a))};NS(1143,958,sGc,gkc);_.Ed=function hkc(a){L2b(qu(qu(yPb(this.b,FMc),225).d,296),a.a.Z);M2b(qu(qu(yPb(this.b,FMc),225).d,296),a.a.Y)};_.nb=function ikc(){var a,b;ft((Uvb(),Tvb),(cwb(),bwb),this);this.a=new zNb;x3b(this.a._,1);a=new Q_b(new _rc);this.b=TWb(a).i;b=new Z4b(new iUb(2,2),a);_Mb(this.F,b);L2b(qu(qu(yPb(this.b,FMc),225).d,296),this.D.k.Z);M2b(qu(qu(yPb(this.b,FMc),225).d,296),this.D.k.Y)};_.ob=function jkc(a){DKb(qu(yPb(this.b,IMc),225),new cib(qu(qu(yPb(this.b,IMc),225).d,150).a+0.05));ZEb(this.D.k,this.F,this.a,null,false)};NS(1279,723,iGc,_rc);_.Jd=function asc(){yGb(this,IMc,new FKb((YKb(),KKb),new cib(1)));yGb(this,FMc,new FKb(SKb,new N2b))};var bsc;NS(1280,1,{},gsc);_.Md=function hsc(){return psc(),esc};_.Nd=function isc(){return qsc(),fsc};var esc,fsc;NS(1281,1,{},ksc);_.ac=function lsc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};NS(1282,1,{},nsc);_.ac=function osc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var CM=Shb(jLc,'MaterialsShaderMonjori$DemoScene',1143),ZN=Shb(cLc,'MonjoriShader',1279),YN=Shb(cLc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1280),WN=Shb(cLc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1281),XN=Shb(cLc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1282);IGc(xi)(31);
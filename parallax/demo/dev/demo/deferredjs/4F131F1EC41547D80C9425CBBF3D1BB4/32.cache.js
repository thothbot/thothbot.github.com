function cuc(){}
function guc(){}
function juc(){}
function Elc(){U7b.call(this)}
function Xtc(){vHb.call(this,($tc(),Ztc))}
function $tc(){$tc=WGc;Ztc=new cuc}
function luc(){luc=WGc;auc=new guc}
function muc(){muc=WGc;buc=new juc}
kT(1158,1,EIc);_.zb=function Clc(){u7b(this.b,new Elc(this.a))};kT(1159,964,BIc,Elc);_.Ed=function Flc(a){A3b(Au(Au(iQb(this.b,_Oc),225).d,297),a.a.Z);B3b(Au(Au(iQb(this.b,_Oc),225).d,297),a.a.Y)};_.nb=function Glc(){var a,b;ot((Cwb(),Bwb),(Mwb(),Lwb),this);this.a=new jOb;m4b(this.a._,1);a=new I0b(new Xtc);this.b=CXb(a).i;b=new O5b(new UUb(2,2),a);MNb(this.F,b);A3b(Au(Au(iQb(this.b,_Oc),225).d,297),this.D.k.Z);B3b(Au(Au(iQb(this.b,_Oc),225).d,297),this.D.k.Y)};_.ob=function Hlc(a){oLb(Au(iQb(this.b,cPc),225),new Mib(Au(Au(iQb(this.b,cPc),225).d,150).a+0.05));KFb(this.D.k,this.F,this.a,null,false)};kT(1302,728,rIc,Xtc);_.Jd=function Ytc(){jHb(this,cPc,new qLb((JLb(),vLb),new Mib(1)));jHb(this,_Oc,new qLb(DLb,new C3b))};var Ztc;kT(1303,1,{},cuc);_.Md=function duc(){return luc(),auc};_.Nd=function euc(){return muc(),buc};var auc,buc;kT(1304,1,{},guc);_.mc=function huc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};kT(1305,1,{},juc);_.mc=function kuc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var ZM=Aib(ENc,'MaterialsShaderMonjori$DemoScene',1159),zO=Aib(xNc,'MonjoriShader',1302),yO=Aib(xNc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1303),wO=Aib(xNc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1304),xO=Aib(xNc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1305);RIc(xi)(32);
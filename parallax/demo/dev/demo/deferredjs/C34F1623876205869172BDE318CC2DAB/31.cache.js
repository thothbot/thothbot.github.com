function kvc(){}
function ovc(){}
function rvc(){}
function vmc(){O9b.call(this)}
function dvc(){HIb.call(this,(gvc(),fvc))}
function tvc(){tvc=lKc;ivc=new ovc}
function gvc(){gvc=lKc;fvc=new kvc}
function uvc(){uvc=lKc;jvc=new rvc}
mU(1154,1,YLc);_.Db=function tmc(){o9b(this.c,new vmc(this.b))};mU(1155,967,VLc,vmc);_.Jd=function wmc(a){r5b(Eu(Eu(WRb(this.c,lSc),225).e,297),a.b.$);s5b(Eu(Eu(WRb(this.c,lSc),225).e,297),a.b.Z)};_.ob=function xmc(){var a,b;tt((Oxb(),Nxb),(Yxb(),Xxb),this);this.b=new RPb;e6b(this.b.ab,1);a=new z2b(new dvc);this.c=rZb(a).j;b=new G7b(new IWb(2,2),a);rPb(this.I,b);r5b(Eu(Eu(WRb(this.c,lSc),225).e,297),this.H.n.$);s5b(Eu(Eu(WRb(this.c,lSc),225).e,297),this.H.n.Z)};_.pb=function ymc(a){VMb(Eu(WRb(this.c,oSc),225),new Ujb(Eu(Eu(WRb(this.c,oSc),225).e,150).b+0.05));WGb(this.H.n,this.I,this.b,null,false)};mU(1287,725,LLc,dvc);_.Od=function evc(){vIb(this,oSc,new XMb((oNb(),aNb),new Ujb(1)));vIb(this,lSc,new XMb(iNb,new t5b))};var fvc;mU(1288,1,{},kvc);_.Rd=function lvc(){return tvc(),ivc};_.Sd=function mvc(){return uvc(),jvc};var ivc,jvc;mU(1289,1,{},ovc);_.qc=function pvc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};mU(1290,1,{},rvc);_.qc=function svc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var bN=Ijb(VQc,'MaterialsShaderMonjori$DemoScene',1155),dP=Ijb(OQc,'MonjoriShader',1287),cP=Ijb(OQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1288),aP=Ijb(OQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1289),bP=Ijb(OQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1290);kMc(Hi)(31);
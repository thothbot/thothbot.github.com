function Fxc(){}
function Jxc(){}
function Mxc(){}
function Kmc(){A9b.call(this)}
function yxc(){uIb.call(this,(Bxc(),Axc))}
function Bxc(){Bxc=GMc;Axc=new Fxc}
function Oxc(){Oxc=GMc;Dxc=new Jxc}
function Pxc(){Pxc=GMc;Exc=new Mxc}
fU(1156,1,pOc);_.zb=function Imc(){a9b(this.b,new Kmc(this.a))};fU(1157,970,mOc,Kmc);_.Gd=function Lmc(a){e5b(zu(zu(JRb(this.b,IUc),225).d,297),a.a.Z);f5b(zu(zu(JRb(this.b,IUc),225).d,297),a.a.Y)};_.nb=function Mmc(){var a,b;nt((Bxb(),Axb),(Lxb(),Kxb),this);this.a=new EPb;T5b(this.a._,1);a=new m2b(new yxc);this.b=eZb(a).i;b=new t7b(new vWb(2,2),a);ePb(this.H,b);e5b(zu(zu(JRb(this.b,IUc),225).d,297),this.G.k.Z);f5b(zu(zu(JRb(this.b,IUc),225).d,297),this.G.k.Y)};_.ob=function Nmc(a){IMb(zu(JRb(this.b,LUc),225),new Ijb(zu(zu(JRb(this.b,LUc),225).d,150).a+0.05));JGb(this.G.k,this.H,this.a,null,false)};fU(1337,728,cOc,yxc);_.Ld=function zxc(){iIb(this,LUc,new KMb((bNb(),PMb),new Ijb(1)));iIb(this,IUc,new KMb(XMb,new g5b))};var Axc;fU(1338,1,{},Fxc);_.Od=function Gxc(){return Oxc(),Dxc};_.Pd=function Hxc(){return Pxc(),Exc};var Dxc,Exc;fU(1339,1,{},Jxc);_.nc=function Kxc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};fU(1340,1,{},Mxc);_.nc=function Nxc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var WM=wjb(qTc,'MaterialsShaderMonjori$DemoScene',1157),YO=wjb(jTc,'MonjoriShader',1337),XO=wjb(jTc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1338),VO=wjb(jTc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1339),WO=wjb(jTc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1340);DOc(xi)(31);
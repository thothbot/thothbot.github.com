function Qoc(){}
function Uoc(){}
function Xoc(){}
function mhc(){M5b.call(this)}
function Joc(){XFb.call(this,(Moc(),Loc))}
function Moc(){Moc=xzc;Loc=new Qoc}
function Zoc(){Zoc=xzc;Ooc=new Uoc}
function $oc(){$oc=xzc;Poc=new Xoc}
BS(1108,1,cBc);_.Cb=function khc(){J5b(this.c,new mhc(this.b))};BS(1109,946,_Ac,mhc);_.Md=function nhc(a){T1b(Yu(Yu(IOb(this.c,rHc),174).e,244),a.b.Y);U1b(Yu(Yu(IOb(this.c,rHc),174).e,244),a.b.X)};_.nb=function ohc(){var a,b;Mt((nvb(),mvb),(xvb(),wvb),this);this.b=new KMb;F2b(this.b.ab,1);a=new $$b(new Joc);this.c=bWb(a).j;b=new e4b(new sTb(2,2),a);kMb(this.G,b);T1b(Yu(Yu(IOb(this.c,rHc),174).e,244),this.F.o.Y);U1b(Yu(Yu(IOb(this.c,rHc),174).e,244),this.F.o.X)};_.ob=function phc(a){QJb(Yu(IOb(this.c,uHc),174),new zhb(Yu(Yu(IOb(this.c,uHc),174).e,98).b+0.05));tEb(this.F.o,this.G,this.b,null,false)};BS(1236,719,QAc,Joc);_.Qd=function Koc(){LFb(this,uHc,new SJb((jKb(),XJb),new zhb(1)));LFb(this,rHc,new SJb(dKb,new V1b))};var Loc;BS(1237,1,{},Qoc);_.Td=function Roc(){return Zoc(),Ooc};_.Ud=function Soc(){return $oc(),Poc};var Ooc,Poc;BS(1238,1,{},Uoc);_.ic=function Voc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};BS(1239,1,{},Xoc);_.ic=function Yoc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var NM=nhb(XFc,'MaterialsShaderMonjori$DemoScene',1109),iO=nhb(QFc,'MonjoriShader',1236),hO=nhb(QFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1237),fO=nhb(QFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1238),gO=nhb(QFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1239);oBc(Ii)(31);
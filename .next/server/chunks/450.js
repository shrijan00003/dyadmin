"use strict";exports.id=450,exports.ids=[450],exports.modules={1450:(e,t,a)=>{a.d(t,{ENV_CMDS_FULL_URI:()=>v,ENV_CMDS_RELATIVE_URI:()=>g,fromContainerMetadata:()=>I,fromInstanceMetadata:()=>$,getInstanceMetadataEndpoint:()=>M,httpRequest:()=>l});var r,n,o=a(2313),i=a(7310),s=a(4300),c=a(3685);function l(e){return new Promise((t,a)=>{let r=(0,c.request)({method:"GET",...e,hostname:e.hostname?.replace(/^\[(.+)\]$/,"$1")});r.on("error",e=>{a(Object.assign(new o.kb("Unable to connect to instance metadata service"),e)),r.destroy()}),r.on("timeout",()=>{a(new o.kb("TimeoutError from instance metadata service")),r.destroy()}),r.on("response",e=>{let{statusCode:n=400}=e;(n<200||300<=n)&&(a(Object.assign(new o.kb("Error response received from instance metadata service"),{statusCode:n})),r.destroy());let i=[];e.on("data",e=>{i.push(e)}),e.on("end",()=>{t(s.Buffer.concat(i)),r.destroy()})}),r.end()})}let d=e=>!!e&&"object"==typeof e&&"string"==typeof e.AccessKeyId&&"string"==typeof e.SecretAccessKey&&"string"==typeof e.Token&&"string"==typeof e.Expiration,p=e=>({accessKeyId:e.AccessKeyId,secretAccessKey:e.SecretAccessKey,sessionToken:e.Token,expiration:new Date(e.Expiration),...e.AccountId&&{accountId:e.AccountId}}),u=1e3,m=0,h=({maxRetries:e=m,timeout:t=u})=>({maxRetries:e,timeout:t}),f=(e,t)=>{let a=e();for(let r=0;r<t;r++)a=a.catch(e);return a},v="AWS_CONTAINER_CREDENTIALS_FULL_URI",g="AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",w="AWS_CONTAINER_AUTHORIZATION_TOKEN",I=(e={})=>{let{timeout:t,maxRetries:a}=h(e);return()=>f(async()=>{let a=await A({logger:e.logger}),r=JSON.parse(await y(t,a));if(!d(r))throw new o.mV("Invalid response received from instance metadata service.",{logger:e.logger});return p(r)},a)},y=async(e,t)=>(process.env[w]&&(t.headers={...t.headers,Authorization:process.env[w]}),(await l({...t,timeout:e})).toString()),E={localhost:!0,"127.0.0.1":!0},_={"http:":!0,"https:":!0},A=async({logger:e})=>{if(process.env[g])return{hostname:"169.254.170.2",path:process.env[g]};if(process.env[v]){let t=(0,i.parse)(process.env[v]);if(!t.hostname||!(t.hostname in E))throw new o.mV(`${t.hostname} is not a valid container metadata service hostname`,{tryNextLink:!1,logger:e});if(!t.protocol||!(t.protocol in _))throw new o.mV(`${t.protocol} is not a valid container metadata service protocol`,{tryNextLink:!1,logger:e});return{...t,port:t.port?parseInt(t.port,10):void 0}}throw new o.mV(`The container metadata credential provider cannot be used unless the ${g} or ${v} environment variable is set`,{tryNextLink:!1,logger:e})};var S=a(124);class b extends o.mV{constructor(e,t=!0){super(e,t),this.tryNextLink=t,this.name="InstanceMetadataV1FallbackError",Object.setPrototypeOf(this,b.prototype)}}var T=a(1810);!function(e){e.IPv4="http://169.254.169.254",e.IPv6="http://[fd00:ec2::254]"}(r||(r={}));let D={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT,configFileSelector:e=>e.ec2_metadata_service_endpoint,default:void 0};!function(e){e.IPv4="IPv4",e.IPv6="IPv6"}(n||(n={}));let k={environmentVariableSelector:e=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,configFileSelector:e=>e.ec2_metadata_service_endpoint_mode,default:n.IPv4},M=async()=>(0,T.e)(await N()||await x()),N=async()=>(0,S.M)(D)(),x=async()=>{let e=await (0,S.M)(k)();switch(e){case n.IPv4:return r.IPv4;case n.IPv6:return r.IPv6;default:throw Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(n)}`)}},V=(e,t)=>{let a=300+Math.floor(300*Math.random()),r=new Date(Date.now()+1e3*a);t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(r)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);let n=e.originalExpiration??e.expiration;return{...e,...n?{originalExpiration:n}:{},expiration:r}},C=(e,t={})=>{let a;let r=t?.logger||console;return async()=>{let t;try{(t=await e()).expiration&&t.expiration.getTime()<Date.now()&&(t=V(t,r))}catch(e){if(a)r.warn("Credential renew failed: ",e),t=V(a,r);else throw e}return a=t,t}},O="/latest/meta-data/iam/security-credentials/",P="AWS_EC2_METADATA_V1_DISABLED",R="ec2_metadata_v1_disabled",L="x-aws-ec2-metadata-token",$=(e={})=>C(K(e),{logger:e.logger}),K=(e={})=>{let t=!1,{logger:a,profile:r}=e,{timeout:n,maxRetries:i}=h(e),s=async(a,n)=>{if(t||n.headers?.[L]==null){let t=!1,a=!1,n=await (0,S.M)({environmentVariableSelector:t=>{let r=t[P];if(a=!!r&&"false"!==r,void 0===r)throw new o.mV(`${P} not set in env, checking config file next.`,{logger:e.logger});return a},configFileSelector:e=>{let a=e[R];return t=!!a&&"false"!==a},default:!1},{profile:r})();if(e.ec2MetadataV1Disabled||n){let r=[];throw e.ec2MetadataV1Disabled&&r.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"),t&&r.push(`config file profile (${R})`),a&&r.push(`process environment variable (${P})`),new b(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${r.join(", ")}].`)}}let i=(await f(async()=>{let e;try{e=await W(n)}catch(e){throw 401===e.statusCode&&(t=!1),e}return e},a)).trim();return f(async()=>{let a;try{a=await j(i,n,e)}catch(e){throw 401===e.statusCode&&(t=!1),e}return a},a)};return async()=>{let e=await M();if(t)return a?.debug("AWS SDK Instance Metadata","using v1 fallback (no token fetch)"),s(i,{...e,timeout:n});{let r;try{r=(await U({...e,timeout:n})).toString()}catch(r){if(r?.statusCode===400)throw Object.assign(r,{message:"EC2 Metadata token request returned error"});return("TimeoutError"===r.message||[403,404,405].includes(r.statusCode))&&(t=!0),a?.debug("AWS SDK Instance Metadata","using v1 fallback (initial)"),s(i,{...e,timeout:n})}return s(i,{...e,headers:{[L]:r},timeout:n})}}},U=async e=>l({...e,path:"/latest/api/token",method:"PUT",headers:{"x-aws-ec2-metadata-token-ttl-seconds":"21600"}}),W=async e=>(await l({...e,path:O})).toString(),j=async(e,t,a)=>{let r=JSON.parse((await l({...t,path:O+e})).toString());if(!d(r))throw new o.mV("Invalid response received from instance metadata service.",{logger:a.logger});return p(r)}}};
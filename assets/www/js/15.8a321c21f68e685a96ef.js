webpackJsonp([15],{559:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(546);e.default={data:function(){return{subLoading:!1,checkWay:"2",similarity:"",matchResult:"",checkImage:"static/img/headPhoto.png",clientImageCode:"static/img/headPhoto.png",clientInfo:{},clientIdcard:"",clientName:"",clientGenter:"",clientBirthday:"",clientNation:"",clientIdcardValidaty:"",clientResidence:"",searchResult:"",searchImageCode:"static/img/headPhoto.png",searchClientIdcard:""}},mounted:function(){var t=this;this.$nextTick(function(){if(t.info)for(var e in t.info)"clientImageCode"==e?t[e]="data:image/png;base64,"+t.info[e]:"strValidity"==e?t.info[e].indexOf("至")?t[e]=t.formatValidity(t.info[e]):t[e]="永久":t[e]=t.info[e]})},methods:{takePhoto:function(t){navigator.camera.getPicture(this[t],this.onFail,{quality:50,destinationType:Camera.DestinationType.FILE_URI,targetWidth:420,targetHeight:190})},takeFont:function(){this.takePhoto("fontSuccess")},fontSuccess:function(t){this.checkImage=t},checkFace:function(){this.subLoading=!0;var t=this.checkImage,e=encodeURI("http://172.16.17.106:8081/mms_bps/cardTrade/checkFace.action"),a=new FileUploadOptions;a.fileKey="file",a.fileName=t.substr(t.lastIndexOf("/")+1),a.mimeType="text/plain";var i=new Object;i.cardPhoto=this.clientImageCode,a.params=i;var n={headerParam:"headerValue"};a.headers=n,(new FileTransfer).upload(t,e,this.onSuccess1,this.onError1,a)},onSuccess1:function(t){this.subLoading=!1;var e=JSON.parse(t.response);console.log(e),this.similarity=e.similarity,this.matchResult=e.msg},onError1:function(t){this.subLoading=!1,console.log(t)},idCard:function(){var t=this;a.i(i.a)("IDCard",this.readIDCardSuccess,function(e){t.$notify.error({title:"失败",message:e,offset:100})})},readIDCardSuccess:function(t){this.clientInfo.clientResidence=t.strAddress,this.clientResidence=t.strAddress,this.clientInfo.clientIdcard=t.strNo,this.clientIdcard=t.strNo,this.clientInfo.clientNation=t.strNation,this.clientNation=t.strNation,this.clientInfo.clientBirthday=t.strBirthday,this.clientBirthday=t.strBirthday,this.clientInfo.clientGenter=t.strSex,this.clientGenter=t.strSex,this.clientInfo.clientIdcardValidaty=t.strValidity,this.clientIdcardValidaty=t.strValidity,this.clientInfo.clientName=t.strName,this.clientName=t.strName,this.clientInfo.clientIdcardIssueplace=t.strIssuer,this.clientIdcardIssueplace=t.strIssuer,this.clientImageCode="data:image/png;base64,"+t.strImageCode,this.clientInfo.clientImageCode="data:image/png;base64,"+t.strImageCode,t.strValidity.indexOf("至")?(this.clientIdcardValidaty=this.formatValidity(t.strValidity),this.clientInfo.clientIdcardValidaty=this.formatValidity(t.strValidity)):(this.clientIdcardValidaty="永久",this.clientInfo.clientIdcardValidaty="永久")},formatValidity:function(t){return t.substring(0,4)+"."+t.substring(4,6)+"."+t.substring(6,8)+"-"+t.substring(9,13)+"."+t.substring(13,15)+"."+t.substring(15)},search:function(){var t=this,e={};e.clientIdcard=this.clientIdcard,this.getData(this,e,"cardTrade/checkIdCard.action",function(e){t.searchResult=e.searchResult,t.clientInfo.searchResult=e.searchResult}),this.searchClientIdcard=this.clientIdcard,this.clientInfo.searchClientIdcard=this.clientIdcard,this.searchImageCode=this.clientImageCode,this.clientInfo.searchImageCode=this.clientImageCode,this.clientInfo.clientIdcard=this.clientIdcard,this.clientInfo.clientName=this.clientName,this.clientInfo.clientGenter=this.clientGenter,this.clientInfo.clientBirthday=this.clientBirthday,this.clientInfo.clientNation=this.clientNation,this.clientInfo.clientIdcardValidaty=this.clientIdcardValidaty,this.clientInfo.clientResidence=this.clientResidence,this.clientInfo.clientImageCode=this.clientImageCode,this.$emit("idInfo",this.clientInfo)}},props:["info"]}},560:function(t,e,a){var i=a(530);e=t.exports=a(528)(!1),e.push([t.i,".page[data-v-f6b005f8]{width:100%;height:100%;box-sizing:border-box;padding-top:.45rem}.main[data-v-f6b005f8]{overflow:auto;padding:0 .2rem;box-sizing:border-box;background-image:url("+i(a(544))+");background-size:100% 100%;background-repeat:no-repeat}.disableinput[data-v-f6b005f8]{background-color:#eef1f6;border-color:#d1dbe5;color:#bbb}.disableinput[data-v-f6b005f8]:focus{border-color:none}.stepContainer[data-v-f6b005f8]{margin:10px 0;padding:0 20px}.marginStep .textField[data-v-f6b005f8]{margin-top:.5rem}.step1[data-v-f6b005f8]{text-align:center}.step[data-v-f6b005f8]{min-height:4rem}.stepBtn[data-v-f6b005f8]{margin-top:.2rem;text-align:center}.stepBtn button[data-v-f6b005f8]{width:10%}.lastStep[data-v-f6b005f8]{text-align:center;padding-top:1.5rem}.content[data-v-f6b005f8]{text-align:left}._content[data-v-f6b005f8]{height:4rem;padding:0 .4rem}._content .textarea[data-v-f6b005f8]{width:100%;height:100%;background:none;outline:none}.textField[data-v-f6b005f8]{margin-top:.13rem}.selectField[data-v-f6b005f8]{display:inline-table;width:100%;margin-top:.14rem}.selectField .el-select[data-v-f6b005f8]{width:100%}.successTxt[data-v-f6b005f8]{margin:.2rem 0;color:#b4171e}.icon-chenggong[data-v-f6b005f8]{font-size:.35rem;margin-right:.2rem;color:#b4171e}[data-v-f6b005f8]::-webkit-scrollbar{width:0;height:0;background-color:#fafafa}[data-v-f6b005f8]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 1px transparent;border-radius:10px;background-color:#fafafa}[data-v-f6b005f8]::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.paper[data-v-f6b005f8]{border-radius:2px;box-shadow:0 3px 10px rgba(0,0,0,.156863),0 3px 10px rgba(0,0,0,.227451)}.divider[data-v-f6b005f8]{height:1px;border:none;background-color:rgba(0,0,0,.12);width:100%}.cameraBox[data-v-f6b005f8]{margin-top:.2rem}.cameraBox p[data-v-f6b005f8]{text-align:center}.photoSelect[data-v-f6b005f8]{position:relative;width:337px;height:190px;left:50%;transform:translateX(-50%);background:url("+i(a(545))+") no-repeat 50% 50% #eaeaea;border:1px dashed #bfbfbf;border-radius:10px;margin:.1rem 0}.photoSelect .takePhotos[data-v-f6b005f8]{margin-top:.6rem}.photoSelect img[data-v-f6b005f8]:first-child:last-child{width:100%;height:100%}.photoSelect img[data-v-f6b005f8]:first-child,.photoSelect img[data-v-f6b005f8]:nth-child(2n),.photoSelect img[data-v-f6b005f8]:nth-child(3n){width:49%;height:49%}.chooseType[data-v-f6b005f8]{text-align:center;margin-bottom:.2rem;padding-bottom:.2rem;border-bottom:1px solid #c1c1c1}.checkFace[data-v-f6b005f8]{display:block;margin-top:.5rem;margin:0 auto}.checkPhoto[data-v-f6b005f8]{margin-top:.3rem;width:145px;height:175px;float:right}.checkPhoto img[data-v-f6b005f8]{width:100%;height:100%}.bg[data-v-f6b005f8]{margin-right:.1rem;display:inline-block;vertical-align:middle}.icon1[data-v-f6b005f8]{width:.22rem;height:.22rem;background-image:url("+i(a(562))+")}.icon2[data-v-f6b005f8]{width:.26rem;height:.22rem;background-image:url("+i(a(563))+")}.imgBox[data-v-f6b005f8]{padding:.3rem .3rem 0}.imgBox .idCardImg[data-v-f6b005f8]{width:145px;height:175px}.imgBox .idCardImg img[data-v-f6b005f8]{width:100%;height:100%}.idCardBox[data-v-f6b005f8]{padding:0 .27rem}.idCardBox .idCard[data-v-f6b005f8]{width:145px;margin-top:.15rem}",""])},561:function(t,e,a){var i=a(560);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(529)("34842c8e",i,!0,{})},562:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP5JREFUeNpiYBggwAgi/v///x5ICdDJzg+MjIyCMIv/09W3QMCCJnYAiA/SyD57IHZAEfmPADQLbpDZMEtAfCY0eVrGswC2xAWL4w9AfIFGFhvALAfF8aBJXOSCBUD8kICaemwRDwP7iUwo+/+jAgckOQUgLsBjx3+sgmQCB6g5Dkhi5/FZzETl6HNAS0w4AXoc40vVAoQMA4IHxLqQBYvGRjzZgZDFB5DYG4hJLBTHMTRRzQfi+0DcD6UTYKUhrRJXAh65+dgsRi9AQEG9EEfAyANxAp58nICvGkT2KagAoVaqViC2jMZVVtOtyGRiGCAAy06F9Gz6MAwkAAgwAOMfpnz8nb6pAAAAAElFTkSuQmCC"},563:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ5JREFUeNq8VottgzAQxagDZARGYIO4G3QEuoE7QegEUScgGzACZAJ3A9IJwgb0Dh3S5WKbI6l60gnhzz3f79kmU8g0TSV8LOgOdE/DZ9ARtDfGfGePChjfgTrQYVoXXFPjnq0gVgFwjQBaLUg16aQmr6vAoaq/ApmBxF4nvKxS4dLKEbQIFY0As6HED496kwAbbgqE4q3Ny2p1URjvDxXwBv9bOb6xcrvFFneVA3RL/NlilHYjEC+sUrppI6eaRNHUqTyxvC/iXohWZgEq6fli+H8Vm9HTA9FRJqJ5gvUXtneEeaSmcsZgp/aKcBy3lDyz3eVb4g6n/IDPZ2Taobeh/kLJiYUzHsInBNmgCYyfc6J6lEJp7ESqkaW4RgTqWUzfFOHDhP9EpjH5XwFbvWzYTtkjkklaGrNsTXPTsAHKsIq7qhNANkHQLkaq1xSXCW88rS8jtoY7W+IUPgbGgSJs4FejI/gpeC0TkI9cD/6ZW7YRoSnEf8kSHwUxsYRT4/HeupAuDb6nebnmXXKm5rlVb3huuVQRmf96QP4KMAD91TBkO5CRZwAAAABJRU5ErkJggg=="},564:function(t,e,a){function i(t){a(561)}var n=a(89)(a(559),a(565),i,"data-v-f6b005f8",null);t.exports=n.exports},565:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cardPage"},[a("div",[a("el-row",[a("el-col",{attrs:{md:{span:8,offset:1},sm:{span:8,offset:1}}},[a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientIdcard,callback:function(e){t.clientIdcard=e},expression:"clientIdcard"}},[a("template",{slot:"prepend"},[t._v("身份证号码")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.searchClientIdcard,callback:function(e){t.searchClientIdcard=e},expression:"searchClientIdcard"}},[a("template",{slot:"prepend"},[t._v("联网核查身份证号码")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientName,callback:function(e){t.clientName=e},expression:"clientName"}},[a("template",{slot:"prepend"},[t._v("姓名")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientGenter,callback:function(e){t.clientGenter=e},expression:"clientGenter"}},[a("template",{slot:"prepend"},[t._v("性别")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientBirthday,callback:function(e){t.clientBirthday=e},expression:"clientBirthday"}},[a("template",{slot:"prepend"},[t._v("出生年月")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientNation,callback:function(e){t.clientNation=e},expression:"clientNation"}},[a("template",{slot:"prepend"},[t._v("民族")])],2)],1),t._v(" "),a("el-col",{attrs:{md:{span:9,offset:0},sm:{span:9,offset:0}}},[a("div",{staticClass:"imgBox clear"},[a("div",{staticClass:"idCardImg left"},[a("img",{attrs:{src:t.clientImageCode}})]),t._v(" "),a("div",{staticClass:"idCardImg right"},[a("img",{attrs:{src:t.searchImageCode}})])]),t._v(" "),a("div",{staticClass:"idCardBox clear"},[a("el-button",{staticClass:"idCard left",attrs:{type:"primary"},on:{click:function(e){return t.idCard()}}},[a("p",{staticClass:"bg icon1"}),t._v("刷二代身份证")]),t._v(" "),a("el-button",{staticClass:"idCard right",attrs:{type:"primary"},on:{click:function(e){return t.search()}}},[a("p",{staticClass:"bg icon2"}),t._v("联网核查")])],1)]),t._v(" "),a("el-col",{attrs:{md:{span:4,offset:0},sm:{span:4,offset:0}}},[a("div",{staticClass:"checkPhoto",on:{click:function(e){return t.takeFont()}}},[a("img",{attrs:{src:t.checkImage,alt:""}})]),t._v(" "),a("el-button",{staticClass:"idCard right",staticStyle:{"margin-top":"0.15rem"},attrs:{type:"primary",size:"large",loading:t.subLoading},on:{click:t.checkFace}},[a("p",{staticClass:"bg icon2"}),t._v("人脸识别")])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{md:{span:22,offset:1},sm:{span:22,offset:1}}},[a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientIdcardValidaty,callback:function(e){t.clientIdcardValidaty=e},expression:"clientIdcardValidaty"}},[a("template",{slot:"prepend"},[t._v("证件有效期")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.clientResidence,callback:function(e){t.clientResidence=e},expression:"clientResidence"}},[a("template",{slot:"prepend"},[t._v("户籍所在地")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.searchResult,callback:function(e){t.searchResult=e},expression:"searchResult"}},[a("template",{slot:"prepend"},[t._v("联网核查结果")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.matchResult,callback:function(e){t.matchResult=e},expression:"matchResult"}},[a("template",{slot:"prepend"},[t._v("匹配结果")])],2),t._v(" "),a("el-input",{staticClass:"textField",attrs:{disabled:!0},model:{value:t.similarity,callback:function(e){t.similarity=e},expression:"similarity"}},[a("template",{slot:"prepend"},[t._v("相似度")])],2)],1)],1)],1)])},staticRenderFns:[]}}});
<link rel="stylesheet" href="/wui/theme/solex/css/xz_dcsq/solex_excel.css">
<link rel="stylesheet" href="/wui/theme/solex/css/xz_dcsq/style.css">
<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/*
*  TODO
 *  请在此处编写javascript代码
 */
// 获取当前时间日期
var fullToday;
var hour;
$.ajax({
    url:'/workflow/solex/ddsq/getTime.jsp',
    type:'post',
    success:function (res) {
        let resObj = $.parseJSON(res);
        let month = resObj.month;
        let date = resObj.date;
        hour = resObj.hour;
        if(month < 10){
            month = '0' + month;
        }
        if(date < 10){
            date = '0' + date;
        }
        fullToday = String(resObj.year) + '-' + month + '-' +date;
    },
    error:function () {
        alert('网络错误')
    }
});

var returnStr = false;

jQuery(document).ready(function() {

    if( jQuery("#field21586").val()==""&&!(jQuery("#field20847").val==""&&jQuery("#field22646").val()==""&& jQuery("#field20856").val()=="")){
        getTableNum("");
        showavailtable();
        availTable();
    }
    if(!jQuery("#field21586").val()==""){
        getTableNum(jQuery("#field21586").val());
    }
    jQuery("#field20876").val("厦门好中豪餐饮服务管理有限公司");/* 厦门好中豪餐饮服务管理有限公司 ----对应代码308*/
    jQuery("#field20847").bindPropertyChange(function() {
        /*alert("进入点击事件");*/
        getTableNum("");
        showavailtable();
        availTable();
    });

    jQuery("#field22646").bindPropertyChange(function() {
        getTableNum("");
        showavailtable();
        availTable();
    });

    jQuery("#field20856").bindPropertyChange(function() {
        getTableNum("");
        showavailtable();
        availTable();
    });


    jQuery("#field20847").bindPropertyChange(function() {
        getTableNum("");
        showavailtable();
        availTable();
    });

    jQuery("#field20850").bindPropertyChange(function() {
        getTableNum("");
        showavailtable();
        availTable();
    });
    function availTable() {
        var date = jQuery("#field20856").val();/*日期*/
        var intTime = jQuery("#field20850").val();/*餐别选择框的值*/
        var time;/*餐别*/
        if (intTime == 0) {
            time = "中餐";
        } else {
            time = "晚餐";
        }

        /*alert("进入函数");*/
        jQuery.ajax({
            url : "/workflow/solex/ddsq/checkavailtable.jsp",
            data : {
                date : date,
                time : time,
            },
            type : "POST",
            dataType : "text",
            success : function(data) {
            },
            error : function() {
                alert("发生错误");
            }
        });
    }

    checkCustomize = function() {

        /* 进行数据的校验 */
        var sqr = jQuery("#field20854").val();/* 申请人 */
        var sqrgw = jQuery("#field20855").val();/* 申请人岗位 */
        var sj = jQuery("#field20847").val();/* 时间 */
        var cbzx = jQuery("#field20845").val();/* 成本中心 */
        var gc = jQuery("#field20846").val();/*工厂  */
        var khdm = jQuery("#field20857").val();/*客户代码*/
        var khzu = jQuery("#field20858").val();/* 客户职务 */
        var khrs = jQuery("#field20859").val();/* 客户人数 */
        var zycrs = jQuery("#field20860").val();/*  总用餐人数*/
        var khgsmc = jQuery("#field20849").val();/* 客户公司名称 */

        /* alert(sqr+","+sqrgw+" ,"+sj+", "+cbzx+" ,"+gc+" ,"+khdm+", "+khzu+" ,"+khrs+" ,"+zycrs+", "+khgsmc); */
        /* 1, ,15:05,  , ,,  , ,, */

        if (sqrgw == "") {
            alert("申请人岗位不能为空！");
            returnStr=false;
        }
        else{
            returnStr=true;
        }

        if (returnStr==true&&cbzx == "") {
            alert("成本中心不能为空!");
            returnStr=false;
        }
        if (returnStr==true&&gc =="") {
            alert("工厂不能为空！");
            returnStr=false;
        }
        if(returnStr==true&&khdm==""){
            alert("客户代码不能为空！");
            returnStr=false;
        }
        if(returnStr==true&&khzu==""){
            alert("客户职务不能为空！");
            returnStr=false;
        }

        if(returnStr==true){
            if(khrs==""){
                alert("客户人数不能为空!");
                returnStr=false;
            }
            if(zycrs==""){
                alert("总用餐人数不能为空！");
                returnStr=false;
            }
            if(parseInt(khrs)<0){
                alert("客户人数不能为负数");
                returnStr=false;
            }
            if(parseInt(zycrs)<0){
                alert("总用餐人数不能为负数");
                returnStr=false;
            }

            if(parseInt(khrs)>parseInt(zycrs)){
                alert("客户人数不能超过总用餐人数");
                returnStr=false;
            }
        }
        if(returnStr==true&&khgsmc==""){
            alert("客户公司名称不能为空");
            returnStr=false;
        }
        var tableNumber="";
        jQuery("input[name='table']:checkbox").each(function(){
            if(jQuery(this).attr("checked")){
                tableNumber= tableNumber+","+jQuery(this).val();
            }
        });
        if(jQuery("#field20870").val()==""){
            alert("餐桌还没选择");
            returnStr=false;
        }
        /* 对已用餐桌表单的检验 */
        var date = jQuery("#field20856").val();/*日期*/
        var intTime = jQuery("#field20850").val();/*餐别选择框的值*/
        var time;/*餐别*/
        if (intTime == 0) {
            time = "中餐";
        } else {
            time = "晚餐";
        }
        var ids = jQuery("#field21586").val();/*餐桌的ids*/
        /* alert(jQuery("#field25921").val()); */
        if (returnStr == true) {
            returnStr=false;
            jQuery.ajax({
                url : "/workflow/solex/ddsq/insertusedtable.jsp",
                data : {
                    date : date,
                    time : intTime,
                    ids : ids,
                },
                type : "POST",
                dataType : "text",
                async : false,
                success : function(resp) {
                    resp = jQuery.parseJSON(resp);
                    var pd = resp.returnStr;

                    if (pd == "true") {
                        returnStr = true;
                        jQuery("#field20874").val(resp.yq);
                    }
                    // else {
                    //     returnStr = false;
                    //     alert(resp.msg);
                    // }
                },
                error : function() {
                    alert("发生错误");
                    returnStr = false;
                },
            });
        }
        // 获取用餐日期
        var eatDate = $('#field20856span').text();
        if(!eatDate){
            alert('请选择用餐日期');
            returnStr = false;
        }else{
            // 判断是否满足订餐时间
            var swFlag = 0;

            if(hour < 11 && fullToday === eatDate){
                var cdObj = $('.detail0_3_3 span');
                for(let i=0;i<cdObj.length;i++){
                    if(cdObj.eq(i).text() === '商务套餐'){
                        swFlag = swFlag + 1;
                    }
                }
                // 如果商务套餐出现的次数和总订餐次数一样，则表示不包含其他套餐
                if(swFlag === cdObj.length){
                    returnStr = true;
                }else {
                    alert('除商务套餐可在当天上午11点前申请外，其它只能在前一天下午五点前申请');
                    returnStr = false;
                }
            }
        }
        return returnStr;
    }
});
/**
 * 取得桌号信息
 */

function getTableNum(ids){
    var rq = jQuery("#field20856").val();
    var cb=jQuery("#field20850").val();
    var yq = jQuery("#field22646").val();
    if(rq !="" && cb != "" && yq != ""){
        jQuery.ajax({
            url :"/workflow/solex/ddsq/queryTable.jsp",
            data :{
                "cb":cb,
                "yq":yq,
                "rq":rq,
                "ids":ids
            },
            type : "POST",
            dataType : "json",
            success : function(data){
                jQuery("#dzh").empty();
                jQuery("#dzh").append(data.buffer);
            }
        });

    }
}
/**
 * 取得菜单多选信息
 */
var cpmcflag="0";
jQuery("#field22725").bindPropertyChange(function() {
    if(cpmcflag=="1"){jQuery("#field22725").val("");jQuery("#field22725span").text("");cpmcflag="0";return;}
    cpmcflag="0";
    if(jQuery("#field22725").val()==""){cpmcflag="1";return;}
    var cps=jQuery("#field22725").val().split(",");
    var cpmcs=cps;
    var cpids=cps;
    jQuery.ajax({
        url : "/workflow/solex/ddsq/queryCP.jsp",
        data : {
            ids : jQuery("#field22725").val(),
        },
        type : "POST",
        dataType : "json",
        async:false,
        success : function(data) {
            cpmcs=data.cms;
            cpids=data.cpids;
        },
        error : function() {
            alert("发生错误");
        }
    });
    var count=jQuery("#indexnum0").val();
    for(var i = 0; i < cps.length; i++) {
        var num=parseInt(i)+parseInt(count);
        jQuery("button[name=addbutton0]").click();
        jQuery("#field21585_" + num).val(cpids[i]);
        jQuery("#field21585_" + num +"span").append("<spa class='e8_showNameClass'><a tile href='/formmode/view/AddFormMode.jsp?type=0&modeId=1541&formId=-313&billid="+cpids[i]+"' target='_blank'>"+cpmcs[i].trim()+"</a>&nbsp;<span class='e8_delClass' id='"+cpids[i]+"' onclick='del(event,this,2,false,{});' style='opacity: 1; visibility: hidden;'>&nbsp;x&nbsp;</span></span>");
        jQuery("#field21585_"+num+"spanimg").text("");

    }
    jQuery("#field22725").val("");
    jQuery("#field22725span").text("");
});
/**
 * 已选餐桌赋值
 */
function showavailtable() {
    var ids="";
    jQuery("input[name='table']:checkbox").each(function(){
        if(jQuery(this).attr("checked")){
            ids= ids+","+jQuery(this).val();
        }
    });
    ids=ids.substring(1);
    /* 		alert("进入函数");*/
    jQuery.ajax({
        /* beforeSend:(function (){
            alert("进入ajax");
        }), */
        url : "/workflow/solex/ddsq/showavailtable.jsp",
        data : {
            ids : ids
        },
        type : "POST",
        dataType : "text",
        success : function(resp) {
            resp = jQuery.parseJSON(resp);

            var str = "";
            for(var i=0;i<resp.length;i++){
                str=str+resp[i].table+"  ";
            }
            jQuery("#field20870").val(str);
            jQuery("#field20870span").text(str);
            jQuery("#field21586").val(ids);
            document.getElementById("field20870").readOnly=true;
        },
        error : function() {
            alert("发生错误");
        }
    });
}
</script>

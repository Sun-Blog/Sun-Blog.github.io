---
title: excel导入导出
date: 2021-07-13
cover: http://browser9.qhimg.com/bdr/__85/t0100dc32508c7e4d7a.jpg
tags:
  - excel导入导出
categories:
  - Other指南
---

## 导入

```javascript
<body>
    <input type="file" onchange="importf(this)" />
    <p id="excelContent"></p>
    
    <script src="xlsx.full.min.js"></script>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/xlsx/0.11.5/xlsx.core.min.js"></script>
    <script>
        var wb; //读取
        var rABS = false;

        //开始导入
        function importf(obj) {
            if (!obj.files) {
                return;
            }
            var f = obj.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                if (rABS) {
                    wb = XLSX.read(btoa(fixdata(data)), { //手动转化
                        type: 'base64'
                    });
                } else {
                    wb = XLSX.read(data, {
                        type: 'binary'
                    });
                }
                /**
                 * wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
                 * wb.Sheets[Sheet名]获取第一个Sheet的数据
                 */
                var excelJson = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                document.getElementById("excelContent").innerHTML = JSON.stringify(excelJson);
            };
            if (rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
        }

        //文件流转BinaryString
        function fixdata(data) {
            var o = "",
                l = 0,
                w = 10240;
            for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w,
                l * w +

                w)));
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        }
    </script>
</body>
```



## 导出

```javascript
<body>
    <button class="exportFile">导出</button>
</body>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $.ajax({
        type: "get",
        url: "url",
        data: {},
        dataType: "json",
        success: function (res) {
            $('.exportFile').click(function () {
                for (var i = 0; i < res.length; i++) {
                    res[i]['电站名称'] = res[i].dzname;

                    delete res[i].dzname;
                }
                JSONToExcelConvertor("导出表", res);
            })

            function JSONToExcelConvertor(fileName, jsonData) {
                //json
                var arrData = typeof jsonData != 'object' ? JSON.parse(jsonData) : jsonData;
                // #region 拼接数据
                var excel = '<table>';
                //设置表头
                var row = "<tr>";
                for (var name in arrData[0]) {
                    //每个单元格都可以指定样式. eg color:red   生成出来的就是 红色的字体了.
                    row += "<td style='color:red;text-align:center;'>" + name + '</td>';
                }
                //列头结束
                excel += row + "</tr>";
                //设置数据
                for (var i = 0; i < arrData.length; i++) {
                    var row = "<tr>";
                    for (var index in arrData[i]) {
                        var value = arrData[i][index] === "." ? "" : arrData[i][index];
                        row += '<td style="text-align:center;">' + value + '</td>'; //将值放入td
                    }
                    //将td 放入tr,将tr放入table
                    excel += row + "</tr>";
                }
                //table结束
                excel += "</table>";
                // #region 拼接html
                var excelFile =
                    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                excelFile +=
                    '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
                excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
                excelFile += '; charset=UTF-8">';
                excelFile += "<head>";
                excelFile += "<!--[if gte mso 9]>";
                excelFile += "<xml>";
                excelFile += "<x:ExcelWorkbook>";
                excelFile += "<x:ExcelWorksheets>";
                excelFile += "<x:ExcelWorksheet>";
                excelFile += "<x:Name>";
                excelFile += "{worksheet}";
                excelFile += "</x:Name>";
                excelFile += "<x:WorksheetOptions>";
                excelFile += "<x:DisplayGridlines/>";
                excelFile += "</x:WorksheetOptions>";
                excelFile += "</x:ExcelWorksheet>";
                excelFile += "</x:ExcelWorksheets>";
                excelFile += "</x:ExcelWorkbook>";
                excelFile += "</xml>";
                excelFile += "<![endif]-->";
                excelFile += "</head>";
                excelFile += "<body>";
                excelFile += excel; //将table 拼接
                excelFile += "</body>";
                excelFile += "</html>";

                var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);
                //创建a标签
                var link = document.createElement("a");
                //指定url
                link.href = uri;
                //设置为隐藏
                link.style = "visibility:hidden";
                //指定文件名和文件后缀格式
                link.download = fileName + ".xls";
                //追加a标签
                document.body.appendChild(link);
                //触发点击事件
                link.click();
                //移除a标签
                document.body.removeChild(link);
            }
        }
    });
</script>
```


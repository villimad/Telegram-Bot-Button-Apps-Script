var token = "your token"; 
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "your app"; 

function doGet(e) {
  return HtmlService.createHtmlOutput("Hi there");
}

function sendText(id,text) {
  var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}


function setWebhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  
}

function deletWebhook() {
  var url = telegramUrl + "/setWebhook";
  var response = UrlFetchApp.fetch(url); 
}

function sendButton(chatId, token, text){     
  var keyBoard = {
     inline_keyboard: [
       [
         {text:'������������',callback_data:'(1))1'},
         {text:'���������� ������������',callback_data:'(2))1'}
       ],
       [
         {text:'���������� ���������',callback_data:'(3))1'},
         {text:'������',callback_data:'(4))1'}
       ],
       [
         {text:'�����',callback_data:'(5))1'},
         {text:'����������',callback_data:'(6))1'}
       ],
       [
         {text:'���������/������',callback_data:'(7))1'},
         {text:'��������/ ���������',callback_data:'(8))1'}
       ],
       [
         {text:'�������/���������/������',callback_data:'(9))1'},
         {text:'�������� ��� ����������',callback_data:'(10))1'}
       ],
       [
         {text:'�������� ����������/���������������',callback_data:'(11))1'},
         {text:'�������� ������',callback_data:'(12))1'}
       ],
       [
         {text:'�������� ������',callback_data:'(13))1'},
         {text:'�����������/������������',callback_data:'(14))1'}
       ],
       [
         {text:'������',callback_data:'(15))1'},
         {text:'������/������ ������',callback_data:'(16))1'}
       ],
       [
         {text:'����������/��������/��������/',callback_data:'(17))1'},
         {text:'���������� ���-�����',callback_data:'(18))1'}
       ],
       [
         {text:'�������/����������/�������� ������',callback_data:'(19))1'},
         {text:'���������/����������',callback_data:'(20))1'}
       ],
       [
         {text:'������� ��� ���������',callback_data:'(21))1'},
         {text:'��������/������������ ��������',callback_data:'(22))1'}
       ],
       [
         {text:'����� ���������',callback_data:'(23))1'},
         {text:'������� �������/���������',callback_data:'(24))1'}
       ],
       [
         {text:'�� ������',callback_data:'(25))1'},
         {text:'����������� Sim, MMC ����',callback_data:'(26))1'}
       ],
       [
         {text:'���� ��������',callback_data:'(27))1'},
         {text:'����� ��� ���������',callback_data:'(28))1'}
       ],
       [
         {text:'������/�����/����������',callback_data:'(29))1'}
       ],
      
       
     ]
   }; 

     var data = {
      method: "post",
      payload: {
         method: "sendMessage",
         chat_id: String(chatId),
         text: text,
         parse_mode: "HTML",
         reply_markup: JSON.stringify(keyBoard)
       }
     }
   UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
 }

function sendButton1(chatId, token, text, dt){     
  var keyBoard = {
     inline_keyboard: [
       [
         {text:'Samsung',callback_data:dt + ')' + 'Samsung'},
         {text:'Alcatel',callback_data:dt + ')' + 'Alcatel'}
       ],
       [
         {text:'Asus',callback_data:dt + ')' + 'Asus'},
         {text:'Explay',callback_data:dt + ')' + 'Explay'}
       ],
       [
         {text:'FLY',callback_data:dt + ')' + 'FLY'},
         {text:'HTC',callback_data:dt + ')' + 'HTC'}
       ],
       [
         {text:'Huawei',callback_data:dt + ')' + 'Huawei'},
         {text:'iPad',callback_data:dt + ')' + 'iPad'}
       ],
       [
         {text:'iPhone',callback_data:dt + ')' + 'iPhone'},
         {text:'Apple Watch',callback_data:dt + ')' + 'Apple Watch'}
       ],
       [
         {text:'Lenovo',callback_data:dt + ')' + 'Lenovo'},
         {text:'LG',callback_data:dt + ')' + 'LG'}
       ],
       [
         {text:'Meizu',callback_data:dt + ')' + 'Meizu'},
         {text:'Nokia',callback_data:dt + ')' + 'Nokia'}
       ],
       [
         {text:'Presitigio',callback_data:dt + ')' + 'Presitigio'},
         {text:'Xiaomi',callback_data:dt + ')' + 'Xiaomi'}
       ],
       [
         {text:'ZTE',callback_data:dt + ')' + 'ZTE'},
         {text:'Sony',callback_data:dt + ')' + 'Sony'}
       ]         
     ]
   }; 

     var data = {
      method: "post",
      payload: {
         method: "sendMessage",
         chat_id: String(chatId),
         text: text,
         parse_mode: "HTML",
         reply_markup: JSON.stringify(keyBoard)
       }
     }
   UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
 }
 
       

function categor(x){
  if (x=='(1)'){
    var name = '������������'
  }
  if (x=='(2)'){
    var name = '���������� ������������'
  }
  if (x=='(3)'){
    var name = '���������� ���������'
  }
  if (x=='(4)'){
    var name = '������'
  }
  if (x=='(5)'){
    var name = '�����'
  }
  if (x=='(6)'){
    var name = '����������'
  }
  if (x=='(7)'){
    var name = '���������/������'
  }
  if (x=='(8)'){
    var name = '��������/ ���������'
  }
  if (x=='(9)'){
    var name = '�������/���������/������'
  }
  if (x=='(10)'){
    var name = '�������� ��� ����������'
  }
  if (x=='(11)'){
    var name = '�������� ����������/���������������'
  }
  if (x=='(12)'){
    var name = '�������� ������'
  }
  if (x=='(13)'){
    var name = '�������� ������'
  }
  if (x=='(14)'){
   var name = '�����������/������������' 
  }
  if (x=='(15)'){
    var name = '������'
  }
  if (x=='(16)'){
   var name = '������/������ ������' 
  }
  if (x=='(17)'){
    var name = '����������/��������/��������/'
  }
  if (x=='(18)'){
    var name = '���������� ���-�����'
  }
  if (x=='(19)'){
    var name = '�������/����������/�������� ������'
  }
  if (x=='(20)'){
    var name = '���������/����������'
  }
  if (x=='(21)'){
    var name = '������� ��� ���������'
  }
  if (x=='(22)'){
    var name = '��������/������������ ��������'
  }
  if (x=='(23)'){
    var name = '����� ���������'
  }
  if (x=='(24)'){
    var name = '������� �������/���������'
  }
  if (x=='(25)'){
   var name = '�� ������' 
  }
  if (x=='(26)'){
   var name = '����������� Sim, MMC ����' 
  }
  if (x=='(27)'){
    var name = '���� ��������'
  }
  if (x=='(28)'){
    var name = '����� ��� ���������'
  }
  if (x=='(29)'){
   var name = '������/�����/����������' 
  }
  
  return name  
}

function doPost(e) {
  // this is where telegram works
  var contents = JSON.parse(e.postData.contents);
  var sheet =  SpreadsheetApp.openById('your sheet').getSheets()[0];
  //var text = data.message.text;
  //var id = contents.message.chat.id;
  //sendButton(id, token, '�������� ���������');
  if (contents.callback_query) {
    var id_callback = contents.callback_query.from.id;
    var data = contents.callback_query.data;
    var idx = data.indexOf(')');
    var indices = [];
    while (idx != -1) {
      indices.push(idx);
      idx = data.indexOf(')', idx + 1);
    }
    var d_index = indices.length;
    
    if (d_index == 2){
      sendButton1(id_callback, token, '�������� �����:', data);      
    }else if (d_index > 2){
      var data_sp = data.split(')1'); 
      var cat = categor(data_sp[0]);
      var srch = data.split(')1)')[1].toLowerCase();
      var textFinder = sheet.createTextFinder(cat);
      var search_Ranges = textFinder.findAll();
      var d_range = search_Ranges.length;
      sendText(id_callback,'����� �����������: ' + d_range);
      if (d_range==0){
         sendText(id_callback,'��� �����������');
      }
      for (var q=0; q<d_range; q++){
        var Row = search_Ranges[q].getRow();
        var Col = search_Ranges[q].getColumn();
        if (Col==2){
          var Val = sheet.getRange(Row, Col+1).getValue();
          var Val2 = Val.split(' ').join(',').split('/').join(',').split(',');
          var d_Val = Val2.length;
          for (var g=0; g<d_Val; g++){
            Val2[g] = Val2[g].toLowerCase();
          }
          var indS = Val2.indexOf(srch);
          if (indS >= 0){
            var Cen = sheet.getRange(Row, Col+2).getValue();
            var Valu = sheet.getRange(Row, Col+4).getValue();
            var sait = sheet.getRange(Row, Col+5).getValue();
            var answer = Val + '   ����: ' + Cen + Valu +' ����: ' + sait;
            sendText(id_callback, answer);
          }
        }
        
      }
      sendText(id_callback, '����� �������');      
    }
    
  }else if (contents.message) {
    
    var id = contents.message.chat.id;
    var text = contents.message.text;
    var name = contents.message.chat.first_name;
    if (text=='/start'){
      sendText(id, '������������! ' + name + ' ��� ��� ��������� �������.');      
    }    
    sendButton(id, token, '�������� ���������:');      
  }
}
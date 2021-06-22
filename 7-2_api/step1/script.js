
'use strict'

function success(pos) {
   ajaxRequest(pos.coords.latitude, pos.coords.longitude);
  }

function fail(error){
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

function ajaxRequest(lat, long) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = 'ed41fa6ea13c957a2e09390fbda311e8'

  $.ajax({
    url: url,
    data: {
      appid: appId,
      lat: lat,
      lon: long,
      units:'metric',
      lang: 'ja'
    }
  })
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log('$.ajax failed!');
  })
}
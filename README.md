# jqueryScreenResolution
Arayüz geliştirme ortamı için basit, kullanışlı ve sade bir ekran çözünürlüğü gösterme eklentisi.

## Kullanımı
```javascript
$(document).ready(function(){
  $('body').screenResolution();
});
```

## Özelleştirme
```javascript
$(document).ready(function(){
  $('body').screenResolution({
              wText: "W: ", // Genişlik metni
              hText: "H: ", // Yükseklik metni
              color: "#34495e", // Meting rengi
              bgColor: "#ecf0f1", // Genişlik ve yükseklik arka plan rengi
              family: "Trebuchet MS, Helvetica, sans-serif", // Font ailesi
              weight: "700", // Font tipi
              fontSize : 13, // Font boyutu
              radius: 3, // Genişlik ve yükseklik değerleri border radius değeri
              bottom: 10, // Genişlik değeri alttan boşluk değeri
              padding: "3px 10px", // Genişlik ve yükseklik boşluk değerleri
              contentX: "right", // Ana gövde  yatay konumlandırma
              contentY: "bottom", // Ana gövde dikey konunlandırma
              contentXpx: 15, // Ana gövde yatay boşluk
              contentYpx: 15, // Ana gövde dikey boşluk
              contentRadius: 9, // Ana gövde border radius değeri
              contentPadding: 10, // Ana gövde boşluk değeri
              contentBg: "#e74c3c", // Ana gövde arka plan rengi
              contentZ: 9999 // Ana gövde Z-index değeri
          });
});
```
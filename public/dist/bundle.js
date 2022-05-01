(()=>{"use strict";var __webpack_modules__={388:()=>{eval("\n;// CONCATENATED MODULE: ./public/js/map.js\n// if you believe in Allah, Jesus or Sauron, don't misuse the key.\r\nmapboxgl.accessToken = 'pk.eyJ1Ijoia25pZ2h0ZnVyeTE2IiwiYSI6ImNreGNzdWY1djB3N2cybm1mZW1tZXNrMG4ifQ.9RcMPZ_7SHlJvo8woK_KLw';\r\n\r\nconst map = new mapboxgl.Map({\r\ncontainer: 'map',\r\nstyle: 'mapbox://styles/mapbox/streets-v11',\r\ncenter: [90.411827, 23.760196],\r\nzoom: 7\r\n});\r\n\r\nconst marker = new mapboxgl.Marker({color:'red'})\r\n.setLngLat([90.411827, 23.760196])\r\n.addTo(map);\r\n\n;// CONCATENATED MODULE: ./public/js/currentPos.js\n\r\n\r\nclass SendMyPos{\r\n\r\n\tsendLocationButton;\r\n\tmessageOne;\r\n\tmessageTwo;\r\n    search;\r\n\r\n\tconstructor(){\r\n\t\tthis.sendLocationButton = document.getElementById('my-pos');\r\n\t\tthis.messageOne = document.querySelector(\"#msg-1\");\r\n\t\tthis.messageTwo = document.querySelector(\"#msg-2\");\r\n        this.search = document.querySelector(\"input\");\r\n\r\n\r\n\t\tthis.config();\r\n\t}\r\n\r\n\tconfig(){\r\n\t\tthis.sendLocationButton.addEventListener('click', e =>{\r\n\t\t\te.preventDefault();\r\n\t\t\t\r\n\t\t\tif(!navigator.geolocation){\r\n\t\t\t\treturn alert('Geolocation is not supported by your browser.');\r\n\t\t\t}\r\n\r\n\t\t\tthis.sendLocationButton.setAttribute('disabled','disabled');\r\n\t\t\t\r\n\t\t\tnavigator.geolocation.getCurrentPosition(position => {\r\n\t\t\t\tlet location = {\r\n\t\t\t\t\tlatitude: position.coords.latitude,\r\n\t\t\t\t\tlongitude: position.coords.longitude\r\n\t\t\t\t}\r\n\t\t\t\tthis.fetchData(location);\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tfetchData(location){\r\n\t\t\r\n\t\tthis.messageOne.textContent = 'Loading...';\r\n\t\tthis.messageTwo.textContent = '';\r\n\r\n\t\tconst address = `${location.longitude.toString()},${location.latitude.toString()}`;\r\n\t\t\r\n\t\tconst url = '/weather?address=' + address + \"&crood=true\";\r\n\t\r\n\t\tfetch(url)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then(data => {\r\n\t\t\tif(data.error)\r\n\t\t\t{\r\n\t\t\t\treturn this.messageOne.textContent = data.error;\r\n\t\t\t}\r\n\t\t\t// Map settings\r\n\t\t\tconst longitude = data.longitude;\r\n\t\t\tconst latitude = data.latitude;\r\n\t\t\tmap.easeTo({center: [longitude, latitude], zoom:9, duration: 4000});\r\n\t\t\tmarker.setLngLat([longitude,latitude]);\r\n\t\t\t\r\n            this.search.value = data.location;\r\n\t\t\tthis.messageOne.textContent = data.location;\r\n\t\t\tthis.messageTwo.textContent = data.forecast;\r\n            // Activating pos button\r\n\t\t\tthis.sendLocationButton.removeAttribute('disabled');\r\n\t\t})\r\n\t\t.catch(err => {\r\n\t\t\tconsole.log(err);\r\n\t\t});\r\n    }\r\n}\r\n\r\n\n;// CONCATENATED MODULE: ./public/js/app.js\n\r\n\r\n\r\nconsole.log('Client side javascript file is loaded.');\r\n\r\nconst addressForm = document.querySelector(\".addressForm\");\r\nconst search = document.querySelector(\"input\");\r\nconst messageOne = document.querySelector(\"#msg-1\");\r\nconst messageTwo = document.querySelector(\"#msg-2\");\r\n\r\n\r\nnew SendMyPos();\r\n\r\naddressForm.addEventListener('submit', (e) => {\r\n\te.preventDefault();\r\n\tconst address = search.value;\r\n\t\r\n\t\r\n\tmessageOne.textContent = 'Loading...';\r\n\tmessageTwo.textContent = '';\r\n\t\r\n\tconst url = '/weather?address=' + address + \"&crood=false\";\r\n\r\n\tfetch(url)\r\n\t.then((response) => {\r\n\t\treturn response.json();\r\n\t})\r\n\t.then(data => {\r\n\t\tif(data.error)\r\n\t\t{\r\n\t\t\treturn messageOne.textContent = data.error;\r\n\t\t}\r\n\t\t// Map settings\r\n\t\tconst longitude = data.longitude;\r\n\t\tconst latitude = data.latitude;\r\n\t\tmap.easeTo({center: [longitude, latitude], zoom:9, duration: 4000});\r\n\t\tmarker.setLngLat([longitude,latitude]);\r\n\t\t\r\n\t\tmessageOne.textContent = data.location;\r\n\t\tmessageTwo.textContent = data.forecast;\r\n\t})\r\n\t.catch(err => {\r\n\t\tconsole.log(err);\r\n\t});\r\n\r\n})\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg4LmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPLG9DQUFvQyxZQUFZO0FBQ3ZEO0FBQ0E7OztBQ1pnQztBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCLEdBQUcsNkJBQTZCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxVQUFVLEVBQUUsc0RBQXNEO0FBQ3JFLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FDMUVpQztBQUNNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsVUFBVSxFQUFFLHNEQUFzRDtBQUNwRSxFQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1zZXJ2ZXIvLi9wdWJsaWMvanMvbWFwLmpzP2Q0MmUiLCJ3ZWJwYWNrOi8vd2ViLXNlcnZlci8uL3B1YmxpYy9qcy9jdXJyZW50UG9zLmpzPzgzMmMiLCJ3ZWJwYWNrOi8vd2ViLXNlcnZlci8uL3B1YmxpYy9qcy9hcHAuanM/MDdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpZiB5b3UgYmVsaWV2ZSBpbiBBbGxhaCwgSmVzdXMgb3IgU2F1cm9uLCBkb24ndCBtaXN1c2UgdGhlIGtleS5cclxubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lhMjVwWjJoMFpuVnllVEUySWl3aVlTSTZJbU5yZUdOemRXWTFkakIzTjJjeWJtMW1aVzF0WlhOck1HNGlmUS45UmNNUFpfN1NIbEp2bzh3b0tfS0x3JztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuY29udGFpbmVyOiAnbWFwJyxcclxuc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExJyxcclxuY2VudGVyOiBbOTAuNDExODI3LCAyMy43NjAxOTZdLFxyXG56b29tOiA3XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoe2NvbG9yOidyZWQnfSlcclxuLnNldExuZ0xhdChbOTAuNDExODI3LCAyMy43NjAxOTZdKVxyXG4uYWRkVG8obWFwKTtcclxuIiwiaW1wb3J0IHttYXAsbWFya2VyfSBmcm9tIFwiLi9tYXBcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbmRNeVBvc3tcclxuXHJcblx0c2VuZExvY2F0aW9uQnV0dG9uO1xyXG5cdG1lc3NhZ2VPbmU7XHJcblx0bWVzc2FnZVR3bztcclxuICAgIHNlYXJjaDtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMuc2VuZExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXBvcycpO1xyXG5cdFx0dGhpcy5tZXNzYWdlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtc2ctMVwiKTtcclxuXHRcdHRoaXMubWVzc2FnZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXNnLTJcIik7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcblxyXG5cclxuXHRcdHRoaXMuY29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRjb25maWcoKXtcclxuXHRcdHRoaXMuc2VuZExvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoIW5hdmlnYXRvci5nZW9sb2NhdGlvbil7XHJcblx0XHRcdFx0cmV0dXJuIGFsZXJ0KCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3Nlci4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zZW5kTG9jYXRpb25CdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uID0+IHtcclxuXHRcdFx0XHRsZXQgbG9jYXRpb24gPSB7XHJcblx0XHRcdFx0XHRsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZmV0Y2hEYXRhKGxvY2F0aW9uKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZldGNoRGF0YShsb2NhdGlvbil7XHJcblx0XHRcclxuXHRcdHRoaXMubWVzc2FnZU9uZS50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcclxuXHRcdHRoaXMubWVzc2FnZVR3by50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuXHRcdGNvbnN0IGFkZHJlc3MgPSBgJHtsb2NhdGlvbi5sb25naXR1ZGUudG9TdHJpbmcoKX0sJHtsb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpfWA7XHJcblx0XHRcclxuXHRcdGNvbnN0IHVybCA9ICcvd2VhdGhlcj9hZGRyZXNzPScgKyBhZGRyZXNzICsgXCImY3Jvb2Q9dHJ1ZVwiO1xyXG5cdFxyXG5cdFx0ZmV0Y2godXJsKVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGlmKGRhdGEuZXJyb3IpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlT25lLnRleHRDb250ZW50ID0gZGF0YS5lcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBNYXAgc2V0dGluZ3NcclxuXHRcdFx0Y29uc3QgbG9uZ2l0dWRlID0gZGF0YS5sb25naXR1ZGU7XHJcblx0XHRcdGNvbnN0IGxhdGl0dWRlID0gZGF0YS5sYXRpdHVkZTtcclxuXHRcdFx0bWFwLmVhc2VUbyh7Y2VudGVyOiBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIHpvb206OSwgZHVyYXRpb246IDQwMDB9KTtcclxuXHRcdFx0bWFya2VyLnNldExuZ0xhdChbbG9uZ2l0dWRlLGxhdGl0dWRlXSk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaC52YWx1ZSA9IGRhdGEubG9jYXRpb247XHJcblx0XHRcdHRoaXMubWVzc2FnZU9uZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb247XHJcblx0XHRcdHRoaXMubWVzc2FnZVR3by50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3Q7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2YXRpbmcgcG9zIGJ1dHRvblxyXG5cdFx0XHR0aGlzLnNlbmRMb2NhdGlvbkJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHR9KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHttYXJrZXIsbWFwfSBmcm9tIFwiLi9tYXBcIjtcclxuaW1wb3J0IHtTZW5kTXlQb3N9IGZyb20gXCIuL2N1cnJlbnRQb3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBqYXZhc2NyaXB0IGZpbGUgaXMgbG9hZGVkLicpO1xyXG5cclxuY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3NGb3JtXCIpO1xyXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmNvbnN0IG1lc3NhZ2VPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21zZy0xXCIpO1xyXG5jb25zdCBtZXNzYWdlVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtc2ctMlwiKTtcclxuXHJcblxyXG5uZXcgU2VuZE15UG9zKCk7XHJcblxyXG5hZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRjb25zdCBhZGRyZXNzID0gc2VhcmNoLnZhbHVlO1xyXG5cdFxyXG5cdFxyXG5cdG1lc3NhZ2VPbmUudGV4dENvbnRlbnQgPSAnTG9hZGluZy4uLic7XHJcblx0bWVzc2FnZVR3by50ZXh0Q29udGVudCA9ICcnO1xyXG5cdFxyXG5cdGNvbnN0IHVybCA9ICcvd2VhdGhlcj9hZGRyZXNzPScgKyBhZGRyZXNzICsgXCImY3Jvb2Q9ZmFsc2VcIjtcclxuXHJcblx0ZmV0Y2godXJsKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHR9KVxyXG5cdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0aWYoZGF0YS5lcnJvcilcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIG1lc3NhZ2VPbmUudGV4dENvbnRlbnQgPSBkYXRhLmVycm9yO1xyXG5cdFx0fVxyXG5cdFx0Ly8gTWFwIHNldHRpbmdzXHJcblx0XHRjb25zdCBsb25naXR1ZGUgPSBkYXRhLmxvbmdpdHVkZTtcclxuXHRcdGNvbnN0IGxhdGl0dWRlID0gZGF0YS5sYXRpdHVkZTtcclxuXHRcdG1hcC5lYXNlVG8oe2NlbnRlcjogW2xvbmdpdHVkZSwgbGF0aXR1ZGVdLCB6b29tOjksIGR1cmF0aW9uOiA0MDAwfSk7XHJcblx0XHRtYXJrZXIuc2V0TG5nTGF0KFtsb25naXR1ZGUsbGF0aXR1ZGVdKTtcclxuXHRcdFxyXG5cdFx0bWVzc2FnZU9uZS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb247XHJcblx0XHRtZXNzYWdlVHdvLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdDtcclxuXHR9KVxyXG5cdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHR9KTtcclxuXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///388\n")}},__webpack_exports__={};__webpack_modules__[388]()})();
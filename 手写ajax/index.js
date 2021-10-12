function Ajax(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if(xhr.status === 200 || xhr.status === 304) {
        alert(xhr.responseText)
      }
    }
  }
  xhr.send(null)
}
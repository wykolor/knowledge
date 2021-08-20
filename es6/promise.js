{
  let ajax = function(callback) {
      console.log('执行1')
      setTimeout(callback, 1000);
  }
  ajax(function() {
      console.log('callback 1')
  })
}

{
  let ajax = function() {
      console.log('执行2');
      return new Promise(function(resolve,reject) {
          setTimeout(() => {
              resolve();
          }, 1000);
      })
  }
  ajax().then(function() {
      console.log('callback 2');
  })
}

{
  let ajax = function(num) {
      console.log('执行3');
      return new Promise(function(resolve,reject) {
          if(num > 5) {
              resolve(num);
          } else {
              reject(new Error('出错啦'));
          }
      })
  }

  ajax(3).then(response => {
      console.log('callback 3', response)
  }).catch(error => {
      console.log(error)
  })

}

{
  function loadImage(url) {
      return new Promise((resolve, reject) => {
          const img = document.createElement('img');
          img.src = url;
          img.onload = function() {
              resolve(img);
          }
          img.onerror = function() {
              reject(new Error(`Can Not loaded Image ${url}`));
          }
      })
  }

  function showImage(imgs) {
      imgs.forEach(img => {
          document.body.appendChild(img);
      });
  }

  // 当所有图片都加载完成之后才进行显示
  Promise.all([
      loadImage('http://'),
      loadImage('http://'),
      loadImage('http://')
  ]).then(showImage);
}

{
  function loadImage(url) {
      return new Promise((resolve, reject) => {
          const img = document.createElement('img');
          img.src = url;
          img.onload = function() {
              resolve(img);
          }
          img.onerror = function() {
              reject(new Error(`Can Not loaded Image ${url}`));
          }
      })
  }

  function showImage(img) {
      document.appendChild(img);
  }

  // 当有一个请求返回就显示图片，其他的就终止处理
  Promise.race([
      loadImage('http://'),
      loadImage('http://'),
      loadImage('http://')
  ]).then(showImage);
}

{
  const readFile = function() {
      return new Promise(function(resolve, reject){
        console.log('promise')
        setTimeout(() => {
          reject()
        }, 1000);
      })
    }
    const promise = readFile()
    promise.then(res => {
      console.log('res', res)
      promise.then(res => {
        console.log('再次执行', res)
      })
    }).catch(err => {
      console.log('err', err)
    })
    promise.then(res => {
      console.log('多次监听', res)
    })
    let funcs = []
    for (var index = 0; index < 10; index++) {
      function all(i) {
        console.log(i)
      }
      all(index)
    }
}
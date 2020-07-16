let createMap = {
    map: null,
    zoom: 12,
    body : document.body,
    position : {
        TOPLEFT: T_ANCHOR_TOP_LEFT,
        TOPRIGHT: T_ANCHOR_TOP_RIGHT,
        BOTTOMLEFT: T_ANCHOR_BOTTOM_LEFT,
        BOTTOMRIGHT: T_ANCHOR_BOTTOM_RIGHT
    },
    onLoad() {
        // 创建地图实例
        this.map = new T.Map('map', {
            projection: 'EPSG:4326'
        });
        //设置显示地图的中心点和级别
        this.map.centerAndZoom(new T.LngLat(116.40969, 38.89945), this.zoom);
        // 禁止鼠标双击放大地图
        this.map.disableDoubleClickZoom();
        // 获取当前位置将地图移到当前位置的地方
        this.getLocation();
        // 地图添加控件
        this.addControl();
    },
    getLocation() {
        const that = this;
        // 创建当前定位的实例
        var lo = new T.Geolocation();
        fn = function (e) {
            if (this.getStatus() == 0){
                // 重新设置地图的中心点和级别
                that.map.centerAndZoom(e.lnglat, 15);
                // 创建标注对象
                var marker = new T.Marker(e.lnglat);
                // 向地图上面添加标注
                that.map.addOverLay(marker);
            }
            if(this.getStatus() == 1){
                that.map.centerAndZoom(e.lnglat, e.level)
                var marker = new T.Marker(e.lnglat);
                that.map.addOverLay(marker);
            }
        }
        lo.getCurrentPosition(fn);
    },
    addControl() {
        const that = this;
        // 创建地图缩放控件实例
        const zoomControl = new T.Control.Zoom({ position: this.position['TOPLEFT']});
        // 创建地图比列尺控件实例
        const scaleControl = new T.Control.Scale();
        // 创建鹰眼控件
        const overviewControl = new T.Control.OverviewMap({
            isOpen: true, // 闭合控件 默认false
            size: new T.Point(150, 150)
        });
        // 创建地图类型控件实例
        const mapTypeControl = new T.Control.MapType();
        // 自定义地图控件
        const customControl = new T.Control();
        customControl.onAdd = function(map) {
            const container = document.createElement('div');
            const ziClassName = 'btn btn-primary mx-1';
            const zoClassName = 'btn btn-info mx-1';
            this.zoomInButton = that.createButton('放大', '放大', ziClassName, container);
            this.zoomOutButton = that.createButton('缩小', '缩小', zoClassName, container);
            this.zoomInButton.onclick = that.zoomIn.bind(that);
            this.zoomOutButton.onclick = that.zoomOut.bind(that);
            return container;
        }
        // 移除控件时要释放
        customControl.onRemove = function(map) {
            delete this.zoomInButton;
            delete this.zoomOutButton;
        }

        // 创建地图工具集合控件
        // 向地图添加控件
        this.map.addControl(zoomControl);
        this.map.addControl(scaleControl);
        this.map.addControl(overviewControl);
        this.map.addControl(mapTypeControl);
        this.map.addControl(customControl);
    },
    createButton(html, title, className, container, cssText) {
        const link = document.createElement('button');
        if(container) {
            container.appendChild(link);
        }
        link.innerHTML = html;
        link.title = title;
        link.style.cssText = cssText;
        link.className = className
        return link;
    },
    zoomIn() {
        this.map.zoomIn();
    },
    zoomOut() {
        this.map.zoomOut()
    }
}
createMap.body.onLoad = createMap.onLoad();

// var map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([37.41, 8.82]),
//       zoom: 4
//     })
//   });

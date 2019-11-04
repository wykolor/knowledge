let pcaArr = [
  {
    name: "北京",
    sub: [
      { name: "请选择", sub: [] },
      {
        name: "北京1",
        sub: [
          { name: "请选择", sub: [] },
          {
            name: "北京11"
          },
          {
            name: "北京12"
          },
          {
            name: "北京13"
          }
        ]
      },
      {
        name: "北京2",
        sub: [
          { name: "请选择", sub: [] },
          {
            name: "北京21"
          },
          {
            name: "北京22"
          },
          {
            name: "北京23"
          },
          {
            name: "北京24"
          }
        ]
      }
    ]
  },
  {
    name: "四川",
    sub: [
      { name: "请选择", sub: [] },
      {
        name: "四川1",
        sub: [
          { name: "请选择", sub: [] },
          {
            name: "四川11"
          },
          {
            name: "四川12"
          },
          {
            name: "四川13"
          }
        ]
      },
      {
        name: "四川2",
        sub: [
          { name: "请选择", sub: [] },
          {
            name: "四川21"
          },
          {
            name: "四川22"
          },
          {
            name: "四川23"
          },
          {
            name: "四川24"
          }
        ]
      },
      {
        name: "四川3",
        sub: [
          { name: "请选择", sub: [] },
          {
            name: "四川31"
          },
          {
            name: "四川32"
          },
          {
            name: "四川33"
          },
          {
            name: "四川34"
          }
        ]
      }
    ]
  }
];
let vm = new Vue({
  el: "#app",
  data() {
    return {
      provinceArr: pcaArr, // 省份数据
      province: "北京", //选中的省份
      cityArr: [], // 市数据
      city: "", // 选中的市
      areaArr: [],
      areas: "" // 选中的区
    };
  },
  mounted() {
    this.updateCity();
    this.updateArea();
  },
  methods: {
    updateCity() {
      //   遍历省份数据
      this.provinceArr.forEach(item => {
        if (item.name == this.province) {
          this.cityArr = item.sub;
        }
        this.city = this.cityArr[1].name;
      });
    },
    updateArea() {
      //   遍历省份数据
      this.cityArr.forEach(item => {
        if (item.name == this.city) {
          this.areaArr = item.sub;
        }
        this.areaArr && this.areaArr.length
          ? (this.areas = this.areaArr[1].name)
          : (this.areas = "");
      });
    }
  }
});

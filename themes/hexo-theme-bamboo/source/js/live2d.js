<script>
    var jsonModel = [
  //  "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",// 初音
   // "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",// 萌娘
   "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",// 小可爱（女）
   // "https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json",// 小可爱（男）
   // "https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json",// 小帅哥
    ];
    L2Dwidget.init({ 
        "model": { 
            "jsonPath": jsonModel[Math.floor(Math.random()*(jsonModel.length-1))],
            "scale": 1 
        }, 
        "display": { 
            "position": "left", // 位置left、right
            "width": 280, // 宽度
            "height": 300, // 高度
            "hOffset": 10, // 横向边距
            "vOffset": 0 // 众向边距
        }, 
        "mobile": { 
            "show": true // 手机是否显示
        },
    });
</script>

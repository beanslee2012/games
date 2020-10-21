angular.module('splatApp').subs = function ($scope) {
  $scope.subs = [
    {
      name: "Splat Bomb",
      localizedName: {
        "ja_JP": "三角雷",
        "en_US": "Splat Bomb",
        "en_GB": "Splat Bomb",
        "es_ES": "Bomba básica",
        "es_MX": "Plasbomba",
        "fr_FR": "Bombe splash",
        "fr_CA": "Bombe splash",
        "de_DE": "Klecksbombe"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Splash.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Burst Bomb",
      localizedName: {
        "ja_JP": "水球",
        "en_US": "Burst Bomb",
        "en_GB": "Burst Bomb",
        "es_ES": "Bomba rápida",
        "es_MX": "Globo entintado",
        "fr_FR": "Bombe ballon",
        "fr_CA": "Bombe ballon",
        "de_DE": "Insta-Bombe"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Quick.png",
      cost: 40,
      inkSaver: "Low",
      damage: {
        "Direct": 60,
        "Near": 35,
        "Far": 25
      }
    },
    {
      name: "Suction Bomb",
      localizedName: {
        "ja_JP": "粘弹",
        "en_US": "Suction Bomb",
        "en_GB": "Suction Bomb",
        "es_ES": "Bomba ventosa",
        "es_MX": "Bomba pegajosa",
        "fr_FR": "Bombe gluante",
        "fr_CA": "Bombe gluante",
        "de_DE": "Haftbombe"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Suction.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Autobomb",
      localizedName: {
        "ja_JP": "机器人炸弹",
        "en_US": "Autobomb",
        "en_GB": "Autobomb",
        "es_ES": "Robobomba",
        "es_MX": "Robobomba",
        "fr_FR": "Bombe robot",
        "fr_CA": "Bombe robot",
        "de_DE": "Robo-Bombe"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Robo.png",
      cost: 70,
      inkSaver: "Low",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Curling Bomb",
      localizedName: {
        "ja_JP": "冰壶",
        "en_US": "Curling Bomb",
        "en_GB": "Curling Bomb",
        "es_ES": "Bomba deslizante",
        "es_MX": "Bomba deslizante",
        "fr_FR": "Bombe curling",
        "fr_CA": "Bombe curling",
        "de_DE": "Curling-Bombe"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Curling.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Ink Mine",
      localizedName: {
        "ja_JP": "地雷",
        "en_US": "Ink Mine",
        "en_GB": "Ink Mine",
        "es_ES": "Bomba Trampa",
        "es_MX": "Mina de tinta",
        "fr_FR": "Mine",
        "fr_CA": "Mine d'encre",
        "de_DE": "Tintenmine"
      },
      image: "../common/assets/img/subspe/Wsb_TimerTrap.png",
      cost: 60,
      inkSaver: "Normal",
      damage: {
        "Near": 35,
        "Far": 20
      }
    },
    {
      name: "Squid Beakon",
      localizedName: {
        "ja_JP": "跳点(放置后按X可以让自己或队友跳到指定位置)",
        "en_US": "Squid Beakon",
        "en_GB": "Squid Beakon",
        "es_ES": "Baliza transportadora",
        "es_MX": "Baliza",
        "fr_FR": "Balise de saut",
        "fr_CA": "Balise de saut",
        "de_DE": "Sprungboje"
      },
      image: "../common/assets/img/subspe/Wsb_Flag.png",
      cost: 75,
      inkSaver: "Normal"
    },
    {
      name: "Sprinkler",
      localizedName: {
        "ja_JP": "花洒",
        "en_US": "Sprinkler",
        "en_GB": "Sprinkler",
        "es_ES": "Aspersor",
        "es_MX": "Aspersor",
        "fr_FR": "Fontaine",
        "fr_CA": "Gicleur",
        "de_DE": "Sprinkler"
      },
      image: "../common/assets/img/subspe/Wsb_Sprinkler.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Toxic Mist",
      localizedName: {
        "ja_JP": "毒雾",
        "en_US": "Toxic Mist",
        "en_GB": "Toxic Mist",
        "es_ES": "Nebulizador",
        "es_MX": "Nebulizador",
        "fr_FR": "Brume toxique",
        "fr_CA": "Brume toxique",
        "de_DE": "Sepitox-Nebel"
      },
      image: "../common/assets/img/subspe/Wsb_PoisonFog.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Point Sensor",
      localizedName: {
        "ja_JP": "套环(让附近的隐游失效)",
        "en_US": "Point Sensor",
        "en_GB": "Point Sensor",
        "es_ES": "Rastreador",
        "es_MX": "Rastreador",
        "fr_FR": "Détecteur",
        "fr_CA": "Détecteur",
        "de_DE": "Detektor"
      },
      image: "../common/assets/img/subspe/Wsb_PointSensor.png",
      cost: 60,
      inkSaver: "Normal"
    },
    {
      name: "Splash Wall",
      localizedName: {
        "ja_JP": "雨帘",
        "en_US": "Splash Wall",
        "en_GB": "Splash Wall",
        "es_ES": "Telón de Tinta",
        "es_MX": "Barricada",
        "fr_FR": "Mur d'encre",
        "fr_CA": "Mur d'encre",
        "de_DE": "Tintenwall"
      },
      image: "../common/assets/img/subspe/Wsb_Shield.png",
      cost: 60,
      inkSaver: "Normal"
    }
  ]

  $scope.getSubByName = function(name) {
    return $scope.subs.filter(function(sub) {
      return sub.name == name;
    })[0]
  }

  $scope.getDamagingSubs = function() {
    return $scope.subs.filter(function(sub) {
      return sub.hasOwnProperty("damage")
    })
  }
}

/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Alpha", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "temp_polo",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "?",
        src: "v1-b1-choir-hb.mp4",
        code: "1,2,3,4,5",
        sound: "bonus-choir",
        aspire: "aspire"
    }, {
        name: "?",
        src: "v1-b2-sailor-hb.mp4",
        code: "6,7,8,9,10",
        sound: "bonus-sailor",
        aspire: "aspire-sailor"
    }, {
        name: "?",
        src: "v1-b3-santa-hb.mp4",
        code: "11,12,13,14,15",
        sound: "bonus-santa",
        aspire: "aspire-santa"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var container = new inversify_1.Container();
var PopMusic = /** @class */ (function () {
    function PopMusic() {
    }
    PopMusic.prototype.getName = function () {
        return '流行音乐';
    };
    PopMusic = __decorate([
        inversify_1.injectable()
    ], PopMusic);
    return PopMusic;
}());
container.bind('request1').to(PopMusic);
var ClassicalMusic = /** @class */ (function () {
    function ClassicalMusic() {
    }
    ClassicalMusic.prototype.getName = function () {
        return '古典音乐';
    };
    ClassicalMusic = __decorate([
        inversify_1.injectable()
    ], ClassicalMusic);
    return ClassicalMusic;
}());
container.bind('request2').to(ClassicalMusic);
var Music = /** @class */ (function () {
    function Music(popMusic, classicalMusic) {
        this.pm = popMusic;
        this.cm = classicalMusic;
    }
    Music.prototype.getName = function () {
        var result = this.pm.getName() + this.cm.getName();
        return result;
    };
    Music = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('request1')),
        __param(1, inversify_1.inject('request2')),
        __metadata("design:paramtypes", [Object, Object])
    ], Music);
    return Music;
}());
container.bind('Plan').to(Music);
var music = container.get('Plan');
console.log(music.getName()); // 流行音乐古典音乐

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanNumber_1 = require("../src/romans/romanNumber");
describe("test add function", () => {
    it("should sum all roman characters if there's not value less than the next character", () => {
        expect(romanNumber_1.toDecimal("XXI")).toBe(21);
        expect(romanNumber_1.toDecimal("XVI")).toBe(16);
        expect(romanNumber_1.toDecimal("XIII")).toBe(13);
        expect(romanNumber_1.toDecimal("XI")).toBe(11);
    });
    it("should substract number if I before V", () => {
        let romanTest = "XIV";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(14);
    });
    it("should substract number if I before X", () => {
        let romanTest = "XIX";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(19);
    });
    it("should substract number if X before L", () => {
        let romanTest = "CXL";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(140);
    });
    it("should substract number if X before C", () => {
        let romanTest = "CXC";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(190);
    });
    it("should substract number if C before M", () => {
        let romanTest = "CMXC";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(990);
    });
    it("should substract number if C before D", () => {
        let romanTest = "CDXIV";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(414);
    });
    it("should substract number if X before C", () => {
        let romanTest = "CDXIV";
        expect(romanNumber_1.toDecimal(romanTest)).toBe(414);
    });
    it("should return -1 if V, L, D are repeteaded", () => {
        let romanTestV = "XVV";
        let romanTestL = "CLL";
        let romanTestD = "DDX";
        expect(romanNumber_1.toDecimal(romanTestV)).toEqual(-1);
        expect(romanNumber_1.toDecimal(romanTestL)).toEqual(-1);
        expect(romanNumber_1.toDecimal(romanTestD)).toEqual(-1);
    });
    it("should return -1 if a character is repeated more than 3 times", () => {
        let romanTestI = "IIII";
        let romanTestX = "XXXX";
        let romanTestV = "VIIII";
        expect(romanNumber_1.toDecimal(romanTestI)).toEqual(-1);
        expect(romanNumber_1.toDecimal(romanTestX)).toEqual(-1);
        expect(romanNumber_1.toDecimal(romanTestV)).toEqual(-1);
    });
    it("should return -1 if the string doesn't contain a value roman character", () => {
        let romanTest = "test";
        expect(romanNumber_1.toDecimal(romanTest)).toEqual(-1);
    });
    it("should return -1 if the roman number is lowercase", () => {
        let romanTest = "vxi";
        expect(romanNumber_1.toDecimal(romanTest)).toEqual(-1);
    });
});

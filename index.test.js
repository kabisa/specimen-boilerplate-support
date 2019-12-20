const path = require("path");
const lib = require("./index");
const fontData = require("./fontData");
const codeGeneration = require("./codeGeneration");

const fixtureFontPath = path.resolve(
  __dirname,
  "test",
  "__fixtures__",
  "Fraunces-VF.ttf"
);

describe("parseFontFile", () => {
  test("delegates to fontData.parseFontFile", async () => {
    const libResult = await lib.parseFontFile(fixtureFontPath);
    const expectedResult = await fontData.parseFontFile(fixtureFontPath);

    expect(libResult).toEqual(expectedResult);
  });
});

describe("buildStylesheet", () => {
  test("delegates to codeGeneration.buildStylesheet and stringifies", async () => {
    const fontData = await lib.parseFontFile(fixtureFontPath);

    const stylesheet = lib.buildStylesheet(fontData);
    expect(typeof stylesheet).toEqual("string");
  });
});

describe("buildFontJs", () => {
  test("delegates to codeGeneration.buildFontJs", async () => {
    const fontData = await lib.parseFontFile(fixtureFontPath);

    expect(lib.buildFontJs(fontData)).toEqual(
      codeGeneration.buildFontJs(fontData)
    );
  });
});

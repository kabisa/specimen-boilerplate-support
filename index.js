const fontData = require("./fontData");
const codeGeneration = require("./codeGeneration");

/**
 * Generate a stylesheet for the passed font.
 *
 * Includes:
 * - @font-face
 * - CSS properties for each axis of the font
 * - A body rule that applies the given font
 * - Font varation settings that use the generated properties
 * @param {fontData} fontData
 * @param {string} relativeFontPath
 */
const buildStylesheet = (fontData, relativeFontPath) => {
  const stylesheet = codeGeneration.buildStylesheet(fontData, relativeFontPath);
  return stylesheet.toString(codeGeneration.PrettyStringifier.new());
};

/**
 * @param {string} path
 * @returns {Promise<fontData>} fontData
 */
const parseFontFile = async path => {
  return fontData.parseFontFile(path);
};

module.exports = {
  parseFontFile,
  buildStylesheet,
  getSelector: codeGeneration.getSelector,
  suggestFontStyle: fontData.suggestFontStyle
};

const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
const themeArg = args.find(arg => arg.startsWith('--filter='));
const colorArg = args.find(arg => arg.startsWith('color='));
const theme = themeArg ? themeArg.split('=')[1] : null;
const color = colorArg ? colorArg.split('=')[1] : null;
if (!theme || !color) {
  console.error("Please specify the theme and color. Example: --filter=theme-1 color=green");
  process.exit(1);
}

const globalsCssFilePath = path.join(__dirname, `./apps/${theme}/app/globals.css`);
const colorFilePath = path.join(__dirname, `./colors/${color}.css`);
if (!fs.existsSync(colorFilePath)) {
  console.error(`The color file does not exist: ${colorFilePath}`);
  process.exit(1);
}
const colorCssContent = fs.readFileSync(colorFilePath, 'utf8');
let globalsCssContent = fs.readFileSync(globalsCssFilePath, 'utf8');
const replaceRootVariables = (cssContent, newVars) => {
  const rootRegex = /:root\s*\{[^}]*\}/g;
  cssContent = cssContent.replace(rootRegex, '');
  return `${newVars}\n${cssContent}`;
};
globalsCssContent = replaceRootVariables(globalsCssContent, colorCssContent);
fs.writeFileSync(globalsCssFilePath, globalsCssContent);
console.log(`Applied ${color} version for ${theme}`);

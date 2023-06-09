const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  installDependencies() {
    this.yarnInstall(
      [
        'prettier',
        'eslint',
        'eslint-config-prettier',
        'eslint-config-standard',
        'eslint-plugin-import',
        'eslint-plugin-node',
        'eslint-plugin-prettier',
        'eslint-plugin-promise',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks'
      ],
      { 'save-dev': true }
    );
  }

  eslint() {
    this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));
  }

  env() {
    this.fs.copy(this.templatePath('.env'), this.destinationPath('.env'));
  }

  vscode() {
    this.fs.copy(this.templatePath('.vscode'), this.destinationPath('.vscode'));
  }

  eslintIgnore() {
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('.eslintignore'));
  }

  editorconfig() {
    this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
  }

  prettier() {
    this.fs.copy(this.templatePath('.prettierrc'), this.destinationPath('.prettierrc'));
  }
};

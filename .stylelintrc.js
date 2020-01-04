module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order'
  ],
  rules: {
    'plugin/rational-order': [true, {
      'empty-line-between-groups': true
    } ],
    'selector-type-no-unknown': [true, {
      ignoreTypes: [ /\^/ ]
    } ]
  }
};
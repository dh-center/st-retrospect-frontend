module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order'
  ],
  rules: {
    'selector-type-no-unknown': [true, {
      ignoreTypes: [ /\^/ ]
    } ],
    'order/order': [
      'at-rules',
      'declarations',
      'custom-properties',
      'rules'
    ],
    'plugin/rational-order': [true, {
      'empty-line-between-groups': true
    } ]
  }
};

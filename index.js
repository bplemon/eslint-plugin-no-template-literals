// custom-eslint/index.js
module.exports = {
  rules: {
    'no-template-literals-brian': {
      create(context) {
        return {
          TemplateLiteral(node) {
            context.report(node, 'Do not use template literals');
          }
        };
      }
    }
  }
};

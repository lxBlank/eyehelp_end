// 虚拟键盘输入公用方法
export const keyboardInputMixin = {
    methods: {
      // 对部分表单字段进行校验
      validataForm(field, formname = 'form') {
        this.$refs[formname].validateField(field);
      },
      // 虚拟键盘输入
      formItemChange(val, formItemField) {
        this.form[formItemField] = val;
        this.validataForm(formItemField);
      },
    },
  };
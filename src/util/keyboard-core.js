/**
 * 点击除输入框及虚拟键盘外元素时，隐藏虚拟键盘
 * @param  {e} 点击的元素
 */
 export const judgeCloseKeyboard = e => {
    e.stopPropagation(); // 阻止事件冒泡
    let arr = document.querySelectorAll('.input-keyboard'); // 设置目标区域
    let flag = false;
    const excludeClassName = [
      'input-keyboard', // 带虚拟键盘的输入框
      'el-input__inner', // 输入框
      'el-input__clear', // 输入框-清除图标
      'el-textarea__inner', // 输入框-textarea
      'hg-candidate-box', // 中文选择框
      'hg-candidate-box-prev', // 中文选择框-上一页
      'hg-candidate-box-list', // 中文选择框-内容列表
      'hg-candidate-box-list-item', // 中文选择框-内容选项
      'hg-candidate-box-next', // 中文选择框-下一页
      'hg-theme-default', // 虚拟键盘
      'hg-rows', // 虚拟键盘-内容
      'hg-row', // 虚拟键盘-行
      'hg-button' // 虚拟键盘-按钮
    ];
    let classList = e.target.classList.value.split(' ');
    let concatArr = excludeClassName.concat(classList);
  
    arr.forEach(ele => {
      // 判断点击事件发生在区域外的条件是：1. 点击事件的对象不是目标区域本身 2. 事件对象同时也不是目标区域的子元素
      if (
        // 判断当前点击的元素类名，是否包含排除元素
        new Set(concatArr).size === concatArr.length &&
        !ele.contains(e.target)
      ) {
        flag = true;
      }
    });
    flag && hideKeyboard();
  };
  
  /**
   * 隐藏虚拟键盘
   */
  export const hideKeyboard = () => {
    let arr = document.querySelectorAll('.hg-theme-default');
    arr.forEach(ele => {
      ele.style.visibility = 'hidden';
    });
  };
<script>
import { h, resolveComponent } from 'vue';

export default {
  name: 'CustomFormItem',

  props: {
    formItemType: {
      type: String,
      default: 'Input'
    },

    formItemLabel: {
      type: String,
      default: '表单字段'
    }
  },

  render() {
    const ElFormItem = resolveComponent('ElFormItem');
    const ElInput = resolveComponent('ElInput');
    const ElSelect = resolveComponent('ElSelect');

    const componentMapping = {
      'Input': ElInput,
      'Select': ElSelect
    };

    return h(
        ElFormItem,
        {
          label: this.formItemLabel
        },
        [
            h(componentMapping[this.formItemType], {})
        ]
    );
  }
};
</script>

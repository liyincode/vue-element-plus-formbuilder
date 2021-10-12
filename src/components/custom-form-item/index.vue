<script>
import { h, resolveComponent } from "vue";

export default {
  name: "CustomFormItem",

  render() {
    const ElFormItem = resolveComponent('ElFormItem');
    const ElInput = resolveComponent('ElInput');

    return h(
        ElFormItem,
        {
          label: '活动名称'
        },
        [
            h(ElInput, {})
        ]
    )
  }
}
</script>

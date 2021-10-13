<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="never">
        <el-form label-width="100px">
          <draggable
            :list="templateList"
            item-key="type"
            :group="{ name: 'group', pull: 'clone', put: false }"
          >
            <template #item="{ element }">
              <custom-form-item
                :form-item-label="element.label"
                :form-item-type="element.type"
              />
            </template>
          </draggable>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="never">
        <el-form label-width="100px">
          <draggable
            :list="resultList"
            item-key="type"
            :group="{ name: 'group' }"
          >
            <template #item="{ element }">
              <custom-form-item
                :form-item-label="element.label"
                :form-item-type="element.type"
              />
            </template>
          </draggable>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import draggable from 'vuedraggable';
import CustomFormItem from './components/custom-form-item/index.vue';

export default {
  name: 'Index',

  components: {
    CustomFormItem,
    draggable
  },

  data() {
    return {
      templateList: [
        {
          type: 'Input',
          label: '输入框名称'
        },
        {
          type: 'Select',
          label: '下拉框名称'
        }
      ],
      resultList: []
    };
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

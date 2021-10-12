<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="never">
        <el-form
          :model="form"
          label-width="80px"
        >
          <draggable
            :list="list"
            :disabled="!enabled"
            item-key="name"
            class="list-group"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
          >
            <template #item="{ element }">
              <custom-form-item />
            </template>
          </draggable>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="never">
        从不显示
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import draggable from "vuedraggable";
import CustomFormItem from "./components/custom-form-item/index.vue";

let id = 1;
export default {
  name: "Index",
  display: "Simple",
  order: 0,
  components: {
    CustomFormItem,
    draggable
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 }
      ],
      dragging: false,

      form: {}
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan " + id, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
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

<template>
    <div>
        <h2>{{title}}</h2>
        <el-form>
            <div v-for="(item,index) in items" :key="index" class="container">
                <el-form-item :label="labels[index]" v-for="(key,index) in temp" :key="index">
                    <el-input v-model="item[key]"></el-input>
                </el-form-item>
                <i class="el-icon-close" @click="remove(index)"></i>
            </div>
            <el-button type="primary" @click="add">添加</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    props: ['items', 'labels', 'title'],
    computed: {
        // keys: function() {
        //     return Object.keys(this.items[0])
        // },
        // copyItems:function(){
        //     return this.items.slice(0)
        // }
    },
    created() {
        this.temp = Object.keys(this.items[0])
    },
    // data: function() {
    //     return {
    //         copyItems: this.items.slice(0)//就像文档中所说的一样，这时的items是个数组，所以此时修改workHistories这时父组件的items也会被修改
    //     }
    // },
    methods: {
        add: function() {
            let tempObject = {}
            this.temp.map((key) => {
                tempObject[key] = ''
            })
            this.items.push(tempObject)
        },
        remove: function(index) {
            this.items.splice(index, 1)
        }
    }
}
</script>
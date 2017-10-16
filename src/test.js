var a = [{
    foo:'foo'
}]
var b = a.slice()
a.splice(0,1)
console.log(b)


 <template>
    <div>
        <h2>{{title}}</h2>
        <el-form>
            <div v-for="(item,index) in items" :key="index" class="container">
                <el-form-item :label="labels[index]" v-for="(key,index) in keys" :key="index">
                    <el-input v-model="item[key]"></el-input>
                </el-form-item>
                <!-- <el-form-item label="工作内容">
                    <el-input v-model="item.content"></el-input>
                </el-form-item> -->
                <i class="el-icon-close" @click="remove(index)"></i>
            </div>
            <el-button type="primary" @click="add">添加</el-button>
        </el-form>
    </div>
</template>
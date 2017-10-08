<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="(item,index) in items" :class="{active:currentTab === index }" @click="currentTab = index" :key="index">
                    <svg class="icon">
                        <use :xlink:href="item"></use>
                    </svg>
                </li>
                <!-- <li :class="{active:currentTab === 0 }" @click="currentTab = 0">
                                <svg class="icon">
                                    <use xlink:href="#icon-card"></use>
                                </svg>
                            </li>
                            <li :class="{active:currentTab === 1}" @click="currentTab = 1">
                                <svg class="icon">
                                    <use xlink:href="#icon-handbag"></use>
                                </svg>
                            </li>
                            <li :class="{active:currentTab === 2}" @click="currentTab = 2">
                                <svg class="icon">
                                    <use xlink:href="#icon-book"></use>
                                </svg>
                            </li>
                            <li :class="{active:currentTab === 3}" @click="currentTab = 3">
                                <svg class="icon">
                                    <use xlink:href="#icon-heart"></use>
                                </svg>
                            </li>
                            <li :class="{active:currentTab === 4}" @click="currentTab = 4">
                                <svg class="icon">
                                    <use xlink:href="#icon-cup"></use>
                                </svg>
                            </li>
                            <li :class="{active:currentTab === 5}" @click="currentTab = 5">
                                <svg class="icon">
                                    <use xlink:href="#icon-phone"></use>
                                </svg>
                            </li> -->
            </ol>
        </nav>
        <ol class="panes">
            <!-- li{tab $} *6 -->
            <li v-if="currentTab === 0">
                <career-editor :profile = "profile"></career-editor>
            </li>
            <li v-if="currentTab === 1" >
                <h2>工作经历</h2>
                <el-form>
                    <div v-for="(career,index) in careers" :key="index" class="container">
                        <el-form-item label="公司">
                            <el-input v-model="career.company"></el-input>
                        </el-form-item>
                        <el-form-item label="工作内容">
                            <el-input v-model="career.content"></el-input>
                        </el-form-item>
                        <i class="el-icon-close" @click="removeCareer(index)"></i>
                    </div>
                        <el-button type="primary" @click="addCareer">添加</el-button>
                </el-form>

            </li>
        </ol>
    </div>
</template>
<script>
import CareerEditor from './CareerEditor'
// export default {
//   data:function(){
//       return{
//         currentTab:0
//       }
//   }
// }
export default {
    components:{CareerEditor},
    data: function() {
        return {
            currentTab: 0,
            items: ["#icon-card", "#icon-handbag", "#icon-book", "#icon-heart", "#icon-cup", "#icon-phone"],
            contents: ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5", "Tab6"],
            profile: {
                name: '',
                city: '',
                birth: ''
            },
            careers: [
                { company: '', content: '' }
            ]
        }
    },
    methods:{
        addCareer:function(){
            this.careers.push({
                company:'',content:''
            })
        },
        removeCareer:function(index){
            this.careers.splice(index,1)
        }
    },
    created() {
        // console.log(this.profile)
        // setTimeout(() => {
        //     console.log(this.profile)
        // }, 5000);
    }
}
</script>


<style lang="scss">
#editor {
    /* border: 1px solid red; */
    min-height: 100px;
    display: flex;
    div.el-form-item{
        margin-bottom: 10px;
        margin-top:10px;
    }
    >nav {
        background: rgba(0, 0, 0, 1);
        width: 80px;
        >ol>li {
            padding: 16px 0;
            text-align: center; //注意svg默认是inline-block
            >.icon {
                width: 24px;
                height: 24px;
                fill: white
            }
            &.active {
                background: white;
                >.icon {
                    fill: black;
                }
            }
        }
    }
    >.panes {
        flex: 1;
        .container{
            position: relative;
            margin-top: 10px;
            .el-icon-close{
                position: absolute;
                right: 0;
                top: 10px;
                color:#ddd
            }
        }
        >li {
            height: 100%;
            overflow: auto;
            padding: 32px;
            input.el-input__inner {
                width: 240px
            }
        }
    }
     
}
</style>
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
                <profile-editor :profile="resume.profile"></profile-editor>
            </li>
            <li v-show="currentTab === 1">
                <common-editor key="2" :items="resume.careers" :labels="resume.labelsForCareers" :title="resume.titleForCareers"></common-editor>
            </li>
            <li v-show="currentTab === 2">
                <common-editor key="3" :items="resume.educationHistory" :labels="resume.labelsForEducationHistory" :title="resume.titleForEducationHistory"></common-editor>
            </li>
            <li v-show="currentTab === 3">
                <common-editor key="4" :items="resume.projects" :labels="resume.labelsForProjects" :title="resume.titleForProjects"></common-editor>
            </li>
            <li v-show="currentTab === 4">
                <common-editor key="5" :items="resume.awards" :labels="resume.labelsForAwards" :title="resume.titleForAwards"></common-editor>
            </li>
            <li v-if="currentTab === 5">
                <h2> 个人信息</h2>
                <el-form label-position="top" label-width="80px">
                    <el-form-item label="QQ">
                        <el-input v-model="resume.contacts.qq"></el-input>
                    </el-form-item>
                    <el-form-item label="WeChat">
                        <el-input v-model="resume.contacts.wx"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="resume.contacts.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone">
                        <el-input v-model="resume.contacts.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="Github">
                        <el-input v-model="resume.contacts.github"></el-input>
                    </el-form-item>
                </el-form>
            </li>
        </ol>
    </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import CommonEditor from './CommonEditor'
// import CareerEditor from './CareerEditor'
// import EducationHistory from './EducationHistory'
// export default {
//   data:function(){
//       return{
//         currentTab:0
//       }
//   }
// }
export default {
    props: ['resume'],
    // components: { ProfileEditor, CareerEditor,EducationHistory},
    components: { ProfileEditor, CommonEditor },
    data: function() {
        return {
            currentTab: 0,
            items: ["#icon-card", "#icon-handbag", "#icon-book", "#icon-heart", "#icon-cup", "#icon-phone"],
            contents: ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5", "Tab6"],
            //         profile: {
            //             name: '',
            //             city: '',
            //             birth: ''
            //         },
            //         careers: [
            //             { company: '', content: '' }
            //         ],
            //         labelsForCareers: [
            //             '公司', '工作内容'
            //         ],
            //         titleForCareers: '工作经历',
            //         educationHistory: [
            //             { school: '', duration: '', degree: '' }
            //         ],
            //         labelsForEducationHistory: [
            //             '学校', '时长', '学位'
            //         ],
            //         titleForEducationHistory: '教育背景',
            //         projects: [
            //             { project: '', content: '' }
            //         ],
            //         labelsForProjects: [
            //             '项目名称', '工作内容'
            //         ],
            //         titleForProjects: '项目经历',
            //         awards: [{
            //             name: ''
            //         }],
            //         labelsForAwards: ['获奖名称'],
            //         titleForAwards: '所获奖项',
            //         contacts:{
            //             qq:'',
            //             wx:'',
            //             phone:'',
            //             github:'',
            //             email:''
            //         }
            //     }
            // },
            methods: {

            },
            created() {
                // console.log(this.profile)
                // setTimeout(() => {
                //     console.log(this.profile)
                // }, 5000);事实证明，这个this.profile似乎类似于thunk函数，它不会立即得到，而是在真正执行的时候才获得最新的数据

                // this.$nextTick(()=>{
                //         console.log(this.careers)
                // })事实证明$nextTick这个函数只会执行一次，不是说一有数据更新就会执行一次的
                // setTimeout(() => {
                //     console.log(this.careers)
                // }, 5000);
            }
        }
    }
}
</script>


<style lang="scss">
#editor {
    /* border: 1px solid red; */
    min-height: 100px;
    display: flex;
    div.el-form-item {
        margin-bottom: 10px;
        margin-top: 10px;
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
        .container {
            position: relative;
            margin-top: 10px;
            .el-icon-close {
                position: absolute;
                right: 0;
                top: 10px;
                color: #ddd
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
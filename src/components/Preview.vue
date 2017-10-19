<template>
    <div id="preview">
        <h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生日期'}}</p>
        <section v-if="projectsIsNotEmpty">
            <h2>项目</h2>
            <ul>
                <li v-for="(project,index) in filterArray(resume.projects)" :key="index">
                    {{project.project}} {{project.content}}
                </li>
            </ul>
        </section>
        <section v-if="filterArray(resume.careers).length > 0">
            <h2>工作经历</h2>
            <ul>
                <li v-for="(work,index) in filterArray(resume.careers)" :key="index">
                    {{work.company}} {{work.content}}
                </li>
            </ul>
        </section>
    </div>
</template>





<script>
import Bus from '../assets/bus.js'
export default {
    props: ['resume'],
    computed: {
        projectsIsNotEmpty: function() {
            return this.filterArray(this.resume.projects).length > 0
        }
    },
    methods: {
        haveValue: function(obj) {
            for (let key in obj) {
                if (obj[key]) {
                    return true
                }
                return false
            }
        },
        filterArray: function(array) {
            return array.filter((ele) => {
                return this.haveValue(ele)
            })
        }
    },
    created:function(){
        // console.log(Bus)
        Bus.$on('update',(copyItems)=>{
            // console.log(copyItems)
            console.log(this)
        })
    }
}


</script>

<style scoped>
/* #preview {
    /* border: 1px solid yellow; 
    /* min-height: 100px; 
} */
</style>
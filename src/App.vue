<template>
    <div id="app" v-bind:class="{previewMode:isPreviewMode}">
        <topbar class="topbar" @previewButtonClicked="preview"></topbar>
        <main>
            <editor :resume="resume" class="editor" />
            <preview :resume="resume" class="preview" />
        </main>
        <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
    </div>
</template>


<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
    components: {
        Topbar,
        Editor,
        Preview

    },
    data: function() {
        return {
            isPreviewMode: false,
            resume: {
                profile: {
                    name: '',
                    city: '',
                    birth: ''
                },
                careers: [
                    { company: '', content: '' }
                ],
                labelsForCareers: [
                    '公司', '工作内容'
                ],
                titleForCareers: '工作经历',
                educationHistory: [
                    { school: '', duration: '', degree: '' }
                ],
                labelsForEducationHistory: [
                    '学校', '时长', '学位'
                ],
                titleForEducationHistory: '教育背景',
                projects: [
                    { project: '', content: '' }
                ],
                labelsForProjects: [
                    '项目名称', '具体描述'
                ],
                titleForProjects: '项目经历',
                awards: [{
                    name: ''
                }],
                labelsForAwards: ['获奖名称'],
                titleForAwards: '所获奖项',
                contacts: {
                    qq: '',
                    wx: '',
                    phone: '',
                    github: '',
                    email: ''
                }
            }
        }
    },
    methods: {
        preview() {
            this.isPreviewMode = true
        },
        exitPreview() {
            this.isPreviewMode = false
        }

    }
}

</script>

<style>
.icon {
    width: 100px;
    height: 100px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

html,
body,
#app {
    height: 100%;
    overflow: hidden
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* height: 100vh; 考虑到兼容性，如果这段不行的话使用上面的笨办法 */
    display: flex;
    flex-direction: column
}

.topbar {
    /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);  */
    /* background: red; */
    box-shadow: 0px 0px 3px hsla(0, 0%, 0%, 0.5);
    position: relative;
    z-index: 1;
}

main {
    /* background: green; */
    display: flex;
    flex: 1;
    background: #ddd
}

main .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 3px hsla(0, 0%, 0%, 0.5);
    overflow: hidden;
}

main .preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
}

.previewMode .topbar {
    display: none !important;
}

.previewMode .editor {
    display: none !important;
}

.previewMode .preview {
    margin: 32px auto 0;
    max-width: 800px;
    ;
}

#exitPreview {
    display: none;
}

.previewMode #exitPreview {
    display: inline-block;
    position: fixed;
    right: 16px;
    top: 16px;
}
</style>
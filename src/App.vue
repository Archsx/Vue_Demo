<template>
    <div id="app">
        <topbar class="topbar"></topbar>
        <main>
            <editor class="editor" />
            <preview class="preview" />
        </main>
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
</style>
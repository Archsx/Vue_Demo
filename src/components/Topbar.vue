<template>
    <div id="topbar">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <el-button type="primary">注册</el-button>
            <el-button>登录</el-button>
        </div>
    </div>
</template>

<style scoped>
#topbar {
    /* border: 1px solid green; */
    /* min-height: 100px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
}
.el-button--primary{
    background: green
}
</style>


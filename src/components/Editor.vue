<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="(item,index) in items" :class="{active:currentTab === index }" @click="currentTab = index" :key="index">
                    <svg class="icon">
                        <use :xlink:href= "item" ></use>
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
            <li v-for="(content,index) in contents" :key="index" v-if="currentTab === index" v-on:click="currentTab = index">{{content}}</li>
        </ol>
    </div>
</template>
<script>
// export default {
//   data:function(){
//       return{
//         currentTab:0
//       }
//   }
// }
export default {
  data:function(){
      return{
        currentTab:0,
        items:["#icon-card","#icon-handbag","#icon-book","#icon-heart","#icon-cup","#icon-phone"],
        contents:["Tab1","Tab2","Tab3","Tab4","Tab5","Tab6"]
      }
  }
}
</script>


<style lang="scss">
#editor {
    /* border: 1px solid red; */
    min-height: 100px;
    display: flex;
    >nav {
        background: rgba(0, 0, 0, 1);
        width: 80px;
        >ol>li {
            padding: 16px 0;
            text-align: center;//注意svg默认是inline-block
            >.icon {
                width: 24px;
                height: 24px;
                fill: white
            }
            &.active{
                background: white;
                > .icon{
                    fill: black;
                }
            }
        }
    }
}
</style>
<template>
    <div id="preview">
        <div class="personal">
          <div class="basicInfo">
            <h2>{{resume.profile.name || '请填写姓名'}}</h2>
            <p>
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-city"></use>
                </svg>{{resume.profile.city || '请填写城市'}}
            </p>
            <p>
                <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-calendar"></use>
                </svg>{{resume.profile.birth || '请填写出生日期'}}
            </p>
          </div>
          <div class="contactInfo">
            <ul>
              <li v-for="(way,index) in wayInContacts" :key="index" v-show="resume.contacts[way]">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="icons[index]"></use>
                </svg>
                <span>{{resume.contacts[way]}}</span>
              </li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="summary">
        <section v-if="filterArray(resume.educationHistory).length > 0" class="item">
            <h2>EDUCATION</h2>
            <ul>
                <li v-for="(item,index) in filterArray(resume.educationHistory)" :key="index">
                  <p>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-study"></use>
                    </svg><span style="font-weight:bold">{{item.school}}</span>&nbsp;&nbsp;&nbsp;{{item.speciality}}&nbsp;&nbsp;&nbsp;{{item.degree}}</p>
                </li>
            </ul>
            <hr>
        </section>
        <section v-if="filterArray(resume.careers).length > 0" class="item">
            <h2>EXPERIENCE</h2>
            <ul>
                <li v-for="(work,index) in filterArray(resume.careers)" :key="index">
                   <h3> {{work.company}} </h3>
                   <p>{{work.content}}</p>
                </li>
            </ul>
            <hr>
        </section>
        <section v-if="projectsIsNotEmpty" class="item">
            <h2>PROJECT</h2>
            <ul>
                <li v-for="(project,index) in filterArray(resume.projects)" :key="index" >
                  <h3>{{project.project}}</h3>
                  <p>{{project.content}}</p>
                </li>
            </ul>
        <hr>
        </section>
        <section v-if="filterArray(resume.awards).length > 0" class="item">
            <h2>AWARDS AND CERTIFICATES</h2>
            <ul>
                <li v-for="(item,index) in filterArray(resume.awards)" :key="index">
                   <h3> {{item.name}} </h3>
                </li>
            </ul>
            <hr>
        </section>
        </div>
    </div>
</template>
<script>
// import Bus from '../assets/bus.js'
export default {
  props: ["resume"],
  computed: {
    projectsIsNotEmpty: function() {
      return this.filterArray(this.resume.projects).length > 0;
    },
    wayInContacts: function() {
      return Object.keys(this.resume.contacts);
    }
  },
  data: function() {
    return {
      icons: [
        "#icon-qq",
        "#icon-wechat",
        "#icon-cellphone",
        "#icon-github",
        "#icon-email"
      ]
    };
  },
  methods: {
    haveValue: function(obj) {
      for (let key in obj) {
        if (obj[key]) {
          return true;
        }
      }
      return false;
    },
    filterArray: function(array) {
      return array.filter(ele => {
        return this.haveValue(ele);
      });
    }
  },
  created: function() {
    // console.log(Bus)
    // Bus.$on('update',(copyItems)=>{
    // })
  }
};
</script>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
section.item {
  padding-top: 8px;
}
section.item ul {
  padding-bottom: 6px;
}
.item li {
  /* padding-top: 8px; */
}
.preview {
  /* display: flex; */
  padding: 28px;
}
.personal {
  display: flex;
  justify-content: space-between;
  /* flex-direction: row !important; */
  min-height: 160px;
  /* border: 1px solid red; */
  text-align: center;
}
.personal .basicInfo {
  /* border: 1px solid black; */
  min-width: 160px;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.personal h2 {
  line-height: 32px;
}
.personal .basicInfo p {
  font-size: 16px;
}
.personal .contactInfo {
  margin: 24px 0;
}
.personal .contactInfo ul {
  height: 100%;
  /* border: 1px solid black; */
  margin-right: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin: 24px 0; */
  min-width: 160px;
  align-items: flex-start;
}
.personal .contactInfo ul li {
  /* padding-top: 4px; */
}
.summary section h2 {
  padding-left: 30px;
}
.summary section h3 {
  padding-left: 30px;
  padding-top: 16px;
}
.summary section p {
  padding-left: 30px;
  padding-top: 8px;
  padding-bottom: 4px;
}
/* #preview {
    /* border: 1px solid yellow; 
    /* min-height: 100px; 
} */
</style>
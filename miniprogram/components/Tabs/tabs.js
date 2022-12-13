// components/Tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btna(e){
      let {index}=e.currentTarget.dataset
      console.log(index)
      this.triggerEvent("btnaa",{index})
    }
  }
})


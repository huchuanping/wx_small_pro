Page({
	data:{objectArray:[
		{id:5,unique:'unique_5'},
		{id:4,unique:'unique_4'},
		{id:3,unique:'unique_3'},
		{id:2,unique:'unique_2'},
		{id:1,unique:'unique_1'},
		{id:0,unique:'unique_0'}
	],
	
	numberArray:[1,2,3,4],
	item:{
		index:0,
		msg:'this is a template',
		time:'2017-12-05'
	},
	text:'测试小程序内容组件text'
   },
	switch:function(e){
		const length=this.data.objectArray.length
		for(let i=0;i<length;++i){
			const x=Math.floor(Math.random()*length)
			const y=Math.floor(Math.random()*length)
			const temp=this.data.objectArray[x]
			this.data.objectArray[x]=this.data.objectArray[y]
			this.data.objectArray[y]=temp
		}
		this.setData({
			objectArray:this.data.objectArray
		})
	},
	addToFront:function(e){
		const length=this.data.objectArray.length
		this.data.objectArray=[{id:length,unique:'unique_'+length}].concat(this.data.objectArray)
		this.setData({
			numberArray:this.data.objectArray
		})
	}
})
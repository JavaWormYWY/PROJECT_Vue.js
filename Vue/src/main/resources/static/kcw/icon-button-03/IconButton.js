export default{
	 name : 'IconButton'
	,template : `<span :style="{color: color}" class="iconbutton"><i :class="classes" aria-hidden="true"  @click="onClick" style="cursor: pointer"/></span>`
	,props : {
		icontype : {
			type:String
			,required : true
		}
		,color : {
			type:String
		}
	}
	,computed : {
		classes(){
			return " "+this.icontype+" fa-lg fa-border";
		}
	}
	,methods : {
		onClick(event){
			this.$emit('beforeclick',event);
			this.$emit('click',event);
		}
	}
}


export default{
	 name : 'IconButton'
	,template : `<span 
					:class="   
						{'iconbutton' : iconbutton 
						 ,'on' : on }">
					<i 
						:class="classes" 
						aria-hidden="true"  
						@click="onClick" 
						style="cursor: pointer"/>
				</span>`
		
	,props : {
		icontype : {
			type:String
			,required : true
		}
	}
	,data : function(){
		return {
			classes : " "+this.icontype+" fa-lg fa-border"
			,iconbutton : true
			,on : false
		}
	}
	/*
	,computed : {
		classes(){
			return " "+this.icontype+" fa-lg fa-border";
		}
	}*/
	,methods : {
		onClick(event){
			this.tran();
			this.$emit('beforeclick',event);
			this.$emit('click',event);
		}
		, tran(){
			this.on =!this.on;
			setTimeout(() => {
				this.on =!this.on;
			}, 200);
		}
	}
}


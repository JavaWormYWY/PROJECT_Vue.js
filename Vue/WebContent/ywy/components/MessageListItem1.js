export default{
	name : "MessageListItem",
	template : "<li>"
		  .concat("{{ item.text }} - {{ item.createdAt }}")
		  .concat("<button @click='deleteClicked'>X</button>")
	  .concat("</li>"),
	props : {
		item : {
			type : Object, 
			required : true
		}
	}, 
	methods : {
		deleteClicked(){
			this.$emit("delete");
		}
	}
}
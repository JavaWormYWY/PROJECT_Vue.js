export default{
	name : "MessageList",
	template : "<ul>"
		 .concat("<li v-for='item in items' :item='item'>")
		   .concat("{{ item.text }} - {{ item.createdAt }}")
		   .concat("<button @click='deleteMessage(item)'>X</button>")
		 .concat("</li>")
	   .concat("</ul>"),
	props : {
		items : {
			type : Array,
			required : true
		}
	},
	methods : {
		deleteMessage(message){
			this.$emit('delete',message);
		}
	}
}
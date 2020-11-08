import MessageListItem from "./MessageListItem1.js";
export default{
	name : "MessageList",
	template : "<ul>"
		 .concat("<message-list-item v-for='item in items' :item='item'")
		 .concat(" :key='item.id' @delete='deleteMessage(item)' >")
		 .concat("</message-list-item>")
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
	},
	components : {
		MessageListItem
	}
}
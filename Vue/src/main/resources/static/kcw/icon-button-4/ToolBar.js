import FileButton from './FileButton.js';
import ConnectButton from './ConnectButton.js';
import IconButton from './IconButton.js';

export default{
	 name : 'ToolBar'
	,template : `<div class="fa-border">
					<connect-button />
					<file-button />
					<icon-button icontype="fa fa-download" @click="custombutton" title="File" />
				</div>`
	,methods : {
		custombutton : function(){
			console.log("## custombutton clicked");
		}
	}
	,components:{
		FileButton
		,ConnectButton
		,IconButton
	}
}


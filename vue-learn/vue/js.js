var app = new Vue({
	el:'#app',
	data:{
		name:'',
		musicList:[],
		musicUrl:'',
		coverUrl:'../img/3.jpeg',
		musiccomment:[]
	},
	methods:{
		search:function(){
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords="+this.name).then(function(response){
				console.log(response);
				that.musicList = response.data.result.songs;
			},function(err){
				console.log(err);
			})
		},
		
		play:function(musicId){
			console.log(musicId);
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id="+musicId).then(function(response){
				console.log(response);
				that.musicUrl = response.data.data[0].url;
			},function(err){
				console.log(err);
			})
			
			axios.get("https://autumnfish.cn/song/detail?ids="+musicId).then(function(response){
				console.log(response);
				that.coverUrl = response.data.songs[0].al.picUrl;
			},function(err){})
			
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId).then(function(response){
				console.log(response);
				that.musiccomment = response.data.hotComments;
			})
		}
	}
})
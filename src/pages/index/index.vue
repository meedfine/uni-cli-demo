<template>
	<view class="content">
		<clHeader :singleBtn="true" fixed v-bind:choseType.sync="tripTypeSel" v-bind:isActive="storeData.tripType" v-if="isShowHead">
		</clHeader>
		<u-button class="cusBtn" type="success" @click="goPage('pages/test/test1')">页面1</u-button>
		<u-button class="cusBtn" type="success" @click="goPage('pages/test/test2')">页面2</u-button>
		<!-- <navigator class="cusLink" url="/pages/test/test1"><u-button class="cusBtn" type="success">页面1</u-button></navigator>
		<navigator class="cusLink" url="/pages/test/test2"><u-button class="cusBtn" type="success">页面2</u-button></navigator> -->
		<u-button class="cusBtn" type="success">成功按钮</u-button>
		<span class="iconfont icon-yiwentishixinxi" style="color: red"></span>
		<calendar :chooseDay="day" @changeFirstDay="changeFirstDay" style="width:100%">
		</calendar>
	</view>
</template>

<script>
	import calendar from '../../components/calendar';
	import moment from "moment";
	import {
		getUserInfo,
		queryFlight
	} from "../../utils/index.js"
	export default {
		data() {
			return {
				storeData: this.$store.state.common,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				tripTypeSel: "2",
				isShowHead: true,
				day: [2020,5,13]
			}
		},
		components: {
			calendar
		},
		onLoad() {
			// getUserInfo();
			// queryFlight();
			console.log(moment("2020-04-20").format("MM月DD日"));
		},
		methods: {
			goPage(path){
				console.log(path);
				this.$u.route(path)
			},
			changeFirstDay(arg){
				console.log(arg);
				this.day= arg;
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.cusLink{
		display: inline-block;
		margin: 4px 6px;
		
	}
	.cusBtn{
		display: inline-block;
			height: 36px;
			line-height: 36px;
			width: 100px;
			font-size: 14px;
		}
.content{
	height: 100%;
}
page{
		height: 100%;
	}
</style>

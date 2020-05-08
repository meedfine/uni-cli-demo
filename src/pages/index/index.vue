<template>
	<view>
		<clHeader :singleBtn="true" fixed v-bind:choseType.sync="tripTypeSel" v-bind:isActive="storeData.tripType" v-if="isShowHead">
		</clHeader>
	</view>
</template>

<script>
	import moment from "moment"
	import clHeader from "../../components/clUI/clHeader.vue"
	import {
		getUserInfo,
		queryFlight
	} from "../../utils/index.js"
	export default {
		components: {
			clHeader
		},
		data() {
			return {
				storeData: this.$store.state.common,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				tripTypeSel: "2",
				isShowHead: true
			}
		},
		onLoad() {
			getUserInfo();
			queryFlight();
			console.log(moment("2020-04-20").format("MM月DD日"));
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

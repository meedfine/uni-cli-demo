<template>
	<view>
		<!-- <clHeader :singleBtn="true" fixed v-bind:choseType.sync="tripTypeSel" v-bind:isActive="storeData.tripType" v-if="isShowHead">
		</clHeader> -->
		<div class="content">
			test2
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storeData: this.$store.state.common,
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				tripTypeSel: "2",
				isShowHead: true
			}
		},
		onLoad() {
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.content{
	min-height: 500px;
	// background-color: green;;
}
</style>


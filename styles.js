import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {},
	
	loadingContainer: {
		marginVertical: 10
	},

	containerTabsContent: {
		flexDirection: 'row'
	},

	containerTabsTouchable: {
		flex: 1,
		height: 60,
		justifyContent: 'center'
	},

	activeTab: {
		borderBottomColor: '#016bd8',
		borderBottomWidth: 3
	},

	pasiveTab: {
		borderBottomColor: '#F4F4F4',
		borderBottomWidth: 3
	},

	containerTabsTouchableText: {
		fontSize: 12,
    textAlign: 'center'
	},

	activeTabText: {
		color: '#016bd8'
	},

	pasiveTabText: {
		color: '#465280'
	},

	containerViewsCntent: {}
});
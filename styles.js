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

	activeTouchable: {
		borderBottomColor: '#016bd8',
		borderBottomWidth: 3
	},

	defaultTouchable: {
		borderBottomColor: '#F4F4F4',
		borderBottomWidth: 3
	},

	containerTabsTouchableText: {
		fontSize: 12,
    textAlign: 'center'
	},

	activeLabelText: {
		color: '#016bd8'
	},

	pasiveTabText: {
		color: '#465280'
	},

	containerViewsCntent: {}
});
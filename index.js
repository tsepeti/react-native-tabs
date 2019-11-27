import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Styles
import Styles from './styles';

class Loading extends Component {
  render() {
    return (
      <View style={Styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'#0a2882'} />
      </View>
    );
  }
}

export default class Tab extends Component {
	state = {
		active: 0,
		loading: false
	};

	delay(fn) {
		return setTimeout(fn, 100);
	}

	activeTab() {
		return this.props.list[this.state.active];
	}

	_activeTabNames() {
		return this.props.list.map((tab) => tab.name);
	}

	_changeTab(active, callback) {
		if (!this.state.loading) {

			// set loading..
			this.setState({ loading: true, active });

			return this.delay(() => {
				return this.setState({ loading: false }, callback);
			});
		}
	}

	_isActiveIndex(index) {
		return this.state.active == index;
	}

	render() {
		const tab = this.activeTab();

		return (
			<View style={Styles.container}>
				<View style={Styles.containerTabsContent}>
					{this._activeTabNames().map((name, i) => {
						return (
							<TouchableOpacity
                key={i}
								style={[
									Styles.containerTabsTouchable,
									this._isActiveIndex(i) ? Styles.activeTab : Styles.pasiveTab
								]}
								onPress={() => this._changeTab(i)}
							>
								<Text
									style={[
										Styles.containerTabsTouchableText,
										this._isActiveIndex(i) ? Styles.activeTabText : Styles.pasiveTabText
									]}
								>
									{name}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
				<View style={Styles.containerViewsCntent}>{this.state.loading ? <Loading /> : tab.view()}</View>
			</View>
		);
	}
}

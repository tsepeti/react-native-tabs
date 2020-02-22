import React, { Component } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import ScalableText from 'react-native-text';

// Styles
import Styles from './styles';

class Loading extends Component {
  render() {
    const { loadingComponent }  = this.props;
    
    return (
      <View style={Styles.loadingContainer}>
        {loadingComponent ? loadingComponent() : <ActivityIndicator size={'large'} color={'#0a2882'} />}
      </View>
    );
  }
}

export default class Tabs extends Component {
  state = {
    active: 0,
    loading: false
  };

  delay(fn) {
    return setTimeout(fn, 100);
  }

  _activeView() {
    return this.props.children[this.state.active];
  }

  _changeTab(active, callback) {
    if (this._isActiveIndex(active)) {
      return;
    }

    // set loading..
    this.setState({ loading: true, active });

    return this.delay(() => {
      return this.setState({ loading: false }, callback);
    });
  }

  _isActiveIndex(index) {
    return this.state.active == index;
  }

  render() {
    const {
      labelTextProps,
      defaultLabelStyles,
      activeLabelStyles,
      defaultPanStyles,
      activePanStyles
    } = this.props;

    return (
      <View style={Styles.container}>
        <View style={Styles.containerTabsContent}>
          {React.Children.map(this.props.children, (child, i) => {
            const { label } = child.props;

            return (
              <TouchableOpacity
                key={i}
                style={[
                  Styles.containerTabsTouchable,
                  this._isActiveIndex(i)
                    ? {
                        ...Styles.activeTouchable,
                        ...activePanStyles
                      }
                    : {
                        ...Styles.defaultTouchable,
                        ...defaultPanStyles
                      }
                ]}
                onPress={() => this._changeTab(i)}
              >
                <ScalableText
                  style={[
                    Styles.containerTabsTouchableText,
                    this._isActiveIndex(i)
                      ? {
                          ...Styles.activeLabelText,
                          ...activeLabelStyles
                        }
                      : {
                          ...Styles.defaultLabelText,
                          ...defaultLabelStyles
                        }
                  ]}
                  {...labelTextProps}
                >
                  {label}
                </ScalableText>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={Styles.containerViewsCntent}>
          {this.state.loading ? <Loading {...this.props} /> : this._activeView()}
        </View>
      </View>
    );
  }
}

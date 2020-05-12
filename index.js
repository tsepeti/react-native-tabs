import React, { Component } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import ScalableText from 'react-native-text';

// Styles
import Styles from './styles';

class Loading extends Component {
  render() {
    const { isLoadingComponent } = this.props;

    return (
      <View style={Styles.isLoadingContainer}>
        {isLoadingComponent ? (
          isLoadingComponent()
        ) : (
          <ActivityIndicator size={'large'} color={'#0a2882'} />
        )}
      </View>
    );
  }
}

export default class Tabs extends Component {
  state = {
    active: 0,
    isLoading: false,
  };

  delay(fn) {
    return setTimeout(fn, 100);
  }

  _activeView() {
    return this.props.children[this.state.active];
  }

  changeTab(active, callback, passIsActive = false) {
    if (!passIsActive && this._isActiveIndex(active)) {
      return;
    }

    // set isLoading..
    this.setState({ isLoading: true, active });

    return this.delay(() => {
      return this.setState({ isLoading: false }, callback);
    });
  }

  _isActiveIndex(index) {
    return this.state.active == index;
  }

  views() {
    const { isLoading } = this.state;
    const { tabbedLoading } = this.props;

    if (tabbedLoading && isLoading) {
      return <Loading {...this.props} />;
    }

    return this._activeView();
  }

  render() {
    const {
      labelTextProps,
      defaultLabelStyles,
      activeLabelStyles,
      defaultPanStyles,
      activePanStyles,
    } = this.props;

    return (
      <View style={Styles.container}>
        <View style={Styles.containerTabsContent}>
          {React.Children.map(this.props.children, (child, i) => {
            const { label, touchProps = {} } = child.props;

            return (
              <TouchableOpacity
                key={i}
                style={[
                  Styles.containerTabsTouchable,
                  this._isActiveIndex(i)
                    ? {
                        ...Styles.activeTouchable,
                        ...activePanStyles,
                      }
                    : {
                        ...Styles.defaultTouchable,
                        ...defaultPanStyles,
                      },
                ]}
                onPress={() => this.changeTab(i)}
                {...touchProps}
              >
                <ScalableText
                  style={[
                    Styles.containerTabsTouchableText,
                    this._isActiveIndex(i)
                      ? {
                          ...Styles.activeLabelText,
                          ...activeLabelStyles,
                        }
                      : {
                          ...Styles.defaultLabelText,
                          ...defaultLabelStyles,
                        },
                  ]}
                  {...labelTextProps}
                >
                  {label}
                </ScalableText>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={Styles.containerViewsCntent}>{this.views()}</View>
      </View>
    );
  }
}

/**
 * Created by wushengping on 2017/6/13.
 */

import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';
import {observer} from 'mobx-react/custom'
import store from './mobxStore'

@observer
class Root extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Mobx 的简易使用demo
                </Text>
                <Text style={styles.instructions}>
                    store中的计数器：{store.count}
                </Text>
                <TouchableHighlight style={{marginTop: 8}} onPress={() => store.addCount()}>
                    <Text style={styles.instructions}>
                        点击计数+1
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop: 8}} onPress={() => store.reduceCount()}>
                    <Text style={styles.instructions}>
                        点击计数-1
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 5,
    },
});

export default Root
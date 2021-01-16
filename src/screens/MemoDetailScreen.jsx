import React from 'react';
import {
    View, ScrollView, Text, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

import CircleButton from '../components/CircleButton'

export default function MemoDetailScreen(props) {
    const { navigation } = props;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2020年12月24日 10:10</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えるごともありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton
                style={{ top: 60, bottom: 'auto' }}
                name="edit-2"
                onPress={() => { navigation.navigate("MemoEdit") }}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHeader: {
        backgroundColor: '#467fd3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    }
});

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface EmptyListProps {
    message: string; // Mensagem a ser exibida
}

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
    return (
        <View style={styles.container}>
    
            <Text style={styles.message}>{message}</Text>
            <Image 
                source={require('../../assets/emptyList.png')} 
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 293, // Aumentar a largura
        height: 293, // Aumentar a altura
        marginBottom: 20,
    },
    message: {
        paddingTop: 50,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
});

export default EmptyList;
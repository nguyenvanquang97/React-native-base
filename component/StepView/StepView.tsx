import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import CBText from '../CBText';
import StepIndicator from 'react-native-step-indicator';




interface StepView {
    lable: string[],
    stepCount: number,
    direction?: 'vertical',
    currentPosition: Number | any

}

const customStyles = {

    stepStrokeUnFinishedColor: 'red',
};
const StepView: React.FC<StepView> = ({
    lable,
    stepCount,
    direction,
    currentPosition
}) => {
    return (
        <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={lable}
            
            direction={direction}
            stepCount={stepCount}
        />
    );
};
export default StepView;

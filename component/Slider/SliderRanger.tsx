import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent, TouchableOpacity } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import { Snackbar } from 'react-native-paper';
import CBText from '../CBText';
import { RangeSlider, Slider } from '@react-native-assets/slider';
import { COLORS } from '../../assets/styles/color';






interface SliderRanger {
    inboundColor?: string,
    mode?: 'Ranger',
    iconLeft?: IconSource | any,
    iconRight?: IconSource | any,
    contentTitle?: string,
    TextActionView?: string,
    value?: string,
    onValueRanger?: (value: [number, number]) => void,
    value1?: string,
    style?: ViewStyle;
    range: [number, number];
    minValue?: number;
    maxValue?: number,
    onValue?: (value: number) => void
}

const SliderRanger: React.FC<SliderRanger> = ({
    inboundColor,
    mode,
    iconLeft,
    iconRight,
    contentTitle,
    TextActionView,
    value,
    value1,
    style,
    minValue,
    maxValue,
    range,
    onValueRanger,
    onValue


}) => {
    return (

        <View style={{ backgroundColor: 'white' }}>
            {mode ? (
                <View style={{ padding: 5, paddingHorizontal: 15, backgroundColor: 'white' }}>
                    {contentTitle && TextActionView &&
                        <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
                            <View style={{ flex: 1 }}>
                                {contentTitle !== undefined &&
                                    <CBText styleName='Title4'>{contentTitle}</CBText>
                                }

                            </View>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                                {TextActionView !== undefined &&
                                    <CBText styleName='ButonText2'>{TextActionView}</CBText>
                                }

                            </TouchableOpacity>
                        </View>
                    }

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: contentTitle && TextActionView ? 5 : 2 }}>

                        <View>
                            {iconLeft !== undefined && iconLeft
                            }
                        </View>
                        <View style={[{ flex: 1, marginHorizontal: 20 }, style]}>
                            <RangeSlider
                                range={range}                    // set the current slider's value
                                minimumValue={minValue}                  // Minimum value
                                maximumValue={maxValue}                  // Maximum value
                                step={0}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
                                minimumRange={0}                  // Minimum range between the two thumbs (defaults as "step")
                                crossingAllowed={false}           // If true, the user can make one thumb cross over the second thumb
                                outboundColor='#F3F3F3'              // The track color outside the current range value
                                inboundColor={inboundColor !== undefined ? inboundColor : COLORS.PrimaryColor}               // The track color inside the current range value
                                thumbTintColor='red'         // The color of the slider's thumb
                                thumbStyle={{ borderColor: '#096DD9', backgroundColor: 'white', borderWidth: 1 }}            // Override the thumb's style
                                trackStyle={{ height: 8 }}            // Override the tracks' style
                                minTrackStyle={undefined}         // Override the tracks' style for the minimum range
                                midTrackStyle={undefined}         // Override the tracks' style for the middle range
                                maxTrackStyle={undefined}         // Override the tracks' style for the maximum range
                                vertical={false}                  // If true, the slider will be drawn vertically
                                inverted={false}                  // If true, min value will be on the right, and max on the left
                                enabled={true}                    // If false, the slider won't respond to touches anymore
                                trackHeight={4}                   // The track's height in pixel
                                thumbSize={20}                    // The thumb's size in pixel
                                thumbImage={undefined}            // An image that would represent the thumb
                                slideOnTap={true}                 // If true, touching the slider will update it's value. No need to slide the thumb.
                                onValueChange={(range) => onValueRanger(range)}         // Called each time the value changed. The type is (range: [number, number]) => void
                                onSlidingStart={undefined}        // Called when the slider is pressed. The type is (range: [number, number]) => void
                                onSlidingComplete={undefined}     // Called when the press is released. The type is (range: [number, number]) => void
                                CustomThumb={undefined}           // Provide your own component to render the thumb. The type is a component: ({ value: number, thumb: 'min' | 'max' }) => JSX.Element
                                CustomMark={undefined}            // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
                            // Add any View Props that will be applied to the container (style, ref, etc)
                            />
                        </View>

                        <View>
                            {iconRight !== undefined && iconRight}

                        </View>

                    </View>
                    {value && value1 &&
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1 }}>
                                <CBText styleName='Title6'>{range[0]}</CBText>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CBText styleName='Title6'>{range[1]}</CBText>
                            </View>
                        </View>
                    }



                </View>
            ) : (
                <View style={{ padding: 5, paddingHorizontal: 15, backgroundColor: 'white' }}>
                    {contentTitle && TextActionView &&
                        <View style={{ flexDirection: 'row', paddingVertical: 2 }}>
                            <View>
                                {contentTitle !== undefined &&
                                    <CBText styleName='Title4'>{contentTitle}</CBText>
                                }

                            </View>
                            <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                                {TextActionView !== undefined &&
                                    <CBText styleName='ButonText2'>{TextActionView}</CBText>
                                }

                            </TouchableOpacity>
                        </View>
                    }


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>

                        <View>
                            {iconLeft !== undefined && iconLeft
                            }
                        </View>
                        <View style={[{ flex: 1, marginHorizontal: 20 }, style]}>
                            <Slider
                                value={0.2}                         // set the current slider's value
                                minimumValue={0}                  // Minimum value
                                maximumValue={100}                  // Maximum value
                                step={0}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
                                minimumTrackTintColor={inboundColor !== undefined ? inboundColor : COLORS.PrimaryColor}       // The track color before the current value
                                maximumTrackTintColor='#F3F3F3'      // The track color after the current value
                                thumbTintColor='darkcyan'         // The color of the slider's thumb
                                thumbStyle={{ borderColor: '#096DD9', backgroundColor: 'white', borderWidth: 1 }}            // Override the thumb's style          // Override the thumb's style
                                trackStyle={{ height: 8, borderRadius: 4 }}             // Override the tracks' style
                                minTrackStyle={undefined}         // Override the tracks' style for the minimum range
                                maxTrackStyle={undefined}         // Override the tracks' style for the maximum range
                                vertical={false}                  // If true, the slider will be drawn vertically
                                inverted={false}                  // If true, min value will be on the right, and max on the left
                                enabled={true}                    // If false, the slider won't respond to touches anymore
                                trackHeight={4}                   // The track's height in pixel
                                thumbSize={20}                    // The thumb's size in pixel
                                thumbImage={undefined}            // An image that would represent the thumb
                                slideOnTap={true}                 // If true, touching the slider will update it's value. No need to slide the thumb.
                                onValueChange={(value) => onValue(value)}         // Called each time the value changed. The type is (value: number) => void
                                onSlidingStart={undefined}        // Called when the slider is pressed. The type is (value: number) => void
                                onSlidingComplete={undefined}     // Called when the press is released. The type is (value: number) => void
                                CustomThumb={undefined}           // Provide your own component to render the thumb. The type is a component: ({ value: number }) => JSX.Element
                                CustomMark={undefined}            // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
                            // Add any View Props that will be applied to the container (style, ref, etc)
                            />
                        </View>

                        <View>
                            {iconRight !== undefined && iconRight}

                        </View>

                    </View>
                    {value && value1 &&
                        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                            <View style={{ flex: 1 }}>
                                <CBText styleName='Title6'>0%</CBText>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <CBText styleName='Title6'>100%</CBText>
                            </View>
                        </View>
                    }


                </View>

            )}

        </View>

    );
};
export default SliderRanger;

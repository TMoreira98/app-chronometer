import React from 'react'
import styled from 'styled-components/native'


export const ContainerChronometer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
`;
export const Container = styled.SafeAreaView`
  flex: 1;
    align-items: center;
    justify-content: space-around;
     padding-vertical: 50%;
`;

export const Base = styled.View`

    background-color: rgb(85, 144, 238);
    margin: 10px;
    width: 100px;
    height: 100px;

`;
export const BaseShadow = styled.View`

    background-color: rgb(85, 144, 238);
    margin: 10px;
    margin-top: 0px;
    width: 100px;
    height: 100px;
    opacity:0.1;
    transform:translateY(-15px);

`;

export const TextShadow = styled.Text`

    color: black;
    font-size:50px;
    text-align:center;
    margin-top:15px;

`;


export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  padding-horizontal:30px;
  margin-top: 150px;
`;

export const Button = styled.TouchableOpacity`

  background-color: rgb(85, 144, 238),
  border-radius: 16px;
  height: 50px;
  width: 100px;
  margin: 10px;


`;
export const TextButton = styled.Text`
  flex:1;
  flex-direction: row;
  color: black;
  font-size:15px;
  text-align:center;
  margin-top:15px;
  
`;




import React,
{ useState }
  from 'react';

import { TouchableOpacityProps } from 'react-native'

import {
  Container,
  Base,
  ContainerChronometer,
  BaseShadow,
  TextShadow,
  Button,
  ContainerButtons,
  TextButton
} from './styles';

const Chronometer = () => {

  const [click, setClick] = useState(false);
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [refHour, setRefHour] = useState<any>();
  const [refMin, setRefMin] = useState<any>();
  const [refSec, setRefSec] = useState<any>();

  let hourLength = String(hour).length
  let minLength = String(min).length
  let secLength = String(sec).length


  function handleSec() {
    setClick(!click);
    const ref = setInterval(() => {
      setSec(sec => sec == 59 ? 0 : sec + 1)
    }, 1000);

    setRefSec(ref);
  }

  function handleMin() {
    setClick(!click);
    const ref = setInterval(() => {
      setMin(min => min == 59 ? 0 : min + 1)
    }, 59000);

    setRefMin(ref);
  }

  function handleHour() {
    setClick(!click);
    const ref = setInterval(() => {
      setHour(hour => hour + 1)
    }, 3600000);

    setRefHour(ref);
  }

  function stop() {
    clearInterval(refHour);
    clearInterval(refMin);
    clearInterval(refSec);
  }


  function refresh() {
    clearInterval(refHour);
    clearInterval(refMin);
    clearInterval(refSec);
    setHour(0);
    setMin(0);
    setSec(0);
    setClick(false);
  }


  return (
    <Container>
      <ContainerChronometer>
        <Base>
          <TextShadow>{hourLength == 1 ? '0' + hour : hour}</TextShadow>
        </Base>
        <Base>
          <TextShadow>{minLength == 1 ? '0' + min : min}</TextShadow>
        </Base>
        <Base>
          <TextShadow>{secLength == 1 ? '0' + sec : sec}</TextShadow>
        </Base>
        <BaseShadow>
          <TextShadow>{hourLength == 1 ? '0' + hour : hour}</TextShadow>
        </BaseShadow>
        <BaseShadow>
          <TextShadow>{minLength == 1 ? '0' + min : min}</TextShadow>
        </BaseShadow>
        <BaseShadow>
          <TextShadow>{secLength == 1 ? '0' + sec : sec}</TextShadow>
        </BaseShadow>
      </ContainerChronometer>
      <ContainerButtons>

        <Button onPress={() => {
          handleSec();
          handleMin();
          handleHour();
        }}>
          <TextButton>
            Start
          </TextButton>
        </Button>
        <Button onPress={stop}>
          <TextButton>
            Stop
          </TextButton>
        </Button>
        <Button onPress={refresh}>
          <TextButton >
            Refresh
          </TextButton>
        </Button>
      </ContainerButtons>
    </Container>
  );
}

export default Chronometer;

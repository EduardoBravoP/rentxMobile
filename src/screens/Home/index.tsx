import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

const carData1 = {
  brand: "Audi",
  name: "RS 5 Coupé",
  rent: {
    period: "AO DIA",
    price: 120,
  },
  thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
};

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 7]}
        renderItem={({ item }) => <Car data={carData1} />}
        keyExtractor={(item) => String(item)}
      />
    </Container>
  );
}

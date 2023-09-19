import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from '@ant-design/plots';

const Demobase = () => {
  const config = {
    type: "facetCircle",
    width: 480,
    height: 480,
    autoFit: false,
    data: [
      { month: "Jan.", name: "A", value: 0.6326436603187056 },
      { month: "Jan.", name: "B", value: 0.9059036864077081 },
      { month: "Jan.", name: "C", value: 0.22780841416561715 },
      { month: "Jan.", name: "D", value: 0.1579683971505692 },
      { month: "Feb.", name: "A", value: 0.33301714406421823 },
      { month: "Feb.", name: "B", value: 0.03205686296291077 },
      { month: "Feb.", name: "C", value: 0.38611653432027015 },
      { month: "Feb.", name: "D", value: 0.7234835419120198 },
      { month: "Mar.", name: "A", value: 0.904928473886162 },
      { month: "Mar.", name: "B", value: 0.4484199491941676 },
      { month: "Mar.", name: "C", value: 0.2824508981652456 },
      { month: "Mar.", name: "D", value: 0.9685413602116679 },
      { month: "Apr.", name: "A", value: 0.041723574080341 },
      { month: "Apr.", name: "B", value: 0.8030787933582404 },
      { month: "Apr.", name: "C", value: 0.41748710621502005 },
      { month: "Apr.", name: "D", value: 0.5281546266115444 },
      { month: "May", name: "A", value: 0.8729036090146685 },
      { month: "May", name: "B", value: 0.28988839055401217 },
      { month: "May", name: "C", value: 0.33189556082639227 },
      { month: "May", name: "D", value: 0.21876873390293805 },
      { month: "Jun.", name: "A", value: 0.619594448441904 },
      { month: "Jun.", name: "B", value: 0.420356249903558 },
      { month: "Jun.", name: "C", value: 0.8796166275555974 },
      { month: "Jun.", name: "D", value: 0.6400454237168027 },
      { month: "Jul.", name: "A", value: 0.6908402378581739 },
      { month: "Jul.", name: "B", value: 0.12152124015288734 },
      { month: "Jul.", name: "C", value: 0.6033258688205794 },
      { month: "Jul.", name: "D", value: 0.5584958845688628 },
      { month: "Aug.", name: "A", value: 0.391095929118485 },
      { month: "Aug.", name: "B", value: 0.494137952382379 },
      { month: "Aug.", name: "C", value: 0.6116254958078564 },
      { month: "Aug.", name: "D", value: 0.5803641632635503 },
      { month: "Sept.", name: "A", value: 0.6506347276994731 },
      { month: "Sept.", name: "B", value: 0.8165757521460599 },
      { month: "Sept.", name: "C", value: 0.2279107933218536 },
      { month: "Sept.", name: "D", value: 0.37419172590345484 },
      { month: "Oct.", name: "A", value: 0.17980507555487946 },
      { month: "Oct.", name: "B", value: 0.8701220373856862 },
      { month: "Oct.", name: "C", value: 0.4737963124883502 },
      { month: "Oct.", name: "D", value: 0.7383798484457005 },
      { month: "Nov.", name: "A", value: 0.26679319143326663 },
      { month: "Nov.", name: "B", value: 0.15200589580375534 },
      { month: "Nov.", name: "C", value: 0.6648648719163961 },
      { month: "Nov.", name: "D", value: 0.5341976900165717 },
      { month: "Dec.", name: "A", value: 0.5889497642361026 },
      { month: "Dec.", name: "B", value: 0.7152071786469567 },
      { month: "Dec.", name: "C", value: 0.8096766390742625 },
      { month: "Dec.", name: "D", value: 0.8703522265977728 },
    ],
    encode: { position: "month" },
    children: [
      { type: "interval", encode: { x: "name", y: "value", color: "name" } },
    ],
  };
  return <Base {...config} />;
};

ReactDOM.render(<Demobase />, document.getElementById('container'));

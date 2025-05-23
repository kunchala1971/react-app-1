import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const firmName="KKCC INFO SYSTEMS";
  const person={
    id:1,
    name:"SrinivasaRao.K",
    desig:"EnggII",
    city:"Ongole"
  };
return(
 <>
<Header firmName={firmName} />
<Body person={person}/>
<Footer name={"Ram"} city={"Nellore"}/>
 </>
)
};
export default App;

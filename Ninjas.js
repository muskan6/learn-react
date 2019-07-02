import React, {Component} from 'react';

//class Ninjas extends Component{
const Ninjas = ({ninjas}) => { //destructuring only ninjas -> (props) else ({ninjas})
    // console.log(this.props);
    //const{ ninjas } = this.props; // destructuring for class
    //const {ninjas} = props; //destructuring for ui components using func when using (props) as parameter in function
    /*const ninjaList = ninjas.map(ninja => {
        if(ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Gender: {ninja.gender}</div>
                </div>
            );
        }else{
            return null
       }
}) */
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Gender: {ninja.gender}</div>
            </div>
        ) : null;
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    );
}

export default Ninjas;
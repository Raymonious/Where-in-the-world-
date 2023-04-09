import React from 'react';

export default function FavDetailView(aa){
    return (
    <div className="detail">
        <h1>{aa.currentC}</h1>
        <h2>{aa.factData[0].name.official}</h2>
        <img className="detImg" src={aa.factList[0].image}></img>
        <div className="detailFlex">
        
            <table className="detdata">
                <tr>
                    <td>Capital</td>
                    <td>{aa.factData[0].capital.map(listDataACB)}</td>
                </tr>
                <tr>
                    <td>Continent</td>
                    <td>{aa.factData[0].region}</td>
                </tr>
                <tr>
                    <td>Subregion</td>
                    <td>{aa.factData[0].subregion}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{aa.factData[0].area}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{aa.factData[0].population}</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{aa.factData[0].timezones[0]}</td>
                </tr>
                <tr>
                    <td>Map</td>
                    <td><a href={aa.factData[0].maps.googleMaps}>googleMaps</a></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <img width={200} src={aa.factData[0].flags[0]}/></td>
                </tr>
            </table>
        
        <span className="detailtext">
            {aa.factList[0].summary.map(listFactACB)}
        </span>
        </div>
    </div>
    );



    function listDataACB(fact){
        return (<span>{fact}</span>)
    }

    function listFactACB(fact){
        return (<div>{fact}</div>)
    }
}
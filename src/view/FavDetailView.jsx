import React from 'react';

/*Details of selected favorite country*/ 

export default function FavDetailView(aa){
    return (
    <div className="detail">
        <h1>{aa.currentC}</h1>
        <h2>{aa.factData.name.official}</h2>
        <img className="detImg" src={aa.factList.image}></img>
        <div className="detailFlex">
        
            <table className="detdata">
                <tr>
                    <td>Capital</td>
                    <td>{aa.factData.capital.map(listDataACB)}</td>
                </tr>
                <tr>
                    <td>Continent</td>
                    <td>{aa.factData.region}</td>
                </tr>
                <tr>
                    <td>Subregion</td>
                    <td>{aa.factData.subregion}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{aa.factData.area}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{aa.factData.population}</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{aa.factData.timezones[0]}</td>
                </tr>
                <tr>
                    <td>Map</td>
                    <td><a href={aa.factData.maps.googleMaps}>googleMaps</a></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <iframe width={200} src={aa.factData.maps.googleMaps}></iframe>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <img width={200} src={aa.factData.flags[0]}/></td>
                    
                </tr>
            </table>
        
        <span className="detailtext">
            {aa.factList.summary.map(listFactACB)}
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
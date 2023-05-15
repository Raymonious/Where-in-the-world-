import React from 'react';

/*Details of selected favorite country*/ 

export default function FavDetailView(aa){
    return (
    <div className="detail">
        <div className='center'>
        <h1>{aa.currentC}</h1>
        {aa.factData.name?.official? <h2>{aa.factData.name.official}</h2>  : <h2>{aa.currentC}</h2> }

        <img className="detImg " src={aa.countrysImage}></img>
        </div>
        <div className="detailFlex">
        
            <table className="detdata">
                <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{aa.factData.capital? aa.factData.capital.map(listDataACB): <div>-</div> }</td>
                </tr>
                <tr>
                    <td>Continent</td>
                    <td>{aa.factData.region? aa.factData.region : <div>-</div>}</td>
                </tr>
                <tr>
                    <td>Subregion</td>
                    <td>{aa.factData.subregion? aa.factData.subregion : <div>-</div>}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{aa.factData.area? aa.factData.area : <div>-</div>}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{aa.factData.population? aa.factData.population : <div>-</div>}</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{aa.factData.timezones?.[0]? aa.factData.timezones[0] : <div>-</div>}</td>
                </tr>
                <tr>
                    <td>Map</td>
                    <td><a href={aa.factData.maps?.googleMaps? aa.factData.maps.googleMaps : "https://www.google.com/maps"}>googleMaps</a></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <img width={200} src={aa.factList.image}/></td>
                    
                </tr></tbody>
            </table>
        
        <span className="detailtext">
            {aa.factList.summary.map(listFactACB)}
        </span>
        </div>
    </div>
    );


    function listDataACB(fact){
        return (<span key={fact}>{fact}</span>)
    }

    function listFactACB(fact){
        return (<div key={fact}>{fact}</div>)
    }
}
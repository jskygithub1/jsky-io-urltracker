import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import { useRouter } from 'next/router';
import axios from 'axios';
import dashboardStyles from '../styles/dashboard.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Dashboard = () => {

    const router = useRouter();
    const [products, setProducts] = React.useState<any | ''>([]);

    useEffect(() => {
        const callRegCode = async () => {
            debugger;
            console.log(router.query.userid);
            const {data} = await axios.get(`/api/v1.0/getqrcforusercounts?userid=jamesskyoung@outlook.com`);

            setProducts(data.response);
            console.log(data.response);
        }

        callRegCode().catch(e => {
            console.log(e);
        });


    }, [router.query])

    if (products.length === 0) {
        return <></>
    }

    Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    });


    // https://www.highcharts.com/blog/tutorials/highcharts-wrapper-for-react-101/

    const data = [];
    products.forEach( product => {
        const thisData = {
            name: product.qrc_name,
            y: parseInt( product.count )
        }
        data.push( thisData );
    })
    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Summary of scans by QRC name'
        },
        series: [
            {
                data
            }
        ]
    };

    console.log( options );
    // @ts-ignore
    return (

        <div>
            <Header/>

            <h1>QRC Scanning summary</h1>

            <div className="container-sm my-5">
                <div>
                    <HighchartsReact highcharts={Highcharts} options={options}/>
                </div>
                {products.map(product => {
                    return <div className="card mb-3">
                        <div key={product.qrc_name} className="card-body">
                            <div className={dashboardStyles.cardCount}>
                                <h5 className="card-title">{product.qrc_name}</h5>
                                Last scan: <p>{product.max}</p>
                                <p>
                                    Scans: <span className={dashboardStyles.count}>{product.count}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                })}
            </div>

            <section className="py-5 border-bottom" id="y">
                <div className="container px-5 my-5">
                    <h1>Section 2</h1>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Dashboard;
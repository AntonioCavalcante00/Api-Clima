import Search from '../layout/Search';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

function Home() {
    const [city, setCity] = useState('');
    const [aatemp, setTemp] = useState(null);

    const apiKey = '2ec415ab5fd215303a3b79f1938d2a65';

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${apiKey}`);
            if (response.ok) {
                const data = await response.json();
                setTemp(data);
                console.log(response)
            } else {
                console.error('Erro na resposta da API');
            }
        } catch (error) {
            console.error('Erro ao obter dados da API', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [city]);

    return (
        <>
            <div className={styles.ContainerMain}>
                <h2>Digite o nome da Cidade</h2>
                <Search city={city} onchage={(e) => setCity(e.target.value)} />

                {aatemp && (
                    <div className={styles.Container}>
                        <div className={styles.City}>
                            <h2>{aatemp.name}, {aatemp.sys.country}</h2>
                        </div>
                        <h1>{aatemp.main.temp}°C</h1>
                        <h3>{aatemp.main.temp_min}°C / {aatemp.main.temp_max}°C</h3>

                        <div className={styles.Clima}>
                            <img src={`https://openweathermap.org/img/w/${aatemp.weather[0].icon}.png`}
                                alt="Weather Icon" />
                            <h3>{aatemp.weather[0].description}</h3>
                        </div>
                        <div className={styles.Infos}>
                            <h3>Nuvens: {aatemp.clouds.all}%</h3>
                            <h3>Umidade: {aatemp.main.humidity}%</h3>
                        </div>
                    </div>
                )}
                <div className={styles.Footer}>
                    <h3>Today's Forecast</h3>
                </div>
            </div>
        </>
    );
}

export default Home;

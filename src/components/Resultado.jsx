import styled from "@emotion/styled"


const Vista = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 28px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Vista>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
       <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas álto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>La variación de las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>La última actualización: <span>{LASTUPDATE}</span></Texto>
        </div> 
    </Vista>
  )
}

export default Resultado

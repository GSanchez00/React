function formattedTime(secs)
{
    const minutos = parseInt(secs/60,10)
    const segundos = parseInt(secs % 60, 10)
    return `${minutos}:${leftPad(segundos.toString())}`;
}

function leftPad(number)
{
    const pad= '00';
    return pad.substring(0,pad.length - number.length) + number
}

export default formattedTime